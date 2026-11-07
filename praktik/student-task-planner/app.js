// Student Task Planner — vanilla JS, tanpa dependensi eksternal.
// Tujuan file ini: menyimpan daftar tugas di localStorage, merender ulang
// daftar sesuai filter aktif, dan menangani aksi pengguna (tambah, toggle, hapus).

const STORAGE_KEY = "student-task-planner/tasks";

const form = document.getElementById("task-form");
const titleInput = document.getElementById("task-title");
const dueInput = document.getElementById("task-due");
const list = document.getElementById("task-list");
const emptyState = document.getElementById("empty-state");
const counts = {
  all: document.getElementById("count-all"),
  pending: document.getElementById("count-pending"),
  completed: document.getElementById("count-completed"),
};

let tasks = loadTasks();
let activeFilter = "all";

// --- Penyimpanan ---------------------------------------------------------

function loadTasks() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : null;
    return Array.isArray(parsed) ? parsed : seedTasks();
  } catch {
    // Data korup atau localStorage diblokir: mulai dari data contoh.
    return seedTasks();
  }
}

function saveTasks() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch {
    // Mode privat / kuota penuh: perubahan tetap berlaku sampai halaman dimuat ulang.
  }
}

function seedTasks() {
  const today = new Date();
  return [
    { id: makeId(), title: "Baca modul Pancasila bab 3", due: isoDate(addDays(today, 2)), completed: false },
    { id: makeId(), title: "Latihan soal Algoritma praktikum 5", due: isoDate(addDays(today, 5)), completed: false },
    { id: makeId(), title: "Kumpulkan dokumentasi Day 1 workshop", due: isoDate(today), completed: true },
  ];
}

// --- Utilitas ------------------------------------------------------------

function makeId() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

function addDays(date, days) {
  const copy = new Date(date);
  copy.setDate(copy.getDate() + days);
  return copy;
}

function isoDate(date) {
  const pad = (n) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function formatDue(iso) {
  const date = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" });
}

function isOverdue(task) {
  return !task.completed && task.due < isoDate(new Date());
}

// --- Render --------------------------------------------------------------

function visibleTasks() {
  if (activeFilter === "pending") return tasks.filter((t) => !t.completed);
  if (activeFilter === "completed") return tasks.filter((t) => t.completed);
  return tasks;
}

function render() {
  const shown = visibleTasks();
  list.replaceChildren(...shown.map(renderTask));

  counts.all.textContent = `(${tasks.length})`;
  counts.pending.textContent = `(${tasks.filter((t) => !t.completed).length})`;
  counts.completed.textContent = `(${tasks.filter((t) => t.completed).length})`;

  emptyState.hidden = shown.length > 0;
}

function renderTask(task) {
  const li = document.createElement("li");
  li.className = "task";
  if (task.completed) li.classList.add("is-completed");
  if (isOverdue(task)) li.classList.add("is-overdue");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = task.completed;
  checkbox.setAttribute("aria-label", `Tandai "${task.title}" sebagai selesai`);
  checkbox.addEventListener("change", () => toggleTask(task.id));

  const body = document.createElement("div");
  body.className = "task-body";

  const title = document.createElement("span");
  title.className = "task-title";
  title.textContent = task.title;

  const due = document.createElement("span");
  due.className = "task-due";
  due.textContent = isOverdue(task) ? `Terlewat: ${formatDue(task.due)}` : `Tenggat: ${formatDue(task.due)}`;

  body.append(title, due);

  const remove = document.createElement("button");
  remove.type = "button";
  remove.className = "task-delete";
  remove.textContent = "Hapus";
  remove.setAttribute("aria-label", `Hapus "${task.title}"`);
  remove.addEventListener("click", () => deleteTask(task.id));

  li.append(checkbox, body, remove);
  return li;
}

// --- Aksi ----------------------------------------------------------------

function addTask(title, due) {
  tasks.push({ id: makeId(), title, due, completed: false });
  saveTasks();
  render();
}

function toggleTask(id) {
  const task = tasks.find((t) => t.id === id);
  if (!task) return;
  task.completed = !task.completed;
  saveTasks();
  render();
}

function deleteTask(id) {
  tasks = tasks.filter((t) => t.id !== id);
  saveTasks();
  render();
}

// --- Event ---------------------------------------------------------------

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = titleInput.value.trim();
  if (!title) return;
  addTask(title, dueInput.value || isoDate(new Date()));
  form.reset();
  titleInput.focus();
});

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    document.querySelectorAll(".filter").forEach((b) => b.classList.toggle("is-active", b === button));
    render();
  });
});

dueInput.value = isoDate(new Date());
render();

# Rangkuman Materi — Workshop Day 1

**Kegiatan:** Workshop Day 1 — *Building with AI, Managing Change with GitHub*
**Narasumber:** Nugi Farhan (Senior Product Designer)
**Topik:** Prompt Engineering & Git/GitHub

---

## 1. Prompt Engineering

### 1.1 Apa itu prompt

Prompt adalah instruksi atau masukan yang diberikan kepada model AI untuk memperoleh hasil tertentu. Bentuknya beragam: pertanyaan sederhana, kata kunci, hingga instruksi rumit atau potongan kode.

Prompt engineering adalah cara merancang instruksi agar AI memberikan jawaban yang tepat, relevan, dan layak digunakan.

### 1.2 Context is key

Model yang sama dapat menghasilkan kualitas jawaban yang sangat berbeda bergantung ada atau tidaknya konteks. Prompt tanpa konteks hanya menghasilkan keluaran umum; prompt dengan konteks menghasilkan keluaran yang sesuai kebutuhan.

### 1.3 Struktur prompt yang baik

| Elemen | Fungsi |
| --- | --- |
| **Role** | Menetapkan peran yang harus diambil AI (misalnya *"You are helping me build a beginner-friendly student task planner…"*). |
| **Task** | Menyatakan pekerjaan yang diminta secara eksplisit. |
| **Context** | Menyediakan latar, batasan, dan kebutuhan sehingga keluaran relevan. |
| **Format** | Menentukan bentuk keluaran yang diinginkan (kode, tabel, langkah, dsb.). |

### 1.4 Contoh prompt terstruktur

```
You are helping me build a beginner-friendly student task planner as a simple web application.

## Goal
Create a task planner that helps first-year university students keep track of assignments and deadlines.

## Requirements
- Display a list of sample assignments.
- Each assignment must show its title, due date, and completion status.
- Allow users to mark assignments as completed.
- Include a filter for all, pending, and completed assignments.
- Make the interface clean, readable, and responsive.

## Constraints
- Use HTML, CSS, and vanilla JavaScript.
- Keep the implementation simple enough for a beginner to understand.
- Avoid unnecessary libraries and external dependencies.
- Keep the code organized and explain the purpose of each file.

## Output
Provide the complete code for each file, explain how to run the application, and describe how to test the main interactions.
Do not claim that the application works until you have verified its behavior.
```

Perhatikan bagian **Constraints** dan **Output**: keduanya yang membuat keluaran AI dapat langsung dipakai dan dapat diverifikasi.

### 1.5 Keuntungan prompt engineering

- Meningkatkan performa model AI.
- Mengurangi bias dan respons yang ofensif.
- Meningkatkan kontrol dan predictability keluaran.
- Memberikan pengalaman pengguna yang lebih baik.

---

## 2. Git

### 2.1 Definisi

Git adalah **version control system** (sistem kendali versi) yang melacak siapa, kapan, dan apa saja yang telah diubah pada suatu file. Git diciptakan oleh **Linus Torvalds pada tahun 2005** dan dirancang untuk mencatat setiap perubahan yang terjadi pada file.

### 2.2 Tiga area kerja Git

| Area | Penjelasan |
| --- | --- |
| **Working directory / tree** | Salinan dari satu versi proyek yang sedang dikerjakan. File di sini diambil dari database Git lalu ditempatkan di komputer agar dapat digunakan atau dimodifikasi. |
| **Staging area** (index) | Berada di dalam direktori Git; menyimpan informasi perubahan apa saja yang akan dimasukkan ke dalam commit berikutnya. |
| **Git directory** | Tempat Git menyimpan metadata dan object database proyek. Ini komponen terpenting karena berisi seluruh informasi yang dibutuhkan Git untuk mengelola proyek. Saat melakukan `git clone`, bagian inilah yang disalin. |

Alur: **Working directory → Staging area (`git add`) → Git directory (`git commit`)**.

### 2.3 Perintah Git esensial

| Perintah | Fungsi |
| --- | --- |
| `git init` | Memulai repositori baru. |
| `git add .` | Memindahkan file ke staging area. |
| `git commit -m 'message'` | Menyimpan file ke repositori. |
| `git status` | Melihat status perubahan. |
| `git log` | Melihat riwayat commit. |

### 2.4 Perintah menghubungkan Git ke GitHub

| Perintah | Fungsi |
| --- | --- |
| `git remote add <name> <url>` | Menambahkan remote repositori. |
| `git push origin main` | Push branch saat ini ke remote *tracking branch*. |
| `git pull origin main` | Fetch perubahan lalu merge ke branch saat ini. |

### 2.5 Setup Git

```bash
# 1. Cek instalasi
git --version          # contoh: git version 2.xx.xx

# 2. Set identitas
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"

# 3. Cek konfigurasi
git config --global --list
```

### 2.6 Setup VS Code

1. Install VS Code, lalu buka.
2. Tekan `Ctrl+Shift+P` (Windows) atau `Cmd+Shift+P` (macOS).
3. Cari **Shell Command: Install 'code' command in PATH**.
4. Buka terminal, jalankan `code --version` untuk memverifikasi.

### 2.7 Menambahkan repositori ke Git

```bash
# Opsi A — mulai dari lokal
git init

# Opsi B — ambil dari GitHub
# 1. Buka GitHub → Create new repository
# 2. klik tombol "Code" → copy URL
# 3. di terminal lokal:
git clone "https://github.com/username/repository.git"
```

### 2.8 Memindahkan perubahan ke staging area

| Perintah | Cakupan |
| --- | --- |
| `git add --all` | Seluruh isi repositori. |
| `git add -A` | Sama dengan `--all`. |
| `git add .` | Seluruh file pada repositori dan subdirektorinya. |
| `git add *` | Semua file baru/modifikasi, **kecuali file yang dihapus**. |

Perbedaan penting: `git add *` tidak menangkap penghapusan file, sedangkan `git add -A` / `--all` menangkapnya.

### 2.9 SSH key (autentikasi GitHub)

```bash
# 1. Generate key
ssh-keygen -t ed25519 -C "email@domain.com"
# Tekan Enter untuk menerima lokasi default, lalu masukkan passphrase (atau Enter dua kali).

# 2. Jalankan SSH agent (macOS)
eval "$(ssh-agent -s)"

# 3. Tambahkan konfigurasi host (~/.ssh/config)
# Host github.com
#   AddKeysToAgent yes
#   UseKeychain yes
#   IdentityFile ~/.ssh/id_ed25519

# 4. Daftarkan key ke agent
ssh-add --apple-use-keychain ~/.ssh/id_ed25519

# 5. Salin public key ke GitHub → Settings → SSH and GPG keys → New SSH key
pbcopy < ~/.ssh/id_ed25519.pub

# 6. Verifikasi
ssh -T git@github.com
# Diharapkan: "Hi username! You've successfully authenticated, but GitHub does not provide shell access."
```

**Arti nama `ed25519`:**

- `Ed` — EdDSA (*Edwards-curve Digital Signature Algorithm*), algoritma tanda tangan asimetris berbasis keluarga kurva Edwards.
- `25519` — kurva eliptik *Curve25519*, dibuat tahun 2011 oleh kriptografer Daniel J. Bernstein.

Secara singkat: Ed25519 adalah skema tanda tangan kurva eliptik dengan keamanan tinggi, performa tinggi, dan perlindungan terhadap serangan implementasi kriptografi umum.

---

## 3. GitHub

### 3.1 Definisi

GitHub adalah **platform berbasis web** untuk menyimpan repositori Git secara daring dan mendukung kolaborasi.

### 3.2 Git vs GitHub

| Aspek | Git | GitHub |
| --- | --- | --- |
| Bentuk | Perangkat lunak *Distributed Version Control System* (DVCS) | Platform berbasis web |
| Fungsi | Melacak dan mengelola perubahan kode secara **lokal** | Menyimpan repositori Git secara **online** dan mendukung kolaborasi |
| Kebutuhan jaringan | Tidak perlu | Perlu |
| Pembuat | Linus Torvalds (2005) | Perusahaan GitHub (Microsoft) |

**Intinya:** Git adalah *alatnya*, GitHub adalah *tempat menyimpannya*.

### 3.3 Konsep kolaborasi

- **Repository** — wadah proyek beserta riwayat versinya.
- **Commit** — rekaman perubahan pada satu titik waktu, disertai pesan.
- **Branch** — jalur pengembangan terpisah agar perubahan tidak langsung mengganggu jalur utama.
- **Pull request** — usulan penggabungan perubahan dari satu branch ke branch lain, disertai proses review.

### 3.4 Checklist verifikasi setup

```bash
git --version                    # 1. Cek Git
git config --global user.name    # 2. Cek identitas Git
git config --global user.email
code --version                   # 3. Cek VS Code
ssh -T git@github.com            # 4. Cek koneksi GitHub
```

---

## 4. Praktik pada Workshop

Alur praktik yang dijalankan:

1. Menginstall platform AI-assisted (Claude, Antigravity, ChatGPT) dan menulis prompt untuk membuat aplikasi web.
2. Menambahkan proyek ke Git dengan `git init`.
3. Commit dan push ke GitHub.
4. Melakukan perubahan, lalu commit dan push kembali.

**Hasil:** aplikasi **Student Task Planner** berbasis HTML, CSS, dan vanilla JavaScript, dengan fitur:

- Daftar tugas contoh dengan judul, tenggat waktu, dan status penyelesaian.
- Penandaan tugas sebagai selesai (toggle).
- Filter: semua, belum selesai, selesai.
- Antarmuka bersih, mudah dibaca, dan responsif.
- Tanpa library eksternal (sesuai *constraints* pada prompt).

Kode praktik tersedia di [`praktik/student-task-planner/`](../praktik/student-task-planner/).

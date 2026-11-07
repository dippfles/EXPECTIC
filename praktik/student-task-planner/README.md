# Student Task Planner

Hasil praktik Workshop Day 1 — "Building with AI, Managing Change with GitHub".

## Deskripsi

Aplikasi web sederhana untuk membantu mahasiswa tahun pertama mencatat tugas kuliah beserta tenggat waktunya. Dibuat dengan **HTML, CSS, dan vanilla JavaScript** tanpa dependensi eksternal, sesuai batasan (*constraints*) pada prompt praktik.

## Fitur

- Menambah tugas dengan judul dan tenggat waktu.
- Menandai tugas selesai / belum selesai.
- Menghapus tugas.
- Filter: **Semua**, **Belum selesai**, **Selesai** (dengan penghitung jumlah).
- Penanda tugas yang sudah melewati tenggat.
- Data disimpan di `localStorage`, jadi tetap ada setelah halaman dimuat ulang.
- Tata letak responsif dan mendukung mode gelap mengikuti preferensi sistem.

## Cara Menjalankan

Langsung buka file `index.html` pada peramban, atau lewat server statis:

```bash
cd praktik/student-task-planner
python -m http.server 8000
# buka http://localhost:8000
```

## Struktur File

| File | Peran |
| --- | --- |
| `index.html` | Struktur halaman: formulir, tombol filter, wadah daftar tugas. |
| `style.css` | Tampilan: variabel warna, tata letak, status selesai/terlewat, responsif. |
| `app.js` | Logika: penyimpanan `localStorage`, render daftar, aksi tambah/toggle/hapus. |

## Cara Menguji Interaksi Utama

1. **Tambah tugas** — isi judul dan tanggal, tekan *Tambah*. Tugas baru muncul di daftar dan pada counter "Semua".
2. **Tandai selesai** — centang kotak di kiri tugas. Judul menjadi bergaris dan tugas berpindah ke filter "Selesai".
3. **Filter** — tekan tombol *Belum selesai* lalu *Selesai*; daftar dan penghitung berubah sesuai kategori.
4. **Tenggat terlewat** — tambahkan tugas dengan tanggal kemarin; keterangan berubah menjadi "Terlewat: …" berwarna merah.
5. **Hapus** — tekan *Hapus* pada satu tugas; tugas hilang dan counter berkurang.
6. **Persistensi** — muat ulang halaman; susunan tugas tetap sama karena tersimpan di `localStorage`.

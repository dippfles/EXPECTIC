# Day-1-EXPECTIC_Fatih Fajar Habiebie

Repositori dokumentasi kegiatan **Workshop Day 1 — Git & GitHub**.

## Identitas Peserta

| Data | Keterangan |
| --- | --- |
| Nama lengkap | **Fatih Fajar Habiebie** |
| NIM | **2607441017** |
| Kelas / Program | RKS 1A |
| Kelompok | **EXPECTIC** |
| Hari kegiatan | Day 1 |

## Deskripsi Singkat

Repositori ini merupakan tempat penyimpanan dan publikasi dokumentasi kegiatan workshop, mencakup rangkuman materi yang disampaikan, catatan pembelajaran, serta hasil praktik yang dikerjakan selama workshop berlangsung. Repositori bersifat **Public** sehingga dapat diakses siapa pun tanpa izin khusus.

## Tujuan Repositori

1. Sebagai sarana penyimpanan dan pengelolaan dokumentasi kegiatan secara daring berbasis Git dan GitHub.
2. Melatih pembuatan serta pengelolaan repositori GitHub dengan visibilitas **Public**.
3. Membiasakan pendokumentasian materi dan kegiatan workshop secara terstruktur.
4. Melatih penggunaan `README.md` sebagai halaman dokumentasi utama repositori.
5. Menerapkan alur kerja version control (init → add → commit → push) pada studi kasus nyata.

## Informasi Kegiatan Workshop

| Item | Keterangan |
| --- | --- |
| Kegiatan | Workshop Day 1 — "Building with AI, Managing Change with GitHub" |
| Narasumber | **Nugi Farhan** — Senior Product Designer |
| Topik utama | Prompt Engineering, Git & GitHub, version control, kolaborasi dan manajemen perubahan |
| Hasil praktik | Aplikasi web sederhana *Student Task Planner* yang di-commit dan di-push ke GitHub |

### Capaian pembelajaran yang ditargetkan

- Menjelaskan bagaimana prompt AI yang lebih spesifik menghasilkan keluaran yang lebih baik.
- Mengidentifikasi repository, commit, branch, dan pull request.
- Membedakan Git dengan GitHub.
- Melakukan version controlling.

### Struktur repositori

```
.
├── README.md                  # Dokumentasi utama (identitas, deskripsi, tujuan, info kegiatan)
├── docs/
│   ├── 01-rangkuman-materi.md # Rangkuman materi yang disampaikan
│   ├── 02-poin-penting.md     # Poin penting & pengetahuan baru
│   └── 03-pendapat-day1.md    # Pendapat pribadi tentang Day 1
├── praktik/
│   └── student-task-planner/  # Hasil praktik pada workshop
└── .gitignore
```

## Dokumentasi Kegiatan

| No | Dokumen | Isi |
| --- | --- | --- |
| 1 | [Rangkuman Materi](docs/01-rangkuman-materi.md) | Prompt engineering, Git, GitHub, dan alur kerja version control |
| 2 | [Poin Penting & Pengetahuan Baru](docs/02-poin-penting.md) | Butir-butir kunci dan hal yang baru dipelajari |
| 3 | [Pendapat Pribadi tentang Day 1](docs/03-pendapat-day1.md) | Refleksi pribadi atas pelaksanaan workshop |
| 4 | [Praktik: Student Task Planner](praktik/student-task-planner/) | Hasil praktik membuat aplikasi web sederhana |

## Cara Menjalankan Praktik

Buka `praktik/student-task-planner/index.html` pada peramban (browser), atau jalankan server statis lokal:

```bash
cd praktik/student-task-planner
python -m http.server 8000
# lalu buka http://localhost:8000
```

## Lisensi

Repositori ini dibuat untuk keperluan dokumentasi pembelajaran workshop. Lihat [LICENSE](LICENSE).

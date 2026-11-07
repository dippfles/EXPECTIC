# Poin Penting & Pengetahuan Baru — Workshop Day 1

Kumpulan butir-butir kunci yang saya catat selama workshop, terutama hal yang sebelumnya belum saya ketahui atau masih salah pahami.

---

## A. Poin Penting

### Prompt Engineering

1. **Empat elemen struktur prompt** — *Role, Task, Context, Format*. Prompt yang hanya berisi task tanpa context menghasilkan keluaran generik.
2. **Context is key** — kualitas jawaban AI lebih ditentukan oleh lengkapnya konteks daripada panjangnya prompt.
3. **Constraints adalah penghemat waktu** — menetapkan batasan sejak awal (misalnya *"avoid unnecessary libraries"*) mencegah keluaran yang harus dibongkar ulang.
4. **Output harus mendefinisikan bukti** — instruksi *"do not claim that the application works until you have verified its behavior"* memaksa AI memverifikasi, bukan hanya mengklaim.
5. Manfaat prompt engineering: performa lebih baik, bias dan respons ofensif berkurang, kontrol dan predictability meningkat.

### Git & GitHub

6. **Git diciptakan Linus Torvalds pada 2005** untuk mencatat setiap perubahan file.
7. **Tiga area Git** — working directory, staging area (index), dan Git directory. Urutannya: kerja → `add` → `commit`.
8. **Git ≠ GitHub.** Git adalah alat version control lokal (DVCS); GitHub adalah platform web untuk menyimpan repo Git dan berkolaborasi.
9. **`git add *` vs `git add -A`** — `add *` tidak menangkap file yang dihapus, `add -A` menangkapnya.
10. **Remote workflow** — `git remote add` → `git push origin main` → `git pull origin main`.
11. **SSH key `ed25519`** — `Ed`/EdDSA adalah algoritma tanda tangan kurva Edwards, `25519` adalah kurva Curve25519 buatan Daniel J. Bernstein (2011).
12. **Konsep kolaborasi** — repository, commit, branch, dan pull request adalah empat istilah inti yang harus bisa dibedakan.

---

## B. Pengetahuan Baru yang Saya Pelajari

| # | Sebelumnya | Setelah workshop |
| --- | --- | --- |
| 1 | Mengira prompt panjang otomatis lebih baik. | Panjang prompt tidak sepenting struktur dan konteks. Empat elemen (Role/Task/Context/Format) yang menentukan hasil. |
| 2 | Belum tahu istilah *prompt engineering* sebagai disiplin tersendiri. | Tahu bahwa merancang prompt adalah keterampilan yang bisa dilatih dan punya struktur baku. |
| 3 | Menganggap Git dan GitHub itu hal yang sama. | Git = alat version control lokal; GitHub = platform hosting berbasis web. Git bisa dipakai tanpa GitHub. |
| 4 | Belum pernah mendengar *staging area*. | Paham bahwa ada lapisan antara file yang diedit dan commit, serta perannya sebagai *index*. |
| 5 | Menyangka `git add *` dan `git add -A` identik. | `git add *` melewatkan penghapusan file; `git add -A` menanganinya. |
| 6 | Belum tahu cara membuat SSH key. | Bisa menjalankan `ssh-keygen -t ed25519 -C "email"`, tahu arti `EdDSA` dan `Curve25519`, serta alur verifikasi `ssh -T git@github.com`. |
| 7 | Belum tahu urutan setup Git yang benar. | Urutannya: install → `git config --global user.name/email` → verifikasi dengan `git config --global --list`. |
| 8 | Belum tahu konsep branch dan pull request secara praktis. | Paham branch sebagai jalur pengembangan terpisah dan pull request sebagai mekanisme review + merge. |
| 9 | Belum tahu alur push pertama kali ke repo kosong. | Push pertama perlu `git remote add origin <url>` dan `git push -u origin main` untuk menetapkan *tracking branch*. |

---

## C. Checklist Praktik yang Sudah Dijalankan

- [x] Verifikasi instalasi: `git --version`
- [x] Set identitas Git: `git config --global user.name` dan `user.email`
- [x] Inisialisasi repositori: `git init`
- [x] Pindahkan file ke staging: `git add .`
- [x] Commit dengan pesan: `git commit -m 'message'`
- [x] Hubungkan ke remote: `git remote add origin <url>`
- [x] Push branch utama: `git push -u origin main`
- [x] Publikasikan repositori sebagai **Public** agar dapat diakses panitia

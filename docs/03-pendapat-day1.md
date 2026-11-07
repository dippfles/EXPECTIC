# Pendapat Pribadi tentang Day 1 Proyek Workshop

**Fatih Fajar Habiebie** — RKS 1A — Kelompok EXPECTIC

---

## Kesan Umum

Day 1 ini saya nilai sebagai pembuka workshop yang tepat sasaran. Materinya dibagi menjadi dua bagian yang saling menopang: **prompt engineering** sebagai cara berinteraksi dengan AI, dan **Git/GitHub** sebagai cara mengelola hasil interaksi itu. Keduanya terasa relevan langsung karena pada hari yang sama saya juga diminta mempraktikkannya, bukan hanya mendengarkan teori.

Penyampaian oleh Kak Nugi Farhan terasa praktis. Beliau membuka dengan menyatakan sendiri bahwa tujuannya menjembatani teori desain dengan kenyataan industri yang cepat dan berantakan — dan itu memang terasa pada cara materi dibawakan. Setiap konsep diikuti contoh konkret, termasuk prompt lengkap untuk *student task planner* yang langsung bisa diuji.

## Apa yang Paling Berkesan

**Pertama, bagian "Context is key".** Saya sebelumnya cenderung menganggap prompt yang lebih panjang otomatis lebih baik. Ternyata yang menentukan adalah kelengkapan konteks dan kejelasan batasan. Perbandingan prompt "with context" dan "without context" membuat perbedaan itu terlihat jelas.

**Kedua, instruksi untuk tidak mengklaim sebelum memverifikasi.** Kalimat terakhir pada contoh prompt — *"Do not claim that the application works until you have verified its behavior"* — menurut saya satu baris paling bernilai dari sesi pagi. Instruksi itu mengubah cara kerja AI dari sekadar menghasilkan teks menjadi menghasilkan sesuatu yang harus dibuktikan.

**Ketiga, pemisahan tegas antara Git dan GitHub.** Sebelumnya saya memakai kedua istilah itu bergantian tanpa membedakan. Sesi ini membuat saya paham bahwa Git adalah alat kerja lokal, sedangkan GitHub adalah tempat publikasinya. Konsekuensinya logis: saya bisa bekerja tanpa internet, dan baru butuh jaringan saat push.

**Keempat, penjelasan teknis singkat soal `ed25519`.** Saya menghargai bahwa narasumber tidak sekadar menyuruh menempel perintah `ssh-keygen`, tetapi juga menjelaskan arti `EdDSA` dan `Curve25519` serta asal-usul kurva tersebut dari Daniel J. Bernstein. Detail seperti ini yang membuat saya merasa paham, bukan sekadar meniru.

## Bagian yang Menantang

Materi SSH key terasa paling padat untuk hari pertama. Perbedaan antara public key dan private key, mengapa public key diunggah ke GitHub sementara private key tidak boleh keluar dari komputer, serta kenapa passphrase justru dianjurkan, semua itu saya butuh waktu tambahan untuk mencernanya. Di sisi lain, bagian ini yang memberi saya keterampilan paling "industri" dari sesi hari ini.

Bagian `branch` dan `pull request` juga masih terasa abstrak karena pada praktik hari ini saya bekerja langsung di `main`. Saya paham konsepnya, tapi belum merasakan kebutuhannya secara langsung. Ini justru memotivasi saya untuk mencoba alur branch → commit → pull request pada pekerjaan berikutnya.

## Manfaat yang Saya Rasakan

1. **Alur kerja version control yang utuh.** Dari `git init` sampai `git push -u origin main`, saya sudah menjalankannya sendiri dengan repo kosong, jadi paham peran tiap langkah.
2. **Prompt yang bisa langsung dipakai.** Struktur Role/Task/Context/Format bisa saya pakai ulang untuk tugas berbasis AI di mata kuliah lain.
3. **Mindset dokumentasi.** Repositori yang saya buat hari ini memaksa saya menulis secara terstruktur — README, rangkuman materi, dan catatan pribadi — yang menurut saya berguna jangka panjang, bukan hanya untuk memenuhi tugas.
4. **Perbedaan perintah yang mirip.** Sekarang saya tahu kapan memakai `git add *` dan kapan harus `git add -A`.

## Saran

- Alokasi waktu untuk sesi praktik SSH key dan autentikasi bisa ditambah, karena ini bagian yang paling sering menghentikan langkah pemula.
- Akan sangat membantu bila pada sesi berikutnya ada demonstrasi langsung pembuatan `branch` dan `pull request` pada repositori bersama, agar konsep kolaborasinya tidak hanya menjadi definisi.
- Lembar contekan (*cheat sheet*) satu halaman berisi perintah esensial dan urutan setup Git akan memudahkan peserta yang baru pertama kali menggunakannya.

## Kesimpulan

Day 1 berhasil menetapkan fondasi yang saya butuhkan: cara berkomunikasi dengan AI secara terstruktur, dan cara mengelola hasilnya dengan version control yang benar. Saya menutup hari ini dengan satu nilai yang paling melekat, yaitu **verifikasi sebelum klaim** — baik ketika memberi instruksi kepada AI maupun ketika menyatakan pekerjaan saya sendiri sudah selesai. Saya menantikan sesi berikutnya untuk melengkapi bagian kolaborasi yang baru saya pahami secara konsep.

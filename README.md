# Different Freelancer Studio — Website

Website resmi Different Freelancer Studio, dihosting gratis di **GitHub Pages**:
<https://freelancerdifferent-stack.github.io/>

Situs ini murni HTML + CSS + JavaScript (tanpa framework, tanpa proses build),
jadi setiap perubahan yang di-commit langsung tayang dalam 1–2 menit.

## Struktur folder

```
.
├── index.html              # Halaman utama (semua teks & isi ada di sini)
├── 404.html                # Halaman kalau URL tidak ditemukan
├── robots.txt              # Aturan untuk mesin pencari
├── sitemap.xml             # Peta situs untuk Google
├── app-ads.txt             # Verifikasi Google AdMob / AdSense
├── .nojekyll               # Mematikan Jekyll agar file diserve apa adanya
└── assets/
    ├── css/style.css       # Semua tampilan (warna, layout, responsive)
    ├── js/main.js          # Menu mobile, form, placeholder gambar
    └── images/             # SEMUA GAMBAR ADA DI SINI
        ├── README.md       # ← panduan lengkap ganti gambar
        ├── brand/          # logo, favicon, gambar share sosial media
        ├── hero/           # gambar besar di bagian atas
        └── games/          # gambar kartu game
```

## Ganti gambar

Baca **[`assets/images/README.md`](assets/images/README.md)**.

Ringkasnya: masuk ke folder gambarnya di GitHub → **Add file → Upload files** →
upload file dengan **nama yang sama persis** (misal `game-1.jpg`) → **Commit
changes**. Tidak perlu mengubah kode sama sekali.

Selama gambar belum diupload, situs tetap rapi: bagian gambar otomatis diisi
kotak gradient sebagai pengganti sementara.

## Ganti teks

Semua teks ada di `index.html` dan diberi komentar penanda, misalnya:

- Judul besar di hero → cari `<h1>`
- Daftar game → cari `<!-- ============ GAMES ============ -->`
- Email kontak → cari `mailto:`

## Tambah game baru

Di `index.html`, copy satu blok `<article class="game"> ... </article>`,
lalu ubah judul, kategori, dan `src` gambarnya (misalnya jadi
`assets/images/games/game-5.jpg`). Upload gambarnya dengan nama yang sama.

## Ganti warna

Buka `assets/css/style.css`, semua warna ada di bagian paling atas (`:root`):

```css
--orange:#ff8a00;   /* warna aksen utama */
--bg:#020814;       /* warna latar */
```

## Lihat hasilnya di komputer sendiri (opsional)

```bash
python3 -m http.server 8000
# lalu buka http://localhost:8000
```

## Catatan

Form *Subscribe* saat ini hanya menampilkan pesan konfirmasi di browser dan
belum menyimpan email ke mana pun. Untuk benar-benar mengumpulkan email,
hubungkan ke layanan seperti Formspree, Mailchimp, atau Google Forms.

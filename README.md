# Different Freelancer Studio — Website

Website resmi Different Freelancer Studio, dihosting gratis di **GitHub Pages**:
<https://freelancerdifferent-stack.github.io/>

Situs ini murni HTML + CSS (tanpa framework, tanpa proses build), jadi setiap
perubahan yang di-commit langsung tayang dalam 1–2 menit.

## Struktur folder

```
.
├── index.html               # Halaman utama (semua teks & isi ada di sini)
├── 404.html                 # Halaman kalau URL tidak ditemukan
├── robots.txt                # Aturan untuk mesin pencari
├── sitemap.xml                # Peta situs untuk Google
├── app-ads.txt                # Verifikasi Google AdMob / AdSense
├── .nojekyll                  # Mematikan Jekyll agar file diserve apa adanya
└── assets/
    ├── css/style.css          # Semua tampilan (warna, layout, responsive)
    └── images/                # SEMUA GAMBAR ADA DI SINI
        ├── README.md          # ← panduan lengkap ganti gambar
        ├── brand/favicon.svg  # ikon tab browser
        ├── hero/hero.jpg      # gambar besar di bagian atas
        └── games/             # gambar kartu game (game-1.png … game-4.png)
```

## Ganti gambar

Baca **[`assets/images/README.md`](assets/images/README.md)**.

Ringkasnya: masuk ke folder gambarnya di GitHub → **Add file → Upload files** →
upload file dengan **nama yang sama persis** (misal `game-1.png`) → **Commit
changes**. Tidak perlu mengubah kode sama sekali.

## Ganti teks

Semua teks ada di `index.html`:

- Judul besar di hero → cari `<h1>`
- Daftar game → cari `<div class="game-grid">`
- Email kontak → cari `mailto:`

## Tambah game baru

Di `index.html`, di dalam `<div class="game-grid">`, copy satu blok
`<article class="game-card"> ... </article>`, ubah judul, tag, dan `src`
gambarnya (misalnya jadi `assets/images/games/game-5.png`). Upload gambarnya
dengan nama yang sama ke folder `assets/images/games/`.

## Ganti warna / tampilan

Semua styling ada di `assets/css/style.css`. File ini ditulis ringkas
(minified) supaya situs cepat dimuat — cari nama class-nya (misalnya
`.hero`, `.btn.primary`) untuk menemukan aturan warnanya.

## Lihat hasilnya di komputer sendiri (opsional)

```bash
python3 -m http.server 8000
# lalu buka http://localhost:8000
```

# Panduan Gambar

Semua gambar situs ada di folder ini. Cara mengganti gambar **tidak perlu
menyentuh kode** — cukup upload file dengan **nama yang sama persis** lewat
GitHub, file lama otomatis tertimpa.

## Daftar file

| File | Dipakai di | Ukuran disarankan |
|---|---|---|
| `hero/hero.jpg` | Gambar besar di bagian paling atas (hero banner) | 1600 × 900 px atau lebih, landscape |
| `games/game-1.png` | Kartu game ke-1 — Nova Dash Adventure | 800 × 460 px (rasio ~16:9) |
| `games/game-2.png` | Kartu game ke-2 — Shadow Ninja | 800 × 460 px |
| `games/game-3.png` | Kartu game ke-3 — Mecha Jump | 800 × 460 px |
| `games/game-4.png` | Kartu game ke-4 — The Legend of Ngizing | 800 × 460 px |
| `brand/logo.png` | Logo di pojok kiri atas (header) dan footer | PNG transparan, rasio lebar ~3:1 |
| `brand/favicon.svg` | Ikon kecil di tab browser | boleh diganti, format SVG |

Keempat kartu game memakai **ekstensi `.png` semua**, jadi kalau punya foto
atau poster baru dalam format `.jpg`, tinggal ganti dulu ekstensinya jadi
`.png` sebelum upload (atau simpan ulang sebagai PNG dari HP/laptop).

## Cara upload lewat GitHub (tanpa aplikasi apa pun)

1. Buka repo di GitHub, masuk ke folder tujuan
   (contoh: `assets/images/games/`).
2. Klik tombol **Add file → Upload files**.
3. Drag file gambar ke situ. **Pastikan nama file sama persis** dengan tabel
   di atas, misalnya `game-1.png` (huruf kecil semua, ekstensi `.png`).
4. Isi keterangan singkat lalu klik **Commit changes**.
5. Tunggu 1–2 menit, lalu refresh situs. Kalau gambar lama masih muncul,
   buka dengan **hard refresh** (`Ctrl + Shift + R`) karena cache browser.

## Kalau nama/ekstensi file mau beda

Misalnya mau pakai `.jpg` untuk game-1. Buka `index.html`, cari baris:

```html
<img src="assets/images/games/game-1.png" alt="Nova Dash Adventure artwork">
```

lalu ubah `.png` menjadi `.jpg`. Satu baris saja per gambar.

Untuk gambar hero, baris pengaturannya ada di `assets/css/style.css`,
carilah teks `hero/hero.jpg` dan ganti ekstensinya di situ.

## Tambah game baru (kartu ke-5 dst.)

Di `index.html`, cari bagian `<!-- games -->`-nya (di dalam
`<div class="game-grid">`), copy satu blok `<article class="game-card"> ... </article>`,
lalu ubah judul, kategori (`tags`), dan `src` gambarnya (misalnya jadi
`assets/images/games/game-5.png`). Upload gambarnya dengan nama yang sama.

## Tips

- Kompres dulu gambarnya (misal di <https://squoosh.app>) agar situs cepat.
  Usahakan tiap file di bawah 300 KB.
- Hindari spasi dan huruf besar pada nama file — pakai huruf kecil semua.
- Kalau gambar hilang/lupa upload, browser akan menampilkan ikon gambar
  rusak di slot tersebut — jadi pastikan setiap slot di tabel di atas
  selalu terisi.

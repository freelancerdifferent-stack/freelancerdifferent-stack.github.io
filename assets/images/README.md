# Panduan Gambar

Semua gambar situs ada di folder ini. Cara mengganti gambar **tidak perlu
menyentuh kode** — cukup upload file dengan **nama yang sama persis** lewat
GitHub, file lama otomatis tertimpa.

## Daftar file

| File | Dipakai di | Ukuran disarankan |
|---|---|---|
| `hero/hero.jpg` | Gambar besar di bagian paling atas (hero) | 1920 × 1080 px, landscape |
| `games/game-1.png` | Kartu game ke-1 (Nova Dash Adventure) | 900 × 600 px |
| `games/game-2.jpg` | Kartu game ke-2 (JumpRunner) | 900 × 600 px |
| `games/game-3.jpg` | Kartu game ke-3 (Chord Guitar Global) | 900 × 600 px |
| `games/game-4.jpg` | Kartu game ke-4 (More Games) | 900 × 600 px |
| `brand/logo.png` | Logo di header dan footer | 256 × 256 px, PNG transparan |
| `brand/favicon.svg` | Ikon kecil di tab browser | sudah ada, boleh diganti |
| `brand/og-image.jpg` | Gambar preview saat link dibagikan ke sosial media / WhatsApp | 1200 × 630 px |
| `brand/apple-touch-icon.png` | Ikon saat situs di-save ke home screen iPhone | 180 × 180 px |

Selama file belum diupload, situs **tetap tampil normal** — bagian gambar
diganti otomatis dengan kotak gradient (lihat `assets/js/main.js`).

## Cara upload lewat GitHub (tanpa aplikasi apa pun)

1. Buka repo di GitHub, masuk ke folder tujuan
   (contoh: `assets/images/games/`).
2. Klik tombol **Add file → Upload files**.
3. Drag file gambar ke situ. **Pastikan nama file sama persis** dengan tabel
   di atas, misalnya `game-1.jpg` (huruf kecil semua, ekstensi `.jpg`).
4. Isi keterangan singkat lalu klik **Commit changes**.
5. Tunggu 1–2 menit, lalu refresh situs. Kalau gambar lama masih muncul,
   buka dengan **hard refresh** (`Ctrl + Shift + R`) karena cache browser.

## Kalau nama/ekstensi file mau beda

Misalnya punya `game-1.png` (bukan `.jpg`). Buka `index.html`, cari baris:

```html
<img src="assets/images/games/game-1.jpg" alt="Nova Dash Adventure" data-fallback="1">
```

lalu ubah `.jpg` menjadi `.png`. Satu baris saja.

## Tips

- Kompres dulu gambarnya (misal di <https://squoosh.app>) agar situs cepat.
  Usahakan tiap file di bawah 300 KB.
- Format `.jpg` untuk foto, `.png` untuk logo yang butuh latar transparan.
- Hindari spasi dan huruf besar pada nama file.

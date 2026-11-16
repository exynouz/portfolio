# Valen Ramadhan — Developer Portfolio

Portfolio React dengan gaya editorial, ilustrasi antarmuka, dan studi kasus dari pengembangan aplikasi bisnis. Seluruh visual proyek dibuat ulang untuk portfolio; tidak ada source code, dump database, atau kredensial proyek perusahaan.

## Menjalankan

Memerlukan Node.js 22.12+ atau versi LTS yang lebih baru.

```bash
npm ci
npm run dev
```

Buka `http://127.0.0.1:5173`. Aplikasi Laravel di port 8000 tetap terpisah.

```bash
npm run build
npm run preview
```

Output produksi tersedia di `dist/`. Bisa di-host sebagai static site pada layanan yang mendukung Vite, seperti GitHub Pages, Netlify, Vercel, atau Sites. Untuk hosting di subfolder, sesuaikan `base` pada `vite.config.js`.

Pengujian browser: `npm run test:e2e`. Konfigurasi memakai Chrome yang sudah terpasang pada Windows; pada sistem lain jalankan `npx playwright install chromium` terlebih dahulu.

## Personalisasi

- `src/data.js`: nama, email, WhatsApp, dan isi studi kasus.
- `src/App.jsx`: struktur halaman dan interaksi.
- `src/styles.css`: warna, tipografi, responsivitas, dan tema.
- `index.html`: judul, metadata, dan font.
- `public/`: favicon dan social card SVG.

Nomor WhatsApp menggunakan format internasional tanpa tanda `+`. Seluruh tombol kontak terhubung ke email dan nomor yang diberikan Valen. Tidak ada formulir yang mengklaim mengirim pesan ke server.

## Fitur

- Tampilan desktop dan mobile, navigasi mobile, serta tema terang/gelap yang tersimpan di browser.
- Filter proyek dan studi kasus dalam native dialog yang mendukung tombol Escape.
- Playground kalkulasi reaktif dengan angka ilustrasi; bukan rumus kalkulasi produk perusahaan.
- Email, WhatsApp, dan tombol salin alamat email.
- Dukungan reduced motion, focus indicator, skip link, dan print stylesheet.

Konten berangkat dari pekerjaan kalkulasi produk, sample product, dan audit master data. Tinjau kembali uraian kontribusi sebelum dipakai untuk lamaran atau dibagikan publik. Tidak ada klaim masa kerja, persentase peningkatan, atau testimoni yang dibuat-buat.

## Repository

Repo Git lokal berada di folder proyek ini pada branch `main`. Remote `origin` bila disiapkan oleh Sites adalah repository sumber Sites, bukan repository GitHub pribadi. Untuk menerbitkan repo GitHub, buat repository kosong di akun yang dipilih lalu tambahkan remote `github` dan push branch `main`. Jangan menyalin `.env`, token, atau source code aplikasi internal ke repo portfolio.

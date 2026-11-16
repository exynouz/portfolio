# Valen Ramadhan — Portfolio

[Website](https://exynouz.github.io/portfolio/) · [GitHub](https://github.com/exynouz)

Portfolio React untuk menampilkan tools, modul, website, dan report yang dikembangkan untuk kebutuhan perusahaan: Product Development (estimate, extractor part number, formula), Product Inspection (QC), Daily Task Management, Sample Product Barcode, dan Reporting & Data Tools.

Antarmuka dan ilustrasi modul dibuat ulang khusus untuk portfolio. Source code aplikasi internal, data pelanggan, dump database, dan harga perusahaan tidak disertakan.

## Local development

```sh
npm ci
npm run dev
```

Preview: `http://127.0.0.1:5173/`. Aplikasi Laravel di port 8000 tetap terpisah.

```sh
npm run build
npm run preview
npm run test:e2e
```

Memerlukan Node.js 22.12+; workflow GitHub menggunakan Node.js 24. Pengujian browser menggunakan Chrome yang terpasang di Windows. Di sistem lain, jalankan `npx playwright install chromium` dahulu.

## GitHub Pages

Push ke `main` menjalankan workflow `.github/workflows/deploy.yml` yang membangun React/Vite dan menerbitkan `dist/` melalui GitHub Pages. Repository Settings → Pages menggunakan source **GitHub Actions**.

Saat build pada GitHub Actions, Vite menggunakan base `/portfolio/`. Local development tetap menggunakan `/`.

## Mengubah konten

- `src/data.js` — kontak, daftar modul, deskripsi kontribusi.
- `src/App.jsx` — struktur halaman dan preview interaktif.
- `src/styles.css` — tema gelap, layout, ilustrasi CSS, responsivitas.
- `public/` — favicon dan social card.

Kontak email dan WhatsApp terhubung langsung. Tidak ada form pengiriman pesan atau API backend. Review uraian kontribusi sebelum dipakai untuk lamaran; portfolio tidak mengklaim kepemilikan tunggal atas seluruh aplikasi perusahaan.

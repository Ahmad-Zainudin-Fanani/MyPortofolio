# Portofolio Ahmad Zainudin Fanani

Website portofolio pribadi dengan gaya **neo-brutalism** — border tebal, hard shadow, dan warna pink / lime / violet. Dibangun dengan Next.js (App Router) dan Tailwind CSS v4.

## Menjalankan project

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

Perintah lain:

```bash
npm run build   # production build
npm run start   # jalankan hasil build
npm run lint    # ESLint
```

## Struktur

```
app/
  layout.js        # font, metadata, html lang
  page.js          # susunan section halaman
  globals.css      # design token Tailwind v4 + pattern/animasi
  icon.svg         # favicon
components/
  header.jsx       # navbar sticky + menu mobile
  hero.jsx         # hero, foto placeholder, code card
  skills-strip.jsx # strip teknologi
  projects.jsx     # carousel project + galeri + detail + link GitHub
  project-art.jsx  # ilustrasi SVG tiap project
  tech-stack.jsx   # panel tech stack
  experience.jsx   # timeline pengalaman + pendidikan + CTA kontak
  cv-provider.jsx  # popup CV bertema neo-brutalism
  footer.jsx
  icons.jsx        # ikon brand & arrow
lib/
  data.js          # SEMUA konten: profil, project, skill, pengalaman, halaman CV
public/
  cv/
    cv-page-1.webp # gambar halaman 1 CV
    cv-page-2.webp # gambar halaman 2 CV
```

## Yang perlu diganti

1. **Foto hero** — taruh fotomu di folder `public/` (misal `public/foto-fanani.jpg`, rasio 3:4), lalu buka `lib/data.js` dan isi:

   ```js
   photo: "/foto-fanani.jpg",
   ```

   Selama `photo` masih `null`, hero menampilkan ilustrasi placeholder. Begitu diisi, ilustrasi otomatis hilang dan foto memenuhi frame (crop tengah, `object-cover`).

2. **Konten** — nama, email, nomor WA, link GitHub/LinkedIn, deskripsi, project, dan pengalaman semuanya ada di `lib/data.js`.

3. **CV** — popup CV menampilkan gambar halaman PDF di `public/cv/cv-page-1.webp` dan `cv-page-2.webp`, dibingkai dengan gaya neo-brutalism. Kalau isi CV berubah, ganti kedua gambar tersebut (rasio A4, lebar 1836px) dan sesuaikan `cvPages` di `lib/data.js` bila ukurannya berbeda. Tidak ada file CV yang bisa diunduh.

4. **Link GitHub project** — setiap project punya array `repos` di `lib/data.js`. Tambah atau ganti URL di sana; tombolnya otomatis muncul di carousel dan galeri project.

5. **Warna & font** — token desain ada di blok `@theme` pada `app/globals.css`.

## Catatan

- Semua section memakai anchor (`#skills`, `#projects`, `#experience`, `#tech-stack`, `#contact`) sehingga navigasi berjalan tanpa library tambahan.
- Gambar project dibuat sebagai ilustrasi SVG inline (`components/project-art.jsx`), jadi tidak butuh file gambar dan tetap tajam di semua ukuran layar.
- Foto hero saat ini masih placeholder bertuliskan "Foto kamu di sini".
- Website ini sengaja tidak menyediakan download apa pun. CV dibuka lewat popup gambar, dan tombol email mengarah ke Gmail compose (`https://mail.google.com/mail/?view=cm&fs=1&to=...`) di tab baru.

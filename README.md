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
  projects.jsx     # carousel project + galeri + detail
  project-art.jsx  # ilustrasi SVG tiap project
  tech-stack.jsx   # panel tech stack
  experience.jsx   # timeline pengalaman + pendidikan + CTA kontak
  footer.jsx
  icons.jsx        # ikon brand & arrow
lib/
  data.js          # SEMUA konten: profil, project, skill, pengalaman
public/
  CV_Ahmad_Zainudin_Fanani.pdf
```

## Yang perlu diganti

1. **Foto hero** — di `components/hero.jsx`, ganti isi `PortraitPlaceholder()` dengan foto asli, misalnya:

   ```jsx
   <Image
     src="/foto-ahmad.jpg"
     alt="Ahmad Zainudin Fanani"
     width={600}
     height={800}
     className="h-full w-full object-cover"
     priority
   />
   ```

   Taruh file fotonya di folder `public/`.

2. **Konten** — nama, email, nomor WA, link GitHub/LinkedIn, deskripsi, project, dan pengalaman semuanya ada di `lib/data.js`.

3. **CV** — file saat ini ada di `public/CV_Ahmad_Zainudin_Fanani.pdf`. Kalau diganti, sesuaikan juga `profile.cv` di `lib/data.js`.

4. **Warna & font** — token desain ada di blok `@theme` pada `app/globals.css`.

## Catatan

- Semua section memakai anchor (`#skills`, `#projects`, `#experience`, `#tech-stack`, `#contact`) sehingga navigasi berjalan tanpa library tambahan.
- Gambar project dibuat sebagai ilustrasi SVG inline (`components/project-art.jsx`), jadi tidak butuh file gambar dan tetap tajam di semua ukuran layar.
- Foto hero saat ini masih placeholder bertuliskan "Foto kamu di sini".

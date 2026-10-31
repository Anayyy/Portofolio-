# Panduan coding assistant

## Stack dan struktur

Proyek portofolio ini menggunakan Next.js App Router, React, TypeScript, Tailwind CSS 4, Three.js dan React Three Fiber.
- `app/`: layout, halaman, metadata, Tailwind dan responsive CSS.
- `components/lanyard-scene.tsx`: kartu ID 3D dan lanyard berbasis R3F.
- `public/assets/`: salinan aset yang disajikan oleh Next.js; `assets/` menyimpan sumber asli.

## Aturan perubahan
- Pertahankan Bahasa Indonesia, tema dark glassmorphism minimalis, navigasi keyboard dan tata letak responsif.
- Informasi profil (nama, tanggal lahir 25 Oktober 2006) ditampilkan atas permintaan pemilik.
- Jaga WebGL hemat daya (`frameloop="demand"`), fallback scene, dan dukungan reduced motion.
- Perbarui `README.md` jika mengubah struktur atau cara menjalankan.

## Validasi
Jalankan `npm run lint`, `npx tsc --noEmit`, dan `npm run build` setelah perubahan.

# Portofolio Octiyana Fa'iz Surya Permana

Portofolio personal berbahasa Indonesia, dibangun dengan Next.js App Router, React, TypeScript, Tailwind CSS 4, Three.js, dan React Three Fiber.

## Jalankan lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`. Produksi: `npm run build` lalu `npm start`. Node.js 20.9 atau lebih baru diperlukan oleh Next.js.

## Fitur

- Tema dark glassmorphism yang responsif.
- Kartu mahasiswa 3D/lanyard dibuat dengan React Three Fiber; dapat diputar dengan drag. Tarik kartu ke bawah untuk meregangkan sambungan elastis; tali utama atas tetap di tempat.
- Render WebGL memakai `frameloop="demand"` dan batas DPR untuk mengurangi penggunaan GPU saat scene diam.
- Hero, tentang, proyek GitHub, skill, sertifikat, dan tautan kontak.

## Struktur utama

```text
app/                 App Router, metadata, Tailwind CSS dan layout
components/          Scene lanyard 3D React Three Fiber
public/assets/       Aset web yang disajikan Next.js
assets/              Arsip aset sumber
```

Foto profil dan sertifikat di `public/assets` disalin dari aset lama. Jangan mengganti nama gambar tanpa memperbarui path di komponen.

## Profil & privasi

Nama: Octiyana Fa'iz Surya Permana · Program: Informatika, Universitas Nasional · Tanggal lahir: 25 Oktober 2006. Tanggal lahir ditampilkan sesuai permintaan pemilik.

Kontak dan link repositori saat ini dipertahankan dari situs lama; pastikan email/WhatsApp sesuai sebelum memublikasikan.

## Teknologi

Next.js · React · TypeScript · Tailwind CSS 4 · Three.js · React Three Fiber · Drei

## Lisensi

Belum ada lisensi penggunaan ulang. Minta izin sebelum menggunakan foto, sertifikat, atau materi pribadi di repositori ini.

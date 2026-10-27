# Panduan untuk Claude

## Gambaran proyek

Portofolio ini adalah situs statis satu halaman dalam Bahasa Indonesia. Gunakan HTML, CSS, dan JavaScript murni. Tidak ada framework, bundler, package manager, maupun dependensi npm.

## Berkas utama

- `index.html` — konten, struktur semantik, navigasi, metadata, dan tautan aset.
- `styles.css` — seluruh gaya visual, tata letak responsif, fokus keyboard, dan preferensi reduced motion.
- `script.js` — menu navigasi mobile, fallback gambar sertifikat, dan tahun hak cipta.
- `assets/` — foto profil dan sertifikat yang digunakan langsung oleh HTML.

## Aturan perubahan

- Pertahankan antarmuka dan teks situs dalam Bahasa Indonesia; nama proyek dan judul sertifikat resmi boleh tetap menggunakan nama aslinya.
- Pertahankan gaya editorial yang lapang, tipografi sederhana, warna netral, dan aksen terracotta. Hindari neon, gradient mencolok, efek glow, dan glassmorphism.
- Jaga HTML semantik, teks alternatif gambar, navigasi keyboard, dan layout mobile.
- Jika mengubah nama atau lokasi gambar, perbarui `src` terkait pada `index.html` dan dokumentasi `README.md`.
- Jangan menghapus tautan repositori proyek, alamat email, atau tautan WhatsApp tanpa permintaan eksplisit.
- Jangan menambahkan framework atau dependensi baru untuk perubahan sederhana.

## Validasi

Jalankan `node --check script.js` setelah mengubah JavaScript. Periksa juga semua path gambar, tautan anchor, dan tampilan pada lebar desktop serta mobile.

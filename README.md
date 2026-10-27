# Portofolio Octiyana Fa'iz Surya Permana

Website portofolio pribadi satu halaman yang dibuat menggunakan HTML semantik, CSS, dan JavaScript murni. Tidak memerlukan framework, package manager, atau proses build.

## Isi proyek

```text
PORTOFOLIO/
├── assets/
│   ├── profile.jpg
│   ├── sertifikat-ai.jpg
│   ├── sertifikat-ai-2.jpg
│   └── sertifikat-ai-2.jpg
├── .editorconfig
├── .gitignore
├── CLAUDE.md
├── index.html
├── README.md
├── script.js
└── styles.css
```

## Menjalankan secara lokal

Cara paling sederhana: buka `index.html` di browser. Untuk pengalaman yang lebih mirip hosting, jalankan server statis dari folder proyek, misalnya dengan ekstensi **Live Server** di VS Code.

Tidak ada perintah `npm install` atau build yang diperlukan.

## Gambar

Pastikan nama file dan huruf besar/kecilnya sama persis dengan path pada `index.html`:

- `assets/profile.jpg` — foto profil.
- `assets/sertifikat-ai.jpg` — sertifikat lokakarya AI dan Data Innovation dari Zenith Academy.
- `assets/sertifikat-ai-2.jpg` — sertifikat kedua yang ditampilkan pada portofolio.

Jangan mengganti nama file tanpa memperbarui atribut `src` pada `index.html`.

## Kontak dan tautan

Email dan WhatsApp sudah diarahkan ke alamat/nomor pemilik portofolio. Kartu proyek mengarah ke repositori GitHub masing-masing. Tautan GitHub pada bagian kontak saat ini menuju halaman utama GitHub; ganti ke profil pribadi bila URL profil yang ingin ditampilkan sudah dipastikan.

## Publikasi

Situs ini dapat di-host sebagai situs statis, misalnya di GitHub Pages, Netlify, atau Vercel. Unggah isi folder proyek ke repositori; atur root proyek sebagai direktori publik dan tidak perlu menentukan build command.

## Pemeriksaan cepat

Periksa sintaks JavaScript dengan Node.js:

```sh
node --check script.js
```

Periksa juga bahwa ketiga gambar pada folder `assets/` ikut diunggah ke GitHub.

## Teknologi

HTML5 · CSS3 · JavaScript · Google Fonts (DM Sans, DM Mono, Playfair Display)

## Lisensi

Belum ada lisensi penggunaan ulang yang ditetapkan. Minta izin sebelum menggunakan foto, sertifikat, atau materi pribadi yang ada di repositori ini.

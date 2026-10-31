import Image from "next/image";
import ThreeScene from "./three-scene";

const projects = [
  { number: "01", title: "Tanah Kopi", type: "SISTEM KASIR & PEMESANAN", description: "Aplikasi web untuk pencatatan pemasukan restoran dan pemesanan makanan-minuman oleh pelanggan.", tags: ["PHP", "MySQL", "Web App"], href: "https://github.com/Anayyy/anayyyresto", art: "coffee" },
  { number: "02", title: "Schedule Manager", type: "APLIKASI PRODUKTIVITAS", description: "Kelola jadwal semester, catat tugas, dan pantau tenggat waktu dalam satu aplikasi sederhana.", tags: ["JavaScript", "Productivity", "Web App"], href: "https://github.com/Anayyy/Schedule-Manager", art: "schedule" },
];
const skills = ["JavaScript", "PHP", "Laravel", "Node.js", "Express", "MySQL", "Git", "HTML & CSS"];

export default function Home() {
  return <>
    <a className="skip-link" href="#main">Langsung ke konten</a>
    <header className="site-header shell"><a className="brand" href="#top" aria-label="Octiyana Fa&apos;iz, beranda">OF<span>.</span></a><nav className="desktop-nav" aria-label="Navigasi utama"><a href="#about">Tentang</a><a href="#work">Proyek</a><a href="#music">Playlist</a><a href="#skills">Keahlian</a><a href="#certificates">Sertifikat</a><a className="nav-cta" href="#contact">Hubungi saya <span>ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â</span></a></nav><a className="mobile-cta" href="#contact">Kontak ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â</a></header>
    <main id="main">
      <section id="top" className="hero shell">
        <div className="hero-copy"><div className="status-pill"><i /> TERBUKA UNTUK KOLABORASI</div><p className="hero-kicker">INFORMATICS STUDENT <span>ÃƒÆ’Ã‚Â¢Ãƒâ€¦Ã¢â‚¬Å“Ãƒâ€šÃ‚Â³</span> WEB DEVELOPER</p><h1>Membangun<br />hal hebat dari<br /><span>baris kode.</span></h1><p className="hero-description">Halo, saya <strong>Octiyana Fa&apos;iz Surya Permana</strong> ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â mahasiswa Informatika yang tertarik mengubah ide menjadi produk digital yang bermanfaat dan mudah digunakan.</p><div className="hero-actions"><a className="button button-light" href="#work">Jelajahi proyek <span>ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â Ãƒâ€¹Ã…â€œ</span></a><a className="button button-glass" href="#contact">Hubungi saya <span>ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â</span></a></div><div className="hero-meta"><span>Jakarta, Indonesia</span><span>Universitas Nasional</span></div></div>
        <div className="hero-visual"><ThreeScene /><div className="hero-note"><span>UNAS / INFORMATIKA</span></div></div><a href="#about" className="scroll-cue"><span>SCROLL UNTUK MENJELAJAH</span><b>ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œ</b></a>
      </section>
      <section id="about" className="section shell"><div className="section-label"><span>01 / TENTANG SAYA</span><i /></div><div className="about-grid"><h2>Teknologi yang baik terasa <span>sederhana.</span></h2><div className="about-copy"><p>Saya mahasiswa Informatika di Universitas Nasional dengan minat pada Rekayasa Perangkat Lunak. Saya menikmati proses dari merancang alur sampai membangun aplikasi web yang menyelesaikan masalah nyata.</p><p>Saat tidak sedang menulis kode, saya mengeksplorasi teknologi baru dan terus mengasah cara berpikir sebagai seorang engineer.</p><dl className="facts"><div><dt>PENDIDIKAN</dt><dd>Informatika ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â· Universitas Nasional</dd></div><div><dt>TANGGAL LAHIR</dt><dd>25 Oktober 2006</dd></div><div><dt>FOKUS</dt><dd>Web development &amp; software engineering</dd></div></dl></div></div></section>
      <section id="work" className="section shell"><div className="section-label"><span>02 / PROYEK PILIHAN</span><i /></div><div className="section-heading"><div><p className="eyebrow">DIBUAT DENGAN RASA INGIN TAHU</p><h2>Proyek <span>terpilih.</span></h2></div><p>Eksperimen dan solusi digital yang berangkat dari kebutuhan sehari-hari.</p></div><div className="project-grid">{projects.map(project => <a className="project-card" href={project.href} target="_blank" rel="noreferrer" key={project.number}>
        <div className={`project-art ${project.art}`} aria-hidden="true"><div className="mock-window"><div className="mock-bar"><i /><i /><i /><b>{project.art === "coffee" ? "TANAH KOPI / ADMIN" : "MY SCHEDULE / SEMESTER"}</b></div>{project.art === "coffee" ? <div className="mock-chart"><strong>Ringkasan penjualan</strong><div>{[32,52,39,68,56,79,67,94].map((height,i)=><i key={i} style={{height:`${height}%`}} />)}</div><small>+ 24.8% minggu ini</small></div> : <div className="mock-calendar"><b>MONDAY <small>08:00 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â 16:00</small></b><i /><i /><i /><i /></div>}</div><span className="art-index">{project.number} ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â WEB PROJECT</span></div>
        <div className="project-info"><div className="project-title"><div><p>{project.type}</p><h3>{project.title}</h3></div><span>ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â</span></div><p className="project-description">{project.description}</p><div className="tag-list">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div></div>
      </a>)}</div></section>
      <section id="music" className="section shell">
        <div className="section-label"><span>03 / DAILY ROTATION</span><i /></div>
        <div className="spotify-card">
          <div className="spotify-copy">
            <p className="eyebrow">SPOTIFY PLAYLIST</p>
            <h2>A little music.<br /><span>A lot of ideas.</span></h2>
            <p>Musik yang menemani proses saya mengubah ide menjadi produk nyata. Temukan playlist Daily Rotation di Spotify.</p>
            <a className="button button-glass" href="https://open.spotify.com/search/Daily%20Rotation" target="_blank" rel="noopener noreferrer">Cari Daily Rotation di Spotify <span>â†—</span></a>
          </div>
          <div className="spotify-placeholder" aria-label="Buka Spotify untuk mencari playlist Daily Rotation">
            <span className="spotify-mark" aria-hidden="true">â™«</span>
            <p className="eyebrow">DENGARKAN DI SPOTIFY</p>
            <strong>Daily Rotation</strong>
            <span>Playlist tidak tersedia untuk disematkan saat ini.</span>
            <a href="https://open.spotify.com/search/Daily%20Rotation" target="_blank" rel="noopener noreferrer">Buka pencarian Spotify <span aria-hidden="true">â†—</span></a>
          </div>
        </div>
      </section>
      <section id="skills" className="section shell"><div className="section-label"><span>04 / TECH STACK</span><i /></div><div className="skills-layout"><div><p className="eyebrow">TOOLS OF THE TRADE</p><h2>Dibangun dengan<br /><span>teknologi tepat.</span></h2><p className="muted-copy">Teknologi yang saya gunakan untuk merancang, membangun, dan mengembangkan solusi digital.</p></div><div className="skill-grid">{skills.map((skill,i)=><div className="skill-card" key={skill}><b>{["JS","PHP","L","N","Ex","ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“Ãƒâ€šÃ‚Â¤","ÃƒÆ’Ã‚Â¢Ãƒâ€¦Ã¢â‚¬â„¢Ãƒâ€¹Ã…â€œ","ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬ÂÃƒâ€¹Ã¢â‚¬Â "][i]}</b>{skill}</div>)}</div></div></section>
      <section id="certificates" className="section shell"><div className="section-label"><span>05 / PENGEMBANGAN DIRI</span><i /></div><div className="certificate-layout"><div><p className="eyebrow">SERTIFIKASI &amp; LOKAKARYA</p><h2>Terus belajar,<br /><span>terus bertumbuh.</span></h2><p className="muted-copy">Berpartisipasi dalam lokakarya ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã¢â‚¬Å“Empower Your Future with AI &amp; Data InnovationÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â oleh Zenith Academy, Desember 2025.</p></div><div className="certificate-grid"><figure><Image src="/assets/sertifikat-ai.jpg" alt="Sertifikat lokakarya AI dan Data Innovation" width={1200} height={850} /><figcaption>AI &amp; Data Innovation ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â· Desember 2025</figcaption></figure><figure><Image src="/assets/sertifikat-ai-2.jpg" alt="Sertifikat lokakarya Zenith Academy" width={1200} height={850} /><figcaption>Lokakarya ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â· Zenith Academy</figcaption></figure></div></div></section>
    </main>
    <footer id="contact" className="footer shell"><div className="footer-top"><div><p className="eyebrow">06 / MARI TERHUBUNG</p><h2>Punya ide menarik?<br /><span>Mari berbincang.</span></h2></div><div className="footer-contact"><p>Saya selalu terbuka untuk kolaborasi, kesempatan, atau sekadar ngobrol tentang teknologi.</p><a className="button button-light" href="mailto:faiz.surya99@gmail.com">Kirim email <span>ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â</span></a></div></div><div className="footer-bottom"><span>ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© {new Date().getFullYear()} Octiyana Fa&apos;iz Surya Permana</span><div><a href="https://github.com/Anayyy" target="_blank" rel="noreferrer">GITHUB ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â</a><a href="https://wa.me/6289686893688" target="_blank" rel="noreferrer">WHATSAPP ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â</a><a href="#top">KEMBALI KE ATAS ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÂ¢Ã¢â€šÂ¬Ã‹Å“</a></div><span className="footer-signoff">DESIGNED &amp; BUILT WITH INTENTION.</span></div></footer>
  </>;
}
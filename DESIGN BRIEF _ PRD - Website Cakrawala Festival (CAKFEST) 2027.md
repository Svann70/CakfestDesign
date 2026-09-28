# **DESIGN BRIEF & PRODUCT REQUIREMENT DOCUMENT (PRD)** 

## **Perancangan Tampilan UI/UX Website Cakrawala Festival (CAKFEST) 2027** 

**Dokumen Metadata:** 

- **Penyusun:** Qonita Putri Amalia & Rafli Product Management Team) 

- **Ditujukan Kepada:** Satrio & Tim UI/UX Designer 

- **Tanggal Dibuat:** 19 September 2026 

- **Versi Dokumen:** 1.2 Final Sync & Roadmap Handover) 

- **Status Proyek:** Approved for Sprint Execution 

### **1. Ringkasan Eksekutif & Fokus Utama Tim UI/UX** 

Dokumen ini adalah panduan kerja resmi (design brief) untuk tim UI/UX dalam merancang seluruh antarmuka website Cakrawala Festival CAKFEST 2027. Fokus utama perancangan desain adalah membangun platform tiga fase: Pra-Event (informasi & pendaftaran), Saat Event (bagan pertandingan interaktif & skor live), dan Pasca-Event (podium juara & arsip). 

##### **Key UX Focus:** 

1. **Eliminasi Friction Informasi:** Mencegah pertanyaan berulang di grup WhatsApp dengan menyajikan bagan (bracket), skor live, dan cek status pendaftaran mandiri secara transparan. 

2. **Desain Berfase Phase-based UI** Tampilan halaman dapat berubah secara kontekstual sesuai dengan fase siklus acara. 

3. **Satu Pintu Pengelolaan CMS UI** Sisi admin dirancang mudah dipakai panitia (user-friendly) untuk verifikasi berkas dan input skor langsung dari lapangan. 

###### **2. Roadmap Delivery & Target Deadline UI/UX** 

Pengerjaan desain dibagi secara efisien menjadi 2 Fase Utama dan 1 Teaser Page Khusus. Tim UI/UX wajib memperhatikan target handoff ke Frontend Developer agar siklus sprint berjalan tepat waktu. 

- **Teaser Page 15 Hari Kerja):** Target Tayang 30 September 2026. Deliverable: One-page teaser berisi 3 poin utama Apa itu CAKFEST, Gambaran Lomba, Timeline) dengan CTA mengarah ke Linktree. 

- **Phase 1 Critical Path Pendaftaran Go-Live: 1 Desember 2026** Target Handoff Figma UI/UX ke FE 7 Oktober 2026. Fokus Halaman: Seluruh halaman informasi utama dan alur pendaftaran mandiri. 

- **Phase 2 Live Event & Bracket System Go-Live: Januari 2027** Target Handoff Figma UI/UX ke FE 15 November 2026. Fokus Halaman: Bagan pertandingan, live score, CMS input skor, dan arsip juara. 

|**Sprint**|**Periode**|**Fokus Tim UI/UX**|**Deliverable UI/UX**|**Target Handoff**|
|---|---|---|---|---|
|Sprint 0|22 - 30 Sept 2026|Wireframing & Design<br>System Base|UI Style Guide, Component<br>Library, Wireframe LP|30 Sept 2026|
|Sprint 1|1 - 15 Okt 2026|High-Fidelity Phase 1<br>Pages|LP, Tentang, Kategori,<br>Detail Kategori, FAQ,<br>Kontak|7 Okt 2026 LP & Form)|
|Sprint 2<br>Sprint 3|16 - 31 Okt 2026<br>1 - 15 Nov 2026|Registration & Status<br>Checking UI<br>CMS Verification & Phase 2<br>Wireframe|Multi-step Form, UI Upload<br>Berkas, Cek Status<br>Dashboard Verifikasi CMS,<br>Rulebook & Schedule Page|31 Okt 2026<br>15 Nov 2026|
|Sprint 4|16 - 30 Nov 2026|Phase 2 High-Fidelity &<br>Polish|Bagan Turnamen (/hasil),<br>Live Ticker, CMS Skor|30 Nov 2026|
|Sprint 56|Des 2026|Asset Preparation & Edge<br>Cases|Empty States, Error States,<br>Micro-interactions|Mid Des 2026|



#### **3. Acuan Referensi Desain Resmi (Design Benchmark)** 

Tim UI/UX wajib menjadikan daftar referensi resmi dari PRD CAKFEST ini sebagai tolok ukur visual dan komponen: 

|**No.**|**Sumber Referensi**|**Acuan Sumber**|**Fungsi & Komponen yang Diacu**|
|---|---|---|---|
|1|PRD Awal Design CAKFEST|cakfest-prd-resmi.pdf|Dasar latar belakang, 6 kategori lomba,<br>sitemap awal, gaya desain, deliverables|
|2|Desain Figma Landing<br>Page CAKFEST|Landing Page CAKFEST|Acuan tema visual, komponen dasar,<br>dan gaya tampilan tahun sebelumnya|
|3|Structural Booklet<br>CAKFEST|Booklet CAKFEST|Acuan struktur konten, hirarki<br>informasi, dan pesan utama acara|
|4|Jakarta Future Festival|Jakarta Future Festival|Acuan layout Hero, countdown timer,<br>lokasi acara, dan section mitra/sponsor|
|5|Festival Suara Indonesia|Festival Suara|Acuan katalog lomba, tombol CTA<br>pendaftaran, layout FAQ, kontak, &<br>testimoni|
|6|Color Run Festival|Color Run Festival|Acuan daftar acara, kartu<br>tanggal/lokasi, serta elemen urgensi<br>"Kuota Terbatas"|
|7|IdeaFest 2026|IdeaFest 2026|Acuan struktur jadwal/sesi, galeri<br>dokumentasi, dan grid sponsor|
|8|Challonge Bracket Platform|Challonge Bracket Platform|Acuan visual bagan turnamen, match<br>card, dan logika tim melaju babak|
|||Jakarta Future Festival||
|9|Folder Foto Referensi<br>CAKFEST|Festival Suara Indone…<br>Color Run Festival<br>IdeaFest 2026 Indos…|Bahan aset foto dan ilustrasi<br>pendukung desain|



|**Sumber Referensi**<br>**Acuan Sumber**|**Fungsi & Komponen yang Diacu**|
|---|---|



### **4. Style Guide & Moodboard Visual** 

Sesuai konsep awal, website CAKFEST 2027 mengusung estetika Pixel Art / 

8Bit Cosmic Retro yang modern, kompetitif, dan energetik. 

- **Tema Visual Utama:** Space / Outer Space Exploration dipadukan dengan gaya Pixel/Retro Gaming. 

- **Palet Warna Usulan Menunggu Finalisasi Panitia):** 

   - Primary Dominan): Deep Purple / Space Violet (#2B1B54 

   - Accent / CTA Electric Yellow / Gold (#FFD700 / #FFC800 untuk daya pikat tombol aksi 

   - Semantic Colors Status Match & Registrasi): 

      - Sedang Berlangsung / Verifikasi: Electric Orange / Yellow 

      - Menang / Terverifikasi: Neon Green 

      - Kalah / Ditolak / Perlu Perbaikan: Crimson Red / Soft Pink 

      - Belum Dimulai / Menunggu: Muted Blue / Dark Gray 

- **Tipografi:** 

   - Header / Judul: Display Font bergaya Pixel/Retro Press Start 2P, Arcade, atau Silkscreen) 

   - Body Text / Formulir: Clean Sans-Serif font agar mudah dibaca di mobile/desktop Inter, Plus Jakarta Sans) 

- **Responsivitas:** Mobile-First Design approach. Khusus tampilan bagan (bracket) di mobile, gunakan skema horizontal swipeable canvas dengan penanda babak yang jelas. 

**Berikut video demo saran design yang dibuat berdasarkan data design yang ada:** 

**Screen Recording 20260920 174750.mp4** 

### **5. Peta Situs (Sitemap) & Pengelompokan Fase** 

- Landing Page (/) Fase 1 

- Tentang CAKFEST (/tentang) Fase 1 

- Kategori Lomba (/lomba) Fase 1 

   - Detail Kategori (/lomba/[kategori]) Fase 1 

- Pendaftaran (/daftar) Fase 1 

   - Cek Status Pendaftaran Fase 1 

- Jadwal (/jadwal) Fase 1 

- Panduan / Rulebook (/panduan) Fase 1 

- FAQ (/faq) Fase 1 

- Kontak & Narahubung (/kontak) Fase 1 

- Hasil Pertandingan & Bagan (/hasil) Fase 2 

- Galeri & Dokumentasi (/galeri) Fase 2 

- Arsip Juara (/juara) Fase 2 

- Custom 404 Page Fase 1 

- Panel CMS Panitia (/admin) 

   - Verifikasi Pendaftaran Fase 1 

   - Input Skor & Kelola Bagan Fase 2 

### **6. Panduan UI/UX Detail per Halaman Utama** 

### **6.1 Landing Page (Halaman Utama) - [Fase 1]** 

- **Hero Section:** Banner bertema luar angkasa, Nama Event + Tagline, Tanggal, Live Countdown Timer menuju pendaftaran dibuka, serta Tombol CTA "Daftar Sekarang" menonjol. 

- **Live Score Ticker Top Bar / Floating Banner) Fase 2** Banner berjalan menampilkan skor terkini dari pertandingan yang sedang berlangsung. 

- **Overview 6 Kategori Lomba:** Grid kartu 6 lomba. Kartu Cakrawala Champions Challenge CCC dirancang khusus sebagai Kategori Unggulan (paling besar/berkilau). 

- **Urgency Indicator Kuota Stats):** Widget "X Tim Telah Terdaftar - Sisa Kuota Y Slot" untuk memicu aksi mendaftar FOMO. 

- **Sponsor & Footer:** Section logo Cakrawala University, mitra media, dan navigasi cepat. 

### **6.2 Pendaftaran Multi-Step & Cek Status Mandiri - [Fase 1]** 

- **Step Indicator:** Visual bar 1 dari 4 langkah Pilih Kategori → Data Tim → Upload Berkas → Ringkasan & Submit). 

- **In-Form Guidance:** Berikan contoh format pengisian kolom dan spesifikasi file Maks 2MB, format PDF/JPG. 

- **Cek Status UI** 

   - Input Nomor Registrasi. 

   - Tampilan Status Badge: Menunggu Verifikasi Muted, Perlu Perbaikan Kuning + Button Upload Ulang), Terverifikasi Hijau + Info Technical Meeting), Ditolak Merah + Catatan Alasan). 

### **6.3 Halaman Hasil Pertandingan & Bagan (/hasil) - [Fase 2]** 

- **Tab Navigation:** Switcher kategori CCC, Mobile Legends, Basket, Futsal, Modern Dance, Solo Vokal). 

- **Match Card States:** 

   - Belum Dimulai: Menampilkan Jam, Lapangan, Nama Tim, & Badge Gray BELUM DIMULAI. 

   - Sedang Berlangsung: Badge Red/Orange Flashing LIVE, Skor Berjalan, Tombol "Nonton Live". 

   - Selesai: Skor Akhir, Tim Pemenang di-highlight dengan garis penghubung ke babak berikutnya. 

   - W.O. / Ditunda: Indicator khusus. 

- **Podium Juara:** Tampilan interaktif podium 1, 2, dan 3 yang aktif otomatis saat babak final berakhir. 

### **7. Referensi Visual Component: Bagan Match & CMS Input** 

### **A. Struktur Bagan Pertandingan (Mobile Legends / E-Sports)** 

PEREMPAT FINAL QF → SEMIFINAL SF → FINAL 

- QF1 09.00 Lap A Tim A 2 vs Tim B 0 → Melaju ke SF1 

- QF2 10.30 Lap A Tim C 2 vs Tim D 1 → Melaju ke SF1 

- ● SF1 H1 09.00 Tim A vs Tim C → Melaju ke FINAL 

- QF3 13.00 Lap B Tim E 2 vs Tim F 0 → Melaju ke SF2 

- QF4 14.30 Lap B Tim G vs Tim H Belum Dimulai) → Melaju ke SF2 

- SF2 H1 10.30 Tim E vs Pemenang QF4 → Melaju ke FINAL 

- FINAL H2 18.00 Pemenang SF1 vs Pemenang SF2 → JUARA 1 CAKFEST 2027 



<!-- Start of picture text -->
= LIVESCORE<br>yey®) owe —tomen sonar QUIET cent anste suata Faq wonrax +<br>cAKFEST<br>Cut (GETTER) wacom rs vote | ree rine | ova2 Teen e<br>Paneer ADWAL HARE INT<br>2 SF 1-0<br>«| ial, Celestial Dyranos Re Xo 8)<br>QF3 ws 2 Fd Seekers 1800018 Wy ave<br>cacti adie 1<br>——— ws ®<br>Geremmmmmetyf] star tars<br>on] Bu feo —_—<br><!-- End of picture text -->

### **B. Layout Panel CMS Input Skor (Untuk Operator Lapangan)** 

Formulir CMS Input Skor: 

1. Pilih Kategori Dropdown) 

2. Pilih Pertandingan Dropdown Match dari Bagan) 

3. Input Skor Tim Kiri vs Tim Kanan 

4. Status Khusus Radio: Normal / W.O. / Ditunda) 

5. Tombol Konfirmasi & Simpan 

6. Log Riwayat Input Terakhir Audit trail) 

### **8. Deliverables & Checklist Tim UI/UX** 

- Design System & Style Guide Palet warna, tipografi, ikon retro, UI kit) 

- Teaser Page 1Page Desktop & Mobile) 

- Phase 1 Figma Handoff Landing Page, Kategori, Multi-step Form, Cek Status, FAQ, Kontak, Schedule, Rulebook, CMS Verifikasi) 

- Phase 2 Figma Handoff Bagan Turnamen Interaktif, Klasemen Fase Grup, CMS Input Skor, Podium Juara, Galeri, Arsip Juara) 

- State Variations Hover, Active, Disabled, Error, Empty State, Custom 404 Page) 

### **9. Penutupan** 

PRD ini menjadi acuan awal bagi tim UI/UX dalam merancang tampilan dan pengalaman pengguna website CAKFEST 2027. Seluruh arahan yang tercantum di dalamnya dibuat untuk membantu menjaga konsistensi antara kebutuhan pengguna, kebutuhan panitia, dan proses pengembangan website. 

Seiring berjalannya proses desain dan pengembangan, PRD ini **masih dapat direvisi dan diperbarui** apabila terdapat perubahan kebutuhan, hasil diskusi antar-divisi, keputusan panitia, maupun temuan dari proses testing dan evaluasi. Setiap perubahan yang berdampak pada alur pengguna, fitur, struktur halaman, atau prioritas kebutuhan sebaiknya dikomunikasikan terlebih dahulu agar dapat disesuaikan bersama dan tidak menimbulkan perbedaan pemahaman antar-tim. 

##### **Status dokumen: Draft / Living Document** 

Dokumen ini bersifat dinamis dan dapat mengalami revisi hingga kebutuhan produk, desain, dan pengembangan CAKFEST 2027 dinyatakan final. 


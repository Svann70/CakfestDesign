/**
 * ==========================================================================
 * CAKFEST 2027 - RETRO OS SINGLE-PAGE ARCHITECTURE (SPA)
 * Senior UI/UX Designer & Engineer
 * Optimal User Journey, Tab-based Views, Interactive Stepper & Bracket Sync
 * Strictly Zero Emojis
 * ==========================================================================
 */

const state = {
  activeTab: 'overview',
  activeWizardStep: 1,
  selectedCategory: 'CCC',
  selectedCategoryName: 'Cakrawala Champions (CCC)',
  selectedCategoryFee: 'Rp 350.000',
  bracketData: {
    MLBB: {
      qf1: { t1: 'Tim Alpha (Univ Cakrawala)', s1: 2, t2: 'Tim Beta (Politeknik ID)', s2: 0 },
      qf2: { t1: 'Nebula Cyber (STMIK)', s1: 2, t2: 'Void Hunters (Institut Tekno)', s2: 1 },
      qf3: { t1: 'Garuda Cyber (Univ B)', s1: 2, t2: 'Astralis ID (Univ C)', s2: 0 },
      qf4: { t1: 'Pixel Warriors (SMA 1)', s1: 1, t2: 'Solar Knights (SMK 4)', s2: 1 },
      sf1: { t1: 'Tim Alpha', s1: 2, t2: 'Nebula Cyber', s2: 1 },
      sf2: { t1: 'Garuda Cyber', s1: '-', t2: 'Pemenang QF4', s2: '-' },
      final: { t1: 'Tim Alpha', s1: 0, t2: 'Pemenang SF2', s2: 0 },
      podium: { first: 'Tim Alpha (Univ Cakrawala)', second: 'Nebula Cyber', third: 'Garuda Cyber' }
    },
    CCC: {
      qf1: { t1: 'Astro Logic X', s1: 95, t2: 'Cyber Vanguard', s2: 78 },
      qf2: { t1: 'Vortex Engineers', s1: 89, t2: 'Quantum Code', s2: 92 },
      qf3: { t1: 'Cakrawala Prime', s1: 96, t2: 'Titan Logic', s2: 84 },
      qf4: { t1: 'Solar Phoenix', s1: 88, t2: 'Omega Syndicate', s2: 88 },
      sf1: { t1: 'Astro Logic X', s1: 94, t2: 'Quantum Code', s2: 91 },
      sf2: { t1: 'Cakrawala Prime', s1: '-', t2: 'Pemenang QF4', s2: '-' },
      final: { t1: 'Astro Logic X', s1: 0, t2: 'Pemenang SF2', s2: 0 },
      podium: { first: 'Astro Logic X', second: 'Quantum Code', third: 'Cakrawala Prime' }
    },
    BASKET: {
      qf1: { t1: 'Dunk Beasts', s1: 21, t2: 'Street Ballers', s2: 14 },
      qf2: { t1: 'Viper Squad', s1: 21, t2: 'Thunder Cyber', s2: 18 },
      qf3: { t1: 'Metro Cagers', s1: 22, t2: 'East Rim Kings', s2: 19 },
      qf4: { t1: 'Gravity Defiers', s1: 15, t2: 'Solar Dunks', s2: 15 },
      sf1: { t1: 'Dunk Beasts', s1: 21, t2: 'Viper Squad', s2: 19 },
      sf2: { t1: 'Metro Cagers', s1: '-', t2: 'Pemenang QF4', s2: '-' },
      final: { t1: 'Dunk Beasts', s1: 0, t2: 'Pemenang SF2', s2: 0 },
      podium: { first: 'Dunk Beasts', second: 'Viper Squad', third: 'Metro Cagers' }
    },
    FUTSAL: {
      qf1: { t1: 'Phoenix FC', s1: 4, t2: 'Titan United', s2: 2 },
      qf2: { t1: 'Cakrawala Kickers', s1: 3, t2: 'Velocity Futsal', s2: 1 },
      qf3: { t1: 'Black Panther FC', s1: 5, t2: 'Apex Striker', s2: 3 },
      qf4: { t1: 'Spartan Squad', s1: 2, t2: 'Cosmic FC', s2: 2 },
      sf1: { t1: 'Phoenix FC', s1: 4, t2: 'Cakrawala Kickers', s2: 3 },
      sf2: { t1: 'Black Panther FC', s1: '-', t2: 'Pemenang QF4', s2: '-' },
      final: { t1: 'Phoenix FC', s1: 0, t2: 'Pemenang SF2', s2: 0 },
      podium: { first: 'Phoenix FC', second: 'Cakrawala Kickers', third: 'Black Panther FC' }
    }
  },
  registeredDatabase: {
    'CKF-2027-VERIFIED': {
      code: 'CKF-2027-VERIFIED',
      team: 'Nebula Cyber Squad',
      category: 'Cakrawala Champions (CCC)',
      inst: 'Universitas Cakrawala',
      status: 'verified',
      statusLabel: 'TERVERIFIKASI RESMI',
      time: '27 Sept 2026, 21:30 WIB',
      title: 'Instruksi Tim Terverifikasi',
      body: 'Selamat! Berkas pendaftaran dan bukti pembayaran Anda dinyatakan sah. Technical Meeting akan dilaksanakan pada 15 Desember 2026 pukul 19.30 WIB via Google Meet.'
    },
    'CKF-2027-REVISION': {
      code: 'CKF-2027-REVISION',
      team: 'Solar Knights E-Sports',
      category: 'Mobile Legends: Bang Bang',
      inst: 'SMK Negeri 4 Teknologi',
      status: 'needs-revision',
      statusLabel: 'PERLU PERBAIKAN BERKAS',
      time: '26 Sept 2026, 14:10 WIB',
      title: 'Catatan Verifikator Panitia',
      body: 'File scan KTM anggota ke-4 dan bukti transfer terlihat buram / terpotong. Silakan upload ulang dokumen resolusi tinggi sebelum batas waktu 30 November 2026 agar tidak didiskualifikasi.'
    },
    'CKF-2027-PENDING': {
      code: 'CKF-2027-PENDING',
      team: 'Titan United Futsal',
      category: 'Futsal Championship',
      inst: 'Politeknik Negeri Cyber',
      status: 'pending',
      statusLabel: 'MENUNGGU VERIFIKASI',
      time: '27 Sept 2026, 18:45 WIB',
      title: 'Sedang Dalam Antrean Pemeriksaan',
      body: 'Formulir Anda telah berhasil masuk database panitia. Verifikator sedang memeriksa validitas KTM dan pembayaran. Estimasi proses verifikasi berkisar 1 x 24 jam.'
    },
    'CKF-2027-REJECTED': {
      code: 'CKF-2027-REJECTED',
      team: 'Shadow Rogues',
      category: '3x3 Basketball Battle',
      inst: 'Institut Terbuka Nusantara',
      status: 'rejected',
      statusLabel: 'PENDAFTARAN DITOLAK',
      time: '25 Sept 2026, 11:20 WIB',
      title: 'Alasan Penolakan Kuota',
      body: 'Mohon maaf, kuota peserta kategori 3x3 Basketball Battle telah penuh sebelum verifikasi pembayaran Anda disahkan. Dana pendaftaran dikembalikan 100% ke rekening asal.'
    }
  }
};

/* ==========================================================================
   PRIMARY TAB VIEW CONTROLLER (SPA)
   ========================================================================== */
function switchNavTab(tabName) {
  state.activeTab = tabName;

  // Toggle Tab Buttons
  const tabs = ['overview', 'portal', 'bracket', 'schedule'];
  tabs.forEach(t => {
    const btn = document.getElementById(`tabBtn-${t}`);
    const pane = document.getElementById(`view-${t}`);
    if (btn) btn.classList.toggle('active', t === tabName);
    if (pane) pane.classList.toggle('active', t === tabName);
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ==========================================================================
   COUNTDOWN TIMER (8-BIT MODULAR)
   ========================================================================== */
function initCountdown() {
  const targetDate = new Date('2026-11-30T23:59:59+07:00').getTime();

  function update() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      document.getElementById('countDays').textContent = '00';
      document.getElementById('countHours').textContent = '00';
      document.getElementById('countMins').textContent = '00';
      document.getElementById('countSecs').textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const pad = (num) => String(num).padStart(2, '0');

    const countDays = document.getElementById('countDays');
    if (countDays) countDays.textContent = pad(days);
    const countHours = document.getElementById('countHours');
    if (countHours) countHours.textContent = pad(hours);
    const countMins = document.getElementById('countMins');
    if (countMins) countMins.textContent = pad(minutes);
    const countSecs = document.getElementById('countSecs');
    if (countSecs) countSecs.textContent = pad(seconds);

    const heroTimer = document.getElementById('heroCountdownTimer');
    if (heroTimer) heroTimer.textContent = `${days} Hari ${hours} Jam ${minutes} Menit`;
  }

  update();
  setInterval(update, 1000);
}

/* ==========================================================================
   TASKBAR DIGITAL CLOCK
   ========================================================================== */
function initClock() {
  function update() {
    const now = new Date();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const day = days[now.getDay()];
    const date = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');

    const clockElem = document.getElementById('taskbarClock');
    if (clockElem) {
      clockElem.textContent = `${day} ${date}.${month} ${hours}:${mins}`;
    }
  }
  update();
  setInterval(update, 10000);
}

/* ==========================================================================
   WIZARD REGISTRATION FLOW (TAB 2)
   ========================================================================== */
function startRegistrationWithCategory(catKey) {
  const catNames = {
    CCC: { name: 'Cakrawala Champions (CCC)', fee: 'Rp 350.000' },
    MLBB: { name: 'Mobile Legends: Bang Bang', fee: 'Rp 150.000' },
    BASKET: { name: '3x3 Basketball Battle', fee: 'Rp 200.000' },
    FUTSAL: { name: 'Futsal Championship', fee: 'Rp 250.000' },
    TARI: { name: 'Tari Tradisional Kreasi', fee: 'Rp 150.000' },
    BAND: { name: 'Battle of the Bands', fee: 'Rp 150.000' }
  };

  const info = catNames[catKey] || catNames.CCC;
  state.selectedCategory = catKey;
  state.selectedCategoryName = info.name;
  state.selectedCategoryFee = info.fee;

  // Smooth scroll to registration section
  const regSection = document.getElementById('pendaftaran');
  if (regSection) {
    regSection.scrollIntoView({ behavior: 'smooth' });
  }

  // Highlight selected category button in wizard step 1
  const items = document.querySelectorAll('.cat-tile-btn');
  items.forEach(item => {
    const text = item.innerText.toUpperCase();
    if (text.includes(catKey) || text.includes(info.name.toUpperCase())) {
      item.classList.add('selected');
    } else {
      item.classList.remove('selected');
    }
  });

  // Advance to Step 2
  goToWizardStep(2);
  showToastNotification('KATEGORI DIPILIH', `${info.name} (${info.fee})`);
}

function pickCategoryInWizard(element, key, name, fee) {
  document.querySelectorAll('.cat-tile-btn').forEach(el => el.classList.remove('selected'));
  if (element) element.classList.add('selected');
  state.selectedCategory = key;
  state.selectedCategoryName = name;
  state.selectedCategoryFee = fee;
  showToastNotification('KATEGORI DIPILIH', `${name} (${fee})`);
}

function goToWizardStep(stepNum) {
  state.activeWizardStep = stepNum;

  for (let i = 1; i <= 3; i++) {
    const pane = document.getElementById(`wizardStep${i}`);
    const pill = document.getElementById(`wizardHeader${i}`);
    if (pane) pane.classList.toggle('active', i === stepNum);
    if (pill) {
      pill.classList.remove('active', 'completed');
      if (i === stepNum) {
        pill.classList.add('active');
      } else if (i < stepNum) {
        pill.classList.add('completed');
      }
    }
  }

  // Update summary in step 3
  if (stepNum === 3) {
    document.getElementById('summaryCatLabel').textContent = state.selectedCategoryName;
    document.getElementById('summaryFeeLabel').textContent = state.selectedCategoryFee;
  }
}

function submitRegistrationWizard() {
  const teamEl = document.getElementById('regTeamName') || document.getElementById('formTeamName');
  const instEl = document.getElementById('regInstitution') || document.getElementById('formInstitution');
  const team = teamEl ? teamEl.value.trim() || 'Tim Cakrawala United' : 'Tim Cakrawala United';
  const inst = instEl ? instEl.value.trim() || 'Universitas Cakrawala' : 'Universitas Cakrawala';
  
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  const token = `CKF-2027-${state.selectedCategory}-${randomNum}`;

  // Store in database
  state.registeredDatabase[token] = {
    code: token,
    team: team,
    category: state.selectedCategoryName,
    inst: inst,
    fee: state.selectedCategoryFee,
    status: 'verified',
    statusLabel: 'TERVERIFIKASI',
    time: '27 Sept 2026, 22:15 WIB',
    title: 'Berkas Lolos Verifikasi Resmi',
    body: 'Selamat! Berkas dan bukti transfer Anda telah disahkan oleh panitia. Tim Anda resmi terdaftar sebagai peserta CAKFEST 2027.'
  };

  // Populate into tracker and render
  const trackerInput = document.getElementById('trackerInput');
  if (trackerInput) trackerInput.value = token;
  renderStatusResult(state.registeredDatabase[token]);

  playRetroTone(523.25, 'triangle', 0.15);
  showToastNotification('PENDAFTARAN BERHASIL', `Nomor Registrasi: ${token}`);
}

const submitRegistrationFromWizard = submitRegistrationWizard;

/* ==========================================================================
   STATUS TRACKER (PRD SECTION 6.2 - 4 STATES)
   ========================================================================== */
function simulateTokenCheck(presetCode) {
  const trackerInput = document.getElementById('trackerInput');
  if (trackerInput) trackerInput.value = presetCode;
  checkRegistrationStatus();
}

const simulatePreset = simulateTokenCheck;

function checkRegistrationStatus() {
  const trackerInput = document.getElementById('trackerInput');
  const code = trackerInput ? trackerInput.value.trim().toUpperCase() : '';
  const data = state.registeredDatabase[code];

  if (!data) {
    const fallback = {
      code: code || 'CKF-2027-UNKNOWN',
      team: 'Tim Tidak Ditemukan',
      category: '-',
      inst: '-',
      fee: '-',
      status: 'rejected',
      statusLabel: 'TIDAK VALID',
      time: '-',
      title: 'Nomor Registrasi Tidak Ditemukan',
      body: 'Periksa kembali ejaan nomor pendaftaran Anda. Hubungi Hotline WhatsApp panitia bila kendala berlanjut.'
    };
    renderStatusResult(fallback);
    return;
  }

  renderStatusResult(data);
}

const executeStatusSearch = checkRegistrationStatus;

function renderStatusResult(data) {
  // New Landing Page Elements
  const slip = document.getElementById('trackerResultSlip');
  if (slip) slip.classList.add('active');

  const slipToken = document.getElementById('slipTokenNum');
  if (slipToken) slipToken.textContent = data.code;

  const slipBadge = document.getElementById('slipBadge');
  if (slipBadge) {
    slipBadge.className = `slip-status-badge ${data.status}`;
    slipBadge.textContent = data.statusLabel;
  }

  const slipTeam = document.getElementById('slipTeamName');
  if (slipTeam) slipTeam.textContent = data.team;

  const slipCat = document.getElementById('slipCategory');
  if (slipCat) slipCat.textContent = data.category;

  const slipInst = document.getElementById('slipInstitution');
  if (slipInst) slipInst.textContent = data.inst;

  const slipFee = document.getElementById('slipFee');
  if (slipFee) slipFee.textContent = data.fee || (data.status === 'verified' ? 'Lunas' : 'Belum Terverifikasi');

  const slipNoticeTitle = document.getElementById('slipNoticeTitle');
  if (slipNoticeTitle) slipNoticeTitle.textContent = data.title;

  const slipNoticeBody = document.getElementById('slipNoticeBody');
  if (slipNoticeBody) slipNoticeBody.textContent = data.body;

  // Legacy container compatibility
  const container = document.getElementById('statusReceiptContainer');
  if (container) {
    container.classList.add('active');
    const resToken = document.getElementById('resTokenCode');
    if (resToken) resToken.textContent = data.code;
    const resTeam = document.getElementById('resTeamName');
    if (resTeam) resTeam.textContent = data.team;
    const resCat = document.getElementById('resCategory');
    if (resCat) resCat.textContent = data.category;
    const resInst = document.getElementById('resInst');
    if (resInst) resInst.textContent = data.inst;
    const resTime = document.getElementById('resTime');
    if (resTime) resTime.textContent = data.time;
    const resBadge = document.getElementById('resStatusBadge');
    if (resBadge) {
      resBadge.className = `receipt-badge-pill ${data.status}`;
      resBadge.textContent = data.statusLabel;
    }
  }

  playRetroTone(440, 'sine', 0.08);
}

/* ==========================================================================
   BAGAN TURNAMEN & LIVE BRACKET (TAB 3)
   ========================================================================== */
function switchBracketDiscipline(caborKey, btn) {
  // Update active pill button
  document.querySelectorAll('.btn-discipline-pill').forEach(b => b.classList.remove('active'));
  const targetBtn = btn || document.getElementById(`discBtn-${caborKey}`);
  if (targetBtn) targetBtn.classList.add('active');

  const data = state.bracketData[caborKey];
  if (!data) return;

  function updateMatchBlock(qfId, d) {
    const t1El = document.querySelector(`#${qfId}-t1 span`);
    const s1El = document.getElementById(`score-${qfId}-t1`);
    const t2El = document.querySelector(`#${qfId}-t2 span`);
    const s2El = document.getElementById(`score-${qfId}-t2`);
    const row1 = document.getElementById(`${qfId}-t1`);
    const row2 = document.getElementById(`${qfId}-t2`);

    if (t1El) t1El.textContent = d.t1;
    if (s1El) s1El.textContent = d.s1;
    if (t2El) t2El.textContent = d.t2;
    if (s2El) s2El.textContent = d.s2;

    if (row1 && row2) {
      row1.classList.remove('winner');
      row2.classList.remove('winner');
      const num1 = Number(d.s1);
      const num2 = Number(d.s2);
      if (!isNaN(num1) && !isNaN(num2)) {
        if (num1 > num2) row1.classList.add('winner');
        else if (num2 > num1) row2.classList.add('winner');
      }
    }
  }

  // Update Quarter Finals
  updateMatchBlock('qf1', data.qf1);
  updateMatchBlock('qf2', data.qf2);
  updateMatchBlock('qf3', data.qf3);
  updateMatchBlock('qf4', data.qf4);

  // Update Semifinals
  updateMatchBlock('sf1', data.sf1);
  updateMatchBlock('sf2', data.sf2);
  const sf2Label = document.getElementById('sf2WinnerQf4Label');
  if (sf2Label) sf2Label.textContent = data.sf2.t2;

  // Update Grand Final
  updateMatchBlock('final', data.final);
  const finalLabel = document.getElementById('finalWinnerSf2Label');
  if (finalLabel) finalLabel.textContent = data.final.t2;

  // Update Podium Standings
  const p1 = document.getElementById('podiumTeam1');
  const p2 = document.getElementById('podiumTeam2');
  const p3 = document.getElementById('podiumTeam3');
  if (p1) p1.textContent = data.podium.first;
  if (p2) p2.textContent = data.podium.second;
  if (p3) p3.textContent = data.podium.third;

  playRetroTone(587.33, 'triangle', 0.1);
  showToastNotification('BAGAN DIPERBARUI', `Menampilkan cabang kompetisi: ${caborKey}`);
}

/* ==========================================================================
   CMS OPERATOR INPUT SKOR (MODAL)
   ========================================================================== */
function onCmsDisciplineChange() {
  onCmsMatchSelectChange();
}

function onCmsMatchSelectChange() {
  const matchId = document.getElementById('cmsMatchSelect').value;
  const matchMap = {
    qf4: { t1: 'Pixel Warriors', s1: 2, t2: 'Solar Knights', s2: 1 },
    sf2: { t1: 'Garuda Cyber', s1: 2, t2: 'Pixel Warriors', s2: 0 },
    final: { t1: 'Tim Alpha', s1: 3, t2: 'Garuda Cyber', s2: 1 },
    qf1: { t1: 'Tim Alpha', s1: 2, t2: 'Tim Beta', s2: 0 },
    qf2: { t1: 'Nebula Cyber', s1: 2, t2: 'Void Hunters', s2: 1 },
    qf3: { t1: 'Garuda Cyber', s1: 2, t2: 'Astralis ID', s2: 0 }
  };

  const item = matchMap[matchId] || matchMap.qf4;
  document.getElementById('cmsTeam1Label').textContent = item.t1;
  document.getElementById('cmsTeam2Label').textContent = item.t2;
  document.getElementById('cmsScore1').value = item.s1;
  document.getElementById('cmsScore2').value = item.s2;
}

function submitCmsScore() {
  const cat = document.getElementById('cmsCatSelect').value;
  const matchId = document.getElementById('cmsMatchSelect').value;
  const score1 = document.getElementById('cmsScore1').value;
  const score2 = document.getElementById('cmsScore2').value;
  const team1 = document.getElementById('cmsTeam1Label').textContent;
  const team2 = document.getElementById('cmsTeam2Label').textContent;

  // Update Bracket
  if (matchId === 'qf4') {
    document.getElementById('score-qf4-t1').textContent = score1;
    document.getElementById('score-qf4-t2').textContent = score2;
    const winner = parseInt(score1) > parseInt(score2) ? team1 : team2;
    document.getElementById('sf2WinnerQf4Label').textContent = `${winner} (Lolos)`;
    document.getElementById('card-qf4').classList.remove('live');
    const badge = document.querySelector('#card-qf4 .node-status-pill');
    badge.className = 'node-status-pill';
    badge.textContent = 'SELESAI';
  } else if (matchId === 'sf2') {
    document.getElementById('score-sf2-t1').textContent = score1;
    document.getElementById('score-sf2-t2').textContent = score2;
    const winner = parseInt(score1) > parseInt(score2) ? team1 : team2;
    document.getElementById('finalWinnerSf2Label').textContent = `${winner} (Lolos)`;
  } else if (matchId === 'final') {
    document.getElementById('score-final-t1').textContent = score1;
    document.getElementById('score-final-t2').textContent = score2;
    const champ = parseInt(score1) > parseInt(score2) ? team1 : team2;
    document.getElementById('podiumTeam1').textContent = `${champ} (CHAMPION)`;
  }

  // Append Audit Row
  const now = new Date();
  const timeStr = now.toTimeString().split(' ')[0];
  const auditRow = document.createElement('tr');
  auditRow.innerHTML = `
    <td>${timeStr}</td>
    <td>${cat}</td>
    <td>${matchId.toUpperCase()}</td>
    <td>${team1} (${score1}) - ${team2} (${score2})</td>
    <td><span style="color:var(--status-verified);">CONFIRMED</span></td>
  `;
  const tbody = document.getElementById('cmsAuditLogTbody');
  if (tbody) tbody.prepend(auditRow);

  showToastNotification('SKOR DISAHKAN', `Hasil ${team1} vs ${team2} berhasil di-publish ke live bracket!`);
  closeWindowModal('cmsModal');
}

/* ==========================================================================
   MODAL WINDOW CONTROLS
   ========================================================================== */
function openWindowModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.add('open');
}

function closeWindowModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('open');
}

function showToastNotification(title, desc) {
  const toast = document.getElementById('systemToast');
  if (!toast) return;
  const tTitle = document.getElementById('toastTitle');
  const tDesc = document.getElementById('toastDesc');
  if (tTitle) tTitle.textContent = title;
  if (tDesc) tDesc.textContent = desc;

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

function copyMeetLink() {
  navigator.clipboard.writeText('meet.google.com/ckf-2027-tmeet').then(() => {
    showToastNotification('LINK DISALIN', 'Link Google Meet Technical Meeting disalin ke clipboard.');
  });
}

function openBookletModal(category = '') {
  const catNames = {
    CCC: 'Cerdas Cermat (CCC Decathlon)',
    MLBB: 'Mobile Legends: Bang Bang',
    BASKET: '3x3 Basketball Battle',
    FUTSAL: 'Futsal Championship',
    TARI: 'Modern Dance & Tari Kreasi',
    BAND: 'Solo Vokal & Band Akustik'
  };
  const cName = catNames[category] || category || 'Kompetisi Cakfest Vol.2';
  
  if (typeof playRetroTone === 'function') {
    playRetroTone(523.25, 'triangle', 0.12);
  }
  
  const titleEl = document.getElementById('rulebookModalTitle');
  if (titleEl) {
    titleEl.textContent = category 
      ? `BUKU PANDUAN TEKNIS & BOOKLET // ${category} - ${cName.toUpperCase()}`
      : 'BUKU PANDUAN TEKNIS RESMI & BOOKLET // CAKFEST 2027';
  }
  
  const subtitleEl = document.getElementById('rulebookModalSubtitle');
  if (subtitleEl) {
    subtitleEl.textContent = category
      ? `Buku Pedoman Teknis & Regulasi Resmi: ${cName}`
      : 'Buku Pedoman Teknis & Regulasi Peserta v2.4';
  }
  
  const descEl = document.getElementById('rulebookModalDesc');
  if (descEl) {
    descEl.textContent = category
      ? `Berisi seluruh regulasi pertandingan cabang ${cName}, batas toleransi keterlambatan, ketentuan KTM/Kartu Pelajar, sistem skor, bagan turnamen, dan rundown teknis.`
      : 'Berisi seluruh regulasi pertandingan 6 cabor, ketentuan KTM, tata tertib panggung, sistem poin decathlon CCC, jadwal technical meeting, dan format walk-out.';
  }

  const dlBtn = document.getElementById('modalDownloadPdfBtn');
  if (dlBtn) {
    dlBtn.setAttribute('data-category', category);
  }

  openWindowModal('rulebookModal');
}

function downloadPdf() {
  const dlBtn = document.getElementById('modalDownloadPdfBtn');
  const category = dlBtn ? dlBtn.getAttribute('data-category') : '';
  const catNames = {
    CCC: 'CCC Decathlon',
    MLBB: 'Mobile Legends: Bang Bang',
    BASKET: '3x3 Basketball Battle',
    FUTSAL: 'Futsal Championship',
    TARI: 'Modern Dance & Tari Kreasi',
    BAND: 'Solo Vokal & Band Akustik'
  };
  const label = catNames[category] ? `Cabang ${catNames[category]}` : 'CAKFEST 2027';
  
  if (typeof playRetroTone === 'function') {
    playRetroTone(587.33, 'triangle', 0.12);
  }
  showToastNotification('UNDUH BERKAS', `Booklet Panduan Teknis & Regulasi ${label} (PDF 1.8 MB) berhasil diunduh.`);
  setTimeout(() => {
    closeWindowModal('rulebookModal');
  }, 700);
}

/* ==========================================================================
   INTERACTIVE RETRO CD PLAYER CONTROLLER (styleReferensi.png Tribute)
   ========================================================================== */
const cdState = {
  isPlaying: true,
  currentTrackIndex: 0,
  tracks: [
    { title: 'Cosmic Anthem (Retro Synth)', badge: 'TRACK 01', duration: 210, artist: "Cakfest '27 Official Soundtrack" },
    { title: 'Cyber Odyssey (140 BPM Breakbeat)', badge: 'TRACK 02', duration: 195, artist: "Left Hand feat. Cakrawala Crew" },
    { title: 'Midnight Arcade (Lo-Fi Wave)', badge: 'TRACK 03', duration: 240, artist: "Cakfest Chill Stage BGM" },
    { title: 'Arena of Champions (Eurobeat Edit)', badge: 'TRACK 04', duration: 180, artist: "Main Stage Tournament Anthem" }
  ],
  currentTime: 102,
  timer: null
};

// Web Audio API Retro Sound FX Generator
function playRetroTone(freq = 440, type = 'sine', duration = 0.1) {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch (e) {
    // Ignore audio autoplay policies
  }
}

function toggleCdPlay() {
  cdState.isPlaying = !cdState.isPlaying;
  const disc = document.getElementById('cdVinylDisc');
  const icon = document.getElementById('cdPlayIcon');
  const winampPlayer = document.getElementById('winampPlayer');
  const winampIndicator = document.getElementById('winampPlayIndicator');
  
  if (cdState.isPlaying) {
    if (disc) disc.classList.add('playing');
    if (winampPlayer) winampPlayer.classList.add('playing');
    if (winampIndicator) winampIndicator.style.opacity = '1';
    if (icon) icon.innerHTML = '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>';
    playRetroTone(587.33, 'triangle', 0.15); // D5
    startCdTimer();
  } else {
    if (disc) disc.classList.remove('playing');
    if (winampPlayer) winampPlayer.classList.remove('playing');
    if (winampIndicator) winampIndicator.style.opacity = '0.3';
    if (icon) icon.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"/>';
    playRetroTone(392.00, 'triangle', 0.12); // G4
    stopCdTimer();
  }
}

function stopWinamp() {
  cdState.isPlaying = false;
  cdState.currentTime = 0;
  stopCdTimer();
  const disc = document.getElementById('cdVinylDisc');
  const winampPlayer = document.getElementById('winampPlayer');
  const winampIndicator = document.getElementById('winampPlayIndicator');
  const icon = document.getElementById('cdPlayIcon');
  
  if (disc) disc.classList.remove('playing');
  if (winampPlayer) winampPlayer.classList.remove('playing');
  if (winampIndicator) winampIndicator.style.opacity = '0';
  if (icon) icon.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"/>';
  
  updateCdDisplay();
  playRetroTone(293.66, 'sawtooth', 0.15); // D4
}

function scrubWinamp(event) {
  const track = event.currentTarget;
  const rect = track.getBoundingClientRect();
  const clickX = event.clientX - rect.left;
  const pct = Math.max(0, Math.min(1, clickX / rect.width));
  const current = cdState.tracks[cdState.currentTrackIndex];
  cdState.currentTime = Math.floor(pct * current.duration);
  updateCdDisplay();
  playRetroTone(523.25, 'sine', 0.08);
}

function toggleCdTrack(direction) {
  cdState.currentTrackIndex = (cdState.currentTrackIndex + direction + cdState.tracks.length) % cdState.tracks.length;
  cdState.currentTime = 0;
  updateCdDisplay();
  playRetroTone(659.25, 'sine', 0.1); // E5
}

function updateCdDisplay() {
  const current = cdState.tracks[cdState.currentTrackIndex];
  const nameEl = document.getElementById('cdTrackName');
  const badgeEl = document.getElementById('cdTrackBadge');
  const timeEl = document.getElementById('cdTime');
  const fillEl = document.getElementById('cdProgressFill');
  
  if (nameEl) nameEl.textContent = current.title;
  if (badgeEl) badgeEl.textContent = current.badge;
  
  const curM = String(Math.floor(cdState.currentTime / 60)).padStart(2, '0');
  const curS = String(cdState.currentTime % 60).padStart(2, '0');
  const totM = String(Math.floor(current.duration / 60)).padStart(2, '0');
  const totS = String(current.duration % 60).padStart(2, '0');
  
  if (timeEl) timeEl.textContent = `${curM}:${curS} / ${totM}:${totS}`;
  if (fillEl) fillEl.style.width = `${(cdState.currentTime / current.duration) * 100}%`;

  const winampTimer = document.getElementById('winampTimer');
  if (winampTimer) winampTimer.textContent = `${curM}:${curS}`;

  const pct = (cdState.currentTime / current.duration) * 100;
  const winampSeekProg = document.getElementById('winampSeekProgress');
  const winampSeekThumb = document.getElementById('winampSeekThumb');
  if (winampSeekProg) winampSeekProg.style.width = `${pct}%`;
  if (winampSeekThumb) winampSeekThumb.style.left = `${pct}%`;

  const trackTitleEl = document.getElementById('winampTrackTitle');
  if (trackTitleEl) trackTitleEl.textContent = `CAKFEST 2027 -- ${current.title.toUpperCase()} (${current.badge}) -- `;
}

function startCdTimer() {
  stopCdTimer();
  cdState.timer = setInterval(() => {
    if (!cdState.isPlaying) return;
    const current = cdState.tracks[cdState.currentTrackIndex];
    cdState.currentTime++;
    if (cdState.currentTime > current.duration) {
      toggleCdTrack(1);
    } else {
      updateCdDisplay();
    }
  }, 1000);
}

function stopCdTimer() {
  if (cdState.timer) clearInterval(cdState.timer);
}

/* ==========================================================================
   SITTING MASCOT VOICE & INTERACTION (styleReferensi.png Mascot)
   ========================================================================== */
const mascotQuotes = [
  "Yo! Pendaftaran Batch 1 sisa 16 slot lagi nih!",
  "CCC (Cosplay Championship) tahun ini pialanya gede banget!",
  "Jangan lupa unduh Rulebook resmi sebelum tanding ya!",
  "MLBB babak final bakal live di Main Stage lho!",
  "Gas daftar sekarang bareng tim kampus kamu!",
  "Soundtrack Cakfest enak kan? Putar terus di CD Player!",
  "Universitas Cakrawala menyambut para juara 2027!"
];
let mascotQuoteIdx = 0;

function triggerMascotVoice() {
  mascotQuoteIdx = (mascotQuoteIdx + 1) % mascotQuotes.length;
  const bubble = document.getElementById('mascotBubble');
  const textEl = document.getElementById('mascotSpeechText');
  const imgEl = document.getElementById('mascotImg');
  
  if (textEl) textEl.textContent = mascotQuotes[mascotQuoteIdx];
  if (bubble) {
    bubble.style.animation = 'none';
    void bubble.offsetWidth;
    bubble.style.animation = 'bubbleFloat 3s ease-in-out infinite';
  }
  if (imgEl) {
    imgEl.style.transform = 'scale(1.08) rotate(-2deg)';
    setTimeout(() => {
      imgEl.style.transform = '';
    }, 250);
  }
  
  // Cute 8-bit blip sound
  playRetroTone(880, 'sine', 0.08);
}

/* ==========================================================================
   CRT DISPLAY MODE TOGGLE (Nostalgic Monitor Scanlines)
   ========================================================================== */
function toggleCrtMode() {
  const isCrt = document.body.classList.toggle('crt-active');
  const btn = document.getElementById('crtToggleBtn');
  const label = document.getElementById('crtStatusLabel');
  
  if (btn) btn.classList.toggle('active', isCrt);
  if (label) label.textContent = isCrt ? 'CRT: ON' : 'CRT: OFF';
  
  playRetroTone(isCrt ? 523.25 : 349.23, 'sawtooth', 0.12);
  showToastNotification('TAMPILAN MONITOR', isCrt ? 'Efek CRT Monitor Scanlines Aktif.' : 'Tampilan kembali ke Mode Crisp.');
}

/* ==========================================================================
   SMOOTH SCROLL SPY FOR NAVBAR ACTIVE LINKS
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('.landing-section');
  const navLinks = document.querySelectorAll('.nav-item-link');
  if (!sections.length || !navLinks.length) return;

  const onScroll = () => {
    const scrollPos = window.scrollY + 140;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
}

// Global initialization
document.addEventListener('DOMContentLoaded', () => {
  initCountdown();
  initClock();
  startCdTimer();
  initScrollSpy();
  initParallaxBackground();
  initTimelineCalendar();
  initBackToTop();

  // Parse category parameter if directed from landing page (e.g. portal.html?cat=MLBB)
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const catParam = urlParams.get('cat');
    if (catParam) {
      setTimeout(() => {
        startRegistrationWithCategory(catParam.toUpperCase());
      }, 200);
    }
  } catch (err) {
    // Ignore parameter error
  }
});



/* ==========================================================================
   CANVA GUIDELINES CAKFEST VOL.2 INTERACTIVE EXTENSIONS
   Registration Modal & Interactive FAQ
   ========================================================================== */
function openRegisterModal(category = '') {
  const catNames = {
    CCC: 'Cerdas Cermat (CCC Decathlon)',
    MLBB: 'Mobile Legends: Bang Bang',
    BASKET: '3x3 Basketball Battle',
    FUTSAL: 'Futsal Championship',
    TARI: 'Tari Tradisional Kreasi',
    BAND: 'Battle of the Bands'
  };
  const cName = catNames[category] || category || 'Kompetisi Cakfest Vol.2';
  playRetroTone(587.33, 'triangle', 0.15);
  showToastNotification('MEMBUKA PENDAFTARAN', `Mengarahkan ke Hotline WhatsApp Pendaftaran: ${cName}`);
  const msg = encodeURIComponent(`Halo Panitia Cakrawala Festival Vol.2! Saya ingin mendaftar untuk kompetisi: ${cName}. Mohon panduan registrasi dan konfirmasi slot.`);
  window.open(`https://wa.me/62815347557?text=${msg}`, '_blank');
}

function submitRegistration(event) {
  event.preventDefault();
  const cat = document.getElementById('regCategory')?.value || 'CCC';
  const team = document.getElementById('regTeamName')?.value || 'Tim Peserta';
  
  playRetroTone(659.25, 'sine', 0.2);
  showToastNotification('PENDAFTARAN BERHASIL!', `Data pendaftaran "${team}" untuk cabang ${cat} telah diterima. Verifikator akan menghubungi via WhatsApp.`);
  closeWindowModal('registerModal');
  event.target.reset();
}

function toggleFaq(el) {
  const item = el.closest('.faq-accordion-item');
  if (item) {
    item.classList.toggle('active');
    playRetroTone(item.classList.contains('active') ? 440 : 330, 'sine', 0.08);
  }
}

/* ==========================================================================
   DYNAMIC PARALLAX BACKGROUND CONTROLLER (Revisi Point 2)
   Responds smoothly to page scrolling with subtle layered depth
   ========================================================================== */
function initParallaxBackground() {
  const bgImg = document.getElementById('parallaxImg');
  const bgGlow = document.getElementById('parallaxGlow');
  const bgGrid = document.getElementById('parallaxGrid');
  
  if (!bgImg && !bgGlow && !bgGrid) return;

  let ticking = false;

  function updateParallax() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
    
    // Smooth layered parallax depth for full-length extended background
    const imgTranslateY = scrollY * 0.035;
    const glowTranslateY = scrollY * 0.08;
    const gridTranslateY = scrollY * 0.02;
    
    if (bgImg) bgImg.style.transform = `translate3d(0, ${imgTranslateY}px, 0)`;
    if (bgGlow) bgGlow.style.transform = `translate3d(0, ${glowTranslateY}px, 0)`;
    if (bgGrid) bgGrid.style.transform = `translate3d(0, ${gridTranslateY}px, 0)`;

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }, { passive: true });

  // Initial trigger
  updateParallax();
}

/* ==========================================================================
   INTERACTIVE EVENT CALENDAR SYSTEM (Revisi Point 3)
   Displays event title and venue directly on the calendar dates
   ========================================================================== */
const cakfestCalendarData = {
  months: [
    { key: '2026-11', label: 'NOVEMBER 2026', year: 2026, monthIndex: 10, totalDays: 30 },
    { key: '2026-12', label: 'DESEMBER 2026', year: 2026, monthIndex: 11, totalDays: 31 },
    { key: '2027-01', label: 'JANUARI 2027 ★ PEAK', year: 2027, monthIndex: 0, totalDays: 31 }
  ],
  events: [
    {
      date: '2026-11-30',
      title: 'Closing Pendaftaran Batch 1',
      venue: 'Online Website Resmi',
      time: 'Senin, 30 Nov 2026 // Pukul 23.59 WIB',
      tag: 'REGISTRASI RESMI',
      type: 'warning',
      desc: 'Batas akhir submit formulir online dan pendaftaran tim untuk seluruh 6 cabang kompetisi Cakfest Vol.2. Pastikan seluruh berkas KTM delegasi telah lengkap.'
    },
    {
      date: '2026-12-01',
      title: 'Verifikasi Berkas Mulai',
      venue: 'Helpdesk Panitia',
      time: '01 - 10 Des 2026 // 09.00 - 16.00 WIB',
      tag: 'VERIFIKASI ADMINISTRASI',
      type: 'info',
      desc: 'Pemeriksaan keabsahan kartu identitas mahasiswa/pelajar seluruh tim peserta oleh sekretariat kompetisi.'
    },
    {
      date: '2026-12-10',
      title: 'Batas Akhir Validasi Dokumen',
      venue: 'Helpdesk Panitia Cakfest',
      time: 'Kamis, 10 Des 2026 // 17.00 WIB',
      tag: 'CLOSING VERIFIKASI',
      type: 'warning',
      desc: 'Penutupan masa perbaikan berkas administrasi dan finalisasi kontingen resmi siap tanding.'
    },
    {
      date: '2026-12-15',
      title: 'Technical Meeting & Live Drawing',
      venue: 'Auditorium & GMeet Live',
      time: 'Selasa, 15 Des 2026 // 19.30 WIB',
      tag: 'TECHNICAL MEETING',
      type: 'info',
      desc: 'Pertemuan teknis perwakilan seluruh kontingen, sosialisasi rulebook turnamen, dan live streaming undian bagan pertandingan.'
    },
    {
      date: '2027-01-08',
      title: 'Opening & Babak 1/4 Final',
      venue: 'GOR & Hall Utama',
      time: 'Jumat, 08 Jan 2027 // 08.00 - 18.00 WIB',
      tag: 'HARI KE-1: KICK OFF',
      type: 'match',
      desc: 'Upacara pembukaan Cakfest Vol.2, defile kontingen, dan kick-off pertandingan perempat final semua cabang kompetisi.'
    },
    {
      date: '2027-01-09',
      title: 'Semifinal & Dance Showcase',
      venue: 'Main Stage Kampus',
      time: 'Sabtu, 09 Jan 2027 // 09.00 - 19.30 WIB',
      tag: 'HARI KE-2: SEMIFINAL',
      type: 'match',
      desc: 'Pertandingan semifinal penentuan tiket partai puncak, panggung parade festival band, dan showcase tari kreasi.'
    },
    {
      date: '2027-01-10',
      title: 'Grand Final & Awarding Night',
      venue: 'Panggung Spektakuler Cakfest',
      time: 'Minggu, 10 Jan 2027 // 13.00 - 22.00 WIB',
      tag: 'PUNCAK FESTIVAL (PEAK)',
      type: 'peak',
      desc: 'Pertarungan grand final seluruh cabang lomba, penganugerahan Piala Bergilir Rektorat, konser bintang tamu spektakuler, dan malam penganugerahan juara.'
    }
  ]
};

let currentSelectedMonth = '2027-01';
let currentSelectedEvent = null;

function renderCalendar(monthKey) {
  const container = document.getElementById('calDaysGrid');
  const monthLabel = document.getElementById('calCurrentMonthLabel');
  if (!container) return;

  const monthObj = cakfestCalendarData.months.find(m => m.key === monthKey) || cakfestCalendarData.months[2];
  currentSelectedMonth = monthObj.key;

  if (monthLabel) {
    monthLabel.textContent = monthObj.label;
  }

  // Update month tabs active status
  document.querySelectorAll('.cal-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-month') === monthObj.key);
  });

  // Calculate first day of the month (Monday = 0, ..., Sunday = 6)
  const firstDay = new Date(monthObj.year, monthObj.monthIndex, 1);
  const startDayIndex = (firstDay.getDay() + 6) % 7;

  let html = '';

  // Leading empty cells
  for (let i = 0; i < startDayIndex; i++) {
    html += '<div class="cal-day-cell empty-cell" aria-hidden="true"></div>';
  }

  // Generate days of the month
  for (let day = 1; day <= monthObj.totalDays; day++) {
    const dayStr = String(day).padStart(2, '0');
    const dateStr = `${monthObj.key}-${dayStr}`;
    const ev = cakfestCalendarData.events.find(e => e.date === dateStr);

    if (ev) {
      const isPeak = ev.type === 'peak';
      const pillClass = isPeak ? 'pill-peak' : (ev.type === 'warning' ? 'pill-warning' : (ev.type === 'info' ? 'pill-info' : ''));
      const isSelected = (currentSelectedEvent && currentSelectedEvent.date === dateStr) || (!currentSelectedEvent && dateStr === '2027-01-10');

      html += `
        <div class="cal-day-cell is-event ${isPeak ? 'has-event-peak' : ''} ${isSelected ? 'active-selected' : ''}" 
             data-date="${dateStr}" 
             onclick="selectCalendarEvent('${dateStr}')" 
             tabindex="0" 
             role="button" 
             title="${ev.title} - ${ev.venue}">
          <div class="cal-day-num">${day}</div>
          <div class="cal-day-events">
            <div class="cal-event-pill ${pillClass}">
              <span class="cal-event-title-text">${ev.title}</span>
              <span class="cal-event-venue-text">📍 ${ev.venue}</span>
            </div>
          </div>
        </div>
      `;
    } else {
      html += `
        <div class="cal-day-cell">
          <div class="cal-day-num">${day}</div>
        </div>
      `;
    }
  }

  container.innerHTML = html;

  // Sync spotlight card with default or active event
  const monthEvents = cakfestCalendarData.events.filter(e => e.date.startsWith(monthObj.key));
  if (currentSelectedEvent && currentSelectedEvent.date.startsWith(monthObj.key)) {
    updateCalendarSpotlight(currentSelectedEvent);
  } else if (monthEvents.length > 0) {
    // Default to the last (peak or most notable) event of the month
    const defaultEv = monthEvents[monthEvents.length - 1];
    updateCalendarSpotlight(defaultEv);
  }
}

function selectCalendarMonth(monthKey) {
  playRetroTone(480, 'sine', 0.08);
  renderCalendar(monthKey);
}

function changeCalendarMonth(delta) {
  const currentIdx = cakfestCalendarData.months.findIndex(m => m.key === currentSelectedMonth);
  let nextIdx = currentIdx + delta;
  if (nextIdx < 0) nextIdx = 0;
  if (nextIdx >= cakfestCalendarData.months.length) nextIdx = cakfestCalendarData.months.length - 1;
  
  if (nextIdx !== currentIdx) {
    selectCalendarMonth(cakfestCalendarData.months[nextIdx].key);
  }
}

function selectCalendarEvent(dateStr) {
  const ev = cakfestCalendarData.events.find(e => e.date === dateStr);
  if (!ev) return;

  currentSelectedEvent = ev;
  playRetroTone(ev.type === 'peak' ? 660 : 520, 'triangle', 0.1);

  document.querySelectorAll('.cal-day-cell.is-event').forEach(cell => {
    cell.classList.toggle('active-selected', cell.getAttribute('data-date') === dateStr);
  });

  updateCalendarSpotlight(ev);
}

function updateCalendarSpotlight(ev) {
  const tagEl = document.getElementById('spotlightTag');
  const timeEl = document.getElementById('spotlightTime');
  const titleEl = document.getElementById('spotlightTitle');
  const descEl = document.getElementById('spotlightDesc');
  const venueEl = document.getElementById('spotlightVenue');

  if (tagEl) tagEl.textContent = ev.tag;
  if (timeEl) timeEl.textContent = ev.time;
  if (titleEl) titleEl.textContent = ev.title;
  if (descEl) descEl.textContent = ev.desc;
  if (venueEl) venueEl.textContent = ev.venue;
}

function toggleRundownTable() {
  const wrapper = document.getElementById('rundownTableWrapper');
  const btnText = document.getElementById('toggleTableText');
  if (!wrapper) return;

  const isHidden = wrapper.style.display === 'none' || !wrapper.style.display;
  wrapper.style.display = isHidden ? 'block' : 'none';
  if (btnText) {
    btnText.textContent = isHidden ? 'Tutup Format Tabel Rundown' : 'Tampilkan Format Tabel Rundown Lengkap';
  }
  playRetroTone(isHidden ? 587.33 : 392, 'sawtooth', 0.08);
}

function initTimelineCalendar() {
  // Initialize on peak month (Januari 2027)
  renderCalendar('2027-01');
}

/* ==========================================================================
   FLOATING BACK TO TOP CONTROLLER (Mobile Ergonomics)
   ========================================================================== */
function initBackToTop() {
  const btn = document.getElementById('backToTopBtn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
    if (scrollY > 380) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });
}


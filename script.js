document.addEventListener('DOMContentLoaded', () => {
  const ADMIN_WA = "6283138981041";
  const SERVER_IP = "play.starfallsmp.my.id:25718";

  // ==========================================================================
  // 1. FITUR TOGGLE TEMA (DARK / LIGHT MODE + VIDEO SWITCH)
  // ==========================================================================
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  const heroVideo = document.getElementById('heroVideo');
  const videoSource = document.getElementById('videoSource');

  const DARK_VIDEO = "background.mp4";
  const LIGHT_VIDEO = "background-light.mp4";

  function changeHeroVideo(videoPath) {
    if (heroVideo && videoSource) {
      if (!videoSource.src.endsWith(videoPath)) {
        videoSource.src = videoPath;
        heroVideo.load();
        heroVideo.play().catch(() => {});
      }
    }
  }

  function setTheme(theme) {
    if (theme === 'light') {
      document.body.classList.add('light-mode');
      if (themeIcon) themeIcon.textContent = '☀️';
      changeHeroVideo(LIGHT_VIDEO);
    } else {
      document.body.classList.remove('light-mode');
      if (themeIcon) themeIcon.textContent = '🌙';
      changeHeroVideo(DARK_VIDEO);
    }
    localStorage.setItem('preferred-theme', theme);
  }

  const savedTheme = localStorage.getItem('preferred-theme') || 'dark';
  setTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isLight = document.body.classList.contains('light-mode');
      setTheme(isLight ? 'dark' : 'light');
    });
  }

  // ==========================================================================
  // 2. CEK PLAYER ONLINE REALTIME
  // ==========================================================================
  const onlineCountElement = document.getElementById('onlinePlayerCount');

  async function fetchLivePlayerCount() {
    if (!onlineCountElement) return;
    try {
      const response = await fetch(`https://api.mcstatus.io/v2/status/java/${SERVER_IP}`);
      if (!response.ok) throw new Error("API Error");
      
      const data = await response.json();
      if (data.online) {
        onlineCountElement.textContent = `● ${data.players.online} / ${data.players.max} Pemain Online`;
        onlineCountElement.style.color = "#10b981";
      } else {
        onlineCountElement.textContent = "● Server Maintenance";
        onlineCountElement.style.color = "#ff2a6d";
      }
    } catch (err) {
      onlineCountElement.textContent = "● 0 Pemain Online";
      onlineCountElement.style.color = "#94a3b8";
    }
  }

  fetchLivePlayerCount();
  setInterval(fetchLivePlayerCount, 30000);

  // ==========================================================================
  // 3. COPY IP SERVER
  // ==========================================================================
  const copyBtns = document.querySelectorAll('.ip-copy-trigger');
  const toast = document.getElementById('toastNotice');

  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      navigator.clipboard.writeText("play.starfallsmp.my.id").then(() => {
        if (toast) {
          toast.textContent = "IP Server berhasil disalin!";
          toast.classList.add('show');
          setTimeout(() => toast.classList.remove('show'), 3000);
        }
      });
    });
  });

  // ==========================================================================
  // 4. MODAL STORE & CHECKOUT WHATSAPP
  // ==========================================================================
  let selectedRank = "";
  let selectedPrice = "";
  const modal = document.getElementById('storeModal');
  const modalClose = document.getElementById('modalCloseBtn');
  const buyBtns = document.querySelectorAll('.buy-trigger');
  const rankDisplay = document.getElementById('modalRankName');
  const priceDisplay = document.getElementById('modalRankPrice');
  const usernameInput = document.getElementById('mcUsername');
  const errorNotice = document.getElementById('usernameError');
  const orderForm = document.getElementById('orderForm');

  buyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      selectedRank = btn.getAttribute('data-rank');
      selectedPrice = btn.getAttribute('data-price');

      if (rankDisplay) rankDisplay.textContent = selectedRank;
      if (priceDisplay) priceDisplay.textContent = selectedPrice;
      if (usernameInput) usernameInput.value = '';
      if (errorNotice) errorNotice.style.display = 'none';
      if (modal) modal.classList.add('open');
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', () => modal.classList.remove('open'));
  }

  if (modal) {
    window.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('open');
    });
  }

  if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = usernameInput.value.trim();

      if (!name) {
        errorNotice.textContent = "Gagal, harap masukkan username!";
        errorNotice.style.display = 'block';
        return;
      }

      if (name.length < 3) {
        errorNotice.textContent = "Gagal, username minimal 3 karakter!";
        errorNotice.style.display = 'block';
        return;
      }

      errorNotice.style.display = 'none';

      const msg = `Halo Admin Starfall MC! 👋\n\nSaya ingin membeli Paket Rank:\n• *Rank*: ${selectedRank}\n• *Harga*: ${selectedPrice}\n• *Username IGN*: ${name}\n\nMohon informasi instruksi pembayarannya. Terima kasih!`;
      const waUrl = `https://wa.me/${ADMIN_WA}?text=${encodeURIComponent(msg)}`;

      window.open(waUrl, '_blank');
      modal.classList.remove('open');
    });
  }

  // ==========================================================================
  // 5. ACCORDION FAQ
  // ==========================================================================
  const faqHeaders = document.querySelectorAll('.faq-header');
  
  faqHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const faqBox = header.parentElement;
      faqBox.classList.toggle('active');
      const toggleIcon = header.querySelector('.faq-icon-toggle');
      if (toggleIcon) {
        toggleIcon.textContent = faqBox.classList.contains('active') ? '−' : '+';
      }
    });
  });
});
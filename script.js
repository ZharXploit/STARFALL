/**
 * STARFALL NETWORK - Official Interactive Script
 * Fixed for Theme Toggle, Dynamic Video Switcher & Safe Multi-Page Execution
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. THEME TOGGLE (DARK / LIGHT MODE & VIDEO SWITCHER)
     ========================================================================== */
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  const heroVideo = document.getElementById('heroVideo');
  const videoSource = document.getElementById('videoSource');

  // File video sesuai struktur project kamu
  const DARK_VIDEO = 'background.mp4';
  const LIGHT_VIDEO = 'background-light.mp4';

  // Helper function untuk mengganti sumber video dengan aman
  function switchVideoSource(targetVideoSrc) {
    if (heroVideo && videoSource) {
      // Cek apakah video yang aktif saat ini berbeda dari target
      if (!videoSource.src.endsWith(targetVideoSrc)) {
        videoSource.src = targetVideoSrc;
        heroVideo.load(); // Reload elemen video dengan file baru
        heroVideo.play().catch((err) => {
          // Fallback jika browser memblokir play otomatis
          console.warn('Autoplay terblokir oleh browser:', err);
        });
      }
    }
  }

  if (themeToggleBtn && themeIcon) {
    // Cek tema tersimpan di localStorage, default ke 'dark'
    const savedTheme = localStorage.getItem('starfall_theme') || 'dark';
    
    if (savedTheme === 'light') {
      document.body.classList.add('light-mode');
      themeIcon.textContent = '☀️';
      switchVideoSource(LIGHT_VIDEO);
    } else {
      document.body.classList.remove('light-mode');
      themeIcon.textContent = '🌙';
      switchVideoSource(DARK_VIDEO);
    }

    // Toggle Tema & Switch Video saat tombol diklik
    themeToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
      const isLight = document.body.classList.contains('light-mode');
      
      themeIcon.textContent = isLight ? '☀️' : '🌙';
      localStorage.setItem('starfall_theme', isLight ? 'light' : 'dark');
      
      // Ganti Video Background ke versi yang sesuai
      switchVideoSource(isLight ? LIGHT_VIDEO : DARK_VIDEO);

      showToast(isLight ? 'Mode Terang Diaktifkan ☀️' : 'Mode Gelap Diaktifkan 🌙');
    });
  }


  /* ==========================================================================
     2. MOBILE NAVIGATION MENU (HAMBURGER)
     ========================================================================== */
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileMenuBtn.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Tutup menu jika klik di luar navbar
    document.addEventListener('click', (e) => {
      if (!mobileMenuBtn.contains(e.target) && !navMenu.contains(e.target)) {
        mobileMenuBtn.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });

    // Tutup menu saat link navigasi diklik
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }


  /* ==========================================================================
     3. COPY IP ADDRESS FUNCTIONALITY
     ========================================================================== */
  const ipTriggers = document.querySelectorAll('.ip-copy-trigger');
  const SERVER_IP = 'play.starfallsmp.my.id:25010';

  ipTriggers.forEach(btn => {
    btn.addEventListener('click', () => {
      navigator.clipboard.writeText(SERVER_IP).then(() => {
        showToast('IP Server Berhasil Disalin! 📋');
      }).catch(() => {
        // Fallback untuk browser lama
        const tempInput = document.createElement('input');
        tempInput.value = SERVER_IP;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        showToast('IP Server Berhasil Disalin! 📋');
      });
    });
  });


  /* ==========================================================================
     4. STORE ORDER MODAL & WHATSAPP REDIRECT
     ========================================================================== */
  const storeModal = document.getElementById('storeModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalRankName = document.getElementById('modalRankName');
  const modalRankPrice = document.getElementById('modalRankPrice');
  const orderForm = document.getElementById('orderForm');
  const mcUsernameInput = document.getElementById('mcUsername');
  const usernameError = document.getElementById('usernameError');
  const buyTriggers = document.querySelectorAll('.buy-trigger');

  let selectedRank = '';
  let selectedPrice = '';

  // Buka Modal saat tombol Beli diklik
  buyTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      selectedRank = btn.getAttribute('data-rank') || 'Rank';
      selectedPrice = btn.getAttribute('data-price') || 'Rp 0';

      if (modalRankName) modalRankName.textContent = selectedRank;
      if (modalRankPrice) modalRankPrice.textContent = selectedPrice;
      if (mcUsernameInput) mcUsernameInput.value = '';
      if (usernameError) {
        usernameError.textContent = '';
        usernameError.style.display = 'none';
      }

      if (storeModal) {
        storeModal.classList.add('active');
        storeModal.classList.add('open');
      }
    });
  });

  // Tutup Modal
  if (modalCloseBtn && storeModal) {
    modalCloseBtn.addEventListener('click', () => {
      storeModal.classList.remove('active');
      storeModal.classList.remove('open');
    });

    storeModal.addEventListener('click', (e) => {
      if (e.target === storeModal) {
        storeModal.classList.remove('active');
        storeModal.classList.remove('open');
      }
    });
  }

  // Handle Submit Form Pemesanan ke WhatsApp
  if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = mcUsernameInput ? mcUsernameInput.value.trim() : '';

      if (!username) {
        if (usernameError) {
          usernameError.textContent = 'Harap masukkan Username Minecraft kamu!';
          usernameError.style.display = 'block';
        }
        return;
      }

      if (username.length < 3) {
        if (usernameError) {
          usernameError.textContent = 'Username minimal 3 karakter!';
          usernameError.style.display = 'block';
        }
        return;
      }

      const adminPhone = '6283138981041';
      const message = `Halo Admin Starfall SMP! Saya ingin membeli Rank:\n\n` +
                      `📌 Item: *Rank ${selectedRank}*\n` +
                      `💰 Harga: *${selectedPrice}*\n` +
                      `👤 Username MC: *${username}*\n\n` +
                      `Mohon info metode pembayarannya. Terima kasih!`;

      const waUrl = `https://wa.me/${adminPhone}?text=${encodeURIComponent(message)}`;
      
      if (storeModal) {
        storeModal.classList.remove('active');
        storeModal.classList.remove('open');
      }
      window.open(waUrl, '_blank');
    });
  }


  /* ==========================================================================
     5. FAQ ACCORDION TOGGLE
     ========================================================================== */
  const faqBoxes = document.querySelectorAll('.faq-box');

  faqBoxes.forEach(box => {
    const header = box.querySelector('.faq-header');
    if (header) {
      header.addEventListener('click', () => {
        const isOpen = box.classList.contains('active');
        
        // Tutup FAQ lain
        faqBoxes.forEach(item => item.classList.remove('active'));

        // Toggle yang sedang diklik
        if (!isOpen) {
          box.classList.add('active');
        }
      });
    }
  });


  /* ==========================================================================
     6. FETCH ONLINE PLAYER COUNT (MINETOOLS API)
     ========================================================================== */
  const onlinePlayerCount = document.getElementById('onlinePlayerCount');

  if (onlinePlayerCount) {
    async function updatePlayerCount() {
      try {
        const response = await fetch('https://api.mcsrvstat.us/2/play.starfallsmp.my.id:25010');
        const data = await response.json();

        if (data && data.online) {
          onlinePlayerCount.innerHTML = `● <strong style="color:var(--primary-cyan);">${data.players.online}</strong> Pemain Online`;
        } else {
          onlinePlayerCount.innerHTML = `● Server Maintenance / Offline`;
        }
      } catch (err) {
        onlinePlayerCount.innerHTML = `● play.starfallsmp.my.id`;
      }
    }

    updatePlayerCount();
    setInterval(updatePlayerCount, 60000); // Update tiap 1 menit
  }


  /* ==========================================================================
     7. TOAST NOTIFICATION UTILITY
     ========================================================================== */
  function showToast(message) {
    let toast = document.getElementById('toastNotice');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toastNotice';
      toast.className = 'toast-notice';
      document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

});

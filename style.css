/* ==========================================================================
   STARFALL NETWORK - STYLESHEET WITH LIGHT & DARK MODE SUPPORT
   ========================================================================== */

:root {
  --bg-dark: #07090e;
  --bg-surface: #0f131c;
  --bg-card: #151a26;
  --bg-card-hover: #1c2333;
  
  --primary-cyan: #00f2fe;
  --primary-blue: #3a7bd5;
  --accent-gold: #ffb703;
  --accent-rose: #ff2a6d;
  --accent-purple: #8a2be2;
  
  --text-primary: #f8fafc;
  --text-secondary: #cbd5e1;
  --text-muted: #64748b;
  
  --border-subtle: rgba(255, 255, 255, 0.07);
  --border-active: rgba(0, 242, 254, 0.3);
  
  --font-title: 'Space Grotesk', -apple-system, sans-serif;
  --font-body: 'Outfit', -apple-system, sans-serif;
  
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 18px;
  
  --overlay-gradient: linear-gradient(
    180deg,
    rgba(7, 9, 14, 0.2) 0%,
    rgba(7, 9, 14, 0.4) 60%,
    #07090e 100%
  );
}

body.light-mode {
  --bg-dark: #f0f4f9;
  --bg-surface: #ffffff;
  --bg-card: #e2e8f0;
  --bg-card-hover: #cbd5e1;
  
  --primary-cyan: #0284c7;
  --primary-blue: #2563eb;
  
  --text-primary: #0f172a;
  --text-secondary: #1e293b;
  --text-muted: #64748b;
  
  --border-subtle: rgba(0, 0, 0, 0.1);
  --border-active: rgba(2, 132, 199, 0.4);
  
  --overlay-gradient: linear-gradient(
    180deg,
    rgba(240, 244, 249, 0.2) 0%,
    rgba(240, 244, 249, 0.4) 60%,
    #f0f4f9 100%
  );
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  overflow-x: hidden;
  width: 100%;
  scroll-behavior: smooth;
}

body {
  background-color: var(--bg-dark);
  color: var(--text-primary);
  font-family: var(--font-body);
  line-height: 1.6;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  width: 100%;
}

/* --- Top Bar --- */
.top-bar {
  background: var(--bg-surface);
  border-bottom: 1px solid var(--border-subtle);
  padding: 8px 0;
  font-size: 0.8rem;
  color: var(--text-secondary);
}

.top-bar-inner {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.top-notice {
  display: flex;
  align-items: center;
  gap: 8px;
}

.live-dot {
  width: 8px;
  height: 8px;
  background-color: #10b981;
  border-radius: 50%;
  box-shadow: 0 0 8px #10b981;
  flex-shrink: 0;
}

/* --- Header & Navigation --- */
.header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: var(--bg-surface);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-subtle);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  gap: 12px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  flex-shrink: 0;
}

.brand-logo-img {
  width: 38px;
  height: 38px;
  object-fit: contain;
  border-radius: var(--radius-sm);
  display: block;
}

.brand-icon-fallback {
  width: 38px;
  height: 38px;
  background: linear-gradient(135deg, var(--primary-cyan), var(--primary-blue));
  color: #fff;
  font-family: var(--font-title);
  font-weight: 800;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-sm);
}

.brand-title {
  font-family: var(--font-title);
  font-weight: 800;
  font-size: 1.1rem;
  color: var(--text-primary);
  display: block;
  line-height: 1;
}

.brand-subtitle {
  font-size: 0.65rem;
  color: var(--primary-cyan);
  font-weight: 700;
  letter-spacing: 1px;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 24px;
  list-style: none;
}

.nav-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: color 0.2s ease;
  position: relative;
  padding: 8px 0;
}

.nav-link:hover, .nav-link.active {
  color: var(--text-primary);
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--primary-cyan);
  border-radius: 2px;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.theme-toggle-btn {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  color: var(--text-primary);
  width: 38px;
  height: 38px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.1rem;
  flex-shrink: 0;
}

.ip-copy-btn {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  padding: 6px 12px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.ip-text {
  font-family: var(--font-title);
  font-weight: 700;
  font-size: 0.8rem;
  color: var(--primary-cyan);
}

.ip-sub {
  font-size: 0.7rem;
  color: #10b981;
  font-weight: 600;
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.mobile-menu-toggle span {
  width: 22px;
  height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
}

/* --- Hero Banner & Page Banners --- */
.page-banner {
  padding: 60px 0 40px;
  text-align: center;
  background: var(--bg-surface);
  border-bottom: 1px solid var(--border-subtle);
}

.page-banner h1 {
  font-family: var(--font-title);
  font-size: 2.2rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.page-banner p {
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.video-hero {
  position: relative;
  overflow: hidden;
  padding: 80px 0 60px;
  text-align: center;
  min-height: 480px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 1;
  transform: translate(-50%, -50%);
  object-fit: cover;
  pointer-events: none;
}

.hero-overlay {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  z-index: 2;
  background: var(--overlay-gradient);
}

.hero-content {
  position: relative;
  z-index: 3;
}

.banner-badge {
  color: var(--accent-gold);
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 1px;
  display: block;
  margin-bottom: 12px;
}

.hero-title {
  font-size: 2.5rem;
  line-height: 1.2;
  font-family: var(--font-title);
  font-weight: 800;
  color: var(--text-primary);
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.8);
}

.highlight-cyan {
  color: var(--primary-cyan);
}

.hero-desc {
  margin-top: 14px;
  color: var(--text-primary);
  max-width: 550px;
  margin-left: auto;
  margin-right: auto;
  font-size: 0.95rem;
  font-weight: 500;
}

.hero-btn-group {
  margin-top: 24px;
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.btn-primary-glow, .btn-secondary-dark {
  padding: 12px 20px;
  border-radius: var(--radius-sm);
  font-family: var(--font-title);
  font-weight: 700;
  font-size: 0.9rem;
  text-decoration: none;
  text-align: center;
}

.btn-primary-glow {
  background: linear-gradient(135deg, var(--primary-cyan), var(--primary-blue));
  color: #fff;
  box-shadow: 0 4px 15px rgba(0, 242, 254, 0.3);
}

.btn-secondary-dark {
  background: var(--bg-surface);
  color: var(--text-primary);
  border: 1px solid var(--border-subtle);
}

/* --- Content Sections --- */
main { flex: 1; }
.content-section { padding: 40px 0; }

.grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.feature-box {
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  padding: 24px;
  border-radius: var(--radius-md);
}

.feature-box h3 {
  font-family: var(--font-title);
  font-size: 1.15rem;
  margin-bottom: 8px;
}

.feature-box p {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.feature-icon-badge {
  width: 42px; height: 42px;
  background: rgba(0, 242, 254, 0.1);
  color: var(--primary-cyan);
  display: flex; align-items: center; justify-content: center;
  border-radius: var(--radius-sm);
  font-size: 1.2rem;
  margin-bottom: 16px;
}

/* ==========================================================================
   RANK STORE KATALOG & CARDS (BAGIAN YANG HILANG)
   ========================================================================== */
.ranks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 10px;
}

.rank-card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.rank-card:hover {
  transform: translateY(-4px);
  border-color: var(--border-active);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  background: var(--bg-card-hover);
}

.rank-card.highlight {
  border: 2px solid var(--accent-gold);
  box-shadow: 0 0 20px rgba(255, 183, 3, 0.15);
}

.rank-tag-featured {
  position: absolute;
  top: -12px;
  right: 20px;
  background: var(--accent-gold);
  color: #000;
  font-family: var(--font-title);
  font-weight: 800;
  font-size: 0.65rem;
  padding: 3px 10px;
  border-radius: 20px;
  letter-spacing: 0.5px;
}

.rank-header {
  margin-bottom: 20px;
  border-bottom: 1px solid var(--border-subtle);
  padding-bottom: 16px;
}

.rank-name {
  font-family: var(--font-title);
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-top: 4px;
  line-height: 1.1;
}

.rank-price {
  font-family: var(--font-title);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary-cyan);
  margin-top: 8px;
}

.rank-features {
  list-style: none;
  padding: 0;
  margin: 0 0 24px 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex-grow: 1;
}

.rank-features li {
  font-size: 0.88rem;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: 8px;
}

.rank-features strong {
  color: var(--text-primary);
}

.btn-buy-store {
  width: 100%;
  padding: 12px 16px;
  background: var(--bg-surface);
  color: var(--text-primary);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-sm);
  font-family: var(--font-title);
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
}

.btn-buy-store:hover {
  background: var(--primary-cyan);
  color: #000;
  border-color: var(--primary-cyan);
}

.btn-buy-store.gold-btn {
  background: var(--accent-gold);
  color: #000;
  border: none;
}

.btn-buy-store.gold-btn:hover {
  background: #e0a200;
}

/* --- FAQ Accordion --- */
.faq-box {
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  margin-bottom: 12px;
  overflow: hidden;
}

.faq-header {
  padding: 18px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-weight: 700;
  font-family: var(--font-title);
}

.faq-body {
  padding: 0 20px 18px;
  display: none;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.faq-box.active .faq-body {
  display: block;
}

/* --- Modal Checkout --- */
.modal-backdrop {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(4px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
}

.modal-backdrop.open {
  opacity: 1;
  pointer-events: auto;
}

.modal-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  width: 100%;
  max-width: 440px;
  padding: 28px;
  position: relative;
  box-shadow: 0 20px 40px rgba(0,0,0,0.5);
}

.modal-close-btn {
  position: absolute;
  top: 16px; right: 16px;
  background: none;
  border: none;
  color: var(--text-muted);
  font-size: 1.5rem;
  cursor: pointer;
}

.summary-card {
  background: var(--bg-card);
  padding: 14px 16px;
  border-radius: var(--radius-sm);
  margin-bottom: 20px;
  border: 1px solid var(--border-subtle);
  font-size: 0.9rem;
}

.summary-item {
  display: flex;
  justify-content: space-between;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-size: 0.8rem;
  font-weight: 700;
  margin-bottom: 6px;
  color: var(--text-secondary);
}

.form-group input {
  width: 100%;
  padding: 12px;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-sm);
  color: var(--text-primary);
  font-family: var(--font-body);
  outline: none;
}

.form-group input:focus {
  border-color: var(--primary-cyan);
}

.field-error-notice {
  color: var(--accent-rose);
  font-size: 0.75rem;
  margin-top: 6px;
  display: none;
}

.btn-wa-submit {
  width: 100%;
  padding: 14px;
  background: #25d366;
  color: #000;
  border: none;
  border-radius: var(--radius-sm);
  font-family: var(--font-title);
  font-weight: 800;
  font-size: 0.95rem;
  cursor: pointer;
}

/* Toast Notice */
.toast-notice {
  position: fixed;
  bottom: 24px;
  right: 24px;
  background: var(--primary-cyan);
  color: #000;
  padding: 12px 20px;
  border-radius: var(--radius-sm);
  font-family: var(--font-title);
  font-weight: 700;
  font-size: 0.85rem;
  transform: translateY(100px);
  opacity: 0;
  transition: all 0.3s ease;
  z-index: 3000;
}

.toast-notice.show {
  transform: translateY(0);
  opacity: 1;
}

/* --- Footer --- */
.footer {
  background: var(--bg-surface);
  border-top: 1px solid var(--border-subtle);
  padding: 30px 0;
  margin-top: 30px;
  font-size: 0.85rem;
  color: var(--text-muted);
}

.footer-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}

/* ==========================================================================
   RESPONSIVE DESIGN (UNTUK HANDPHONE & TABLET)
   ========================================================================== */
@media (max-width: 900px) {
  .nav-menu {
    display: none;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    background: var(--bg-surface);
    flex-direction: column;
    padding: 20px;
    border-bottom: 1px solid var(--border-subtle);
    gap: 16px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.5);
  }

  .nav-menu.active {
    display: flex;
  }

  .mobile-menu-toggle {
    display: flex;
  }

  .grid-2, .grid-3 {
    grid-template-columns: 1fr;
  }

  .hero-title {
    font-size: 1.8rem;
  }

  .hero-desc {
    font-size: 0.85rem;
  }

  .header-actions {
    gap: 6px;
  }

  .ip-text {
    font-size: 0.75rem;
  }

  .ip-sub {
    font-size: 0.65rem;
  }

  .hero-btn-group {
    flex-direction: column;
    width: 100%;
  }

  .btn-primary-glow, .btn-secondary-dark {
    width: 100%;
  }

  .footer-flex {
    flex-direction: column;
    text-align: center;
  }
}

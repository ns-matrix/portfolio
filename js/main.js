/**
 * CLIENT APPLICATION LOGIC — NITIN SINGH PORTFOLIO
 * Modular, performant, accessible vanilla JavaScript
 */

(function () {
  'use strict';

  // Ensure PORTFOLIO_DATA is loaded
  if (typeof PORTFOLIO_DATA === 'undefined') {
    console.error('PORTFOLIO_DATA is missing. Ensure js/data.js is loaded prior to main.js.');
    return;
  }

  const { personal, metrics, skills, projects, experience, education, certifications, gallery } = PORTFOLIO_DATA;

  // State Management for Modals & Lightbox
  let currentLightboxItems = [];
  let currentLightboxIndex = 0;
  let touchStartX = 0;
  let touchEndX = 0;

  // DOM Elements
  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav-links a');
  const scrollDotsContainer = document.getElementById('scroll-dots');
  const toastElement = document.getElementById('toast');
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const caseStudyModal = document.getElementById('case-study-modal');

  // ==========================================================================
  // Initialization & Dynamic Rendering
  // ==========================================================================
  function init() {
    renderMetrics();
    renderAboutHighlights();
    renderSkills('all');
    setupSkillFilters();
    renderProjects();
    renderTimeline();
    renderCertifications();
    renderGallery('all');
    setupGalleryFilters();
    setupNavigation();
    setupModals();
    setupCopyEmail();
    setupScrollSpy();
  }

  // Render Metrics
  function renderMetrics() {
    const container = document.getElementById('metrics-container');
    if (!container) return;

    container.innerHTML = metrics.map(m => `
      <div class="metric-card">
        <div class="metric-value">${m.value}<span class="suffix">${m.suffix}</span></div>
        <div class="metric-label">${escapeHtml(m.label)}</div>
        <div class="metric-desc">${escapeHtml(m.description)}</div>
      </div>
    `).join('');
  }

  // Render About Highlights
  function renderAboutHighlights() {
    const container = document.getElementById('about-highlights');
    if (!container) return;

    container.innerHTML = personal.highlights.map(h => `
      <div class="highlight-box">
        <div class="highlight-label">${escapeHtml(h.label)}</div>
        <div class="highlight-val">${escapeHtml(h.value)}</div>
      </div>
    `).join('');
  }

  // Render Skills
  function renderSkills(categoryId) {
    const container = document.getElementById('skills-container');
    if (!container) return;

    const filtered = categoryId === 'all'
      ? skills.items
      : skills.items.filter(s => s.category === categoryId);

    container.innerHTML = filtered.map(s => `
      <div class="skill-card">
        <div class="skill-header">
          <h4 class="skill-name">${escapeHtml(s.name)}</h4>
          <span class="skill-level">${escapeHtml(s.level)}</span>
        </div>
        <div class="skill-tags">
          ${s.tags.map(t => `<span class="skill-tag">${escapeHtml(t)}</span>`).join('')}
        </div>
      </div>
    `).join('');
  }

  function setupSkillFilters() {
    const nav = document.getElementById('skills-filters');
    if (!nav) return;

    nav.innerHTML = skills.categories.map(cat => `
      <button class="filter-btn ${cat.id === 'all' ? 'active' : ''}" data-category="${cat.id}">
        ${escapeHtml(cat.label)}
      </button>
    `).join('');

    nav.addEventListener('click', e => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      nav.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderSkills(btn.dataset.category);
    });
  }

  // Render Featured Projects
  function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;

    container.innerHTML = projects.map(p => `
      <article class="project-card" id="card-${p.id}">
        <div class="project-media">
          <img src="${p.image}" alt="${escapeHtml(p.title)}" loading="lazy">
        </div>
        <div class="project-content">
          <div class="project-badge-row">
            <span class="project-badge">${escapeHtml(p.badge)}</span>
          </div>
          <h3 class="project-title">${escapeHtml(p.title)}</h3>
          <p class="project-desc">${escapeHtml(p.shortDescription)}</p>
          
          <div class="project-stats-grid">
            ${p.stats.map(s => `
              <div class="project-stat-item">
                <b>${escapeHtml(s.value)}</b>
                <span>${escapeHtml(s.label)}</span>
              </div>
            `).join('')}
          </div>

          <div class="skill-tags" style="margin-bottom: 20px;">
            ${p.tags.map(t => `<span class="skill-tag">${escapeHtml(t)}</span>`).join('')}
          </div>

          <div class="project-footer">
            <div class="project-links">
              ${p.liveUrl ? `<a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer">Live Demo ↗</a>` : ''}
              ${p.githubUrl ? `<a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer">GitHub ↗</a>` : ''}
            </div>
            <button class="btn btn-sm btn-secondary view-case-study-btn" data-project-id="${p.id}">
              Case Study →
            </button>
          </div>
        </div>
      </article>
    `).join('');

    // Attach case study modal openers
    container.addEventListener('click', e => {
      const btn = e.target.closest('.view-case-study-btn');
      if (!btn) return;
      const proj = projects.find(item => item.id === btn.dataset.projectId);
      if (proj) openCaseStudy(proj);
    });
  }

  // Render Experience and Education Timeline
  function renderTimeline() {
    const expContainer = document.getElementById('experience-timeline');
    const eduContainer = document.getElementById('education-timeline');

    if (expContainer) {
      expContainer.innerHTML = experience.map(item => `
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-badge">${escapeHtml(item.statusBadge)}</div>
          <h4 class="timeline-role">${escapeHtml(item.role)}</h4>
          <div class="timeline-org">${escapeHtml(item.organization)} • ${escapeHtml(item.location)}</div>
          <div class="timeline-period">${escapeHtml(item.period)}</div>
          <p class="timeline-desc">${escapeHtml(item.description)}</p>
          <ul class="timeline-bullets">
            ${item.responsibilities.map(r => `<li>${escapeHtml(r)}</li>`).join('')}
          </ul>
        </div>
      `).join('');
    }

    if (eduContainer) {
      eduContainer.innerHTML = education.map(item => `
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-badge">${escapeHtml(item.status || item.grade)}</div>
          <h4 class="timeline-role">${escapeHtml(item.degree)}</h4>
          <div class="timeline-org">${escapeHtml(item.institution)}${item.affiliation ? ` (${escapeHtml(item.affiliation)})` : ''}</div>
          <div class="timeline-period">${escapeHtml(item.period)} • <b>${escapeHtml(item.grade)}</b></div>
          <ul class="timeline-bullets" style="margin-top: 10px;">
            ${item.coursework.map(c => `<li>${escapeHtml(c)}</li>`).join('')}
          </ul>
        </div>
      `).join('');
    }
  }

  // Render Certifications Showcase
  function renderCertifications() {
    const container = document.getElementById('certs-container');
    if (!container) return;

    container.innerHTML = certifications.map((c, index) => `
      <div class="cert-card">
        <div>
          <div class="cert-top">
            <span class="cert-badge">${escapeHtml(c.badge)}</span>
            <span class="cert-date">${escapeHtml(c.date)}</span>
          </div>
          <h4 class="cert-title">${escapeHtml(c.title)}</h4>
          <div class="cert-issuer">${escapeHtml(c.issuer)}</div>
          <p class="cert-desc">${escapeHtml(c.description)}</p>
        </div>
        <div class="cert-footer">
          <span class="cert-id-tag" title="${escapeHtml(c.credentialId || '')}">
            ID: ${escapeHtml(c.credentialId || 'Verified Record')}
          </span>
          <div class="cert-actions">
            ${c.verificationUrl ? `
              <a href="${c.verificationUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-secondary">
                Verify ↗
              </a>
            ` : ''}
            <button class="btn btn-sm btn-primary view-cert-btn" data-cert-index="${index}">
              View Scan
            </button>
          </div>
        </div>
      </div>
    `).join('');

    container.addEventListener('click', e => {
      const btn = e.target.closest('.view-cert-btn');
      if (!btn) return;
      const idx = parseInt(btn.dataset.certIndex, 10);
      const certItems = certifications.map(item => ({
        image: item.image,
        title: item.title,
        caption: `${item.issuer} • ${item.date} • Credential ID: ${item.credentialId || 'Verified Record'}`
      }));
      openLightbox(certItems, idx);
    });
  }

  // Render Gallery
  function renderGallery(filterCategory) {
    const container = document.getElementById('gallery-container');
    if (!container) return;

    const filtered = filterCategory === 'all'
      ? gallery
      : gallery.filter(g => g.category === filterCategory);

    container.innerHTML = filtered.map((item, index) => `
      <div class="gallery-item" data-gallery-index="${index}">
        <img src="${item.image}" alt="${escapeHtml(item.title)}" loading="lazy">
        <div class="gallery-overlay">
          <span>${escapeHtml(item.categoryLabel)}</span>
          <b>${escapeHtml(item.title)}</b>
        </div>
      </div>
    `).join('');

    container.addEventListener('click', e => {
      const item = e.target.closest('.gallery-item');
      if (!item) return;
      const idx = parseInt(item.dataset.galleryIndex, 10);
      const galleryItems = filtered.map(g => ({
        image: g.image,
        title: g.title,
        caption: g.caption
      }));
      openLightbox(galleryItems, idx);
    });
  }

  function setupGalleryFilters() {
    const filterContainer = document.getElementById('gallery-filters');
    if (!filterContainer) return;

    filterContainer.addEventListener('click', e => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      filterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGallery(btn.dataset.category);
    });
  }

  // ==========================================================================
  // Lightbox Modal Logic
  // ==========================================================================
  function openLightbox(items, index) {
    currentLightboxItems = items;
    currentLightboxIndex = index;
    updateLightboxContent();
    lightboxModal.classList.add('open');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    lightboxModal.focus();
  }

  function closeLightbox() {
    lightboxModal.classList.remove('open');
    lightboxModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function updateLightboxContent() {
    const item = currentLightboxItems[currentLightboxIndex];
    if (!item) return;

    lightboxImg.src = item.image;
    lightboxImg.alt = item.title;
    lightboxTitle.textContent = item.title;
    lightboxDesc.textContent = item.caption;
  }

  function nextLightbox() {
    if (currentLightboxItems.length === 0) return;
    currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxItems.length;
    updateLightboxContent();
  }

  function prevLightbox() {
    if (currentLightboxItems.length === 0) return;
    currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxItems.length) % currentLightboxItems.length;
    updateLightboxContent();
  }

  // ==========================================================================
  // Case Study Modal Logic
  // ==========================================================================
  function openCaseStudy(proj) {
    const titleEl = document.getElementById('case-study-title');
    const badgeEl = document.getElementById('case-study-badge');
    const problemEl = document.getElementById('case-study-problem');
    const archEl = document.getElementById('case-study-arch');
    const featuresEl = document.getElementById('case-study-features');
    const resultsEl = document.getElementById('case-study-results');
    const linksEl = document.getElementById('case-study-links');

    if (titleEl) titleEl.textContent = proj.title;
    if (badgeEl) badgeEl.textContent = proj.subtitle;
    if (problemEl) problemEl.textContent = proj.caseStudy.problem;
    if (archEl) archEl.textContent = proj.caseStudy.architecture;
    if (resultsEl) resultsEl.textContent = proj.caseStudy.results;

    if (featuresEl) {
      featuresEl.innerHTML = proj.caseStudy.keyFeatures
        .map(f => `<li>${escapeHtml(f)}</li>`)
        .join('');
    }

    if (linksEl) {
      linksEl.innerHTML = `
        ${proj.liveUrl ? `<a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">Launch Live Demo ↗</a>` : ''}
        ${proj.githubUrl ? `<a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">GitHub Repository ↗</a>` : ''}
      `;
    }

    caseStudyModal.classList.add('open');
    caseStudyModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    caseStudyModal.focus();
  }

  function closeCaseStudy() {
    caseStudyModal.classList.remove('open');
    caseStudyModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function setupModals() {
    // Lightbox triggers
    document.getElementById('lightbox-close')?.addEventListener('click', closeLightbox);
    document.getElementById('lightbox-next')?.addEventListener('click', nextLightbox);
    document.getElementById('lightbox-prev')?.addEventListener('click', prevLightbox);

    // Case Study triggers
    document.getElementById('case-study-close')?.addEventListener('click', closeCaseStudy);

    // Click outside backdrop to close
    lightboxModal?.addEventListener('click', e => {
      if (e.target === lightboxModal) closeLightbox();
    });

    caseStudyModal?.addEventListener('click', e => {
      if (e.target === caseStudyModal) closeCaseStudy();
    });

    // Keyboard controls
    window.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        if (lightboxModal?.classList.contains('open')) closeLightbox();
        if (caseStudyModal?.classList.contains('open')) closeCaseStudy();
        if (mobileDrawer?.classList.contains('open')) closeMobileDrawer();
      } else if (lightboxModal?.classList.contains('open')) {
        if (e.key === 'ArrowRight') nextLightbox();
        if (e.key === 'ArrowLeft') prevLightbox();
      }
    });

    // Touch swipe for Lightbox
    lightboxModal?.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightboxModal?.addEventListener('touchend', e => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
  }

  function handleSwipe() {
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextLightbox();
      else prevLightbox();
    }
  }

  // ==========================================================================
  // Navigation & Drawer
  // ==========================================================================
  function openMobileDrawer() {
    mobileDrawer.classList.add('open');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileDrawer() {
    mobileDrawer.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function setupNavigation() {
    menuToggle?.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('open');
      if (isOpen) closeMobileDrawer();
      else openMobileDrawer();
    });

    // Close mobile drawer on link click
    document.querySelectorAll('.mobile-nav-links a').forEach(a => {
      a.addEventListener('click', closeMobileDrawer);
    });

    // Header background change on scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.style.background = 'rgba(7, 8, 12, 0.94)';
        header.style.borderBottomColor = 'rgba(255, 255, 255, 0.12)';
      } else {
        header.style.background = 'rgba(7, 8, 12, 0.82)';
        header.style.borderBottomColor = 'var(--line)';
      }
    }, { passive: true });
  }

  // ==========================================================================
  // Scroll Spy (Navbar & Dots)
  // ==========================================================================
  function setupScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    if (sections.length === 0) return;

    // Generate scroll dots
    if (scrollDotsContainer) {
      scrollDotsContainer.innerHTML = Array.from(sections).map(sec => `
        <button class="scroll-dot" data-target="${sec.id}" aria-label="Navigate to ${sec.id}"></button>
      `).join('');

      scrollDotsContainer.addEventListener('click', e => {
        const dot = e.target.closest('.scroll-dot');
        if (!dot) return;
        const target = document.getElementById(dot.dataset.target);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      });
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          // Update desktop nav
          document.querySelectorAll('.nav-links a').forEach(a => {
            a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
          });
          // Update dots
          document.querySelectorAll('.scroll-dot').forEach(dot => {
            dot.classList.toggle('active', dot.dataset.target === id);
          });
        }
      });
    }, {
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0
    });

    sections.forEach(s => observer.observe(s));
  }

  // ==========================================================================
  // Copy to Clipboard with Toast Notification
  // ==========================================================================
  function setupCopyEmail() {
    const copyBtns = document.querySelectorAll('.copy-email-btn');
    copyBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const email = personal.email;
        if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard.writeText(email)
            .then(() => showToast('Email copied to clipboard: ' + email))
            .catch(() => fallbackCopy(email));
        } else {
          fallbackCopy(email);
        }
      });
    });
  }

  function fallbackCopy(text) {
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    try {
      document.execCommand('copy');
      showToast('Email copied to clipboard: ' + text);
    } catch (err) {
      showToast('Press Ctrl+C to copy: ' + text);
    }
    document.body.removeChild(input);
  }

  function showToast(msg) {
    if (!toastElement) return;
    toastElement.textContent = msg;
    toastElement.classList.add('show');
    clearTimeout(toastElement._timer);
    toastElement._timer = setTimeout(() => {
      toastElement.classList.remove('show');
    }, 3200);
  }

  // Utility to prevent XSS
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

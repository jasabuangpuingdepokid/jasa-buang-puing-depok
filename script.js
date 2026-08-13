// ============ MOBILE MENU ============
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuBackdrop = document.getElementById('mobile-menu-backdrop');

if (hamburger && mobileMenu && mobileMenuBackdrop) {
  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('is-open');
    mobileMenuBackdrop.classList.toggle('is-open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  mobileMenuBackdrop.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
    mobileMenuBackdrop.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
  });

  // Close menu when clicking on navigation links
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('is-open');
      mobileMenuBackdrop.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

// ============ SCROLL REVEAL ============
const revealEls = document.querySelectorAll('.reveal');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (reduceMotion) {
  revealEls.forEach(el => el.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  revealEls.forEach(el => observer.observe(el));
}

// ============ CAPACITY PICKER (Jasa Urug & Suplai Tanah) ============
const capacityBtns = document.querySelectorAll('.capacity-picker__btn');
if (capacityBtns.length > 0) {
  const urugWaLink = document.getElementById('urugWaLink');
  const urugImg = document.getElementById('urugImg');
  const urugMedia = urugImg ? urugImg.closest('.card__media') : null;

  capacityBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const capacity = btn.dataset.capacity;
      const label = btn.dataset.label;

      capacityBtns.forEach(b => {
        b.classList.remove('is-active');
        b.setAttribute('aria-checked', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-checked', 'true');

      document.querySelectorAll('.capacity-picker__note').forEach(note => {
        note.hidden = note.dataset.noteFor !== capacity;
      });

      if (urugImg && urugMedia && btn.dataset.image && urugImg.getAttribute('src') !== btn.dataset.image) {
        urugMedia.classList.add('is-swapping');
        setTimeout(() => {
          urugImg.src = btn.dataset.image;
          urugImg.alt = btn.dataset.alt || urugImg.alt;
          urugMedia.classList.remove('is-swapping');
        }, 200);
      }

      if (urugWaLink) {
        const message = `Halo, saya mau pesan jasa Urug dan Suplai Tanah (${capacity} m³, ${label})`;
        urugWaLink.href = `https://wa.me/628813877153?text=${encodeURIComponent(message)}`;
      }
    });
  });
}

// ============ GALLERY FILTER & LIGHTBOX ============
function initGallery() {
  const galleryFilterBtns = document.querySelectorAll('.gallery__filter');
  const galleryItems = document.querySelectorAll('.gallery__item');
  const galleryGrid = document.getElementById('gallery-grid');
  const galleryOverlay = document.getElementById('gallery-overlay');
  const galleryShowMore = document.getElementById('gallery-show-more');
  const galleryLightbox = document.getElementById('gallery-lightbox');

  if (!galleryLightbox) return;

  const galleryLightboxImg = document.getElementById('gallery-lightbox-img');
  const galleryLightboxClose = galleryLightbox.querySelector('.gallery-lightbox__close');
  const galleryLightboxPrev = galleryLightbox.querySelector('.gallery-lightbox__prev');
  const galleryLightboxNext = galleryLightbox.querySelector('.gallery-lightbox__next');

  let visibleItems = [];
  let currentIndex = 0;
  let isExpanded = false;

  // Get limit based on device
  const getLimit = () => window.matchMedia('(max-width: 767px)').matches ? 10 : 12;

  // Update which items should be hidden based on limit
  function updateGalleryLimit() {
    const limit = getLimit();

    // Remove all limited classes first
    galleryItems.forEach(item => item.classList.remove('is-limited'));

    // Get currently visible items (not hidden by filter)
    visibleItems = Array.from(galleryItems).filter(
      item => !item.classList.contains('is-hidden')
    );

    // Add limited class to items beyond the limit
    visibleItems.forEach((item, index) => {
      if (index >= limit && !isExpanded) {
        item.classList.add('is-limited');
      }
    });

    // Show/hide overlay based on whether there are more items than limit
    if (galleryOverlay && galleryShowMore) {
      const shouldShowOverlay = visibleItems.length > limit && !isExpanded;
      galleryOverlay.hidden = !shouldShowOverlay;
    }
  }

  // Handle "Tampilkan Selengkapnya" button click
  if (galleryShowMore) {
    galleryShowMore.addEventListener('click', () => {
      isExpanded = true;
      galleryItems.forEach(item => item.classList.remove('is-limited'));
      galleryOverlay.hidden = true;
    });
  }

  // Handle window resize
  const mobileMediaQuery = window.matchMedia('(max-width: 767px)');
  mobileMediaQuery.addEventListener('change', () => {
    // Reset expanded state when switching breakpoints
    isExpanded = false;
    updateGalleryLimit();
  });

  // Filter functionality
  galleryFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      galleryFilterBtns.forEach(b => {
        b.classList.remove('is-active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-selected', 'true');

      const filter = btn.dataset.filter;

      // Reset expanded state when filter changes
      isExpanded = false;

      // Show/hide items
      galleryItems.forEach(item => {
        const category = item.dataset.cat;
        if (filter === 'all' || category === filter) {
          item.classList.remove('is-hidden');
        } else {
          item.classList.add('is-hidden');
        }
      });

      // Update visible items and limit
      updateGalleryLimit();
    });
  });

  // Initialize visible items and limit
  visibleItems = Array.from(galleryItems);
  updateGalleryLimit();

  // Lightbox open
  galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      galleryLightboxImg.src = img.src;
      galleryLightboxImg.alt = img.alt;
      galleryLightbox.hidden = false;
      galleryLightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';

      // Find index in visible items
      currentIndex = visibleItems.indexOf(item);
    });

    // Keyboard support
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        item.click();
      }
    });
  });

  // Lightbox close
  function closeLightbox() {
    galleryLightbox.hidden = true;
    galleryLightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  galleryLightboxClose.addEventListener('click', closeLightbox);

  galleryLightbox.addEventListener('click', (e) => {
    if (e.target === galleryLightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !galleryLightbox.hidden) {
      closeLightbox();
    }
  });

  // Lightbox navigation
  function updateLightboxImage() {
    const item = visibleItems[currentIndex];
    const img = item.querySelector('img');
    galleryLightboxImg.src = img.src;
    galleryLightboxImg.alt = img.alt;
  }

  galleryLightboxPrev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
    updateLightboxImage();
  });

  galleryLightboxNext.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % visibleItems.length;
    updateLightboxImage();
  });

  // Keyboard navigation in lightbox
  document.addEventListener('keydown', (e) => {
    if (galleryLightbox.hidden) return;

    if (e.key === 'ArrowLeft') {
      galleryLightboxPrev.click();
    } else if (e.key === 'ArrowRight') {
      galleryLightboxNext.click();
    }
  });
}

// Safe DOM ready check - works regardless of script position
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initGallery);
} else {
  initGallery();
}
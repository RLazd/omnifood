// Current Year
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Mobile navigation
const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});

// Smooth scrolling
const allLinks = document.querySelectorAll('a:link');
allLinks.forEach((link) =>
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = link.getAttribute('href');

    // Back to top
    if (href === '#') window.scrollTo({ top: 0, behavior: 'smooth' });

    // Scroll to section
    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }

    // Close mobile nav
    if (link.classList.contains('main-nav-link')) {
      headerEl.classList.toggle('nav-open');
    }
  })
);

// Sticky nav bar
const body = document.body;
const sectionHeroEl = document.querySelector('.section-hero');
const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0]; // entries - array of all thresholds (here just one threshold -0 )
    //console.log(ent);
    if (!ent.isIntersecting) body.classList.add('sticky');
    if (ent.isIntersecting) body.classList.remove('sticky');
  },
  {
    // In the viewport (inside of the entire browser window)
    root: null,
    threshold: 0, // as soon as 0% of sectionHeroEl is in the viewport
    rootMargin: '-80px', // cus nav-bar height: 8rem
  }
);
observer.observe(sectionHeroEl);

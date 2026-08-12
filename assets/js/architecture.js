(function () {
  var header = document.querySelector(".site-header");
  var hero = document.querySelector("[data-scroll-hero]");
  var architecture = document.querySelector("[data-architecture]");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var ticking = false;

  function clamp(value, minimum, maximum) {
    return Math.min(maximum, Math.max(minimum, value));
  }

  function updateScrollState() {
    var scrollable = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    var pageProgress = clamp(window.scrollY / scrollable, 0, 1);

    if (header) {
      header.style.setProperty("--page-progress", pageProgress.toFixed(4));
      header.classList.toggle("is-scrolled", window.scrollY > 20);
    }

    if (hero && !reduceMotion) {
      var heroBounds = hero.getBoundingClientRect();
      var heroProgress = clamp(-heroBounds.top / Math.max(heroBounds.height * 0.8, 1), 0, 1);
      hero.style.setProperty("--hero-scroll", heroProgress.toFixed(4));
    }

    ticking = false;
  }

  function requestScrollUpdate() {
    if (!ticking) {
      window.requestAnimationFrame(updateScrollState);
      ticking = true;
    }
  }

  if (architecture) {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      architecture.classList.add("is-active");
    } else {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-active");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.25 });

      observer.observe(architecture);
    }
  }

  window.addEventListener("scroll", requestScrollUpdate, { passive: true });
  window.addEventListener("resize", requestScrollUpdate);
  updateScrollState();
}());
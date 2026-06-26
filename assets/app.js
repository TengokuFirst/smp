(function () {
  const config = window.TENGOKU_SITE_CONFIG || {};
  const downloadLinks = config.downloadLinks || {};

  const setLink = (id, href) => {
    const element = document.getElementById(id);
    if (!element || !href) {
      return;
    }
    element.href = href;
    if (/^https?:\/\//i.test(href)) {
      element.target = "_blank";
      element.rel = "noreferrer";
      element.removeAttribute("download");
    }
  };

  setLink("zip-download-link", downloadLinks.zipReleaseUrl);
  setLink("mrpack-download-link", downloadLinks.mrpackReleaseUrl);

  const sectionLinks = Array.from(document.querySelectorAll(".tabs__link"));
  const sections = Array.from(document.querySelectorAll("[data-section-id]")).filter(
    (element) => element.dataset.sectionId !== "hero"
  );

  const activateLink = (sectionId) => {
    sectionLinks.forEach((link) => {
      link.classList.toggle("is-active", link.dataset.section === sectionId);
    });
  };

  if (sections.length > 0 && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          activateLink(visible.target.dataset.sectionId);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.15, 0.3, 0.55]
      }
    );

    sections.forEach((section) => observer.observe(section));
  }

  if (window.location.hash) {
    const initialId = window.location.hash.replace("#", "");
    activateLink(initialId);
  } else if (sectionLinks[0]) {
    activateLink(sectionLinks[0].dataset.section);
  }
})();

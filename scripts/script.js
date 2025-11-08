// scripts/script.js — version corrigée et plus robuste

document.addEventListener('DOMContentLoaded', () => {
  // *********** menus toggles ***********
  // ...existing code (menu toggle commented out in original)...
  // Si tu veux réactiver, encapsule-le et vérifie les éléments avant usage.

  // ****************** scroll widget *********************//
  const scrollWidget = document.getElementById('scroll');

  if (scrollWidget) {
    // Utiliser hidden ou une classe CSS est préférable à style.display inline
    scrollWidget.hidden = true;

    // Ajout du listener click UNE SEULE FOIS
    scrollWidget.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    // Handler de scroll léger ; passive pour perf
    window.addEventListener('scroll', () => {
      const shouldShow = window.scrollY > 50;
      // Ne changer le DOM que si l'état change (évite réflows inutiles)
      if (shouldShow && scrollWidget.hidden) {
        scrollWidget.hidden = false;
      } else if (!shouldShow && !scrollWidget.hidden) {
        scrollWidget.hidden = true;
      }
    }, { passive: true });
  } else {
    // Débogage utile en dev
    // console.warn('scroll widget (id="scroll") introuvable.');
  }

  // ****************** readmore *********************//
  const readMore = document.getElementById('readmore');
  const btnReadmore = document.getElementById('btn-readmore');

  if (readMore && btnReadmore) {
    // Utiliser hidden pour accessibilité + évite conflits de style
    readMore.hidden = true;
    btnReadmore.textContent = 'lire plus';
    btnReadmore.style.fontWeight = '600';
    btnReadmore.style.cursor = 'pointer';
    btnReadmore.setAttribute('role', 'button');
    btnReadmore.setAttribute('aria-expanded', 'false');

    btnReadmore.addEventListener('click', () => {
      const expanded = readMore.hidden === true;
      readMore.hidden = !expanded;
      btnReadmore.textContent = expanded ? 'lire moins' : 'lire plus';
      btnReadmore.setAttribute('aria-expanded', String(expanded));
    });
  } else {
    // console.warn('readmore or btn-readmore introuvable.');
  }

  // *********** autres comportements JS (si besoin) ***********
  // Place ici d'autres initialisations en vérifiant l'existence des éléments.
});
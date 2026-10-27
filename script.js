/* Small enhancements only: navigation control, image fallback, and current copyright year. */
(function () {
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.site-nav');

  menuButton?.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    navigation.classList.toggle('is-open', !isOpen);
  });

  navigation?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton?.setAttribute('aria-expanded', 'false');
      navigation.classList.remove('is-open');
    });
  });

  document.querySelectorAll('.certificate-image-wrap img').forEach((image) => {
    image.addEventListener('error', () => {
      image.hidden = true;
      image.nextElementSibling?.removeAttribute('hidden');
    });
  });

  document.querySelector('#year').textContent = new Date().getFullYear();
})();

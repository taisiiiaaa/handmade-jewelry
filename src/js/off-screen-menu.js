(() => {
  const refs = {
    hamMenu: document.querySelector('.menu-toggle'),
    offScreenMenu: document.querySelector('[data-menu]'),
    mobLinks: document.querySelectorAll('.off-screen-menu-link'),
    orderBtn: document.querySelector('.off-screen-menu-order'),
  };

  refs.mobLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
  });

  refs.hamMenu.addEventListener('click', toggleMenu);
  refs.orderBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    const isOpen = refs.offScreenMenu.classList.toggle('is-open');
    refs.hamMenu.classList.toggle('active');

    document.body.classList.toggle('no-scroll', isOpen);
  }
})();

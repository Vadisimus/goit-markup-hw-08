(() => {
  const refs = {
    openMobileMenuBtn: document.querySelector("[data-MobileMenu-open]"),
    closeMobileMenuBtn: document.querySelector("[data-MobileMenu-close]"),
    MobileMenu: document.querySelector("[data-MobileMenu]"),
  };

  refs.openMobileMenuBtn.addEventListener("click", toggleMobileMenu);
  refs.closeMobileMenuBtn.addEventListener("click", toggleMobileMenu);

  function toggleMobileMenu() {
    refs.MobileMenu.classList.toggle("is-hidden");
  }
})();
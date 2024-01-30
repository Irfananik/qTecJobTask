function mobileMenuToggle() {
    let nav = document.querySelector('.navbar-link');
    nav.classList.toggle('show');

    let bannerSection = document.getElementById('banner-section');
    bannerSection.style.marginTop = nav.classList.contains('show') ? '110px' : '0';
}

/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    // Validate that variables exist
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.header-link')

function linkAction() {
    const navMenu = document.getElementById('header-menu')
        // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    distance: '90px',
    duration: 3000,
})
sr.reveal(`.intro-card`,{origin: 'top', delay: 100})
sr.reveal(`.intro-title,.intro-btn`,{origin: 'left', delay: 300})
sr.reveal(`.services-cards`, {origin: 'right', delay: 400})
sr.reveal(`.about-us`, {origin: 'left', delay: 200})
sr.reveal(`.about-img`, {origin: 'right', delay: 300})
sr.reveal(`.process-title,.process-sub__title`, {origin: 'top', delay: 200})
sr.reveal(`.process-cards`, {origin: 'right', delay: 200})
sr.reveal(`.contact-form`, {origin: 'left', delay: 300})






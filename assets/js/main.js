/*=============== LOGIN FORM ===============*/
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let loginTitle = document.querySelector('.login-form-container h1'); // Add this line to select the h1 element

formBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
    loginTitle.innerText = "Travielite"; // Change "Your New Title" to the desired title
});

formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
    loginTitle.innerText = "Travielite"; // Reset the title when closing the form
});

/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const header = document.getElementById('header');
    const logoImg = document.querySelector('.nav__logo img');
    const isDarkMode = document.body.classList.contains('dark-theme');

    // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 100) {
        header.classList.add('scroll-header');
        if (!isDarkMode) {
            logoImg.src = 'assets/img/icon-dark.png'; // Ganti dengan path logo versi gelap
        }
    } else {
        header.classList.remove('scroll-header');
        if (!isDarkMode) {
            logoImg.src = 'assets/img/icon-light.png'; // Ganti dengan path logo versi terang
        }
    }

    // Jika dark mode aktif dan scroll lebih dari 100px, tidak perlu mengubah logo
    if (isDarkMode && this.scrollY >= 100) {
        logoImg.src = 'assets/img/icon-light.png'; // Tetap menggunakan logo versi gelap
    }
}

window.addEventListener('scroll', scrollHeader);




/*==================== SWIPER DISCOVER ====================*/
let swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 0,
    },
})

/*==================== VIDEO ====================*/
const videoFile = document.getElementById('video-file'),
      videoButton = document.getElementById('video-button'),
      videoIcon = document.getElementById('video-icon')

function playPause(){ 
    if (videoFile.paused){
        // Play video
        videoFile.play()
        // We change the icon
        videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-line')
    }
    else {
        // Pause video
        videoFile.pause(); 
        // We change the icon
        videoIcon.classList.remove('ri-pause-line')
        videoIcon.classList.add('ri-play-line')

    }
}
videoButton.addEventListener('click', playPause)

function finalVideo(){
    // Video ends, icon change
    videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-play-line')
}
// ended, when the video ends
videoFile.addEventListener('ended', finalVideo)


/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');

    // Check if the element exists before trying to access its classList
    if (scrollUp) {
        // When the scroll is higher than 200 viewport height, add the show-scroll class to the element
        if (this.scrollY >= 200) {
            scrollUp.classList.add('show-scroll');
        } else {
            scrollUp.classList.remove('show-scroll');
        }
    }
}

window.addEventListener('scroll', scrollUp);

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id'); // Declare sectionId with const

        const menuLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (menuLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                menuLink.classList.add('active-link');
            } else {
                menuLink.classList.remove('active-link');
            }
        }
    });
}

// Call scrollActive function on scroll event
window.addEventListener('scroll', scrollActive);


/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '20px',
    duration: 1500,
    // reset: true,
})


sr.reveal(`.home__data, .home__social-link, .home__info,
           .discover__container,
           .experience__data, .experience__overlay,
           .place__card,
           .sponsor__content,
           .footer__data, .footer__rights, .services__item, .booking, .contact, . `,{
    origin: 'top',
    interval: 50,
})

sr.reveal(`.about__data, 
           .video__description`,{
    origin: 'left',
})

sr.reveal(`.about__img-overlay, 
           .video__content`,{
    origin: 'right',
    interval: 100,
})





/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


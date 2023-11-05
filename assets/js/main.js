/*=============== SHOW MENU ===============*/
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

// Get all choice buttons
const buttons = document.querySelectorAll('.choice');

// Add click event listener to each button
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // Toggle the "selected" class of the clicked button
        button.classList.toggle('selected');
    });
});


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home__header, .section__title`,{delay: 600})
sr.reveal(`.home__footer`,{delay: 700})
sr.reveal(`.home__img`,{delay: 900, origin: 'top'})

sr.reveal(`.sponsor__img, .products__card, .footer__logo, .footer__content, .footer__copy`,{origin: 'top', interval: 100})
sr.reveal(`.specs__data, .discount__animate`,{origin: 'left', interval: 100})
sr.reveal(`.specs__img, .discount__img`,{origin: 'right'})
sr.reveal(`.case__img`,{origin: 'top'})
sr.reveal(`.case__data`)

// Assuming you have a reference to the HTML element where you want to update the progress bar. Below function for updating progress bar. 
function updateProgressBar(cardSelector, newProgressValue) {
    const progressBar = document.querySelector(`${cardSelector} .profile-percent`);
    progressBar.style.setProperty('--progress-width', newProgressValue);
  }
  
  // Example usage:
  updateProgressBar('.card1', '90%'); // Update the progress bar for card with class 'card1'
  updateProgressBar('.card2', '75%'); // Update the progress bar for card with class 'card2'
  
// Below function for updating gender icon. 
// JavaScript function to change the gender icon based on gender value
// JavaScript function to change the gender icon based on gender value
function setGenderIcon(gender) {
    const genderIcon = document.getElementById('genderIcon');
    
    if (gender === 'male') {
        genderIcon.innerHTML = '<i class="fas fa-mars" style="color: gold;"></i>';
    } else if (gender === 'female') {
        genderIcon.innerHTML = '<i class="fas fa-venus" style="color: gold;"></i>';
    } else {
        // Handle other gender values or unknown values
        genderIcon.innerHTML = '';
    }
}

// Example usage:
setGenderIcon('male'); // Call this function with 'male' or 'female' to set the gender icon.

/* Menu Show/ Hide */
    const navMenu = document.getElementById('nav-menu'), 
          navToggle = document.getElementById('nav-toggle'),
          navClose = document.getElementById('nav-close')
/* Menu Show 
    validate if constant exists */
    if (navToggle){
            navToggle.addEventListener('click', () =>{ 
                navMenu.classList.add('show-menu')
            })
    }

/* Menu Hides 
    validate if constant exists */
    if (navClose){
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show-menu')
        })
    }

/* Hide Menu for Mobile */
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
// When each nav_link is clicked, the show_menu class hides
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* Skills */

/* Qualifications */
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')
    
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    }) 
}

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


// Qualifications
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    // console.log(tab.dataset)
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.1,
    spaceBetween: 10,
    slidesPerGroup: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });

  const sections = document.querySelectorAll('section[id]')

  function scrollActive() {
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

// change header background
function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >= 80) {
        nav.classList.add('scroll-header')
    }else{
        nav.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll', scrollHeader)

// scroll up
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up')

    if(this.scrollY >= 560) {
        scrollUp.classList.add('show-scroll')
    }else{
        scrollUp.classList.remove('show-scroll')
    }
}
window.addEventListener('scroll', scrollUp)

// dark theme
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'fa-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme)
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

// contact form 
let form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      let status = document.getElementById("status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.classList.add('success')
        status.innerHTML = "Thanks! You the best!";
        form.reset()
      }).catch(error => {
        status.classList.add('error')
        status.innerHTML = "Oops! There was a problem submitting your form but you can always contact me on LinkedIn!"
      });
    }
    form.addEventListener("submit", handleSubmit)
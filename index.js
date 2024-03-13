//setting the card slider section
const swiper = new Swiper('.swiper', {
  // Optional parameters
  //direction: 'vertical',
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints:{
    0: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 2,
    },
    1080: {
        slidesPerView: 3,
    },
},
  

});



const faqs = document.querySelectorAll(".faqsBtn");

//use to control the faq section show and hide content and buttom
faqs.forEach(faq => faq.addEventListener("click", (e)=>{
  content = faq.querySelector(".faqContent")

  if (content.classList.contains('show')) {
    content.style.animationName = "hide";
    setTimeout(()=>{
      content.classList.remove('show');
    },500);
    faq.querySelector(".showContent").classList.remove('hidden');
    faq.querySelector(".hideContent").classList.add('hidden');
  } else {
    content.style.animationName = "show";
    content.classList.add('show');
    faq.querySelector(".showContent").classList.add('hidden');
    faq.querySelector(".hideContent").classList.remove('hidden');
  }

}));


const menuIcon = document.querySelector('#menuIcon');
const menu = document.querySelector('#menu');
const navbar = document.getElementById('navBar');

//set event listener for menu animation and change background color
menuIcon.addEventListener('click', (e) => {
    if (menu.classList.contains('show')) {
      document.querySelector("#menu").style.animationName = "menuHide";
      navbar.style.backgroundColor = "";
      setTimeout(()=>{
        menu.classList.remove('show');
      },500);
      
    } else {
      document.querySelector("#menu").style.animationName = "menuShow";
      menu.classList.add('show');
      navbar.style.backgroundColor = "white";
    }
});
//set event listener for screen size change
window.addEventListener('resize', () => {
  const screenWidth = window.innerWidth;
  //hide the drop down menu for lx size screen
  if(screenWidth >= 1280){
    document.querySelector("#menu").style.animationName = "menuHide";
    setTimeout(()=>{
      menu.classList.remove('show');
    },500);
  }
  setMainmt();
  changeNavbg();
});


setMainmt();
//set main mergin top. 
function setMainmt(){
  const navbar = document.getElementById('navBar');
  const height = navbar.clientHeight;
  const main = document.getElementById('main');
  main.style.marginTop = (height+10) + "px" 
  console.log(height)
  console.log(navbar.style.top)
  console.log(main.classList)
}

const element = document.getElementById('navBar');

// Create a ResizeObserver instance
const observer = new ResizeObserver(entries => {
  for (let entry of entries) {
    // Log the new height of the observed element
    console.log('Height:', entry.contentRect.height);
    
    // Get the position of the special area relative to the viewport
    const faqsectionAreaPosition = faqsection.getBoundingClientRect().top;

    // Check if the top of the special area is visible in the viewport
    if (faqsectionAreaPosition < navbar.clientHeight) {
        // Change the background color when the special area is in view
        navbar.style.backgroundColor = 'white';
    }
  }
});

// Observe the target element for size changes
observer.observe(element);

const faqsection = document.getElementById('faqsection');

// Add a scroll event listener to the window
window.addEventListener('scroll', function() {
  changeNavbg();
});

function changeNavbg(){
  const navbar = document.getElementById('navBar');
  // Get the current scroll position
  // const scrollPosition = window.scrollY;
  // console.log('Scroll position:', scrollPosition);

  // Get the position of the special area relative to the viewport
  const faqsectionAreaPosition = faqsection.getBoundingClientRect().top;
  //if the navbar is active then do not change the bg color
  if(!(menu.classList.contains('show'))){
    // Check if the top of the special area is visible in the viewport
    if (faqsectionAreaPosition < navbar.clientHeight) {
        // Change the background color when the special area is in view
        navbar.style.backgroundColor = 'white';
    } else {
        // Reset the background color when the special area is out of view
        navbar.style.backgroundColor = '';
    }
  }

}




// basic show and hide for faq section
// const faqs = document.querySelectorAll(".faqsBtn");
// faqs.forEach(faq => faq.addEventListener("click", (e)=>{
//   content = faq.querySelector(".faqContent")

//   if (content.classList.contains('hidden')) {
//     content.classList.remove('hidden');
//   } else {
//     content.classList.add('hidden');
//   }

// }));

// basic hide and show for menu
// const menuIcon = document.querySelector('#menuIcon');
// const menu = document.querySelector('#menu');

// menuIcon.addEventListener('click', (e) => {
//     if (menu.classList.contains('hidden')) {
//         menu.classList.remove('hidden');
//         menu.classList.add('visible'); // Add the visible class to trigger the animation
//     } else {
//       menu.classList.remove('visible'); // Remove the visible class to trigger the animation
//         menu.classList.add('hidden');
//     }
// });
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

// const faqs = document.querySelectorAll(".faqsBtn");
// faqs.forEach(faq => faq.addEventListener("click", (e)=>{
//   content = faq.querySelector(".faqContent")

//   if (content.classList.contains('hidden')) {
//     content.classList.remove('hidden');
//   } else {
//     content.classList.add('hidden');
//   }

// }));


const faqs = document.querySelectorAll(".faqsBtn");
// faqs.forEach(faq => faq.addEventListener("click", (e)=>{
//   content = faq.querySelector(".faqContent")

//   if (content.classList.contains('show')) {
//     content.style.animationName = "hide";
//     setTimeout(()=>{
//       content.classList.remove('show');
//     },500);
    
//   } else {
//     content.style.animationName = "show";
//     content.classList.add('show');
//   }

// }));


faqs.forEach(faq => faq.addEventListener("click", (e)=>{
  content = faq.querySelector(".faqContent")

  if (content.classList.contains('show')) {
    content.style.animationName = "menuHide";
    setTimeout(()=>{
      content.classList.remove('show');
    },500);
    faq.querySelector(".showContent").classList.remove('hidden');
    faq.querySelector(".hideContent").classList.add('hidden');
  } else {
    content.style.animationName = "menuShow";
    content.classList.add('show');
    faq.querySelector(".showContent").classList.add('hidden');
    faq.querySelector(".hideContent").classList.remove('hidden');
  }

}));

// const faqs = document.querySelectorAll(".faqsBtn");
// faqs.forEach(faq => faq.addEventListener("click", (e)=>{
//   content = faq.querySelector(".faqContent");
//   content.classList.toggle('show');

// }));

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

const menuIcon = document.querySelector('#menuIcon');
const menu = document.querySelector('#menu');

menuIcon.addEventListener('click', (e) => {
    if (menu.classList.contains('show')) {

      document.querySelector("#menu").style.animationName = "menuHide";
      setTimeout(()=>{
        menu.classList.remove('show');
      },500);
      
    } else {
      document.querySelector("#menu").style.animationName = "menuShow";
      menu.classList.add('show');
    }
});

window.addEventListener('resize', () => {
  const screenWidth = window.innerWidth;
  if(screenWidth >= 1280){
    document.querySelector("#menu").style.animationName = "menuHide";
    setTimeout(()=>{
      menu.classList.remove('show');
    },500);
  }
});

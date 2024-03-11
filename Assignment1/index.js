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
faqs.forEach(faq => faq.addEventListener("click", (e)=>{
  content = faq.querySelector(".faqContent")

  if (content.classList.contains('hidden')) {
    content.classList.remove('hidden');
  } else {
    content.classList.add('hidden');
  }

}));


const menuIcon = document.querySelector('#menuIcon');
const menu = document.querySelector('#menu');

menuIcon.addEventListener('click', (e) => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
});

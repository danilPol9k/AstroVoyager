const swiper1 = new Swiper(".swiper1", {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



let size1 = document.querySelector('.faq-element1-wrapper')
let text1 = document.querySelector('.faq-element1__text-drop')
let plus1 = document.querySelector('#plus1')

let size2 = document.querySelector('.faq-element2-wrapper')
let text2 = document.querySelector('.faq-element2__text-drop')
let plus2 = document.querySelector('#plus2')

let size3 = document.querySelector('.faq-element3-wrapper')
let text3 = document.querySelector('.faq-element3__text-drop')
let plus3 = document.querySelector('#plus3')

plus1.onclick = () => {
  if (plus1.textContent === '+') {
    plus1.textContent = '-'
    text1.style.opacity = 1
    text1.style.transition = 'opacity 0.7s'
    size1.style.paddingBottom = '90px'
    size1.style.transition = 'padding-bottom 0.5s'
  } else if (plus1.textContent === '-') {
    plus1.textContent = '+'
    text1.style.opacity = 0
    text1.style.transition = 'opacity 0.3s'
    size1.style.paddingBottom = '0px'
    size1.style.transition = 'padding-bottom 0.5s'
  }
}
plus2.onclick = () => {
  if (plus2.textContent === '+') {
    plus2.textContent = '-'
    text2.style.opacity = 1
    text2.style.transition = 'opacity 0.9s'
    size2.style.paddingBottom = '90px'
    size2.style.transition = 'padding-bottom 0.5s'
  } else if (plus2.textContent === '-') {
    plus2.textContent = '+'
    text2.style.opacity = 0
    text2.style.transition = 'opacity 0.3s'
    size2.style.paddingBottom = '0px'
    size2.style.transition = 'padding-bottom 0.5s'
  }
}
plus3.onclick = () => {
  if (plus3.textContent === '+') {
    plus3.textContent = '-'
    text3.style.opacity = 1
    text3.style.transition = 'opacity 0.9s'
    size3.style.paddingBottom = '90px'
    size3.style.transition = 'padding-bottom 0.5s'
  } else if (plus3.textContent === '-') {
    plus3.textContent = '+'
    text3.style.opacity = 0
    text3.style.transition = 'opacity 0.3s'
    size3.style.paddingBottom = '0px'
    size3.style.transition = 'padding-bottom 0.5s'
  }
}

const swiper2 = new Swiper(".swiper2", {
  effect: "cards",
  grabCursor: true,
});

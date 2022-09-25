const body = document.querySelector('body')
let bodySize = body.clientWidth

const swiperSlide1 = document.querySelector('#ss1')
const swiperSlide2 = document.querySelector('#ss2')
const swiperItem1 = document.querySelector('#si1')
const swiperItem2 = document.querySelector('#si2')

console.log(bodySize)
function breakpoint() {
  if (bodySize < 591) {
    swiperSlide1.outerHTML = ''
    swiperSlide2.outerHTML = ''
    swiperItem1.outerHTML = ''
    swiperItem2.outerHTML = ''
  }
}

breakpoint()
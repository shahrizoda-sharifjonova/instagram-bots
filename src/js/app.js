import * as functions from "./modules/functions.js";

functions.isWebp();

// import Swiper, { Navigation, Pagination } from 'swiper';

// const swiper = new Swiper();

const menu = document.querySelector('.menu');
const headerContent = document.querySelector('.header__content');
const body = document.querySelector('body');

menu.addEventListener('click', (e)=>{
    headerContent.classList.toggle('active')
    menu.classList.toggle('active')
    body.classList.toggle('hidden')
})

const reviewsBtn1 = document.querySelector('.reviews__btn_1');
const reviewsBtn2 = document.querySelector('.reviews__btn_2');
const reviewsContent = document.querySelector('.reviews__content');

reviewsBtn1.addEventListener('click', (e)=>{
    reviewsContent.classList.toggle('active')
    reviewsBtn2.addEventListener('click', (e)=>{
        reviewsContent.classList.remove('active')
    })
})

$(document).ready(function() {
    $(".accordion > .accordion__button").on("click", function() {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this)
          .siblings(".accordion__content")
          .slideUp(200);
      } else {
        $(".accordion > .accordion__button").removeClass("active");
        $(this).addClass("active");
        $(".accordion__content").slideUp(200);
        $(this)
          .siblings(".accordion__content")
          .slideDown(200);
      }
    });
  });
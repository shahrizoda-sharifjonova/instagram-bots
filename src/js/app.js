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
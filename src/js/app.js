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

const reviewsBtn = document.querySelector('.reviews__btn');
const reviewsContent = document.querySelector('.reviews__content');

reviewsBtn.addEventListener('click', (e)=>{
    reviewsContent.classList.toggle('active')
    let changed = reviewsBtn.innerHTML="Предыдущий случай";
    console.log(changed);
    reviewsBtn.onclick = e => {
        changed = reviewsBtn.innerHTML="Структурировать котиков";
        console.log(changed);
    }
})
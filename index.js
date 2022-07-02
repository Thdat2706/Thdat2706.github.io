// let slideIndex = 1;
// showSlide(slideIndex);

// function plusSlides(n) {
//     showSlide(slideIndex += n)

// }

// function currentSlide(n) {
//     showSlide(slideIndex = n);
// }

// function noclick() {
// }

// function showSlide(n) {
//     console.log(n)

//     let i;
//     let slides = document.getElementsByClassName("mySlides");
//     let dots = document.getElementsByClassName("dot");

//     if (n > slides.length - 2) { slideIndex = slides.length - 2 }
//     if (n < 1) {
//         slideIndex = 1
//     }
//     console.log(slides.length - 2)

//     // for (i = 0; i < slides.length; i++) {
//     //     slides[i].style.display = "none";
//     // }

//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }

//     slides[slideIndex - 1].style.display = "block";
//     slides[slideIndex].style.display = "block";
//     slides[slideIndex + 1].style.display = "block";
//     console.log(slides[slideIndex - 1]);
//     dots[slideIndex - 1].className += " active";
// }

// //xử lí hover
// let slide = document.getElementsByClassName("body-content-3-item-img");
// for (let i = 0; i <= slide.length; ++i) {
//     if (slide[i]) {
//         slide[i].addEventListener('mouseover', function () {
//             slide[i].style.cursor = "pointer";
//         })

//     }
// }

// let text = document.getElementsByClassName("body-content-3-item-text");
// // console.log(text)
// for (let i = 0; i <= text.length; ++i) {

//     if (text[i]) {
//         text[i].addEventListener('mouseover', function () {
//             text[i].style.cursor = "pointer";
//         })
//     }
// }

// //Xử lí Tìm kiếm
// let search = document.querySelector(".header-toolbar-search-input")
// console.log(search)

// if (search) {
//     search.addEventListener('focus', function (e) {
//         //    console.log("hihi")
//         // console.log(       search.classList.placeholder)
//         search.placeholder = "";

//     })

//     search.addEventListener('blur', function (e) {

//         search.placeholder = "Tìm kiếm ...";

//     })
// }

// //xuwr lys logo
// let logo = document.querySelector(".header-grid-nav-img");
// // console.log(logo);
// if (logo) {
//     logo.addEventListener('mouseover', function () {
//         logo.style.cursor = "pointer";
//     })
// }

// //xuwr lys menu 
// let menu = document.querySelector(".header-grid-menu");
// let home = document.querySelector(".home")
// window.addEventListener('scroll', function () {
//     if (window.scrollY > menu.offsetHeight) {
//         menu.classList.add('active');
//         logo.classList.add('logoHome')
//         // console.log(home)
//     }
//     else {
//         menu.classList.remove('active');
//     }
// })

// let img = document.querySelectorAll(".img");
// for (let i = 0; i <= img.length; ++i) {

//     if (img[i]) {
//         img[i].addEventListener('mouseover', function () {
//             img[i].style.cursor = "pointer";
//         })

//     }
// }
// console.log(img)
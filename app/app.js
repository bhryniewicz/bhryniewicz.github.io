const hamburger = document.querySelector(".header__image");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("nav--noactive");
});
const product = document.getElementById("product");
const productList = document.getElementById("productList");
const company = document.getElementById("company");
const companyList = document.getElementById("companyList");
const connect = document.getElementById("connect");
const connectList = document.getElementById("connectList");
const ar1 = document.getElementById("ar1");
const ar2 = document.getElementById("ar2");
const ar3 = document.getElementById("ar3");

product.addEventListener("click", () => {
  productList.classList.toggle("nav__items--active");
  ar1.classList.toggle("nav__arrow--animate-arrow");
});

company.addEventListener("click", () => {
  companyList.classList.toggle("nav__items--active");
  ar2.classList.toggle("nav__arrow--animate-arrow");
});

connect.addEventListener("click", () => {
  connectList.classList.toggle("nav__items--active");
  ar3.classList.toggle("nav__arrow--animate-arrow");
});

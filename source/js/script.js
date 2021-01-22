let page = document.querySelector(".page-header__navigation");
let toogle = document.querySelector(".page-header__nav-toggle");
let navigation = document.querySelector(".page-header__itemlist");
let navButton = document.querySelector(".page-header__nav-button");
let modalOrder = document.querySelector(".products-week__order");
let modalPopup = document.querySelector(".modal-order");

page.classList.remove("page-header__navigation--nojs");

toogle.onclick = function() {
  page.classList.toggle("page-header__navigation--close");
  page.classList.toggle("page-header__navigation--active");
  navigation.classList.toggle("page-header__itemlist--none");
  navigation.classList.toggle("page-header__itemlist--block");
  navButton.classList.toggle("page-header__nav-button--close");
  navButton.classList.toggle("page-header__nav-button--active");
}

modalOrder.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalPopup.classList.add("modal-order--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalPopup.classList.contains("modal-order--show")) {
      evt.preventDefault();
      modalPopup.classList.remove("modal-order--show");
    }
  }
});

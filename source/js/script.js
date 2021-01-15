let page = document.querySelector('.page-header__navigation');
let toogle = document.querySelector('.header-nav__toggle');
let navigation = document.querySelector('.header-nav__list');
let navButton = document.querySelector('.header-nav__button');
let modalBasket = document.querySelector('.catalog__priselink');
let modalOrder = document.querySelector('.products-week__order');
let modalPopup = document.querySelector('.modal-order');

toogle.onclick = function() {
  page.classList.toggle('page-header__navigation--close');
  page.classList.toggle('page-header__navigation--active');
  navigation.classList.toggle('header-nav__list--none');
  navigation.classList.toggle('header-nav__list--block');
  navButton.classList.toggle('header-nav__button--close');
  navButton.classList.toggle('header-nav__button--active');
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

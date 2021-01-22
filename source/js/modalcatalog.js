document.querySelectorAll(".catalog__priselink").forEach((modalBasket) => {
  modalBasket.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalPopup.classList.add("modal-order--show");
  });
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalPopup.classList.contains("modal-order--show")) {
      evt.preventDefault();
      modalPopup.classList.remove("modal-order--show");
    }
  }
});

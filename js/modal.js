var feedback = document.querySelector(".address-contact");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var username = popup.querySelector(".feedback-name");
var mail = popup.querySelector(".feedback-mail");

var mapLink = document.querySelector(".button-modal-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

var bookMarksLink = document.querySelectorAll(".cart-button");
var bookMarksPopup = document.querySelector(".modal-bookmarks");
var bookMarksClose = bookMarksPopup.querySelector(".modal-close");

feedback.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  username.focus();
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
  if (!username.value || !mail.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

mapLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
  }
});

for (var i = 0; i < bookMarksLink.length; i++) {
  bookMarksLink[i].addEventListener('click', function(evt) {
    evt.preventDefault();
    bookMarksPopup.classList.add("modal-show");
  })
}

bookMarksClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  bookMarksPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (bookMarksPopup.classList.contains("modal-show")) {
      bookMarksPopup.classList.remove("modal-show");
    }
  }
});

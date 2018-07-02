var bookMarksLink = document.querySelectorAll(".products-buy-button");
var bookMarksPopup = document.querySelector(".modal-bookmarks");


bookMarksLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	bookMarksPopup.classList.add("modal-show");
});
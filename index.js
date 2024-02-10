var images = document.querySelectorAll(".modal-gallery .gallery-item img");
console.log(images);
var imageSrc = null;
var imageIndex = 0;
images.forEach(function (image, index) {
    image.addEventListener("click", function () {
        generateModal(image.src);
        imageIndex = index;
    });
});
function generateModal(imageSrc) {
    var modal = document.createElement("div");
    modal.setAttribute("class", "modal");
    document.querySelector("main").append(modal);
    var modalImage = document.createElement("img");
    modalImage.setAttribute("src", imageSrc);
    var closeButton = document.createElement("div");
    closeButton.setAttribute("class", "close-button");
    closeButton.innerHTML = "&#10005;";
    closeButton.onclick = function () {
        modal.remove();
    };
    var prevButton = document.createElement("div");
    prevButton.innerHTML = "&#8592;";
    prevButton.setAttribute("class", "prev-button");
    prevButton.onclick = function () {
        modalImage.setAttribute("src", prevImage());
    };
    var nextButton = document.createElement("div");
    nextButton.innerHTML = "&#8594;";
    nextButton.setAttribute("class", "next-button");
    nextButton.onclick = function () {
        modalImage.setAttribute("src", nextImage());
    };
    modal.append(modalImage, closeButton, prevButton, nextButton);
}
function prevImage() {
    imageIndex++;
    if (imageIndex >= images.length) {
        imageIndex = 0;
    }
    return images[imageIndex].src;
}
function nextImage() {
    imageIndex--;
    if (imageIndex < 0) {
        imageIndex = images.length - 1;
    }
    return images[imageIndex].src;
}

const images: NodeListOf<HTMLImageElement> = document.querySelectorAll(
  ".modal-gallery .gallery-item img"
);
console.log(images);

let imageSrc: string | null = null;
let imageIndex: number = 0;

images.forEach((image, index) => {
  image.addEventListener("click", () => {
    generateModal(image.src);
    imageIndex = index;
  });
});

function generateModal(imageSrc: string) {
  const modal = document.createElement("div");
  modal.setAttribute("class", "modal");
  document.querySelector("main").append(modal);

  const modalImage = document.createElement("img");
  modalImage.setAttribute("src", imageSrc);

  const closeButton = document.createElement("div");
  closeButton.setAttribute("class", "close-button");
  closeButton.innerHTML = "&#10005;";
  closeButton.onclick = () => {
    modal.remove();
  };

  const prevButton = document.createElement("div");
  prevButton.innerHTML = "&#8592;";
  prevButton.setAttribute("class", "prev-button");
  prevButton.onclick = () => {
    modalImage.setAttribute("src", prevImage());
  };

  const nextButton = document.createElement("div");
  nextButton.innerHTML = "&#8594;";
  nextButton.setAttribute("class", "next-button");
  nextButton.onclick = () => {
    modalImage.setAttribute("src", nextImage());
  };

  modal.append(modalImage, closeButton, prevButton, nextButton);
}

function prevImage(): string {
  imageIndex++;

  if (imageIndex >= images.length) {
    imageIndex = 0;
  }

  return images[imageIndex].src;
}

function nextImage(): string {
  imageIndex--;

  if (imageIndex < 0) {
    imageIndex = images.length - 1;
  }

  return images[imageIndex].src;
}

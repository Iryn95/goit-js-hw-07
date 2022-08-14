// import { galleryItems } from './gallery-items.js';
// // Change code below this line

// console.log(galleryItems);

import { galleryItems } from './gallery-items.js';
// Change code below this line

const pictureContainer = document.querySelector('.gallery');
const pictureMarkup = createPictureCardMarkup(galleryItems);

pictureContainer.insertAdjacentHTML("beforeend", pictureMarkup)

function createPictureCardMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
    }).join("");
};

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 300,
    showCounter: false
});
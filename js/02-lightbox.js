import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery');

const makeGallery = (event) => {

    const img = galleryItems.map((item) =>
        `<li class="gallery__item">
        <a href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
      </a>
      </li>`
    ).join('');

    galleryList.innerHTML = img;
};
makeGallery();

const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: 'alt'});





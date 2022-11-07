import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery');

const makeGallery = () => {
    const img = galleryItems.map((galleryItem) =>
        `<div class="gallery__item">
<a class="gallery__link" href="${galleryItem.description}">
  <img
    class="gallery__image"
    src="${galleryItem.preview}"
    data-source="${galleryItem.original}"
    alt="${galleryItem.description}"
  />
</a>
</div>`).join('');

    galleryList.innerHTML = img;
};

makeGallery();

galleryList.addEventListener('click', (event) => {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
        return;
    }

    const instance = basicLightbox.create(`
<img src="${event.target.dataset.source}" alt ="${event.target.alt}" width="800" height="600">
`)
console.log(event.target.dataset.source);
    instance.show();
    const closeModal = (e) => {
        if (e.code === 'Escape') {
            instance.close();
        }
        galleryList.remoteEventListener('keydown', closeModal)
    };

    galleryList.addEventListener('keydown', closeModal);

    
});
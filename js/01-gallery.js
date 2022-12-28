import { galleryItems } from './gallery-items.js';



const galleryContainer = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, original, description }) =>
    `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`).join('');

galleryContainer.insertAdjacentHTML('beforeend', markup);

galleryContainer.addEventListener('click', onClick);

function onClick(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') {
        return;
    };

    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">`

)

instance.show();
}



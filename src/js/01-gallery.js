import _default from '../../node_modules/simplelightbox/dist/simple-lightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const imagesLibrary = {
  itemsList: document.querySelector('.gallery'),
};

function makeGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a> `;
    })
    .join('');
}

imagesLibrary.itemsList.innerHTML = makeGalleryItems(galleryItems);

new SimpleLightbox('.gallery a', {
  showCounter: false,
  disableScroll: false,
  captionsData: 'alt',
  captionDelay: 250,
  loop: true,
});
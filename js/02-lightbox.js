import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryContainer = document.querySelector('.gallery');

const markupGallery = createGaleryCardMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', markupGallery);

const onAltText = (evt) => { 
    evt.target.a
}

galleryContainer.addEventListener('click', onGalleryContainerClick);

var lightbox = new SimpleLightbox('.gallery a', {captionType : 'attr', captionsData : 'alt', captionPosition : 'bottom', captionDelay: '250'});

function createGaleryCardMarkup(galleryItems) {
   return  galleryItems.map(({ preview, original, description}) => {
       return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li> 
    `;
    }).join('');
}


function onGalleryContainerClick(evt) {
    evt.preventDefault();
    const isGalleryImageEl = evt.target.classList.contains('gallery__image');
    if (!isGalleryImageEl) {
        return;
     }
   	basicLightbox.create(`
		<img width="1400" height="900" src="${evt.target.dataset.source}">
	`).show()

    window.addEventListener('keydown', onCloseModalClick);
}


function onCloseModalClick(evt) {
    const modalLightbox = document.querySelector(".basicLightbox")
    if (evt.code === "Escape") {
        modalLightbox.classList.remove("basicLightbox--visible");
    }
    window.removeEventListener('keydown', onCloseModalClick);
}
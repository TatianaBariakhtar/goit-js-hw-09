import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"; 

const images = [
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
      description: 'Hokkaido Flower',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
      description: 'Container Haulage Freight',
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const galleryContainer = document.querySelector('ul.gallery'); 
    console.log("JS підключено");
    console.log(galleryContainer); 

    if (!galleryContainer) {
        console.error("❌ Не знайдено елемент .gallery!");
        return;
    }

    const galleryMarkup = images
      .map(
        ({ preview, original, description }) => `
        <li class="gallery-item">
          <a class="gallery-link" href="${original}">
            <img
              class="gallery-image"
              src="${preview}"
              alt="${description}"
            />
          </a>
        </li>
      `
      )
      .join('');

    galleryContainer.innerHTML = galleryMarkup;

   
    const lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',  
      captionPosition: 'bottom',  
      captionDelay: 250,  
    });

    console.log("✅ SimpleLightbox ініціалізовано!");
});





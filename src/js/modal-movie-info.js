import * as basicLightbox from 'basiclightbox';
import { getMovieById } from './fetch-functions/get-movie-info';
import { activateModalBtns } from './modal/activate-movie-modal';
import { renderModalFilm } from './modal/render-modal';

export async function onMovieCardClick(evt) {
  evt.preventDefault();
  const currentItem = evt.target.closest('li');
  let id = +currentItem.dataset.id;

  try {
    document.querySelector('body').classList.add('modal-open');

    const movieId = await getMovieById(id);
    console.log(movieId);
    const movieInfo = await movieId.data;
    console.log(movieInfo);
    renderModalFilm({ movieInfo });

    
  }
    catch (error) {
      console.log(error);
    }
}

onMovieCardClick().then(movieInfo => {
  instance = basicLightbox.create(movieInfo);

  instance.show();

  activateModalBtns();
});
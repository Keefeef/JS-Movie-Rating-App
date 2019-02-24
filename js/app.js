console.log('app loaded', window);

document.addEventListener('DOMContentLoaded', () => {
const newItemform = document.querySelector('#new-item-form');
newItemform.addEventListener('submit', handleFormSubmit)

const deleteAllButton = document.querySelector('#delete-all');
deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleFormSubmit = function (event) {
  event.preventDefault();

  const filmItem = createFilmItem(event.target);
  const films = document.querySelector('#films');
  films.appendChild(filmItem);

event.target.reset();

}

const createFilmItem = function (form) {
  const filmItem = document.createElement('li');
  filmItem.classList.add('film-item');

  const title = document.createElement('h2');
  title.textContent = form.title.value;
  filmItem.appendChild(title);

  const year = document.createElement('h3');
  year.textContent = form.year.value;
  filmItem.appendChild(year);

  const rating = document.createElement('h3');
  rating.textContent = form.rating.value;
  filmItem.appendChild(rating);

  return filmItem;

}


const handleDeleteAllClick = function (event) {
const film = document.querySelector('#films');
film.innerHTML = '';

}

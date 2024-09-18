const cars = [
  {
    id: 1,
    car: 'Honda',
    type: 'Civic',
    price: 12000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/2022_Honda_Civic_LX_Sedan%2C_front_right%2C_11-02-2022.jpg/250px-2022_Honda_Civic_LX_Sedan%2C_front_right%2C_11-02-2022.jpg',
  },
  {
    id: 2,
    car: 'Audi',
    type: 'Q7',
    price: 40000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI3PgqXcdh-7ZyzdYB0pNO-J3S5V4virmpGA&s',
  },
  {
    id: 33,
    car: 'BMW',
    type: '5 series',
    price: 9000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsckcl39aJ8g1hBl6c1XSHtRqa_lF3kph9Rg&s',
  },
  {
    id: 3,
    car: 'Honda',
    type: 'Civic',
    price: 12000,
    number: '+380000000000',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/2022_Honda_Civic_LX_Sedan%2C_front_right%2C_11-02-2022.jpg/250px-2022_Honda_Civic_LX_Sedan%2C_front_right%2C_11-02-2022.jpg',
  },
  {
    id: 4,
    car: 'Audi',
    type: 'Q7',
    price: 40000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI3PgqXcdh-7ZyzdYB0pNO-J3S5V4virmpGA&s',
  },
  {
    id: 5,
    car: 'BMW',
    type: '5 series',
    price: 9000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsckcl39aJ8g1hBl6c1XSHtRqa_lF3kph9Rg&s',
  },
  {
    car: 'Honda',
    type: 'Civic',
    price: 12000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/2022_Honda_Civic_LX_Sedan%2C_front_right%2C_11-02-2022.jpg/250px-2022_Honda_Civic_LX_Sedan%2C_front_right%2C_11-02-2022.jpg',
  },
  {
    car: 'Audi',
    type: 'Q7',
    price: 40000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI3PgqXcdh-7ZyzdYB0pNO-J3S5V4virmpGA&s',
  },
  {
    id: 6,
    car: 'BMW',
    type: '5 series',
    price: 9000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsckcl39aJ8g1hBl6c1XSHtRqa_lF3kph9Rg&s',
  },
];

const listEl = document.querySelector('.js-list');
const favoriteListEl = document.querySelector('.js-favorite-list');
const formEl = document.querySelector('.js-form-search');
formEl.addEventListener('submit', onSearch);
listEl.addEventListener('click', onClick);

function createMarckup(arr) {
  return arr
    .map(
      ({ id, car, type, price, img }) => `<li data-id="${id}">
    <img src="${img}" alt="${car}" width="300px" />
    <div class="js-favorite">★</div>
    <h2>${car}</h2>
    <h3>${type}</h3>
    <p>${price}</p>
    </li>`
    )
    .join('');
}

listEl.insertAdjacentHTML('beforeend', createMarckup(cars));
// console.log('test');
// console.log(markup);

function onSearch(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const { query, select } = form.elements;
  const selectValue = select.value;
  const searchCars = cars.filter((item) => {
    return item[selectValue].toLowerCase() === query.value.trim().toLowerCase();
  });
  console.log(searchCars);
  listEl.innerHTML = createMarckup(searchCars);
  //   console.log(searchCars);
  //   console.dir(query.value);
  //   console.dir(select.value);
}

function onClick(event) {
  //   console.log(event.target);
  if (event.target.classList.contains('js-favorite')) {
    event.target.classList.add('favorite-active');
    const { id } = event.target.closest('li').dataset;

    const { car, type } = cars.find(({ id: carId }) => carId === Number(id));
    // console.log(event.target);
    addFavorite(`${car} ${type}`);
  }
}

function addFavorite(car) {
  favoriteListEl.insertAdjacentHTML('beforeend', `<li>${car}</li>`);
}

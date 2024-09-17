// const inputEl = document.querySelector('.js-input');

// console.dir(inputEl);

// inputEl.addEventListener('change', onInput);

// function onInput(event) {
//   console.log(event.currentTarget.value);
// }

const formEl = document.querySelector('.js-form');

formEl.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const { userName, userEmail, userAge } = event.currentTarget.elements;
  // console.log(event.currentTarget);
  // console.dir(userName.value);
  // console.dir(userEmail.value);
  // console.dir(userAge.value);

  const data = {
    name: userName.value,
    email: userEmail.value,
    age: userAge.value,
  };

  console.log(data);
}

const boxEl = document.querySelector('.js-container');
document.addEventListener('keydown', onKey);

function onKey(event) {
  console.log(event.code);
  // if (event.code === 'Escape' || event.code === 'Enter') {
  //   boxEl.classList.toggle('toggle');
  // }

  if (event.ctrlKey && event.code === 'KeyC') {
    event.preventDefault();
    console.log('Cntrl+C Error');
    return;
  }
  // console.log(event);
}

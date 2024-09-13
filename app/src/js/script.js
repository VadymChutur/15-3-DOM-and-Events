console.log('Hello World');

const buttonClick = document.querySelector('.js-click');
// console.dir(buttonClick);
const containerEl = document.querySelector('.js-container');
// console.log(containerEl);

buttonClick.addEventListener('click', onClick);

let step = 0;

function onClick(event) {
  step += 5;
  containerEl.style.marginLeft = `${step}px`;
  // console.log('Test');
  // console.log(event.currentTarget);
}

const titleEl1 = document.querySelector('.js-title1');
const titleEl2 = document.querySelector('.js-title2');
const titleEl3 = document.querySelector('.js-title3');
const maxLength = 20;
const totalLength = maxLength + 3;
titleEl1.addEventListener('click', onClickText);
titleEl2.addEventListener('click', onClickText);
titleEl3.addEventListener('click', onClickText);

function onClickText(event) {
  const title = event.currentTarget;
  const str = title.textContent.slice(0, maxLength);

  if (title.textContent.length > totalLength) {
    const remainder = title.textContent.slice(maxLength);
    title.setAttribute('data-title', remainder);
    title.textContent = str + '...';
    // console.log(remainder);
  } else {
    const remainder = title.dataset.title;
    if (remainder) {
      title.textContent = str + remainder;
    }
    // console.log(remainder);
  }
}

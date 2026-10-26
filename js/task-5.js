function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorText = document.querySelector('.color');
const changeBtn = document.querySelector('.change-color');

changeBtn.addEventListener('click', event => {
  const randomColor = getRandomHexColor();
  colorText.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
});

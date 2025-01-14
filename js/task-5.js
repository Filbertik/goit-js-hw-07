function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777216)
    //Змінив значення у формулі, враховуючи обговорення у групі ДЗ-7
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const colorValue = document.querySelector(".color");
const bgColor = document.body;

changeColorBtn.addEventListener("click", () => {
  const randomColor = getRandomHexColor();

  bgColor.style.backgroundColor = randomColor;

  colorValue.textContent = randomColor;
});

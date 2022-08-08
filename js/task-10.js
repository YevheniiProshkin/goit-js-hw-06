// Напиши скрипт создания и очистки коллекции элементов.Пользователь вводит количество элементов в input и нажимает кнопку Создать,
//   после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>
// Создай функцию createBoxes(amount), которая принимает один параметр - число.Функция создает столько < div >,
//   сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

const boxesContainerEl = document.querySelector("#boxes");
const numberInputEl = document.querySelector("#controls input");
const createBoxBtnEl = document.querySelector("[data-create]");
const deleteBoxBtnEl = document.querySelector("[data-destroy]");

createBoxBtnEl.addEventListener("click", onBoxCreate);
deleteBoxBtnEl.addEventListener("click", destroyBoxes);

function onBoxCreate(e) {
  const createdBoxes = getNumberOfBoxes();

  if (numberInputEl.valueAsNumber)
    createBoxes(numberInputEl.valueAsNumber, createdBoxes);
}

function createBoxes(amount, startNumber) {
  let markup = "";

  for (let i = 0; i < amount; i += 1) {
    const size = 30 + (i + startNumber) * 10;
    const color = getRandomHexColor();
    markup += `<div style="width: ${size}px; height: ${size}px; background-color: ${color}; margin: 5px"></div>`;
  }

  boxesContainerEl.insertAdjacentHTML("beforeend", markup);
}

function getNumberOfBoxes() {
  return boxesContainerEl.querySelectorAll("div").length;
}

function destroyBoxes() {
  boxesContainerElf.innerHTML = "";
  numberInputEl.value = 0;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

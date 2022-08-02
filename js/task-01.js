// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const ulEl = document.querySelector("#categories");
const amountOfCategories = ulEl.children.length;
console.log(`Number of categories: ${amountOfCategories}`);

const liEl = ulEl.children;
for (let i = 0; i < liEl.length; i += 1) {
  const childrenOfLiEl = liEl[i].children;

  const textContentEl = childrenOfLiEl[0].textContent;
  console.log("Category: ", textContentEl);

  const countOfChildEl = childrenOfLiEl[1].children.length;
  console.log("Elements: ", countOfChildEl);
}

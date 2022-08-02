// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = ingredients.map((ingredient) => {
  const ingredientItemEl = document.createElement("li");
  ingredientItemEl.textContent = ingredient;
  ingredientItemEl.classList.add("item");

  return ingredientItemEl;
});
console.log(ingredientsEl);

const ingredientsListEl = document.querySelector("#ingredients");
ingredientsListEl.append(...ingredientsEl);
console.log(ingredientsListEl);

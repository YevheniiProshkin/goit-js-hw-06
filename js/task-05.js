// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.Если инпут пустой, в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const nameInputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");

const onNameInputChange = (event) => {
  if (event.currentTarget.value === "") {
    nameOutputEl.textContent = "Anonymous";
  } else {
    nameOutputEl.textContent = event.currentTarget.value;
  }
};

nameInputEl.addEventListener("input", onNameInputChange);

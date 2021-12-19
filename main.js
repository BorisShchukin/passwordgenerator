// чекбоксы
let onlyLetter = document.querySelector(".only__letter");
let onlyLetterandNumbers = document.querySelector(".only__letter__number");

// генератор паролей
function getPassword(leng) {
  let password = "";
  let symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!№;%:?*()_+=";
  let symbolsLetterAndNumbers = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let symbolsLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < leng; i++) {
    if (onlyLetterandNumbers.checked) {
      password += symbolsLetterAndNumbers.charAt(Math.round(Math.random() * symbolsLetterAndNumbers.length));
    } else if (onlyLetter.checked) {
      password += symbolsLetter.charAt(Math.round(Math.random() * symbolsLetter.length));
    } else {
      password += symbols.charAt(Math.round(Math.random() * symbols.length));
    }
  }
  return password;
}

// формы ввода и кнопки
let number = document.querySelector(".number");
let pass = document.querySelector(".pass");
let gen = document.querySelector(".gen");
let copy = document.querySelector(".copy");

// изменение пароля в форме по клику
gen.addEventListener("click", function () {
  pass.value = getPassword(number.value);
  pass.focus();
  pass.select();
});

//копировать пароль
copy.addEventListener("click", function () {
  pass.focus();
  pass.select();
  document.execCommand("copy");
});

//поле ввода
pass.addEventListener("click", function () {
  pass.focus();
  pass.select();
});

// количество символов в пароле
number.addEventListener("click", function () {
  number.focus();
  number.select();
});

// переключатель темы
let theme = document.querySelector(".theme");
let page = document.querySelector(".page");
theme.addEventListener("click", function () {
  page.classList.toggle("light-theme");
  page.classList.toggle("dark-theme");
});

// попап открыть закрыть
let popup = document.querySelector(".popup");
let openPopupButton = document.querySelector(".button-show");
let closePopupButton = document.querySelector(".button-hide");

openPopupButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("popup--open");
});
closePopupButton.addEventListener("click", function () {
  popup.classList.remove("popup--open");
});
document.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    popup.classList.remove("popup--open");
  }
});

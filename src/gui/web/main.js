const themeButton = document.getElementById("themeButton");
const body = document.body;
const popupik = document.getElementById("popupik");
const inp = document.getElementById("queryInput");
const inp2 = document.getElementById("queryInput2");
const savBut = document.getElementById("saveButton");

themeButton.addEventListener("click", () => {
  if (themeButton.src.includes("texture/2.1th.png")) {
    themeButton.src = "texture/1.1th.png";
    popupik.style.background = "#121212";
    body.classList.toggle("dark-mode");
  } else {
    themeButton.src = "texture/2.1th.png";
    popupik.style.background = "white";
    body.classList.toggle("dark-mode");
  }
});

const languageButton = document.getElementById("languageButton");

languageButton.addEventListener("click", () => {
  const currentLanguage = languageButton.innerText.includes("RU") ? "RU" : "EN";

  if (currentLanguage === "RU") {
    languageButton.innerText = "EN";
    inp.placeholder = "Введите ваш запрос...";
    inp2.placeholder = "Ваш api-key для gpt. . .";
    savBut.innerText = "Сохранить";
  } else {
    languageButton.innerText = "RU";
    inp.placeholder = "Enter your request...";
    inp2.placeholder = "Your api-key for gpt. . .";
    savBut.innerText = "Save";
  }
});

// Получаем элементы
const openPopupButton = document.getElementById("openPopup");
const closePopupButton = document.getElementById("closePopup");
const popup = document.getElementById("popup");

// Открываем попап
openPopupButton.addEventListener("click", () => {
  popup.style.display = "block";
});

// Закрываем попап
closePopupButton.addEventListener("click", () => {
  popup.style.display = "none";
});

// Закрываем попап при клике вне его содержимого
window.addEventListener("click", (event) => {
  if (event.target === popup) {
    popup.style.display = "none";
  }
});

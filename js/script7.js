//  Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const slider = document.querySelector("#font-size-control");
// console.log(slider.value);

// console.dir(slider)
const text = document.querySelector("#text");
// console.log(text.textContent);

slider.addEventListener("input", changeFontSize);

function changeFontSize(evt) {
    console.log(evt.target.value);
    text.style.fontSize = evt.target.value + "px"
    // console.log(text.style.fontSize);
}
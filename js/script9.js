// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.



const boodyColor = document.querySelector("body")
// console.log(boodyColor);
const buttonChangeColor = document.querySelector(".change-color") 
// console.log(buttonChangeColor);
const colorValue = document.querySelector(".color");
console.log(colorValue.textContent);


buttonChangeColor.addEventListener("click",getColor)

function getColor(event) {
    
    const color = `${getRandomHexColor()}`;
    boodyColor.style.backgroundColor = color;
    colorValue.textContent = color;
    // console.log(color);
}
function getRandomHexColor() {
  
    return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
        .padStart(6, 0)}`;
    
} 

//  Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// {/* <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// /> */}


// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const textInput = document.querySelector("#validation-input")
// console.log(textInput);

const validTextLength = Number(textInput.dataset.length)
// console.log("validTextLength:"+validTextLength);

textInput.style.outline = "none"

textInput.style.border = "3px solid #bdbdbd"

textInput.addEventListener("blur", checkTextLength);

function checkTextLength(evt) {
    console.log(evt.target.value.length);

    if (evt.target.value.length === validTextLength ) {
        
        textInput.style.border = "3px solid #4caf50"
        return
    } else  {
        textInput.style.border = "3px solid #f44336"
        return
    }
    

}
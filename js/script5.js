// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".


const nameInput = document.querySelector("#name-input");
// console.log(nameInput.placeholder);
// console.log(nameInput);

const nameOutput = document.querySelector("#name-output")
// console.log(nameOutput.textContent);

nameInput.addEventListener("input", onInput)
function onInput(evt) {
    console.log(evt.target.value);
    if (evt.target.value === "") {
        //    console.log(evt.target.value);
        nameOutput.textContent = "Anonymous"
        return
    } 
    nameOutput.textContent = evt.target.value
    
    
}

// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue. 

let counterValue = 0;
const valueOfCounter = document.querySelector("#value")

// console.log(valueOfCounter.textContent);
const counter = document.querySelector("#counter");
// console.log(counter);
counter.addEventListener("click", onClick);
function onClick(event) {
    // console.log(event.target.dataset.action);
    if (!event.target.dataset.action === "increment" || !event.target.dataset.action === "decrement") {
        return;
    }
        else if (event.target.dataset.action === "increment") {
            counterValue += 1
    } else if(event.target.dataset.action === "decrement"){
        counterValue -= 1
    } 
    
    valueOfCounter.textContent = counterValue;
    console.log(counterValue);
}

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
]; 
const listById = document.querySelector("#ingredients")
// console.log(listById);
const arr = []
const list = ingredients.map(ingredient => {
    
    // console.log(ingredient);
    
    const listItem = document.createElement("li");
    listItem.classList.add("item")
    // console.log(listItem);
    
  listItem.textContent = ingredient
  arr.push(listItem)
    // return listById.append(listItem)
});
// console.log(arr);
listById.append(...arr)
// console.log(listById.children);



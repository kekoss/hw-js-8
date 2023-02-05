/*
1. DOM - це представлення усіх елементів сторінки у вигляді об'єктів які можна змінити 
2. InnerText - повертає тільки текст без тегів, InnerHTML - повертає разом з тегами
3. getElementBy* - вважається застарілим і не рекомендується, найчастіше використовуєтьбся 
querySelector, querySelectorAll ним я вважаю користуватися краще
*/

// Знайти всі параграфи на сторінці та встановити колір фону #ff0000

let paragraphs = document.querySelectorAll("p");

for (let p of paragraphs) {
    p.style.background = "#ff0000";
}
// Знайти елемент із id="optionsList". Вивести у консоль.

let element = document.getElementById('optionsList')
console.log(element);
// Знайти батьківський елемент та вивести в консоль.

let parentElement = element.parentElement
console.log(parentElement);
//  Знайти дочірні ноди, якщо вони є, і вивести в консоль назви та тип нод.

let childElement = element.childNodes
console.log(childElement);

for (let node of element.childNodes){
    console.log(node.nodeName, node.nodeType);
}

// element.childNodes.forEach(node => {
//     console.log(node.nodeName, node.nodeType);
// });

// Встановіть в якості контента елемента з класом testParagraph наступний параграф - This is a paragraph

let test = document.createElement('p')
test.className = "testParagraph"
test.innerHTML = 'This is a paragraph'
element.before(test)

// Отримати елементи, вкладені в елемент із класом main-header і вивести їх у консоль. Кожному з елементів присвоїти новий клас nav-item.

let mainHeader = document.querySelector(".main-header");

for (let item of mainHeader.children){
    item.classList.add('nav-item')
    console.log(item)
}

// Знайти всі елементи із класом section-title. Видалити цей клас у цих елементів.

let section = document.querySelectorAll('.section-title');

for (let item of section){
    item.classList.remove('section-title')
}
console.log(section);

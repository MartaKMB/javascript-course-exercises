// tutaj rozwiązanie

const btn = document.querySelector('button');
const items = document.querySelectorAll('li');
let size = 10;

const displayAndGrowItems = function () {
    size += 10;
    items.forEach(item => {
        item.style.display = 'block';
        item.style.fontSize = `${size}px`;
    });
};

btn.addEventListener('click', displayAndGrowItems);
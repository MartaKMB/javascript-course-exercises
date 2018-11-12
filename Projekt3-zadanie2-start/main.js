let size = 10;
let orderElement = 1;

const init = () => {
    // tutaj kod
    const btn = document.createElement('button');
    btn.innerText = 'Dodaj 10 elementów listy';

    const btnReset = document.createElement('button');
    btnReset.innerText = 'Wyczyść';

    const ulElement = document.createElement('ul');

    document.body.appendChild(btn);
    document.body.appendChild(btnReset);
    document.body.appendChild(ulElement);

    btn.addEventListener('click', createLiElements);
    btnReset.addEventListener('click', cleanElements);
};

const createLiElements = () => {
    // tutaj kod
    for (let i = 0; i < 10; i++) {
        const liElement = document.createElement('li');
        liElement.innerText = `element numer ${orderElement++}`;
        liElement.style.fontSize = `${size++}px`;
        document.querySelector('ul').appendChild(liElement);
    }
};

const cleanElements = () => {
    document.querySelector('ul').textContent = '';
    size = 10;
    orderElement = 1;
};

init();
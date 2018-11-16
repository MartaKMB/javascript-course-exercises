const possibilities = ['walcz', 'przemyś to jeszcze raz'];
const input = document.querySelector('input');
const addBtn = document.querySelector('.add');
const resetBtn = document.querySelector('.clean');
const showBtn = document.querySelector('.showAdvice');
const optionsBtn = document.querySelector('.showOptions');
const advicesPlace = document.querySelector('h1');

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const inputValue = input.value;
    possibilities.push(inputValue);
    input.value = '';
    // console.log(inputValue, ' w ', possibilities);
});

resetBtn.addEventListener('click', (e) => {
    e.preventDefault();
    possibilities.length = 0;
    // console.log(possibilities);
});

showBtn.addEventListener('click', () => {
    const index = Math.floor(Math.random() * possibilities.length);
    const advice = possibilities[index];
    advicesPlace.textContent = advice;
});

optionsBtn.addEventListener('click', () => {
    alert(`dostępne opcje: ${possibilities.join(', ')}`);
});
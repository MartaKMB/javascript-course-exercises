// http://websamuraj.pl/examples/js/projekt11/

const btnTime = document.querySelector('.main');
const btnReset = document.querySelector('.reset');
const panel = document.querySelector('.time div');

let time = 0;
let active = false;
let intervalId;

const timer = () => {
    // if (!active) {
    //     active = !active;
    //     btnTime.textContent = 'Pauza';
    //     intervalId = setInterval(start, 10)
    // } else {
    //     active = !active;
    //     btnTime.textContent = 'Start';
    //     clearInterval(intervalId);
    // }
    active = !active;
    btnTime.textContent = `${!active ? 'Pauza' : 'Start'}`;
    !active ? intervalId = setInterval(start, 10) : clearInterval(intervalId);
}

const start = () => {
    time++;
    panel.textContent = (time / 100).toFixed(2);
}

const reset = () => {
    time = 0;
    panel.textContent = '---';
    active = false;
    btnTime.textContent = 'Start';
    clearInterval(intervalId)
}

btnTime.addEventListener('click', timer);
btnReset.addEventListener('click', reset);
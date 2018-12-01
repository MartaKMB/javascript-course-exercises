const timer = () => {
    let time = 0;

    const setTime = () => {
        // console.log(`Jesteś na tej stronie od ${time++} sekund`);
        document.body.textContent = `Jesteś na tej stronie od ${time++} sekund`;
    }

    return setTime;
}

const timerPrinter = timer();
setInterval(timerPrinter, 1000);
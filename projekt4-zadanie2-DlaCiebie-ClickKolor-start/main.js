// KOLOR GENEROWANY W ZALEŻNOŚCI OD TEGO GDZIE KLIKNIEMY

// jeśli wartość dla x (event.clientX) i y (event.clientY) jest parzysta (np. 100,122)  to kolor czerwony
// jesli wartość dla x i y jest nieparzysta to kolor niebieski
// jeśli jeden z kolorów jest parzysty a drugi nieparzysty to kolor zielony

document.body.addEventListener('click', function (e) {
    console.log(`${e.clientX} ${e.clientY}`);

    const color = getColor(event);
    document.body.style.backgroundColor = color;
});

const getColor = (e) => {
    let color;
    if (e.clientX % 2 === 0 && e.clientY % 2 === 0) {
        color = 'red';
    } else if (e.clientX % 2 !== 0 && e.clientY % 2 !== 0) {
        color = 'blue';
    } else {
        color = 'green';
    }
    return color;
}
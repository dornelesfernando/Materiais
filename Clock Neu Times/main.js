const caracteres = [ ...document.querySelectorAll('.caracter')];
const mumberSize = '8';

function highlight(caracter, d) {
    caracteres[caracter].querySelector(`.number:nth-of-type(${d + 1})`).classList.add('pop')

    setTimeout(() => {
        caracteres[caracter].querySelector(`.number:nth-of-type(${d + 1})`).classList.remove('pop');
    }, 950);
}

function caracterSlider(caracter, number){
    let d1 = Math.floor(number / 10);
    let d2 = number % 10;

    caracteres[caracter].style.transform = `translateY(${d1 * -mumberSize}vmin)`;
    highlight(caracter, d1);
    caracteres[caracter].style.transform = `translateY(${d2 * -mumberSize}vmin)`;
    highlight(caracter + 1, d2);
}

setInterval(() => {
    const data = new Date;
    const hour = data.getHours();
    const minute = data.getMinutes();
    const second = data.getSeconds();
    caracterSlider(0, hour);
    caracterSlider(2, minute);
    caracterSlider(4, second);
}, 1000);
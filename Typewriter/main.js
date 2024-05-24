const div = document.querySelector('.text_wrapper');
const input = document.querySelector('input[type=text]');

function elementCreater(element){
    return document.createElement(`${element}`);
}

const p = elementCreater('p');
div.appendChild(p);

input.addEventListener('keypress', (e) => {
    if(e.key == 'Enter') recebeMensagem();
});

function recebeMensagem(){
    addCaracter(input.value);
    input.value = '';
}

function addCaracter(msg = 'default') {
    let i = 0;
    p.innerHTML = ``;
    let control = true;
    let chars = '';
    let escreve = setInterval(() => {
        // Apagar
        if (i >= msg.length) {
            if (control){
                chars = msg.split(''); 
                control = false;
            }                            
            
            if(chars.length > 0){
                chars.pop();
                p.innerHTML = chars.join('');
            }

            if(chars.length == 0) clearInterval(escreve);
            
        }else{
            // Escrever
            p.innerHTML += `${msg[i]}`;
            i++;
        }
    }, 500);
    return;
}
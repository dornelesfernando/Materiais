let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    slideImg();
}, 5000);

function slideImg() {
    count++;

    if(count>5){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
}

function no(){
    alert("Queriamos que essa fosse a resposta real, sentiremos muito sua falta em sala de aula! Com amor Info21 & Info11")
}

let position;
function desvia(t){
    let btn = t;
    btn.style.position = 'relative';
    btn.style.left = geraPosicao(0, 95);
    console.log(position);
}

function geraPosicao(min, max){
    position = (Math.random() * (max - min) + min) + "%";
    return position;
}

function sim(){
    alert("Erro desconhecido na página (Parece que quem programou não é tão confiável assim)");
}
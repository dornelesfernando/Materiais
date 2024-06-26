const indicator = document.querySelector(".indicator");
const input = document.querySelector("#password");
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");
const text = document.querySelector(".text");
const showBtn = document.querySelector('.showBtn');

const regExpWeak = /[a-z]/;
const regExpWeakMedium = /[A-Z]/;
const regExpMedium = /\d+/;
const regExpStrong = /(?=.*[!@#$%¨&*?_^~()])/;

function updateStrengthDisplay() {
    indicator.style.display = input.value ? "flex" : "none"
    showBtn.style.display = input.value ? "flex" : "none"
    text.style.display = input.value ? "flex" : "none"
}

function checkPasswordStrength(password) {
    const isWeak = password.match(regExpWeak);
    const isWeakMedium = password.match(regExpWeakMedium);
    const isMedium = password.match(regExpMedium);
    const isStrong = password.match(regExpStrong);

    if(password.length < 8){
        activateState('weak', 'Your password is too short');
    }else if (isWeak && (!isWeakMedium && !isMedium && !isStrong)){
        activateState('weak', 'Your password is too weak');
    }else if (isWeakMedium || (isMedium && isWeak && !isStrong)){
        activateState('medium', 'Your password is medium');
    }else if (isStrong){
        activateState('strong', 'Your password is strong');
    }else{
        activateState('weak', 'Your password just have numbers or is not valid');
    }
}

function activateState(level, message) {
    weak.classList.toggle('active', level==='weak' || level==='medium' || level==='strong');
    medium.classList.toggle('active', level==='medium' || level==='strong');
    strong.classList.toggle('active', level==='strong');
    text.classList = `text ${level}`
    text.textContent = message
}

function trigger() {
    updateStrengthDisplay();
    checkPasswordStrength(input.value);
}
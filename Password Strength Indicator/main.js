const indicator = document.querySelector(".indicator");
const input = document.querySelector("#password");
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");
const text = document.querySelector(".text");
const showBtn = document.querySelector('.showBtn') 

const regExpWeak = /[a-z]/;
const regExpWeakMedium = /[A-Z]/;
const regExpMedium = /\d+/;
const regExpStrong = /(?=.*[!@#$%¨&*?_^~()])/;

function trigger() {
   const password = input.value;
   //console.log(password);
   if(password != "") {
       indicator.style.display = "block";
       indicator.style.display = "flex";
       showBtn.style.display = "flex";
       text.style.display = "flex";
       if(password.length <= 4 && (
           password.match(regExpWeak)
       )){
           weak.classList.add('active');
           text.classList.add('weak');
           strong.classList.remove('active');
           text.classList.remove('medium');
           if(password.match(regExpWeakMedium || regExpMedium)){
            medium.classList.add('active');
            text.classList.add('medium');
            strong.classList.remove('active');
            text.classList.remove('strong');
       
            
            
       }
   }else{
    indicator.style.display = "none";
    showBtn.style.display = "none";
    text.style.display = "none";
   }
}
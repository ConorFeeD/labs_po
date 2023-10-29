let th0 = document.getElementsByTagName("th")[0];
let th1 = document.getElementsByTagName("th")[1];
let th2 = document.getElementsByTagName("th")[2];

th0.addEventListener('mouseover', () => {
    th0.classList.add("cl2");
    th0.classList.remove("cl1");
    th0.classList.remove("cl5");
});

th0.addEventListener('mouseout', () => {
    th0.classList.add("cl1");
    th0.classList.remove("cl2");
});

th1.addEventListener('dblclick', () => {
    th1.classList.add("cl3");
    th1.classList.remove("cl2");
});

th2.addEventListener('click', () => {
    th2.classList.add("cl4");
    th2.classList.remove("cl1");
});

let sum = 0;
function sumnumb (numb){
    sum+=numb;
};

function showResult (){
    alert("Result: "+sum);
    sum=0;
};

const userName = prompt("Введите своё имя")
if (userName == "Кирилл") {
    alert("Приветствую хозяин")
    }
if (userName != "Кирилл") {
    alert("Я знаю кто ты..")
}

function enlargeText() {
    const textElement = document.querySelector(".text");
    const currentFontSize = parseFloat(getComputedStyle(textElement).fontSize);
    const enlargedFontSize = currentFontSize * 1.5;
    textElement.style.fontSize = enlargedFontSize + "px";
  }
  
  function resetText() {
    const textElement = document.querySelector(".text");
    textElement.style.fontSize = "16px";
  }

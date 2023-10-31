let th0 = document.getElementsByTagName("th")[0];
let th1 = document.getElementsByTagName("th")[1];
let th2 = document.getElementsByTagName("th")[2];
let p0 = document.getElementsByTagName("p")[0];

p0.addEventListener('mouseover', () => {
    p0.classList.add('hide');
});

p0.addEventListener('mouseout', () => {
    p0.classList.remove('hide');
})

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



let ar1 = ["Яблоко", "Груша", "Вишня"];

let ar2 = new Array("Слива", "Апельсин");

let ar3 = Array.of("Ананас", "Пудинг", "Картошка", "Помидор");

let ar4 = ar1.concat(ar2,ar3)

var out = document.getElementById('out');
for (var i = 0; i < ar4.length; i ++) 
{ if(i in ar4)  
    out.innerHTML += i + ' --- ' + ar4[i] + '<br>'
};


ar4.unshift("Лимон");
// alert(ar4.shift("Лимон"));
ar4.push("Маракуйя");
// alert(ar4.pop("Маракуйя"));


delete ar4[2];
delete ar4[4];
delete ar4[6];



var out1 = document.getElementById('out1');
for (var i = 0; i < ar4.length; i ++) 
{ if(i in ar4)  
    out1.innerHTML += i + ' --- ' + ar4[i] + '<br>'
};


let delar4 = ar4.splice(3, 2);

var outdel = document.getElementById('outdel');
for (var i = 0; i < delar4.length; i ++) 
{ if(i in delar4)  
    delout.innerHTML += i + ' --- ' + delar4[i] + '<br>'
};

let deloutlenght = document.getElementById('deloutlenght');
deloutlenght.innerHTML = ar4.length;

//ar4.length = 0;
//ar4.splice(0, ar4.length);

function removeDuplicates(array) {
    return Array.from(new Set(array.map(item => item.toLowerCase())));
}
  
  // Пример использования
let initialArray = ["apple", "Banana", "apple", "Orange", "banana"];
let resultArray = removeDuplicates(initialArray);
let firstzadanie = document.getElementById('firstzadanie');
firstzadanie.innerHTML = resultArray;


const array = [5, 2, 9, 1, 8, 3];
// Сортировка массива в порядке убывания
// Вывод отсортированного массива
let secondzadanie = document.getElementById('secondzadanie');
secondzadanie.innerHTML = array.sort((a, b) => b - a);;
  
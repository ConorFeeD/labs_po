//1 zadanie
function degree(a, b = 1){
    return a**b;
}

alert(degree(3,4))


//2 zadanie
function setMonth() {
    // Запросить у пользователя число от 1 до 12
    let monthNumber = prompt("Введите число от 1 до 12:");
  
    // Преобразовать полученное значение в число
    monthNumber = parseInt(monthNumber);
  
    // Проверить, что введенное значение является числом от 1 до 12
    if (isNaN(monthNumber) || monthNumber < 1 || monthNumber > 12) {
      alert("Некорректное значение месяца!");
      return;
    }
  
    // Объявить и инициализировать локальную переменную в функции setMonth
    var monthName;
  
    switch (monthNumber) {
      case 1:
        monthName = "Январь";
        break;
      case 2:
        monthName = "Февраль";
        break;
      case 3:
        monthName = "Март";
        break;
      case 4:
        monthName = "Апрель";
        break;
      case 5:
        monthName = "Май";
        break;
      case 6:
        monthName = "Июнь";
        break;
      case 7:
        monthName = "Июль";
        break;
      case 8:
        monthName = "Август";
        break;
      case 9:
        monthName = "Сентябрь";
        break;
      case 10:
        monthName = "Октябрь";
        break;
      case 11:
        monthName = "Ноябрь";
        break;
      case 12:
        monthName = "Декабрь";
        break;
    }
  
    // Присвоить значение локальной переменной к глобальной переменной
    window.globalMonth = monthName;
  }
  
function displayMonthName() {
    // Проверить, была ли первая функция выполнена и глобальная переменная установлена
    if (typeof window.globalMonth !== "undefined") {
      alert("Название месяца: " + window.globalMonth);
    } else {
      alert("Переменная месяца не установлена!");
    }
}

alert(displayMonthName(setMonth()))

//3 zadanie 
let numbers = [15, 35, 5, 10, 8];

function findMaxAndDisplayResult(array) {
    // Найти максимальный элемент в массиве
    let maxElement = Math.max(...array);
  
    // Вызвать функцию displayResult с соответствующим результатом, исходя из значения максимального элемента
    if (maxElement < 10) {
      alert("Максимальный элемент находится в диапазоне от 0 до 9");
    } else if (maxElement >= 10 && maxElement <= 100) {
      alert("Максимальный элемент находится в диапазоне от 10 до 100");
    } else {
      alert("Максимальный элемент находится в диапазоне свыше 100");
    }
}
  
  findMaxAndDisplayResult(numbers);


//4 zadanie
function repeat(str = '', n = 2) {
    return str.repeat(n);
}

alert(repeat('123', 3));

//5 zadanie

let expression = new Function('a,b,c', ' return a*b/c; ');
alert(expression(2,10,5));
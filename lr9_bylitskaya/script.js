let obj1 = {
    name:"Oleg",
    age:34,
    car:"Panamera",
    country: "Belarus",
    education: "BSUIR",
};

//3zadanie
obj1.greet = function() {
    let message = 'Привет!';
    for(let prop in this) { // перебор свойств объекта
        if(this.hasOwnProperty(prop) && (typeof this[prop] !=="function")) { // проверка на собственное свойство
            if (prop.length===0) {
                message +=`
                ${prop}: no${this[prop]}`;
            } else message +=`
            ${prop}: ${this[prop]}`;
        }
    }
    alert(message);
    
};

obj1.greet();

function Info(name, age, car, country,education) {
    this.name = name;
    this.age = age;
    this.car = car;
    this.country = country;
    this.education = education;
};
  
let obj2 = new Info("Kirill", 34, "M5", "Belarus", "BSU");

//2zadanie
for (let key in obj1) {
    console.log( key );
}

for (let keys in obj2){
    console.log (obj2[keys]);
}

//4zadanie
document.write("<h2>Object Information</h2>");
document.write("<p>Name: " + obj2.name + "</p>");
document.write("<p>Age: " + obj2.age + "</p>");
document.write("<p>Location: " + obj2.car + "</p>");
document.write("<p>Occupation: " + obj2.country + "</p>");
document.write("<p>Occupation: " + obj2.education + "</p>");

//5zadanie
// Создание объекта Кафе
let Cafe = {
    name: '',
    address: '',
    price: '',
    tables: 0,
  
    // Геттеры
    getName() {
      return this.name;
    },
  
    getAddress() {
      return this.address;
    },
  
    getPrice() {
      return this.price;
    },
  
    getTables() {
      return this.tables;
    },
  
    // Сеттеры
    setName(newName) {
      this.name = newName;
    },
  
    setAddress(newAddress) {
      this.address = newAddress;
    },
  
    setPrice(newPrice) {
      this.price = newPrice;
    },
  
    setTables(newTables) {
      this.tables = newTables;
    }
  };
  // Установка значения свойств объекта Кафе с помощью сеттеров
  Cafe.setName('Барбадос');
  Cafe.setAddress('Улица Пушкина, дом Колотушкина');
  Cafe.setPrice('$$');
  Cafe.setTables(15);
  
  // Вывод информации об объекте на веб-страницу
  document.write('Название кафе: ' + Cafe.getName() + '<br>');
  document.write('Адрес: ' + Cafe.getAddress() + '<br>');
  document.write('Ценовая категория: ' + Cafe.getPrice() + '<br>');
  document.write('Количество столиков: ' + Cafe.getTables() + '<br>');

//6 zadanie

let person = {
    name: 'John Doe',
    age: 30,
    city: 'New York'
  };
  
  let duplicatePerson = { ...person };

  console.log(person);
  console.log(duplicatePerson);

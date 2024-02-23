function displayText() {
    let inputText = document.getElementById("textInput").value;
    document.getElementById("displayArea").innerHTML = "Вы ввели: " + inputText;
}
let link = document.getElementById("myLink");
link.addEventListener("click", function (event) {
    event.preventDefault();
});

link.addEventListener("click", function () {
    console.log("событие click");
});

link.addEventListener("mouseover", function () {
    console.log("событие mouseover");
});

link.addEventListener("mouseout", function () {
    console.log("событие mouseout");
});

link.addEventListener("dblclick", function () {
    console.log("событие focus");
});

link.addEventListener("blur", function () {
    console.log("событие blur");
});

function generateEvent() {
    let eventName = prompt("введите событие, которое хотите создать (например, click, mouseover, focus, и др.):");
    let elementId = prompt("Введите ID элемента, для которого хотите создать обработчик события:");
 
    let element = document.getElementById(elementId);
    if (element) {
     let event = new Event(eventName);
     element.dispatchEvent(event);
    } else {
     alert("Элемент не найден");
    }
   }

let btn1 = document.getElementById("btn1");
  btn1.addEventListener("click", function() {
   console.log("Кнопка нажата");
  });

  btn1.addEventListener("mouseover", function() {
   console.log("Курсор наведен на кнопку");
  });

  let div1 = document.getElementById("div1");
  div1.addEventListener("click", function() {
   console.log("Div нажат");
  });

  div1.addEventListener("mouseover", function() {
   console.log("кусор убран с Div");
  });

  let myInput = document.getElementById("myInput");
  myInput.addEventListener("focus", function() {
   console.log("поле в фокусе");
  }, true); // useCapture set to true for capturing phase

  myInput.addEventListener("blur", function() {
   console.log("поле вышло из фокуса");
  }, true); // useCapture set to true for capturing phase
  
  let text = document.getElementById("text");
  text.addEventListener("click", function() {
   console.log("Текст нажат");
  });

  text.addEventListener("mouseover", function() {
   console.log("Курсор убран с текста");
  });

  let radio = document.getElementById("radio");
  radio.addEventListener("click", function() {
   console.log("radio нажато");
  });

  radio.addEventListener("mouseover", function() {
   console.log("курсор на radio");
  });

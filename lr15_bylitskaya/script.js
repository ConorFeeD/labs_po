const bodyChildren = document.body.childNodes;
for (let i = 0; i < bodyChildren.length; i++) {
  if (i < 2) {
    console.log(
      `Тип узла ${i + 1}: ${
        bodyChildren[i].nodeType === 1 ? "Элемент" : "Текст"
      }`
    );
  }
  console.log(bodyChildren[i]);
}

const monthList = document.getElementById("monthList");

const newMonth = document.createElement("li");
newMonth.textContent = "13-го месяца не бывает";

monthList.appendChild(newMonth);

let months = document.querySelectorAll("#monthList li");
const table = document.createElement("table");
const tableBody = document.createElement("tbody");

const dayList = document.createElement("ul");

const daysOfWeek = [
  " Понедельник",
  " Вторник",
  " Среда",
  " Четверг",
  " Пятница",
  " Суббота",
  " Воскресенье",
];

daysOfWeek.forEach((day) => {
  const listItem = document.createElement("li");
  listItem.textContent = day;
  dayList.appendChild(listItem);
});

const thirteenthMonthItem = monthList.children[12];
thirteenthMonthItem.appendChild(dayList);

for (let i = 0; i < months.length; i++) {
  const row = tableBody.insertRow();
  const tabl1 = row.insertCell(0);
  const tabl2 = row.insertCell(1);
  tabl1.textContent = i + 1;
  tabl2.textContent = months[i].textContent;
}

table.appendChild(tableBody);
document.body.appendChild(table);

const showHeadingsBtn = document.getElementById("showHeadingsBtn");

showHeadingsBtn.addEventListener("click", function () {
  const mainHeadings = document.querySelectorAll("main h1, main h2, main h3");

  mainHeadings.forEach(function (heading) {
    alert(heading.textContent);
  });
});

function showResults() {
  let quizForm = document.getElementById("quizForm");
  let results = document.getElementById("results");
  let score = 0;
  let incorrectAnswers = [];

  let question1Answers = quizForm.elements["question1"];
  let question1CorrectAnswers = ["illustrator"];
  let question1Checked = false;

  for (let i = 0; i < question1Answers.length; i++) {
    if (question1Answers[i].checked) {
      question1Checked = true;

      if (question1CorrectAnswers.includes(question1Answers[i].value)) {
        score++;
      } else {
        incorrectAnswers.push("Вопрос 1");
      }
    }
  }

  if (!question1Checked) {
    incorrectAnswers.push("Вопрос 1");
  }

  let question2Answer = quizForm.elements["question2"].value;
  let question2CorrectAnswer = "clone";

  if (question2Answer === question2CorrectAnswer) {
    score++;
  } else {
    incorrectAnswers.push("Вопрос 2");
  }

  results.innerHTML = "Вы набрали " + score + " баллов из 2. Неправильные ответы: " + incorrectAnswers.join(", ");
}


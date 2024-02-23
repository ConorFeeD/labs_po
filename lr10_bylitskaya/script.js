const monthsBySeason = {
  зима: ["декабрь", "январь", "февраль"],
  весна: ["март", "апрель", "май"],
  лето: ["июнь", "июль", "август"],
  осень: ["сентябрь", "октябрь", "ноябрь"],
};

let startTime, endTime;

function getSeason() {
  const now = new Date();
  const month = now.getMonth() + 1;
  if (month >= 3 && month <= 5) {
    return "весна";
  } else if (month >= 6 && month <= 8) {
    return "лето";
  } else if (month >= 9 && month <= 11) {
    return "осень";
  } else {
    return "зима";
  }
}

function displayMonthsForSeason() {
  const season = getSeason();
  const message = `Месяцы поры года: ${monthsBySeason[season].join(", ")}`;
  document.getElementById("seasonMessage").innerText = message;
}

displayMonthsForSeason();

function calculateAge() {
  const dobInput = document.getElementById("dobInput").value;
  const dobDate = new Date(dobInput);
  const today = new Date();

  const ageDiff = today - dobDate;
  const ageDate = new Date(ageDiff);
  const calculatedAge = ageDate.getUTCFullYear() - 1970;

  document.getElementById("ageMessage").innerText = `Тебе: ${calculatedAge} лет`;
}

function checkIfStartsWithNumber() {
  let input = document.getElementById("inputField").value;
  let pattern = /^[0-9]/;

  if (pattern.test(input)) {
    alert("Пароль не может начинаться с цифры")
  } 
  else {
    alert("Пароль установлен")
  }
}

function startTimer() {
  startTime = new Date();
}

function endTimer() {
  if (startTime) {
    endTime = new Date();
    const timeDifference = endTime - startTime;
    const secondsDifference = timeDifference / 1000;
    document.getElementById("timeInfo").innerText = `Прошло ${secondsDifference} секунд`;
  } else {
    alert('Сначала нажмите кнопку "Start"');
  }
}

function checkOdd() {
  let inputNumber = document.getElementById("inputNumber").value;
  if (inputNumber % 1 == 0) {
    if (inputNumber % 2 === 0) {
      alert(inputNumber + " четно ");
    } else {
      alert(inputNumber + " не четно ");
    }
  } else {
    alert("Введите целое число");
  }
}

function toRadians(degrees) {
  return (degrees * Math.PI) / 180;
}

function calculateDistance() {
  const lat1 = document.getElementById("lat1Input").value;
  const lon1 = document.getElementById("lon1Input").value;
  const lat2 = document.getElementById("lat2Input").value;
  const lon2 = document.getElementById("lon2Input").value;

  const earthRadiusKm = 6371;

  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
    Math.cos(toRadians(lat2)) *
    Math.sin(dLon / 2) *
    Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = earthRadiusKm * c;

  document.getElementById("distanceInfo").innerText = `Расстояние между координатами: ${distance.toFixed(2)} км`;
}

function convertToUpperCase() {
  const inputString = document.getElementById("inputString").value;
  const upperCaseString = inputString.toUpperCase();
  document.getElementById("originalStringDisplay").innerText = inputString;
  document.getElementById("convertedStringDisplay").innerText = upperCaseString;
}
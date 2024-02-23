$(document).ready(function(){
  let listItems = ["Первый", "Это второй!!!", "Третий"];

  let listDataJSON = JSON.stringify(listItems);

  let listObject = JSON.parse(listDataJSON);

  let list = document.createElement("ul");
  for (let i = 0; i < listObject.length; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = listObject[i];
    list.appendChild(listItem);
  }
  document.body.appendChild(list);

  $("body").children().each(function() {
    console.log(this);
  });
});

$(document).ready(function(){
  let table = $('<table>').addClass('myTable');
  let tr1 = $('<tr>').appendTo(table);
  $('<th>').css('background-color', 'lightgreen').appendTo(tr1);
  $('<th>').text('Present').css('background-color', 'lightgreen').appendTo(tr1);
  $('<th>').text('Past').css('background-color', 'lightgreen').appendTo(tr1);
  $('<th>').text('Future').css('background-color', 'lightgreen').appendTo(tr1);
  
  let tr2 = $('<tr>').appendTo(table);  
  $('<td>').text('+').css('background-color', 'lightgreen').appendTo(tr2);
  $('<td>').text('I dance').css('background-color', 'lightblue').appendTo(tr2);
  $('<td>').text('I danced').css('background-color', 'lightblue').appendTo(tr2);
  $('<td>').text('I will dance').css('background-color', 'lightblue').appendTo(tr2);

  let tr3 = $('<tr>').appendTo(table);  
  $('<td>').text('-').css('background-color', 'lightgreen').appendTo(tr3);
  $('<td>').text('I dont dance').css('background-color', 'lightblue').appendTo(tr3);
  $('<td>').text('I didnt dance').css('background-color', 'lightblue').appendTo(tr3);
  $('<td>').text('I will not dance').css('background-color', 'lightblue').appendTo(tr3);

  let tr4 = $('<tr>').appendTo(table);  
  $('<td>').text('?').css('background-color', 'lightgreen').appendTo(tr4);
  $('<td>').text('Do I dance?').css('background-color', 'lightblue').appendTo(tr4);
  $('<td>').text('Did I danced?').css('background-color', 'lightblue').appendTo(tr4);
  $('<td>').text('Will I dance?').css('background-color', 'lightblue').appendTo(tr4);
  
  table.appendTo('body');
  
  table.addClass('styledTable');
  
  $('th').hover(function() {
      let description;
    switch ($(this).text()) {
      case 'Present':
        description = 'Cобытия, произошедшие в настоящем времени';
        break;
      case 'Past':
        description = 'Cобытия, которые произошли в прошлом времени';
        break;
      case 'Future':
        description = 'Cобытия, которые произойдут в будущем времени';
        break;
      default:
        description = 'НИЧЁСЕ';
    }
    alert(description);
  });
});

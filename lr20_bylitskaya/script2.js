$(document).ready(function(){
  $("#submitBtn").click(function() {
    // Проверяем, все ли поля заполнены
    let name = $("#name").val();
    let email = $("#email").val();
    let message = $("#message").val();

    if (name === '' || email === '' || message === '') {
      alert("Не, так не пойдет. Заполняй!");
    } else {
      // Если все поля заполнены, перенаправляем пользователя на главную страницу
      window.location.href = "index.html"; // Замените ссылку на вашу главную страницу
    }
  });
});

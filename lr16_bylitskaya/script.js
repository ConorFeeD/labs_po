let button = document.getElementById('changeStyleBtn');
let link = document.getElementById('pageStyle');

button.addEventListener('click', function () {
    if (link.getAttribute('href') === 'style1.css') {
        link.setAttribute('href', 'style2.css');

    } else {
        link.setAttribute('href', 'style1.css');
    }
});

document.getElementById('changeOpacityBtn').addEventListener('click', function () {
    let listItems = document.getElementById('list').getElementsByTagName('li');

    Array.from(listItems).forEach(function (item) {
        let currentOpacity = item.style.opacity ? parseFloat(item.style.opacity) : 1;
        let newOpacity = currentOpacity - 0.1;

        if (newOpacity <= 0) {
            item.style.opacity = 1;
        } else {
            item.style.opacity = newOpacity;
        }
    });
});

document.querySelector('.myButton').addEventListener('mouseover', function () {
    this.classList.add("myButton2")
});
document.querySelector('.myButton').addEventListener('mouseout', function () {
    this.classList.remove("myButton2")
});   
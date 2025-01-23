let button = document.getElementById('menu-button');
let menu = document.getElementById('side-menu');

button.onclick = function() {
    menu.style.width = '250px';
    button.style.display = 'none';
}

document.querySelector('.closeBtn').onclick = function() {
    menu.style.width = '0';
    button.style.display = 'block';
}
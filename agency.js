const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');


openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
    mainMenu.style.display = 'flex'
    mainMenu.style.top = '0'
}

function close() {
    mainMenu.style.top = '-100%';
}


function sign() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var msg = document.getElementById("msg").value;


    localStorage.setItem("name1", name);
    localStorage.setItem("email1", email);
    localStorage.setItem("msg1", msg);
}

let showed = false;
const burgerButton = document.querySelector('.burger-button ');
const menu = document.querySelector('.menu');


function controlVerticalMenu(){
    if (showed === false) {
        menu.classList.remove('none');
        showed = true;
    }else {
        menu.classList.add('none');
        showed = false;
    }
}


function addVerticalMenuHiden() {
    menu.classList.add('vertical-menu');
    menu.classList.add('none');
}

function removeVerticalMenuHiden() {
    menu.classList.remove('vertical-menu');
    menu.classList.remove('none');
}

function query(x) {
    if (x.matches) {
        addVerticalMenuHiden();
    }else {
        removeVerticalMenuHiden();
    }
}

let x = window.matchMedia("(max-width: 900px)");
query(x);
x.addListener(query);
burgerButton.addEventListener('click', controlVerticalMenu)
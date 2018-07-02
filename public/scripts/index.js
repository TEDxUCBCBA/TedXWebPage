

$( document ).ready(function() {
    const loader = document.querySelector('.is-page-loader');
    const nav = document.querySelector('nav');
    const content = document.querySelector('#container');

    loader.classList.add('hide');
    nav.classList.remove('hide');
    content.classList.remove('hide');

    particlesJS.load('particles-js', './scripts/particles.json', function() {});
    
});

'use scrict'

document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('.js--toggle-menu').addEventListener('click', function(event) {
        event.preventDefault();

    document.querySelector('.sidebar').classList.toggle('open');
    })
})
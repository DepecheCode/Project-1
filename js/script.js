'use scrict'

document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('.fa-align-justify').addEventListener('click', function(event) {
        event.preventDefault();

    document.querySelector('.sidebar-content').classList.toggle('open');
    })
})
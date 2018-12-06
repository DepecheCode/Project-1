'use strict';

document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('.js--toggle-menu').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('.sidebar-content').classList.toggle('open'); 
        document.querySelector('body').classList.toggle('open');
    })
});
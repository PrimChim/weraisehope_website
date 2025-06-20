let menuIcon = document.querySelector('.menu-icon');
let menu = document.querySelector('.menu');
menuIcon.addEventListener('click', function() {
    menu.classList.toggle('active');
}
);

let menuLinks = document.querySelectorAll('.menu, .closebtn');
menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        menu.classList.remove('active');
    });
}

);

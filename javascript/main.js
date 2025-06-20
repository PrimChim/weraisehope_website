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

// Mobile sub menu toggle
let subMenuToggles = document.querySelectorAll('.menu,li');
subMenuToggles.forEach(toggle => {
    toggle.addEventListener('click', function(event) {
        this.children[1].classList.toggle('active');
        event.stopPropagation(); // Prevent the click from bubbling up to the parent menu
    });
});
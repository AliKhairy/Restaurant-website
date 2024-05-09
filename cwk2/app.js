const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

$('p#see-below').click(function(event) {
    event.preventDefault();

    // Get the target section
    let target = $('#appetizers-section');

    // Check if the target section exists
    if (target.length) {
        // Scroll to the target section
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

$('p#see-below').click(function(event) {
    event.preventDefault();

    // Get the target section
    let target = $('#products-section');

    // Check if the target section exists
    if (target.length) {
        // Scroll to the target section
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});



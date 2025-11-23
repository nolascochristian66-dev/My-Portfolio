// Define variables for the menu toggle and nav links
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

// Add click event listener to the hamburger menu
mobileMenu.addEventListener('click', () => {
    // Toggle the 'active' class on the menu and links to show/hide them
    mobileMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
const navItems = document.querySelectorAll('.nav-links li a');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        // If the menu is open, close it when a user clicks a link
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    });
});
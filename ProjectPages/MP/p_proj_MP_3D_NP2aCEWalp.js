document.addEventListener('DOMContentLoaded', function() {
    const sidebarLinks = document.querySelectorAll('.sidebar a');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Remove the active class from all links
            sidebarLinks.forEach(link => link.classList.remove('active'));

            // Add the active class to the clicked link
            this.classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    const navbarHeight = document.querySelector('.navbar').offsetHeight || 70; // Adjust height as needed

    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            // Remove the active class from all links
            sidebarLinks.forEach(link => link.classList.remove('active'));

            // Add the active class to the clicked link
            this.classList.add('active');

            // Get the target section
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            // Scroll to the target section
            window.scrollTo({
                top: targetElement.offsetTop - navbarHeight,
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const sidebarLinks = document.querySelectorAll('.hidden-nav a');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Remove the active class from all links
            sidebarLinks.forEach(link => link.classList.remove('active'));

            // Add the active class to the clicked link
            this.classList.add('active');
        });
    });
});

const menuIcon = document.querySelector(".menu-btn")
const closeIcon = document.querySelector(".close-icon")
const mobileNav = document.querySelector(".hidden-nav")

menuIcon.addEventListener("click", () => {
    mobileNav.classList.add("active");
});
closeIcon.addEventListener("click", () => {
    mobileNav.classList.remove("active");
});
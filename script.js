document.addEventListener('DOMContentLoaded', function () {
    // Select the scroll-up button element
    const scrollUpBtn = document.querySelector('.scroll-up-btn');

    // Add a click event listener to the scroll-up button
    scrollUpBtn.addEventListener('click', function () {
        // Use smooth scrolling to scroll to the top of the page
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Select the menu button element (now using .menu-btn1)
    const menuBtn1 = document.querySelector('.menu-btn1');
    // Select the menu element
    const menu = document.querySelector('.menu');

    // Add a click event listener to the menu button
    menuBtn1.addEventListener('click', function () {
        // Toggle the 'active' class on the menu itself
        menu.classList.toggle('active');
    });

    // Select all the navigation links with the class "menu-btn" (not "menu-btn1")
    const navLinks = document.querySelectorAll('.menu-btn');

    // Add click event listeners to each navigation link
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent the default link behavior

            // Get the target section's ID from the href attribute
            const targetId = link.getAttribute('href').substring(1);

            // Calculate the scroll position with an offset to account for the fixed navbar height
            const offset = document.getElementById(targetId).offsetTop - document.querySelector('.navbar').offsetHeight;

            // Scroll to the target section smoothly
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });

            // Close the mobile menu if it's open
            menu.classList.remove('active');
        });
    });

    // Initialize the Typed.js library for text typing animation
    var typed1 = new Typed(".typing", {
        strings: ["Web Developer", "Designer", "Blogger"],
        typeSpeed: 44,
        backSpeed: 60,
        loop: true,
        showCursor: false,
        smartBackspace: false,
        startDelay: 0,
        backDelay: 1500,
        fadeOut: true,
        fadeOutDelay: 400,
        fadeOutClass: 'typed-fade-out',
        fadeOutClassRemove: false
    });

    var typed2 = new Typed(".typing-2", {
        strings: ["Web Developer", "Designer", "Blogger"],
        typeSpeed: 44,
        backSpeed: 70,
        loop: true,
        showCursor: false,
        smartBackspace: false,
        startDelay: 0,
        backDelay: 1500,
        fadeOut: true,
        fadeOutDelay: 500,
        fadeOutClass: 'typed-fade-out',
        fadeOutClassRemove: false
        
    });

    // Initialize the Owl Carousel library for the team members section
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

const downloadPdfLink = document.getElementById('downloadPdfLink');

downloadPdfLink.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default link behavior (navigating to #)

    // Replace 'Adnan Rajab.pdf' with the actual file path on your local machine
    const filePath = 'https://github.com/Adnan7766/CV/raw/main/Adnan%20Rajab.pdf';

    // Create a FileReader to read the PDF file
    const reader = new FileReader();

    reader.onload = function () {
        const pdfData = reader.result;

        const link = document.createElement('a');
        link.href = pdfData;
        link.download = 'Adnan-cv'; // Set the desired filename for the downloaded PDF
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Read the PDF file as a data URL
    reader.readAsDataURL(new Blob([filePath]));
});

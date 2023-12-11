function submitForm() {
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    fetch('https://be-2-section-surabaya-group-14-production.up.railway.app/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            fullname: fullName, 
            email: email, 
            phone: phone, 
            message: message,
        }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Handle the success response if needed
        console.log(data);
    })
    .catch(error => {
        // Handle errors during the fetch
        console.error('Error during fetch:', error);
    });
}

window.onload = () => {
    let menu = document.querySelector('#menu-btn');
    let navbar = document.querySelector('.header .navbar');
    const contactForm = document.getElementById('form');

    menu.onclick = () => {
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    }

    window.onscroll = () => {
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
    }

    var swiperHome = new Swiper(".home-slider", {
        grabCursor: true,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 7500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    var swiperRoom = new Swiper(".room-slider", {
        spaceBetween: 20,
        grabCursor: true,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 7500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
        },
    });

    var swiperGallery = new Swiper(".gallery-slider", {
        spaceBetween: 10,
        grabCursor: true,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 4,
            },
        },
    });

    var swiperReview = new Swiper(".review-slider", {
        spaceBetween: 10,
        grabCursor: true,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 7500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    let accordions = document.querySelectorAll('.faqs .row .content .box');

    accordions.forEach(acco => {
        acco.onclick = () => {
            accordions.forEach(subAcco => { subAcco.classList.remove('active') });
            acco.classList.add('active');
        }
    });

    // Attach the submitForm function to the form's submit event
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission
        submitForm(); // Call the submitForm function
    });
};

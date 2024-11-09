
// Type Js
var typed = new Typed('#auto-type', {
    strings: ['Cyber Security', 'Ethical Hacker'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
  });
// Select all navigation links
const navLinks = document.querySelectorAll('.navbar a');

// Function to remove 'active' class from all links
function removeActiveClass() {
  navLinks.forEach(link => link.classList.remove('active'));
}

// Function to add 'active' class to the clicked link
navLinks.forEach(link => {
  link.addEventListener('click', function () {
    removeActiveClass();
    link.classList.add('active');
  });
});

// Function to add 'active' class based on scroll position
window.addEventListener('scroll', function () {
  let current = '';
  const sections = document.querySelectorAll('section'); // Adjust if your section tags are different
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });
  
  removeActiveClass();
  
  navLinks.forEach(link => {
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

//Scroll revial
ScrollReveal({
  //reset:true,
  distance:'80px',
  duration:2000,
  delay:280,
})
ScrollReveal().reveal('.home-content, .heading',{origin:'top'});
ScrollReveal().reveal('.home-img, .Contact, .contact form, .projects-content',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1,.contact-headding, .services-passage, .about-img, .projects-headding',{origin:'left'});
ScrollReveal().reveal('.home-content p, .contact-content, .services-headding, .services-content, .about-content, .projects-passage',{origin:'right'});

// Menu
const sections = document.querySelectorAll("section");
const menuLinks = document.querySelectorAll(".menu-link");
const checkbox = document.getElementById("menu");

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        checkbox.checked = false;
    });
});
window.addEventListener("scroll", () => {
    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 50;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + section.offsetHeight) {
            menuLinks.forEach(link => link.classList.remove("active"));
            document.querySelector(`.menu-link[href="#${section.id}"]`).classList.add("active");
        }
    });
});

// Toggle Theme
// Initial setup
const moonIcon = document.getElementById("moonIcon");
const sunIcon = document.getElementById("sunIcon");

moonIcon.style.display = "inline-block"; // Start with the moon icon visible
sunIcon.style.display = "none"; // Hide the sun icon initially

moonIcon.addEventListener("click", () => {
    // Hide moon icon, show sun icon
    moonIcon.style.display = "none";
    sunIcon.style.display = "inline-block";
    
    // Change to light theme
    document.documentElement.style.setProperty("--bg-color", "white");
    document.documentElement.style.setProperty("--second-bg-color", "rgb(202, 202, 202)");
    document.documentElement.style.setProperty("--text-color", "black");
});

sunIcon.addEventListener("click", () => {
    // Hide sun icon, show moon icon
    sunIcon.style.display = "none";
    moonIcon.style.display = "inline-block";
    
    // Change to dark theme (original colors)
    document.documentElement.style.setProperty("--bg-color", "black");
    document.documentElement.style.setProperty("--second-bg-color", "rgb(39, 39, 39)");
    document.documentElement.style.setProperty("--text-color", "white");
});

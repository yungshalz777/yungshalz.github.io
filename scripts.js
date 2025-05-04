dayjs.locale('uk');
document.getElementById('current-date').textContent = dayjs().format('D MMMM YYYY');

const savedTheme = localStorage.getItem('theme');

const body = document.body;
const toggleBtn = document.getElementById('themeToggle');

if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    body.classList.remove('light-theme');
    toggleBtn.textContent = '🌜';
} else {
    body.classList.add('light-theme');
    body.classList.remove('dark-theme');
    toggleBtn.textContent = '🌞';
}

toggleBtn.addEventListener('click', () => {
    const isDark = body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme', !isDark);
    toggleBtn.textContent = isDark ? '🌜' : '🌞';

    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

document.querySelector('.cta-button').addEventListener('click', (e) => {
    e.preventDefault();
    const section = document.querySelector('#consultation');
    section.scrollIntoView({ behavior: 'smooth' });
    section.classList.add('highlight');
    setTimeout(() => section.classList.remove('highlight'), 2000);
});

document.querySelector('a[href="#testimonials"]').addEventListener('click', (e) => {
    e.preventDefault();
    const section = document.querySelector('.sidebar');
    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

const form = document.getElementById('consultation-form');
form.addEventListener('submit', (e) => {
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    if (!name || !email) {
        alert("Будь ласка, заповніть усі поля.");
        e.preventDefault();
    }
});

const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.addEventListener('click', (e) => {

    if (navLinks && !navLinks.contains(e.target) && !burger.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});

document.querySelectorAll('.nav-links a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        var href = link.getAttribute('href');
        document.querySelector(href).scrollIntoView({ behavior: 'smooth' });

        navLinks.classList.remove('active');
    });
});

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener('beforeunload', function() {
    window.scrollTo(0, 0);
});

window.addEventListener('load', function() {
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 0);
});

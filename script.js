// Inicialização AOS (Animate on Scroll)
AOS.init({
    duration: 800,
    once: true,
    offset: 120,
    easing: 'ease-out-cubic',
});

// Loader
window.addEventListener('load', () => {
    const loader = document.querySelector('.page-loader');
    if (loader) {
        loader.classList.add('hidden');
        setTimeout(() => loader.style.display = 'none', 600);
    }
});

// Navbar interativa
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Scroll event
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Ativar link conforme seção visível
    const sections = document.querySelectorAll('section[id]');
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 200;
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Toggle menu mobile
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Fechar menu ao clicar link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Contador animado para estatísticas (simples)
const statNumbers = document.querySelectorAll('.stat-number');
const animateNumbers = () => {
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        if (!target) return;
        let current = 0;
        const increment = target / 40;
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                stat.innerText = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                stat.innerText = target;
            }
        };
        updateCounter();
    });
};

// Disparar contador quando a seção hero estiver visível
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateNumbers();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });
const heroStats = document.querySelector('.hero-stats');
if (heroStats) observer.observe(heroStats);

// Formulário newsletter
const form = document.getElementById('newsletterForm');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = form.querySelector('input[type="email"]');
        if (emailInput.value) {
            alert('🌱 Obrigado por se inscrever! Em breve você receberá conteúdos sobre agro sustentável.');
            form.reset();
        } else {
            alert('Por favor, insira um e-mail válido.');
        }
    });
}

// Smooth parallax sutil no hero (opcional)
window.addEventListener('scroll', () => {
    const heroImg = document.querySelector('.hero-img');
    if (heroImg) {
        const scrolled = window.pageYOffset;
        heroImg.style.transform = `translateY(${scrolled * 0.15}px)`;
    }
});

// Footer subscribe
const footerBtn = document.querySelector('.footer-subscribe button');
if (footerBtn) {
    footerBtn.addEventListener('click', () => {
        const input = document.querySelector('.footer-subscribe input');
        if (input.value.includes('@')) {
            alert('✨ Obrigado! Você está conectado ao futuro sustentável.');
            input.value = '';
        } else {
            alert('Digite um e-mail válido.');
        }
    });
}

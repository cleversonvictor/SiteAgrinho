// Inicialização AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// ===== LOADER GARANTIDO =====
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const progressBar = document.querySelector('.loader-progress');
    const percentage = document.querySelector('.loader-percentage');
    
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 10) + 5;
        
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            
            // Garante que o loader some MESMO
            setTimeout(() => {
                preloader.classList.add('hide');
                
                // Fallback: se não sumir, força
                setTimeout(() => {
                    if (preloader.style.display !== 'none') {
                        preloader.style.display = 'none';
                    }
                }, 1000);
            }, 300);
        }
        
        progressBar.style.width = progress + '%';
        percentage.textContent = progress + '%';
    }, 80);
    
    // SEGUNDA GARANTIA: Se algo der errado, força fechamento em 5s
    setTimeout(() => {
        if (preloader && !preloader.classList.contains('hide')) {
            preloader.classList.add('hide');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 800);
        }
    }, 5000);
});

// ===== CURSOR COM RASTRO =====
const cursor = document.querySelector('.cursor');
const trails = document.querySelectorAll('.cursor-trail');

let mouseX = 0, mouseY = 0;
let trailPositions = [
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 }
];

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
});

// Animação suave do rastro
function animateTrail() {
    trailPositions[0] = { x: mouseX, y: mouseY };
    
    for (let i = 1; i < trailPositions.length; i++) {
        trailPositions[i].x += (trailPositions[i-1].x - trailPositions[i].x) * 0.3;
        trailPositions[i].y += (trailPositions[i-1].y - trailPositions[i].y) * 0.3;
    }
    
    trails.forEach((trail, index) => {
        if (trailPositions[index + 1]) {
            trail.style.left = trailPositions[index + 1].x + 'px';
            trail.style.top = trailPositions[index + 1].y + 'px';
        }
    });
    
    requestAnimationFrame(animateTrail);
}

animateTrail();

// Hover effects
document.querySelectorAll('a, button, .nav-toggle').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.width = '20px';
        cursor.style.height = '20px';
        cursor.style.background = 'var(--secondary)';
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.style.width = '12px';
        cursor.style.height = '12px';
        cursor.style.background = 'var(--primary)';
    });
});

// ===== NAVBAR SCROLL =====
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== FORM NEWSLETTER =====
document.querySelector('.footer-newsletter button')?.addEventListener('click', () => {
    const input = document.querySelector('.footer-newsletter input');
    if (input.value.includes('@')) {
        alert('✨ INCRÍVEL! Você está conectado ao futuro sustentável!');
        input.value = '';
    } else {
        alert('📧 Por favor, insira um e-mail válido.');
    }
});

console.log('%c🌱 AGRO+VERDE - REVOLUÇÃO SUSTENTÁVEL 🌱', 'font-size: 18px; color: #00ff88; font-weight: bold; text-shadow: 0 0 10px #00ff88;');

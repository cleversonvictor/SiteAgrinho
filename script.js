// Inicialização AOS
AOS.init({
    duration: 1000,
    once: true,
    easing: 'ease-out-cubic',
    mirror: false
});

// ===== PRELOADER CINEMATOGRÁFICO =====
document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.querySelector('.preloader');
    const progressBar = document.querySelector('.progress-bar');
    const progressText = document.querySelector('.progress-text');
    
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            
            setTimeout(() => {
                preloader.classList.add('hidden');
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 800);
            }, 500);
        }
        
        progressBar.style.width = progress + '%';
        progressText.textContent = Math.round(progress) + '%';
    }, 200);
});

// ===== CURSOR PERSONALIZADO =====
const cursor = document.querySelector('.custom-cursor');
const cursorDot = document.querySelector('.cursor-dot');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
});

document.addEventListener('mousedown', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
    cursorDot.style.transform = 'translate(-50%, -50%) scale(1.5)';
});

document.addEventListener('mouseup', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
});

// Hover em links
document.querySelectorAll('a, button, .nav-toggle-label').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursor.style.borderColor = 'var(--primary-glow)';
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.borderColor = 'var(--primary)';
    });
});

// ===== PARALLAX NO SCROLL =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.parallax-bg');
    
    if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    if (scrolled > 50) {
        navbar.style.background = 'rgba(10, 26, 10, 0.9)';
        navbar.style.padding = '10px 30px';
    } else {
        navbar.style.background = 'var(--glass-bg)';
        navbar.style.padding = '15px 30px';
    }
});

// ===== FORM SUBMIT PREMIUM =====
document.getElementById('premiumForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Efeito de sucesso
    const btn = e.target.querySelector('button');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = '<i class="fas fa-check-circle"></i> INSCRITO!';
    btn.style.background = '#00c853';
    
    setTimeout(() => {
        alert('🌱✨ PARABÉNS! Você agora faz parte da revolução AGRO+VERDE! Em breve receberá conteúdos exclusivos.');
        btn.innerHTML = originalText;
        e.target.reset();
    }, 1000);
});

// ===== NEWSLETTER FOOTER =====
document.querySelector('.newsletter-input-group button')?.addEventListener('click', () => {
    const input = document.querySelector('.newsletter-input-group input');
    if (input.value.includes('@')) {
        alert('📧 Obrigado! Você está conectado ao futuro sustentável!');
        input.value = '';
    } else {
        alert('Por favor, insira um e-mail válido.');
    }
});

// ===== EFEITO DE DIGITAÇÃO NO HERO (OPCIONAL) =====
console.log('%c🌾 AGRO+VERDE - O FUTURO É AGORA! 🚀', 'font-size: 20px; color: #00c853; font-weight: bold;');
console.log('%cDesenvolvido com 💚 para um planeta mais sustentável', 'font-size: 14px; color: #69f0ae;');

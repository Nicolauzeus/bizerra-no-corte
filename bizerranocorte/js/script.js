// ===== AGENDAMENTO WHATSAPP =====
const form = document.getElementById("formAgendamento");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const data = document.getElementById("data").value;
    const hora = document.getElementById("hora").value;
    const servico = document.getElementById("servico").value;
    const endereco = document.getElementById("endereco").value;

    // Formatar data para o padrão brasileiro
    const dataFormatada = data.split('-').reverse().join('/');

    const mensagem = `Olá, meu nome é ${nome}. Gostaria de agendar um *${servico}* para o dia *${dataFormatada}* às *${hora}*. Meu endereço: *${endereco}*`;

    const url = `https://wa.me/558584740146?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
  });
}

// ===== MENU MOBILE =====
const menuMobile = document.querySelector('.menu-mobile');
const nav = document.querySelector('nav');

if (menuMobile) {
  menuMobile.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  });
}

// ===== SCROLL SUAVE =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Fechar menu mobile se estiver aberto
      if (window.innerWidth <= 992) {
        nav.style.display = 'none';
      }
    }
  });
});

// ===== HEADER SCROLL EFFECT =====
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 100) {
    header.style.background = 'rgba(0, 0, 0, 0.98)';
    header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
  } else {
    header.style.background = 'rgba(0, 0, 0, 0.95)';
    header.style.boxShadow = 'none';
  }
});

// ===== ANIMAÇÃO DE ENTRADA =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.service-card, .gallery-item, .feature, .contact-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'all 0.6s ease';
  observer.observe(el);
});

// ===== VALIDAÇÃO DE DATA =====
const dataInput = document.getElementById('data');
if (dataInput) {
  const hoje = new Date().toISOString().split('T')[0];
  dataInput.setAttribute('min', hoje);
}

// ===== MÁSCARA PARA TELEFONE (opcional) =====
// Implementar se tiver campo de telefone

console.log('Bizerra no Corte - Site Premium carregado com sucesso! 🚀');

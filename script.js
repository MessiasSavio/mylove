// cria corações flutuantes
document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < 20; i++) {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDelay = Math.random() * 10 + 's';
      document.body.appendChild(heart);
    }
  
    // carrosséis
    document.querySelectorAll('.carousel-button').forEach(btn => {
      btn.addEventListener('click', () => {
        const carousel = document.getElementById(btn.dataset.target);
        const imgs = carousel.querySelectorAll('img');
        let idx = +carousel.dataset.index || 0;
        idx = (idx + (btn.classList.contains('prev') ? -1 : 1) + imgs.length) % imgs.length;
        carousel.style.transform = `translateX(${-idx * 100}%)`;
        carousel.dataset.index = idx;
      });
    });
  
    // presente
    const present = document.getElementById('present-title');
    const modal   = document.getElementById('gift-modal');
    present.addEventListener('click', () => modal.style.display = 'flex');
    modal.addEventListener('click', () => modal.style.display = 'none');
    // impede fechar ao clicar no conteúdo
    document.getElementById('gift-modal-content')
      .addEventListener('click', e => e.stopPropagation());
  });
  
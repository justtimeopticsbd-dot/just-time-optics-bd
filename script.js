const wrap = document.querySelector('.nav-wrap');
const menu = document.querySelector('.menu-btn');
menu?.addEventListener('click', () => wrap.classList.toggle('open'));

document.querySelectorAll('#main-nav a').forEach(a => {
  a.addEventListener('click', () => wrap.classList.remove('open'));
});

document.getElementById('year').textContent = new Date().getFullYear();

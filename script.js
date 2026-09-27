const roles = ['Ionic app developer', 'mobile developer', 'UI engineer'];
const typedRole = document.querySelector('#typed-role');
let roleIndex = 0;
let characterIndex = roles[0].length;
let isDeleting = true;
function typeRole() {
  const currentRole = roles[roleIndex];
  typedRole.textContent = currentRole.slice(0, characterIndex);
  if (!isDeleting && characterIndex < currentRole.length) { characterIndex += 1; setTimeout(typeRole, 65); return; }
  if (isDeleting && characterIndex > 0) { characterIndex -= 1; setTimeout(typeRole, 40); return; }
  if (isDeleting) { isDeleting = false; roleIndex = (roleIndex + 1) % roles.length; }
  else { isDeleting = true; setTimeout(typeRole, 1500); return; }
  setTimeout(typeRole, 350);
}
setTimeout(typeRole, 1500);

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
}), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

document.querySelector('#year').textContent = new Date().getFullYear();
const menu = document.querySelector('#command-menu');
document.addEventListener('keydown', (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); menu.showModal(); }
  if (event.key === 'Escape') menu.close();
});
document.querySelectorAll('.command-menu a').forEach((link) => link.addEventListener('click', () => menu.close()));
const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', (event) => { glow.style.left = `${event.clientX}px`; glow.style.top = `${event.clientY}px`; });

// Scroll suave al hacer click en los links del navbar (ya que html {scroll-behavior: smooth} no funciona en algunos navegadores)
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetID = this.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetID);
    if (targetSection) {
      // Ajustar offset para navbar fijo (altura navbar aprox 60px)
      window.scrollTo({
        top: targetSection.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

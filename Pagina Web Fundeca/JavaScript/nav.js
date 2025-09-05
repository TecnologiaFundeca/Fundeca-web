//Animaciones de NavBar
function openNav(){
    document.getElementById("mobile-menu").style.width = "100%"
}

function closeNav(){
    document.getElementById("mobile-menu").style.width = "0%"
}
//Fin de animaciones de NavBar
//Animaciones Quienes somos
document.addEventListener("DOMContentLoaded", () => {
  const animados = document.querySelectorAll(".animate-left, .animate-right");

  function mostrarAnimados() {
    animados.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add("show");
      } else {
        el.classList.remove("show")
      }
    });
  }

  window.addEventListener("scroll", mostrarAnimados);
  mostrarAnimados(); // por si hay elementos visibles al cargar
});
//Fin de animaciones Quienes somos
// Carrusel Beneficiarios
    const imgs = document.querySelectorAll('.carrusel-img');
    const prevBtn = document.querySelector('.carrusel-btn.prev');
    const nextBtn = document.querySelector('.carrusel-btn.next');
    let current = 0;

    function showImg(index) {
        imgs.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    }

    if (prevBtn && nextBtn && imgs.length > 0) {
        prevBtn.addEventListener('click', () => {
            current = (current - 1 + imgs.length) % imgs.length;
            showImg(current);
        });

        nextBtn.addEventListener('click', () => {
            current = (current + 1) % imgs.length;
            showImg(current);
        });

        // Opcional: auto-carrusel
        setInterval(() => {
            current = (current + 1) % imgs.length;
            showImg(current);
        }, 5000);

        showImg(current);
    }
// Fin Carrusel Beneficiarios
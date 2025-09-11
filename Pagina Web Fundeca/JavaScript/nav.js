//Animaciones de NavBar
function openNav(){
    document.getElementById("mobile-menu").style.width = "100%"
}

function closeNav(){
    document.getElementById("mobile-menu").style.width = "0%"
}
function toggleDropdown(event) {
      event.preventDefault(); 
      const parent = event.target.closest(".dropdown-mobile");
      parent.classList.toggle("active");
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
// Carrusel Programas //
document.querySelectorAll('.carrusel-simple').forEach(function(carrusel){
    const imgs = carrusel.querySelectorAll('.carrusel-img');
    const prev = carrusel.querySelector('.prev');
    const next = carrusel.querySelector('.next');
    let idx = 0;

    function showImg(i) {
        imgs.forEach((img, j) => {
            img.classList.toggle('active', j === i);
        });
    }

    function nextImg() {
        idx = (idx + 1) % imgs.length;
        showImg(idx);
    }

    function prevImg() {
        idx = (idx - 1 + imgs.length) % imgs.length;
        showImg(idx);
    }

    next.addEventListener('click', nextImg);
    prev.addEventListener('click', prevImg);

    setInterval(nextImg, 5000);

    showImg(idx);
});
// Fin Carrusel Programas //
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
      }
    });
  }

  window.addEventListener("scroll", mostrarAnimados);
  mostrarAnimados(); // por si hay elementos visibles al cargar
});

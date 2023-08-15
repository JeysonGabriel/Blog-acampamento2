// Adiciona um evento de rolagem à página
window.addEventListener("scroll", function() {
    // Obtém a altura da navbar
    const navbar = document.getElementById("navbar");
    const navbarHeight = navbar.clientHeight;
  
    // Obtém a posição vertical atual da página
    const scrollY = window.scrollY;
  
    // Verifica se a página foi rolada além da altura da navbar
    if (scrollY > navbarHeight) {
      navbar.classList.add("scrolled"); // Adiciona a classe "scrolled"
    } else {
      navbar.classList.remove("scrolled"); // Remove a classe "scrolled"
    }
  });
  
  // Adiciona um evento ao carregar a página para verificar se está no topo
  window.addEventListener("load", function() {
    const navbar = document.getElementById("navbar");
  
    // Se a posição vertical é igual a 0, remove a classe "scrolled"
    if (window.scrollY === 0) {
      navbar.classList.remove("scrolled");
    }
  });
  
const reposContainer = document.querySelector("#repos-container");
const reposError = document.querySelector("#repos-error");

// Obtener el elemento del botón de menú y el menú desplegable
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

// Inicializar el estado del menú
let menuOpen = false;

// Agregar un evento de clic al botón de menú
menuBtn.addEventListener("click", () => {
  // Cambiar el estado del menú
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menu.classList.add("show");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menu.classList.remove("show");
    menuOpen = false;
  }
});

// Obtener los repositorios de GitHub
fetch("https://api.github.com/users/jesusgomezdias/repos")
  .then((response) => {
    if (!response.ok) {
      throw new Error("No se pudo obtener los repositorios.");
    }
    return response.json();
  })
  .then((data) => {
    // Mostrar los repositorios en la página
    data.forEach((repo) => {
      const repoLink = document.createElement("a");
      repoLink.href = repo.html_url;
      repoLink.textContent = repo.name;
      repoLink.target = "_blank";
      reposContainer.appendChild(repoLink);
    });
  })
  .catch((error) => {
    console.error(error);
    reposError.textContent = "No se pudieron obtener los repositorios.";
  });

const reposContainer = document.querySelector("#repos-container");
const reposError = document.querySelector("#repos-error");

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

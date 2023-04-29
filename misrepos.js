$(document).ready(function(){
    // Hacer una petición GET a la API de Github
    $.get("https://api.github.com/users/jesusgomezdias/repos", function(data, status){
        // Iterar sobre la respuesta de la API y agregar elementos a la lista
        data.forEach(function(repo){
            var listItem = $("<li></li>");
            var link = $("<a></a>").attr("href", repo.html_url).text(repo.name);
            listItem.append(link);
            $("#repo-list").append(listItem);
        });
    });
});

var imagem = document.getElementById("pizzaria");
var link = document.getElementById("myLink");

imagem.onmouseover = function() {
    link.style.display = "block";
};

imagem.onmouseout = function() {
    link.style.display = "none";
}
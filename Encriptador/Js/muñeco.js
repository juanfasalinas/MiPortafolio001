var muñeco = document.querySelector("#imagen")
var empezar = document.querySelector("#empezar")

function ocultar() {
    document.getElementById("imagen").style.opacity = "0";

}


empezar.onclick = ocultar;
var transparencia = window.document.querySelector("div.transparencia")
var BarraLateral = window.document.querySelector("div.BarraLateral")
function AbrirMenuLateral(){
    transparencia.style.display = "block"
    BarraLateral.style.display = "flex"
}
function FecharBarraLateral(){
    transparencia.style.display = "none"
    BarraLateral.style.display = "none"
}
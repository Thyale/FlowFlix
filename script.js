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


var CoverDoVideoStranger = window.document.querySelector("img#CapaDeStranger");
var pnomestranger = window.document.querySelectorAll("p.pnomepnomestranger")

function AbrirVideoStranger(){
    CoverDoVideoStranger.style.display = "none"
    pnomestranger.style.display = "none"
}

function FecharVideoStranger(){
    CoverDoVideoStranger.style.display = "block"
    pnomestranger.style.display = "block"
}


var CoverDoVideoManifest = window.document.querySelector("img#CapaDeManifest");
var pnomeManifest = window.document.querySelectorAll("p.pnomeManifest")

function AbrirVideoManifest(){
    CoverDoVideoManifest.style.display = "none"
    pnomeManifest.style.display = "none"
}

function FecharVideoManifest(){
    CoverDoVideoManifest.style.display = "block"
    pnomeManifest.style.display = "block"
}
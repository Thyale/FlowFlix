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


function AbrirVideoStranger(){
    let CapaDeStranger = window.document.querySelector("img#CapaDeStranger")
    CapaDeStranger.style.display = "none"
    let VideoStranger = window.document.querySelector("iframe.VideoStranger")
    VideoStranger.style.display = "block"
}

function AbrirVideoManifest(){
    let CapaDeManifest = window.document.querySelector("img#CapaDeManifest")
    CapaDeManifest.style.display = "none"
    let VideoManifest = window.document.querySelector("iframe.VideoManifest")
    VideoManifest.style.display = "block"
}

function AbrirVideoSimples(){
    let CapaDeSimples = window.document.querySelector("img#CapaDeSimples")
    CapaDeSimples.style.display = "none"
    let VideoSimples = window.document.querySelector("iframe.VideoSimples")
    VideoSimples.style.display = "block"
}

function AbrirVideoUmDia(){
    let CapaDeUmDia = window.document.querySelector("img#CapaDeUmDia")
    CapaDeUmDia.style.display = "none"
    let VideoUmDia = window.document.querySelector("iframe.VideoUmDia")
    VideoUmDia.style.display = "block"
}

function AbrirVideoBrigdertons(){
    let CapaDeBrigdertons = window.document.querySelector("img#CapaDeBrigdertons")
    CapaDeBrigdertons.style.display = "none"
    let VideoBrigdertons = window.document.querySelector("iframe.VideoBrigdertons")
    VideoBrigdertons.style.display = "block"
}

function AbrirVideowonka(){
    let CapaDewonkas = window.document.querySelector("img#CapaDewonka")
    CapaDewonka.style.display = "none"
    let Videowonka = window.document.querySelector("iframe.Videowonka")
    Videowonka.style.display = "block"
}

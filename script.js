var transparencia = window.document.querySelector("div.transparencia")
var BarraLateral = window.document.querySelector("div.BarraLateral")
var VideosDeTrailer = window.document.querySelector("div.VideosDeTrailer")

function AbrirMenuLateral(){
    transparencia.style.display = "block"
    BarraLateral.style.display = "flex"
}

function FecharBarraLateral(){
    transparencia.style.display = "none"
    BarraLateral.style.display = "none"
}

function Fechar(){
    transparencia.style.display = "none"
    BarraLateral.style.display = "none"
    VideosDeTrailer.style.display = 'none'
}


function AbrirVideo(n){
    VideosDeTrailer.style.display = 'flex'
    transparencia.style.display = "block"
    if(n==1){
        VideosDeTrailer.innerHTML = `<iframe class="TrailerStrangerThings" height="345" src="https://www.youtube.com/embed/b9EkMc79ZSU?si=Q7eySkU9wqHsGO2l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    }else if(n==2){
        VideosDeTrailer.innerHTML = `<iframe height="315" src="https://www.youtube.com/embed/I1hNAIzkQWY?si=qOHSI98ECeENx0yj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    }else if(n==3){
        VideosDeTrailer.innerHTML = `<iframe height="315" src="https://www.youtube.com/embed/dOMTh9Jd81w?si=zkEC1DJZsUajeLrZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    }else if(n==4){
        VideosDeTrailer.innerHTML = `<iframe height="315" src="https://www.youtube.com/embed/1q8zGQbGLsQ?si=IrwTqnCWVEQqs9BA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    }else if(n==5){
        VideosDeTrailer.innerHTML = `<iframe height="315" src="https://www.youtube.com/embed/pyi8QAlHR8k?si=fvSzZehbYmCXX6Jq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    }else if(n==6){
        VideosDeTrailer.innerHTML = `<iframe height="315" src="https://www.youtube.com/embed/-6hA1BxpdRk?si=flsl6sR-mbwFmWak" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    }else if(n==7){
        VideosDeTrailer.innerHTML = `<iframe height="315" src="https://www.youtube.com/embed/Ujs1Ud7k49M?si=qv6wbE-UDZhio0PV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    }else if(n==8){
        VideosDeTrailer.innerHTML = `<iframe height="315" src="https://www.youtube.com/embed/WvFHERDoBVg?si=CZioeAw5lDfG8Cuc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    }
}

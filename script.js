var transparencia = window.document.querySelector("div.transparencia")
var BarraLateral = window.document.querySelector("div.BarraLateral")
var VideosDeTrailer = window.document.querySelector("div.VideosDeTrailer")
var VideosDeTrailerMobile = window.document.querySelector("div.trailersMobile")

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

function AbrirVideoMobile(m){
    VideosDeTrailerMobile.style.display = 'flex'
    if(m==1){
        VideosDeTrailerMobile.innerHTML = `<iframe class="TrailerStrangerThings" height="345" src="https://www.youtube.com/embed/b9EkMc79ZSU?si=Q7eySkU9wqHsGO2l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    }else if(m==2){
        VideosDeTrailerMobile.innerHTML = `<iframe height="315" src="https://www.youtube.com/embed/I1hNAIzkQWY?si=qOHSI98ECeENx0yj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    }else if(m==3){
        VideosDeTrailerMobile.innerHTML = `<iframe height="315" src="https://www.youtube.com/embed/dOMTh9Jd81w?si=zkEC1DJZsUajeLrZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    }else if(m==4){
        VideosDeTrailerMobile.innerHTML = `<iframe height="315" src="https://www.youtube.com/embed/1q8zGQbGLsQ?si=IrwTqnCWVEQqs9BA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    }else if(m==5){
        VideosDeTrailerMobile.innerHTML = `<iframe height="315" src="https://www.youtube.com/embed/pyi8QAlHR8k?si=fvSzZehbYmCXX6Jq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    }else if(m==6){
        VideosDeTrailerMobile.innerHTML = `<iframe height="315" src="https://www.youtube.com/embed/-6hA1BxpdRk?si=flsl6sR-mbwFmWak" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    }else if(m==7){
        VideosDeTrailerMobile.innerHTML = `<iframe height="315" src="https://www.youtube.com/embed/Ujs1Ud7k49M?si=qv6wbE-UDZhio0PV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    }else if(m==8){
        VideosDeTrailerMobile.innerHTML = `<iframe height="315" src="https://www.youtube.com/embed/WvFHERDoBVg?si=CZioeAw5lDfG8Cuc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    }
}

var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});

function AbrirPerguntaDiv(n){
    if(n==1){
        let pergunta1 = window.document.querySelector("div#Pergunta1")
        pergunta1.style.display = "flex"
        let imagenIconAbrir1 = window.document.querySelector("img.imagenIconAbrir1")
        imagenIconAbrir1.style.display = "none"
        let imagenIconFechar1 = window.document.querySelector("img.imagenIconFechar1")
        imagenIconFechar1.style.display = "block"
    }else if(n==2){
        let pergunta2 = window.document.querySelector("div#Pergunta2")
        pergunta2.style.display = "flex"
        let imagenIconAbrir2 = window.document.querySelector("img.imagenIconAbrir2")
        imagenIconAbrir2.style.display = "none"
        let imagenIconFechar2 = window.document.querySelector("img.imagenIconFechar2")
        imagenIconFechar2.style.display = "block"
    }else if(n==3){
        let pergunta3 = window.document.querySelector("div#Pergunta3")
        pergunta3.style.display = "flex"
        let imagenIconAbrir3 = window.document.querySelector("img.imagenIconAbrir3")
        imagenIconAbrir3.style.display = "none"
        let imagenIconFechar3 = window.document.querySelector("img.imagenIconFechar3")
        imagenIconFechar3.style.display = "block"
    }else if(n==4){
        let pergunta4 = window.document.querySelector("div#Pergunta4")
        pergunta4.style.display = "flex"
        let imagenIconAbrir4 = window.document.querySelector("img.imagenIconAbrir4")
        imagenIconAbrir4.style.display = "none"
        let imagenIconFechar4 = window.document.querySelector("img.imagenIconFechar4")
        imagenIconFechar4.style.display = "block"
    }else if(n==5){
        let pergunta5 = window.document.querySelector("div#Pergunta5")
        pergunta5.style.display = "flex"
        let imagenIconAbrir5 = window.document.querySelector("img.imagenIconAbrir5")
        imagenIconAbrir5.style.display = "none"
        let imagenIconFechar5 = window.document.querySelector("img.imagenIconFechar5")
        imagenIconFechar5.style.display = "block"
    }else if(n==6){
        let pergunta6 = window.document.querySelector("div#Pergunta6")
        pergunta6.style.display = "flex"
        let imagenIconAbrir6 = window.document.querySelector("img.imagenIconAbrir6")
        imagenIconAbrir6.style.display = "none"
        let imagenIconFechar6 = window.document.querySelector("img.imagenIconFechar6")
        imagenIconFechar6.style.display = "block"
    }else if(n==7){
        let pergunta7 = window.document.querySelector("div#Pergunta7")
        pergunta7.style.display = "flex"
        let imagenIconAbrir7 = window.document.querySelector("img.imagenIconAbrir7")
        imagenIconAbrir7.style.display = "none"
        let imagenIconFechar7 = window.document.querySelector("img.imagenIconFechar7")
        imagenIconFechar7.style.display = "block"
    }else if(n==8){
        let pergunta8 = window.document.querySelector("div#Pergunta8")
        pergunta8.style.display = "flex"
        let imagenIconAbrir8 = window.document.querySelector("img.imagenIconAbrir8")
        imagenIconAbrir8.style.display = "none"
        let imagenIconFechar8 = window.document.querySelector("img.imagenIconFechar8")
        imagenIconFechar8.style.display = "block"
    }else if(n==9){
        let pergunta9 = window.document.querySelector("div#Pergunta9")
        pergunta9.style.display = "flex"
        let imagenIconAbrir9 = window.document.querySelector("img.imagenIconAbrir9")
        imagenIconAbrir9.style.display = "none"
        let imagenIconFechar9 = window.document.querySelector("img.imagenIconFechar9")
        imagenIconFechar9.style.display = "block"
    }else if(n==10){
        let pergunta10 = window.document.querySelector("div#Pergunta10")
        pergunta10.style.display = "flex"
        let imagenIconAbrir10 = window.document.querySelector("img.imagenIconAbrir10")
        imagenIconAbrir10.style.display = "none"
        let imagenIconFechar10 = window.document.querySelector("img.imagenIconFechar10")
        imagenIconFechar10.style.display = "block"
    }
    
}

function FecharPerguntaDiv(f){
    if(f==1){
        let pergunta1 = window.document.querySelector("div#Pergunta1")
        pergunta1.style.display = "none"
        let imagenIconAbrir1 = window.document.querySelector("img.imagenIconAbrir1")
        imagenIconAbrir1.style.display = "block"
        let imagenIconFechar1 = window.document.querySelector("img.imagenIconFechar1")
        imagenIconFechar1.style.display = "none"
    }else if(f==2){
        let pergunta2 = window.document.querySelector("div#Pergunta2")
        pergunta2.style.display = "none"
        let imagenIconAbrir2 = window.document.querySelector("img.imagenIconAbrir2")
        imagenIconAbrir2.style.display = "block"
        let imagenIconFechar2 = window.document.querySelector("img.imagenIconFechar2")
        imagenIconFechar2.style.display = "none"
    }else if(f==3){
        let pergunta3 = window.document.querySelector("div#Pergunta3")
        pergunta3.style.display = "none"
        let imagenIconAbrir3 = window.document.querySelector("img.imagenIconAbrir3")
        imagenIconAbrir3.style.display = "block"
        let imagenIconFechar3 = window.document.querySelector("img.imagenIconFechar3")
        imagenIconFechar3.style.display = "none"
    }else if(f==4){
        let pergunta4 = window.document.querySelector("div#Pergunta4")
        pergunta4.style.display = "none"
        let imagenIconAbrir4 = window.document.querySelector("img.imagenIconAbrir4")
        imagenIconAbrir4.style.display = "block"
        let imagenIconFechar4 = window.document.querySelector("img.imagenIconFechar4")
        imagenIconFechar4.style.display = "none"
    }else if(f==5){
        let pergunta5 = window.document.querySelector("div#Pergunta5")
        pergunta5.style.display = "none"
        let imagenIconAbrir5 = window.document.querySelector("img.imagenIconAbrir5")
        imagenIconAbrir5.style.display = "block"
        let imagenIconFechar5 = window.document.querySelector("img.imagenIconFechar5")
        imagenIconFechar5.style.display = "none"
    }else if(f==6){
        let pergunta6 = window.document.querySelector("div#Pergunta6")
        pergunta6.style.display = "none"
        let imagenIconAbrir6 = window.document.querySelector("img.imagenIconAbrir6")
        imagenIconAbrir6.style.display = "block"
        let imagenIconFechar6 = window.document.querySelector("img.imagenIconFechar6")
        imagenIconFechar6.style.display = "none"
    }else if(f==7){
        let pergunta7 = window.document.querySelector("div#Pergunta7")
        pergunta7.style.display = "none"
        let imagenIconAbrir7 = window.document.querySelector("img.imagenIconAbrir7")
        imagenIconAbrir7.style.display = "block"
        let imagenIconFechar7 = window.document.querySelector("img.imagenIconFechar7")
        imagenIconFechar7.style.display = "none"
    }else if(f==8){
        let pergunta8 = window.document.querySelector("div#Pergunta8")
        pergunta8.style.display = "none"
        let imagenIconAbrir8 = window.document.querySelector("img.imagenIconAbrir8")
        imagenIconAbrir8.style.display = "block"
        let imagenIconFechar8 = window.document.querySelector("img.imagenIconFechar8")
        imagenIconFechar8.style.display = "none"
    }else if(f==9){
        let pergunta9 = window.document.querySelector("div#Pergunta9")
        pergunta9.style.display = "none"
        let imagenIconAbrir9 = window.document.querySelector("img.imagenIconAbrir9")
        imagenIconAbrir9.style.display = "block"
        let imagenIconFechar9 = window.document.querySelector("img.imagenIconFechar9")
        imagenIconFechar9.style.display = "none"
    }else if(f==10){
        let pergunta10 = window.document.querySelector("div#Pergunta10")
        pergunta10.style.display = "none"
        let imagenIconAbrir10 = window.document.querySelector("img.imagenIconAbrir10")
        imagenIconAbrir10.style.display = "block"
        let imagenIconFechar10 = window.document.querySelector("img.imagenIconFechar10")
        imagenIconFechar10.style.display = "none"
    }
}
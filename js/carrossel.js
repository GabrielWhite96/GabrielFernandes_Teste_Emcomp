const imgs = document.getElementById ("img");
const img = document.querySelectorAll ("#img .carrossel__imagem");

let idx = 0;

function carrossel () {
    idx++;
    if (idx > img.length - 4) {
        idx = 0;
    }
    imgs.style.transform = `translateX(${-idx * 318}px)`;
}
setInterval(carrossel, 1800);
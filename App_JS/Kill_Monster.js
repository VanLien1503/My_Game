let killQV = 3;
let speedKill = 650;
setInterval(function () {
    if (speedKill <= 100) {
        speedKill = 650;
        // imgFirsQV();
    }
    speedKill -= 10;
}, 20);

function killQuaiVat() {
    if (speedKill>=600){
        nhanVatB.checkGame=false;
        imgFirsQV();
    }else {
        let img = new Image();
        img.src = "image/imgKill_2/lamia_slash" + killQV + ".png";
        context.drawImage(img, speedKill, 250);
    }
}
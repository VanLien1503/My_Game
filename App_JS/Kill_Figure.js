let killNV = 5;
let kilx = 10;
setInterval(function () {
    if (kilx >= 800) {
        // killNV=6;
        kilx = 10;
        imgFirstA();
    }
    kilx += 15;
}, 40);

function killNhanVat() {
    if (kilx <= 30) {
        nhanVatA.checkGame = false;
        imgFirstA();
    } else {
        let img = new Image();
        img.src = "image/imgKill/thrust" + killNV + ".png";
        context.drawImage(img, kilx, 300);
    }
}
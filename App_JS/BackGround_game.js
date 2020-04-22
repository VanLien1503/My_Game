function drawBackgroud() {
    let img = new Image();
    img.src = "image/backGround/BackGround_Game.jpg";
    context.drawImage(img, 0, 0);
}
function drawBackgroud1() {
    let img = new Image();
    img.src = "image/backGround/BackGround_Game1.jpg";
    context.drawImage(img, 0, 0);
}
function youWin() {
    let img = new Image();
    img.src = "image/backGround/youWin.png";
    context.drawImage(img, 200, 80);
}
function youLose() {
    let img = new Image();
    img.src = "image/backGround/youLose.png";
    context.drawImage(img, 200, 100);
}
function checkWin() {
        if (nhanVatB.vitality<=0){
            youWin();
        }else if(nhanVatA.vitality<=0) {
            youLose();
        }
}
//tạo ảnh điều kiện đánh
function imgDam() {
    let image = new Image();
    image.src = "image/oanTuTy/dam.png";
    context.drawImage(image, 600,390);
}
function imgla() {
    let image = new Image();
    image.src = "image/oanTuTy/la.png";
    context.drawImage(image, 600,390);
}
function imgkeo() {
    let image = new Image();
    image.src = "image/oanTuTy/keo.png";
    context.drawImage(image, 600,390);
}
function checkOnTuTy() {
        if (attackQV===1){
            imgDam();
        }else if (attackQV===2){
            imgla();
        }else {
            imgkeo();
        }
}
//tạo hình ảnh oan tu ty nhân vật
function imgDamNV() {
    let image = new Image();
    image.src = "image/oanTuTy/dam.png";
    context.drawImage(image, 200,390);
}
function imglaDV() {
    let image = new Image();
    image.src = "image/oanTuTy/la.png";
    context.drawImage(image, 200,390);
}
function imgkeoNV() {
    let image = new Image();
    image.src = "image/oanTuTy/keo.png";
    context.drawImage(image, 200,390);
}
function checkOnTuTyNV() {
    if (attackNV_A===1){
        imgDamNV();
    }else if (attackNV_A===2){
        imglaDV();
    }else {
        imgkeoNV();
    }
}

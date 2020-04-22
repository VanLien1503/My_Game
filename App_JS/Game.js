let canvas = document.getElementById("myCanvas");
let context = canvas.getContext('2d');
// máu mana cho nhân vật
function drawMau() {
    context.beginPath();
    context.fillStyle = "#FF0000";
    context.fillRect(10,10,2*nhanVatA.vitality,30);
    context.closePath();
}
function drawMana() {
    context.beginPath();
    context.fillStyle = "#263bff";
    context.fillRect(10,40,50*nhanVatA.energy,30);
    context.closePath();
}
// máu và mana cho quái vật
function drawMauQV() {
    context.beginPath();
    context.fillStyle = "#FF0000";
    context.fillRect(750,10,2*nhanVatB.vitality,30);
    context.closePath();
}
function drawManaQV() {
    context.beginPath();
    context.fillStyle = "#263bff";
    context.fillRect(750,40,50*nhanVatB.energy,30);
    context.closePath();
}
// hình ảnh tiêu hao sức sống
function drawVitalityA() {
    context.beginPath();
    context.font= "30px Arial";
    context.fillStyle="#fff244";
    context.fillText("Tổn Thất: "+checkMauA,10,250);
}
function drawVitalityB() {
    context.beginPath();
    context.font= "30px Arial";
    context.fillStyle="#fff244";
    context.fillText("Tổn Thất: "+checkMauB,680,130);
}

function drawGame() {
    context.clearRect(0, 0, canvas.width, canvas.height);
//
    drawBackgroud1();
// gọi hàm máu cho nv
    drawMau();
    drawMana();
// gọi hàm máu cho quái vật
    drawMauQV();
    drawManaQV();


// vẽ chữ tiêu hao vitality cho nhân vật
    drawVitalityB();
    drawVitalityA();

// check game
    checkWin();

    checkOnTuTy();
    checkOnTuTyNV();
// gọi hàm hính ảnh cho nhân vật
    checkImgA();
    checkImgB();
//

   requestAnimationFrame(drawGame);
}
let attack_btn = document.getElementById("attack_btn");
let attackQV=0;
let attackNV_A=0;
attack_btn.onclick = function () {
// function check(){
    attackNV_A = parseInt(document.querySelector("input[name='attack']:checked").value);
    attackQV = Math.floor(Math.random() * 3) + 1;
    console.log(attackNV_A + '' + attackQV);
    if (attackNV_A === 1 && attackQV === 2) {
        nhanVatB.attack(nhanVatA);
        nhanVatB.checkGame=true;
        nhanVatA.checkGame=false;
        console.log("B Win" + attackNV_A + "/" + attackQV)
    } else if (attackNV_A === 2 && attackQV === 3) {
        nhanVatB.attack(nhanVatA);
        nhanVatB.checkGame=true;
        nhanVatA.checkGame=false;
        console.log("B Win" + attackNV_A + "/" + attackQV)
    } else if (attackNV_A === 3 && attackQV === 1) {
        nhanVatB.attack(nhanVatA);
        nhanVatB.checkGame=true;
        nhanVatA.checkGame=false;
        console.log("B Win" + attackNV_A + "/" + attackQV)
    } else if (attackNV_A === 1 && attackQV === 1) {
        nhanVatA.attack(nhanVatB);
        nhanVatB.attack(nhanVatA);
        //
        nhanVatA.checkGame = true;
        nhanVatB.checkGame=true;
        console.log("Hòa" + attackNV_A + "/" + attackQV)
    } else if (attackNV_A === 2 && attackQV === 2) {
        nhanVatA.attack(nhanVatB);
        nhanVatB.attack(nhanVatA);
        //
        nhanVatA.checkGame = true;
        nhanVatB.checkGame=true;
        console.log("Hòa" + attackNV_A + "/" + attackQV)
    } else if (attackNV_A === 3 && attackQV === 3) {
        nhanVatA.attack(nhanVatB);
        nhanVatB.attack(nhanVatA);
        //
        nhanVatA.checkGame = true;
        nhanVatB.checkGame=true;
        console.log("Hòa" + attackNV_A + "/" + attackQV)
    } else {
        console.log("A_Win"+attackNV_A+"/"+attackQV);
        nhanVatA.attack(nhanVatB);
        nhanVatA.checkGame = true;
        nhanVatB.checkGame=false;
    }
};

// tạo hàm hiển thị  Máu bị mất
let checkMauA=nhanVatA.attack(nhanVatB);
console.log(checkMauA);
let checkMauB=nhanVatB.attack(nhanVatA);
console.log(checkMauB);


//
drawGame();
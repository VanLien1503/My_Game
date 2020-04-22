let i = 1;
setInterval(function () {
    if (i === 7) {
        i = 1
    } else {
        i++;
    }
}, 200);
let j = 1;
setInterval(function () {
    if (j === 6) {
        j = 1;
    } else {
        j++
    }
}, 200);

function Figure(name, vitality, energy, damage, defense, avoid,
                exactly, x, y, speedFigure, status,
                xLocationFirst, yLocationFirst, checkGame, checkKill) {
    this.name = name;
    this.vitality = vitality;
    this.energy = energy;
    this.damge = damage;
    this.defense = defense;
    this.avoid = avoid;
    this.exactly = exactly;
    this.x = x;
    this.y = y;
    this.speed = speedFigure;
    this.status = status;
    this.xLocationFirst = xLocationFirst;
    this.yLocationFirst = yLocationFirst;
    this.checkGame = checkGame;
    this.checkKill = checkKill;

    // check the daeth...!.
    this.checkDaeth = function (nhanVat) {
        if (nhanVat.vitality <= 0) {
            this.status = true;
            return alert("you Win");
        }
        if (this.vitality <= 0) {
            this.status = true;
            return alert("you Lose")
        }
    };
    // né tránh cho nhân vật.
    this.checkAvoid = function (nhanVat) {
        let arrAvoid = [];
        let avoid = Math.floor(Math.random() * 10 + this.exactly) + 1;
        for (let i = 0; i < nhanVat.avoid; i++) {
            arrAvoid.push(i);
        }
        if (arrAvoid.indexOf(avoid) === -1) {
            return false;
        } else {
            return true;
        }
    };
    // phương thức tấn công.
    this.attack = function (nhanVat) {
        if (this.checkGame === false) {
            if (this.energy === 2) {
                this.checkKill = true;
                // load hình ảnh đánh kill
                if (!this.checkAvoid(nhanVat)) {
                    nhanVat.vitality -= ((this.damge * this.damge) / nhanVat.defense) / 2;
                    this.energy = 0;
                    let resultDame_Kill = ((this.damge * this.damge) / nhanVat.defense) / 2;
                    //
                    console.log("đánh Skill Mất : " + (this.damge * damage) / nhanVat.defense);
                    console.log(nhanVat.vitality);

                    return resultDame_Kill;


                } else {
                    this.energy = 0;
                    console.log(" đánh Skill Miss");
                    let miss_Kill = 0;
                    return miss_Kill;
                }
            } else {
                this.checkKill = false;
                if (!this.checkAvoid(nhanVat)) {
                    nhanVat.vitality -= this.damge / nhanVat.defense;
                    this.energy++;
                    console.log("đánh thường Mất :" + this.damge / nhanVat.defense);
                    console.log(nhanVat.vitality);
                    let resultDame_Tay = this.damge / nhanVat.defense;


                    return resultDame_Tay;


                } else {
                    this.energy++;
                    console.log("đánh thương miss");
                    let miss_Tay =0;
                    return miss_Tay;
                }
            }
        }
    };
}

let nhanVatA = new Figure("Aly", 120, 0, 30,
    10, 18, 15, 30, 300, 5,
    false, 30, 300, false, false);
let nhanVatB = new Figure("BaBa", 120, 0, 30,
    10, 17, 14, 650, 130, 5,
    false, 650, 130, false, false);

// hình ảnh đầu tiên nhân vật
function imgFirstA() {
    let image = new Image();
    image.src = "image/NhanVat/NhanVatA1.png";
    context.drawImage(image, nhanVatA.x, nhanVatA.y)
}

function moveTo1() {
    let image = new Image();
    image.src = "image/NhanVat/moveTo.png";
    context.drawImage(image, nhanVatA.x, nhanVatA.y)
}

// hình ảnh chuyển động của nhanh vật khi dùng kill
function drawFigure_01() {
    let image = new Image();
    image.src = "image/NhanVat/NhanVatA" + i + ".png";
    context.drawImage(image, nhanVatA.x, nhanVatA.y)
}

//check điều kiện chuyển ảnh
let checkImgA = function () {
    if (nhanVatA.checkGame === false) {
        drawFigure_01();
    } else if (nhanVatA.checkKill) {
        //gọi hình ảnh kill ra
        killNhanVat();
        imgFirstA();
    } else {
        // gọi hình ảnh đánh thường
        moveTo1();
    }
};
let xmoveToA = false;
setInterval(function () {
    if (nhanVatA.checkGame === true && !xmoveToA && nhanVatA.checkKill === false) {
        nhanVatA.x += nhanVatA.speed;
        if (nhanVatA.x >= nhanVatB.x) {
            xmoveToA = true;
        }
    }
    if (xmoveToA) {
        nhanVatA.x -= nhanVatA.speed;
        if (nhanVatA.x >= nhanVatA.xLocationFirst)
            xmoveToA = true;
        if (nhanVatA.x <= nhanVatA.xLocationFirst) {
            nhanVatA.x = nhanVatA.xLocationFirst;
            nhanVatA.checkGame = false;
            imgFirstA();
            xmoveToA = false;
        }
    }
}, 5);

// Tạo Hình anh game cho quái vật

function imgFirsQV() {
    let image = new Image();
    image.src = "image/QuaiVat/QuaiVatA1.png";
    context.drawImage(image, nhanVatB.x, nhanVatB.y)
}

// tao hình anh di chuyển cho Quái Vật
function QvMoveTo() {
    let image = new Image();
    image.src = "image/QuaiVat/QuaiVatA3.png";
    context.drawImage(image, nhanVatB.x, nhanVatB.y)
}

// Tạo Chuyển động cho Quái Vật Khi Dung Kill
function drawFigure_02() {
    let image = new Image();
    image.src = "image/QuaiVat/QuaiVatA" + j + ".png";
    context.drawImage(image, nhanVatB.x, nhanVatB.y);
}

// check Điều Kiện chuyển anh cho Quái Vật
let checkImgB = function () {
    if (nhanVatB.checkGame === false) {
        drawFigure_02();
    } else if (nhanVatB.checkKill) {
        killQuaiVat();
        imgFirsQV();
    } else {
        QvMoveTo();
    }
};
// tạo di chuyển cho nhân Vật B
let xMoveToB = false;
setInterval(function () {
    if (nhanVatB.checkGame === true && !xMoveToB && nhanVatA.checkKill === false) {
        nhanVatB.x -= nhanVatB.speed;
        if (nhanVatA.x >= nhanVatB.x) {
            xMoveToB = true;
        }
    }

    if (xMoveToB) {
        nhanVatB.x += nhanVatB.speed;
        if (nhanVatB.x <= nhanVatB.xLocationFirst)
            xMoveToB = true;
        if (nhanVatB.x >= nhanVatB.xLocationFirst) {
            nhanVatB.x = nhanVatB.xLocationFirst;
            nhanVatB.checkGame = false;
            imgFirsQV();
            xMoveToB = false;
        }
    }
}, 5);
// check imgVitality
function checkImgVitality() {
    drawVitalityA();
    drawVitalityB();
}
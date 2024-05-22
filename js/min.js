var aMatic = document.getElementById("aMatic");
let aNum = document.getElementById("1stNum");
let bNum = document.getElementById("2ndNum");
let showResult = document.getElementById("showResult");
let popupSh = document.getElementById("popupSh");
let hide = document.getElementById("hide");
console.log(hide);
let symble = ["+", "-", "*", "/"]

for (let i = 0; i < symble.length; i++) {
    const sBtn = symble[0];
    const mBtn = symble[1];
    const iBtn = symble[2];
    const dBtn = symble[3];

    function btn() {
        aMatic.innerHTML = sBtn;
    }
    function btn2() {
        aMatic.innerHTML = mBtn;
    }
    function btn3() {
        aMatic.innerHTML = iBtn;
    }
    function btn4() {
        aMatic.innerHTML = dBtn;
    }
    function ans() {
        if (aMatic.innerHTML == sBtn) {
            let result = aNum.value + bNum.value;
            showResult.innerHTML = result;
            popupSh.classList.add("popup-show");
            popupSh.classList.remove("popup");
            hide.classList.add("hide");
            hide.classList.remove("show");
        }
        else if (aMatic.innerHTML == mBtn) {
            let result = aNum.value - bNum.value;
            showResult.innerHTML = result;
            popupSh.classList.add("popup-show");
            popupSh.classList.remove("popup");
            hide.classList.add("hide");
            hide.classList.remove("show");
        }
        else if (aMatic.innerHTML == iBtn) {
            let result = aNum.value * bNum.value;
            showResult.innerHTML = result;
            popupSh.classList.add("popup-show");
            popupSh.classList.remove("popup");
            hide.classList.add("hide");
            hide.classList.remove("show");
        }
        else if (aMatic.innerHTML == dBtn) {
            let result = aNum.value / bNum.value;
            showResult.innerHTML = result;
            popupSh.classList.add("popup-show");
            popupSh.classList.remove("popup");
            hide.classList.add("hide");
            hide.classList.remove("show");
        }
        else {
            console.log("fff");
        }
    }
}
function closee() {
    hide.classList.remove("hide");
    hide.classList.add("show");
    popupSh.classList.add("popup");
    popupSh.classList.remove("popup-show");
}

function reset() {
    aNum.value = "";
    bNum.value = "";
    aMatic.innerHTML = "";
}


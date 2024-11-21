var zir = document.getElementById("circl");
var containerZir = document.getElementById("cont");
var isOn = false;

function change() {
  if (!isOn) {
    zir.style.marginLeft = "25px";
    zir.style.backgroundColor = "white";
    containerZir.style.backgroundColor = "brown";
    isOn = true;
} else {
    zir.style.marginLeft = "0px";
    zir.style.backgroundColor = "brown";
    containerZir.style.backgroundColor = "white";
    isOn = false;
  }
}

zir.parentNode.onclick = change;

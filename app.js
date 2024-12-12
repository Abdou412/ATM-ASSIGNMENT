let display = document.getElementById("display");
let display_value = document.getElementById("display").value;
function appendtodisplay(x) {
  display.value += x;
}

function cleardisp() {
  display.value = "";
}
document.getElementById("enterbutton").onclick = ENTERFUNCTION;
function ENTERFUNCTION() {
  if (display.value == 9988) {
    document.getElementById("display").value = "ACCEPTED ";
  } else {
    document.getElementById("display").value = " WRONG PASSWORD";
  }
}

document.getElementById("withdraw").onclick = withdrawfnt;
function withdrawfnt() {
  document.getElementById("display").value = "ENTER YOUR CARD";
}

document.getElementById("depositebutton").onclick = deposite;
function deposite() {
  document.getElementById("display").value = "IDENTIFIE YOUR SELF";
}

document.getElementById("checkbalid").onclick = checkbal;
function checkbal() {
  document.getElementById("display").value = "ENTER YOUR INFORMATIONS  ";
}

document.getElementById("pp22").onclick = ACCT;
function ACCT() {
  document.getElementById("display").value = "DISCONNECTING...  ";
}

document.getElementById("RETURN").onclick = returnfct;
function returnfct() {
  document.getElementById("display").value = "CANCELLING...  ";
}



document.getElementById("enterpin").onclick = ENTERFUNCTION;

document.querySelector(".cardSlot").onclick = INSERTCARD;

function INSERTCARD(params) {
  document.getElementById("display").value = "PROCSSING...";
}



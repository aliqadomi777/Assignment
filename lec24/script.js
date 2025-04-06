let opType = "";
let str = "";
let temp = [];

function press(x) {
  const display = document.getElementById("display");

  if (["*", "-", "/", "+"].includes(x)) {
    if (str === "") return;
    temp.push(parseFloat(str));
    view(x);
    opType = x;
    str = "";
  } else if (x === ".") {
    if (str.includes(".")) return;
    str += x;
    view(x);
  } else {
    str += x;
    view(x);
  }
}

function view(x) {
  const display = document.getElementById("display");

  if (display.innerText === "0") {
    display.innerText = x;
  } else {
    display.innerText += x;
  }
}

function clearDisplay() {
  const display = document.getElementById("display");
  display.innerText = "0";
  opType = "";
  str = "";
  temp = [];
}

function calculate() {
  const display = document.getElementById("display");

  if (str === "" || temp.length === 0) return;

  temp.push(parseFloat(str));

  let result = 0;

  switch (opType) {
    case "*":
      result = temp[0] * temp[1];
      break;
    case "/":
      result = temp[0] / temp[1];
      break;
    case "+":
      result = temp[0] + temp[1];
      break;
    case "-":
      result = temp[0] - temp[1];
      break;
    default:
      return;
  }

  display.innerText = result;
  str = result.toString();
  temp = [];
  opType = "";
}

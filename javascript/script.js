function calcSwitch(x, y, operation) {
  let result;
  switch (operation) {
    case "+":
      result = x + y;
      break;
    case "-":
      result = x - y;
      break;
    case "*":
      result = x * y;
      break;
    case "/":
      result = x / y;
      break;
  }
  return result;
}

function calcIF(x, y, operation) {
  if (operation === "+") {
    return x + y;
  } else if (operation === "-") {
    return x - y;
  } else if (operation === "*") {
    return x * y;
  } else if (operation === "/") {
    return x / y;
  } else {
    return "Wrong";
  }
}

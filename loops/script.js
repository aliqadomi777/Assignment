function fact(x) {
  result = 1;
  for (; x > 1; x--) {
    result = result * x;
  }
  return result;
}

console.log(fact(5));

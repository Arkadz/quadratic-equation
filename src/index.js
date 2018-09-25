module.exports = function solveEquation(equation) {
  
  const modifyEquation = equation.split(" ");
  
  const a = parseInt(modifyEquation[0]);
  const b = parseInt(modifyEquation[4]) * (modifyEquation[3] == '+' ? 1 : -1) / a;
  const c = parseInt(modifyEquation[8]) * (modifyEquation[7] == '+' ? 1 : -1) / a;
  const dscrSqrt = Math.sqrt(b*b - 4*c);
  const x1 = ((b*(-1) + dscrSqrt) / 2);
  const x2 = ((b*(-1) - dscrSqrt) / 2);
  if(x1 < x2) {
    return [x1, x2];
  } else {
    return [x2, x1];
  }



}

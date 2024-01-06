function addition(num1, num2){
  return num1+num2
}

function subtraction(num1, num2){
  return num1-num2
}

function multiplication(num1, num2){
  return num1*num2
}

function division(num1, num2){
  return num1/num2
}

function calculator(num1, num2, work){
  return work(num1, num2)
}

console.log (calculator(10, 5, division))

function multiplyNumbers(num1,num2){
  function multiply(a,b){
    return a*b
  }
  console.log(multiply.apply(this,[num1,num2]));
}
multiplyNumbers(5,6)
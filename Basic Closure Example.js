function outerFunction(){
  let message="It's for outer function";
  return function innerFunction(){
    console.log(message)
  }
}
const finalFunction=outerFunction()
finalFunction()

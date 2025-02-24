function eligibleAge(age){
if (age<=0){
  return "Invalid age"
} 
  return (age>=60) ? "Eligible for senior discount" : "not eligible for senior discount" ;
         
}
console.log(eligibleAge(66));
function findLargestNumber(a,b,c){
 return   (a>b) && (a>c) ? `${a} is the largest number` : 
          (b>c) && (b>a) ? `${b} is the largest number`: 
          (c>a) && (c>b) ? `${c} is the largest number` : 
          ("all the numbers are equal")
}
console.log(findLargestNumber(19,23,03));
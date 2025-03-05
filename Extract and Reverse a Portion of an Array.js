function extractAndReverse(arr){
  
//let arr=[15, 30, 45, 60, 75, 90]
const subarray=arr.slice(2,5)
const newarr=subarray.reverse()

console.log(newarr)

}

extractAndReverse([15, 30, 45, 60, 75, 90])
function filterEvenNumbers(arr){
  let newarray=arr.filter(arr=>arr%2==0)
  console.log(newarray);
  
  function sumOfArray(arr){
    let sum=arr.reduce((acc,value)=> acc+value,0)
    console.log("sum of the elements of array:",sum)
  }
  sumOfArray(arr)
}
 filterEvenNumbers([2,3,4,5,6,8,9]);
 
 
 function sortAndConcat(arr1, arr2){
   let narr1=arr1.sort((a,b)=>(a-b))
   let narr2=arr2.sort((a,b)=>(a-b))
   
     // console.log(narr1)
     // console.log(narr2)
      let arr3=arr1.concat(arr2)
      console.log(arr3)
 }
 sortAndConcat([5,9,3,8,4],[6,1,3,9,0])
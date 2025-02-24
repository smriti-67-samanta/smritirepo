
let matrix=[[1,2,3],
            [4,5,6],
            [7,8,9]]

let bag=""
for(let i= matrix.length-1; i>=0; i--){
  bag=bag+matrix[i][0]+" "
}
for(let j=1; j<matrix.length; j++){
  bag=bag+matrix[0][j]+" "
}
for(let i=1; i<matrix.length; i++){
  bag=bag+matrix[i][matrix.length-1]+" "
}
for(let j=matrix.length-2; j>=1; j--){
  bag=bag+matrix[matrix.length-1][j]+" "
}
console.log(bag)
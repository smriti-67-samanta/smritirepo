let matrix=[[1,2,3,4,5],
            [6,7,8,9,1],
            [3,2,5,4,6],
            [7,8,9,1,2]]
            
  let row=matrix.length;
  let col=matrix[0].length
  let bag=""
  for(let i=0; i<row; i++){
    if(i%2==0){
      for(let j=col-1; j>=0; j--){
        bag=bag+matrix[i][j]+" "
      }
    }
    else{
      for(let j=0; j<col; j++){
        bag=bag+matrix[i][j]+" "
      }
      
    }
  }
  console.log(bag)
  
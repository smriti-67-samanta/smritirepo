let items= ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"]

let result=items.reduce((acc,type)=>{
  if(acc[type]){
    acc[type]=acc[type]+1
  }
  else{
    acc[type]=1
  }
  return acc
},{});

console.log(result)
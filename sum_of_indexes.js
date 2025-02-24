
let N = 3; 
let M = 2; 


let sumMatrix = []

for (let i = 0; i < N; i++) {
  sumMatrix[i] = []
  
  for (let j = 0; j < M; j++) {
    
    sumMatrix[i][j] = i + j;
  }
}

for (let i = 0; i < N; i++) {
  console.log(sumMatrix[i].join(' '));
}
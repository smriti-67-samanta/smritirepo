function findNum(arr,target){
    let res=[]
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]+arr[j]==target){
                res.push(i)
                res.push(j)
                console.log(res)
            }
        }
    }
}
findNum([2, 7, 11, 15],9)
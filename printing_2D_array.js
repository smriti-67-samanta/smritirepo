function print2DArray(N, M, arr) {
    for (let i = 0; i < N; i++) {
        let row = [];
        for (let j = 0; j < M; j++) {
            row.push(arr[i][j]);
        }
        console.log(row);
    }
}



print2DArray(3,2,[[1,2],[3,4],[5,6]]);
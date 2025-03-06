
function sortNames(namesArray){
let array=["Charlie", "Alice", "Bob"]

let narr=array.sort((a,b)=>a.localeCompare(b))
console.log(narr)
}

sortNames(["Charlie", "Alice", "Bob"])
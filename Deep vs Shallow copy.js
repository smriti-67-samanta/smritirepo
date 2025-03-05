function deepClone(obj){
  return JSON.parse(JSON.stringify(obj))
}

const obj={ name: "Alice", 
           hobbies: ["reading", 
                     "traveling"] }
                     
  const newobj=deepClone(obj)
  newobj.hobbies.push("coding")
  
  
  console.log("Original:",obj)
  console.log("Clone:",newobj)
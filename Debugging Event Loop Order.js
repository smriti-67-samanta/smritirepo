//given code has no issue...

console.log("Begin"); //(1.synchronous code so it executed first from the call stack)
setTimeout(() => { 
  console.log("Timeout Task");//(asynchronous function, enters into the call stack from 
                         //callback queue with the help of event loop and executed after all sychronous code)
                               
  }, 0); 
  Promise.resolve().then(() => { //(enters into the call stack after the synchronous code and
  console.log("Promise Task"); // executed immediately after them)
    
  }); console.log("End");//(2.synchronous code, so it executed immediately
                          //after the 1st synchronous function from the call stack)
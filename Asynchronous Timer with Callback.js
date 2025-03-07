function timer(duration,onComplete){
  setTimeout(()=>{
    onComplete()
  },duration)
}
timer(4000, (duration) => {
  console.log("Timer of 4000 ms finished");
});
 
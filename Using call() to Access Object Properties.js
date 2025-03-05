 function personInfo(){
 console.log(`Name:${this.Name}, Age:${this.Age}`)
 }
 
 const person={
             Name:"Aman",
             Age:25
 }
  personInfo.call(person)
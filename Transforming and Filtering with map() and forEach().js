function processProducts(obj){

let narr=obj.map(obj=>obj.name);

obj.forEach(obj=>{
  if(obj.price>50){
    console.log(`${obj.name} is above $50`);
  }
  else{
    console.log(`${obj.name} is below $50`);
  }
});

}
 let obj= [{ name: "Laptop", price: 1000 },
        { name: "Mouse", price: 20 }]

processProducts(obj);
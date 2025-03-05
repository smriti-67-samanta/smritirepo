const product= [

         { name: "Laptop", category: "Electronics", stock: 50, pricePerUnit: 1000 },

         { name: "Phone", category: "Electronics", stock: 150, pricePerUnit: 500 },

         { name: "T-shirt", category: "Clothing", stock: 40, pricePerUnit: 20 },

         { name: "Jeans", category: "Clothing", stock: 90, pricePerUnit: 40 },

         { name: "Watch", category: "Accessories", stock: 70, pricePerUnit: 150 } ]
         
  const productList=(product.filter(product=>product.stock<100))
                   .map(product=>({name:product.name,category:product.category,reorderCost:product.pricePerUnit*(100-product.stock)}))
  
  
  const finalProductList= productList.reduce((acc,product)=>{
    if (!acc[product.category]) {
        acc[product.category] = 0;
    }
    acc[product.category] += product.reorderCost;
    return acc;
}, {});
  console.log(finalProductList)
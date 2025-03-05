const employee= [

        { name: "Alice", tasksCompleted: 8, rating: 4.7 },

        { name: "Bob", tasksCompleted: 4, rating: 4.0 },

        { name: "Charlie", tasksCompleted: 6, rating: 3.5 },

        { name: "David", tasksCompleted: 10, rating: 4.9 },

        { name: "Eve", tasksCompleted: 7, rating: 2.8 }

]

const employeelist= (employee.filter(employee=> employee.tasksCompleted>5))
                     .map(employee=>({name:employee.name, 
                             performance:employee.rating>4.5 ? "excellent" :
                             employee.rating>3 ? "good" :
                             "need improvement"
                     }))
      const performanceOrder = { "performance:excellent": 1, "performance:good": 2, "need improvement": 3 };               
  const finalList=employeelist.sort((a,b)=>performanceOrder[a.rating] - performanceOrder[b.rating])
                     
                     
console.log(finalList);

//const newlist=employeelist.map(employeelist=>employee.name)
//console.log(newlist)
let person1 = { role: "admin",
               experience: 7, 
               active: true, 
               department: "IT" };
               
let person2 = { role: "manager", 
               experience: 4, 
               active: true, 
               department: "Marketing" };

let person3 = { role: "user", 
               experience: 2,   
               active: true, 
               department: "Support" };
               
let person4 = { role: "admin", 
               experience: 3, 
               active: false,
               department: "Finance" };
               
  function checkAccess(person) {            
      return person.role === "admin"
        ? !person.active
            ? "Admin Access Revoked"
            : person.experience >= 5
                ? person.department === "IT"
                    ? "Full IT Admin Access"
                    : "Full General Admin Access"
                : "Admin Access Revoked"
        : person.role === "manager"
        ? !person.active
            ? "Manager Access Revoked"
            : person.experience >= 3
                ? person.department === "Sales"
                     ? "Full Sales Manager Access"
                    : "Full Manager Access"
                : "Limited Manager Access"
        : person.role === "user"
        ? !person.active
            ? "User Access Revoked"
            : person.department === "Support"
                ? "Priority Support Access"
                : "User Access"
        : "Invalid Role";
}
              
  
  
  console.log(checkAccess(person1));
  console.log(checkAccess(person2));
  console.log(checkAccess(person3));
  console.log(checkAccess(person4));
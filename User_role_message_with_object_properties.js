let user1 = { name: "Alice", 
             role: "admin", 
             active: false };
             
             
               
let user2 = { name: "Bob", 
             role: "user", 
             active: true };
             
             
   function checkAccess(user){         
      return (user.active== true) && (user.role=="admin") ? "Admin Access Granted"  : 
             (user.active== false) && (user.role=="admin") ? "Admin Access Revoked" :
             (user.active== true) && (user.role=="user")  ?  "User Access Granted"  :
             (user.active== false) && (user.role=="user")  ?  "User Access Revoked" :
             ("Access Denied");
   }
   
   console.log(checkAccess(user1));
    console.log(checkAccess(user2));
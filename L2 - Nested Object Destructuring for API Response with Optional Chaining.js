const user = { id: 123, 
               profile: { name: "John Doe", 
                   address: { city: "Los Angeles", 
                     zipcode:"90001"  } } };
        const {
  id = "Information not available",
  profile: {
    name = "Information not available",
    address: {
      city = "Information not available",
      zipcode = "Information not available"
    } = {} 
  } = {} 
} = user;
      
     // console.log(user.id, user.profile.name,user.profile.address.zipcode)
    
      console.log("user",user.profile.name,"(id:",user.id,") lives in",
            user.profile.address.city,"(zipcode:",user.profile.address.zipcode,")")
            if(user.profile.address.zipcode==NaN){
              console.log("user",user.profile.name,"(id:",user.id,") lives in",
            user.profile.address.city,"(zipcode:information not available)")
            }
     
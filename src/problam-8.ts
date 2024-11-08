{
    

    const validateKeys = <T extends object>(obj: T, keys: (keyof T)[]):boolean =>{
    const data = keys.every(item=>item in obj);
   return data
   }
   const person = { name: "Alice", age: 25, email: "alice@example.com" };
   console.log(validateKeys(person, ["name", "email"]));
  

}
interface Profile{
  name:string,
  age:number,
  email:string
}

const updateProfile = (userProfile:Profile,updateAge:Partial<Profile>):Profile =>{
  const updateAgeProfile = {...userProfile,...updateAge}
return updateAgeProfile

}
const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age:  26 }));
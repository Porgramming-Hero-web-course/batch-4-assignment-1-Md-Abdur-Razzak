{
    
class Car {
  make :string
  model : string
  year : number
constructor(make:string,model:string,year:number){
  this.make = make
  this.model = model
  this.year = year
}
  getCarAge():number|string{
    const currentYear = new Date().getFullYear();
    const yearCalcult = this.year = currentYear-this.year
    return `${yearCalcult} (assuming current year is ${currentYear  })`
  }
}
const car = new Car("Honda", "Civic", 2018);
console.log(car.getCarAge());

 const validateKeys = <T extends object>(obj: T, keys: (keyof T)[]):boolean =>{
  const data = keys.every(item=>item in obj);
 return data
 }
 const person = { name: "Alice", age: 25, email: "alice@example.com" };
//console.log(validateKeys(person, ["name", "email"]));


}
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




}
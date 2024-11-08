const getProperty = <T,K extends keyof T>(user:T,key:K):T[K]=>{
    return user[key]
}
const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));
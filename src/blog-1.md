<h1>The Significance of Union and Intersection Types in TypeScript</h1>

<p>Union and intersection types in TypeScript help improve code flexibility and ensure type safety. Here's a brief overview with examples:</p>


<h2>1. Union Types (|)</h2>

<p>Union types allow a value to be one of several types. This is useful when a variable or function parameter can accept more than one type.</p>

```bash

function formatInput(input: string | number) {
    if (typeof input === 'string') {
        return input.toUpperCase(); 
    } else {
        return input;  
    }
}
console.log(formatInput("Next Level Developer")); 
console.log(formatInput(445442)); 

```
<h2>2. Intersection Types (&)</h2>
<p>Intersection types combine multiple types into one, requiring that the value satisfies all the combined types.</p>

```bash
interface User {
    name: string;
    age: number;
}

interface Employee {
    employeeId: number;
}

type UserEmployee = User & Employee;

const userEmployee: UserEmployee = {
    name: "Razzak",
    age: 22,
    employeeId: 6421
};

console.log(userEmployee);
```
<p>Union and intersection types are essential in TypeScript for handling diverse data structures while ensuring type safety, making your code both flexible and reliable.</p>
How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in? [cite: 1]

# TypeScript Generics [cite: 2]

Generics are one of the most powerful features in TypeScript. [cite: 3] It allows developers to create reusable components, classes, and functions that can work with different types of data while still maintaining strict type safety. [cite: 4] Instead of writing separate functions for strings, numbers, arrays, or objects, a single generic function can handle all these data types efficiently. [cite: 5] This reduces code duplication and improves maintainability in software development. [cite: 6]

In software development, writing DRY (Don’t Repeat Yourself) code is important. [cite: 7] We want to build functions, classes that can handle different data types without needing to rewrite them every single time for new use cases. [cite: 8] In TypeScript, we can achieve this goal by using generics. [cite: 9] For example, if we are writing a simple utility function without generics, we are forced to write it by hardcoding the type or by using any keywords, which is vulnerable for type safety. [cite: 10]

```typescript
function getString(value: string): string {
  return value;
}

function getElement(value: any): any {
  return value;
}
```
*Figure 1. examples without generics* [cite: 11]

A generic uses a type parameter, commonly written as `<T>`, which acts as a placeholder for the actual type that will be passed later. [cite: 12] When the function or component is used, TypeScript automatically replaces the placeholder with the correct type and performs compile-time type checking. [cite: 13] They act like variables for the types. [cite: 14] The way we pass functional arguments to compute logic, we can pass a type argument to a generic function. [cite: 14] This allows the component to adapt to whatever data structure it is given while remaining strictly typed. [cite: 15] Here’s how we can use generics to the previous function. [cite: 16]

```typescript
function getValue<T>(value: T): T {
  return value;
}
```
*Figure 2. example of generics* [cite: 17]

We can use generics in arrays. [cite: 18] Here is an example. [cite: 18]

```typescript
type GenericArray<value> = Array<value>

const friends: GenericArray<string> = ['Mr X', 'Mr Y', 'Mr Z']

const rollNumbers: GenericArray<number> = [2, 4, 7]
```
*Figure 3. generics with Array* [cite: 19]

We can use generics in functions. [cite: 20] Here is an example. [cite: 20]

```typescript
const createArrWithGeneric = <param>(value: param) => [value]

const arrString = createArrWithGeneric("Apple")
const arrNumber = createArrWithGeneric(22)
```
*Figure 4. Generics with Function* [cite: 21]

Generics can be used in Tuples, for example. [cite: 22]

```typescript
const createArrTupleGeneric = <param1, param2>(value1: param1, value2: param2) => [value1, value2]

const res1 = createArrTupleGeneric('Arpan', false)
const res2 = createArrTupleGeneric(222, { name: 'Arpan', id: false })
```
*Figure 5. Generics with Tuple* [cite: 23]

Generics are also used in Objects. [cite: 24] Here is an example. [cite: 24]

```typescript
type Box<T> = {
  value: T;
};

const userBox: Box<{ name: string; age: number }> = {
  value: {
    name: "Arpan",
    age: 22
  }
};
```
*Figure 6. Generics with Object* [cite: 25]

The power of generics extends far beyond simple functions. [cite: 26] We can use them to create highly reusable functions and classes. [cite: 26] Generics can also be used with interfaces to build reusable data structures. [cite: 27]

```typescript
interface Developer<value> {
  name: string
  salary: number
  device: {
    brand: string
    model: string
    releasedYr: string
  }
  smartWatch: value
}
interface NonBrandWatch {
  heartRate: string
  stopWatch: boolean
}

const poorDev: Developer<NonBrandWatch> = {
  name: "Mr Poor",
  salary: 200,
  device: {
    brand: 'lenovo',
    model: 'A21',
    releasedYr: '2010'
  },
  smartWatch: {
    heartRate: '200hz',
    stopWatch: true
  }
}
```
*Figure 7. Generics with Interface* [cite: 28]

Sometimes, we use generic constraint to strictly restrict what types can be used. [cite: 29] We can pass multiple type variables (e.g., `<T, U>`) and use the extends keyword to constrain them. [cite: 30] Here is an example. [cite: 31]

```typescript
type Student = {
  id: number
  name: string
}
const addStudentToCourse = <param extends Student>(studentInfo: param) => {
  return {
    course: 'Next Level',
    ...studentInfo
  }
}
```
*Figure 8. Generic Constraint* [cite: 32]

In conclusion, generics are one of the most powerful features in TypeScript because they combine flexibility with strict type safety. [cite: 33] They allow developers to build reusable functions, interfaces, and components that automatically adapt to different data structures while preserving reliable typing. [cite: 34] By using Generics effectively, developers can reduce code duplication, improve maintainability, and build scalable applications with fewer runtime errors. [cite: 35]
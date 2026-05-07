__How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?__

# TypeScript Generics 

Generics are one of the most powerful features in TypeScript. It allows developers to create reusable components, classes, and functions that can work with different types of data while still maintaining strict type safety. Instead of writing separate functions for strings, numbers, arrays, or objects, a single generic function can handle all these data types efficiently. This reduces code duplication and improves maintainability in software development.

In software development, writing DRY (Don’t Repeat Yourself) code is important. We want to build functions, classes that can handle different data types without needing to rewrite them every single time for new use cases. In TypeScript, we can achieve this goal by using generics.For example, if we are writing a simple utility function without generics, we are forced to write it by hardcoding the type or by using any keywords, which is vulnerable for type safety. Bellow is an example of a function without using generics.

```typescript
function getString(value: string): string {
  return value;
}

function getElement(value: any): any {
  return value;
}
```

A generic uses a type parameter, commonly written as `<T>`, which acts as a placeholder for the actual type that will be passed later. When the function or component is used, TypeScript automatically replaces the placeholder with the correct type and performs compile-time type checking. They act like variables for the types. The way we pass functional arguments to compute logic, we can pass a type argument to a generic function. This allows the component to adapt to whatever data structure it is given while remaining strictly typed. Here’s how we can use generics to the previous function.

```typescript
function getValue<T>(value: T): T {
  return value;
}
```

We can use generics in arrays. Here is an example.

```typescript
type GenericArray<value> = Array<value>

const friends: GenericArray<string> = ['Mr X', 'Mr Y', 'Mr Z']

const rollNumbers: GenericArray<number> = [2, 4, 7]
```


We can use generics in functions. Here is an example.

```typescript
const createArrWithGeneric = <param>(value: param) => [value]

const arrString = createArrWithGeneric("Apple")
const arrNumber = createArrWithGeneric(22)
```

Generics can be used in Tuples, for example.

```typescript
const createArrTupleGeneric = <param1, param2>(value1: param1, value2: param2) => [value1, value2]

const res1 = createArrTupleGeneric('Arpan', false)
const res2 = createArrTupleGeneric(222, { name: 'Arpan', id: false })
```
*Figure 5. Generics with Tuple* 

Generics are also used in Objects. Here is an example.

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

The power of generics extends far beyond simple functions. We can use them to create highly reusable functions and classes. Generics can also be used with interfaces to build reusable data structures.

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

Sometimes, we use generic constraint to strictly restrict what types can be used. We can pass multiple type variables (e.g., `<T, U>`) and use the extends keyword to constrain them. Here is an example. 

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

In conclusion, generics are one of the most powerful features in TypeScript because they combine flexibility with strict type safety. They allow developers to build reusable functions, interfaces, and components that automatically adapt to different data structures while preserving reliable typing. By using Generics effectively, developers can reduce code duplication, improve maintainability, and build scalable applications with fewer runtime errors.
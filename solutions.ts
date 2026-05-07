//Problem 1
function filterEvenNumbers(arr:number[]):number[] {
    return arr.filter((value:number)=> value%2===0)
}

//Problem 2
function reverseString(str:string):string {
    return [...str].reverse().join('')
}

//Problem 3
type StringOrNumber = string | number

function checkType(value: StringOrNumber): string {
    if (typeof value === 'string') return 'String'
    else return 'Number'
}

//Problem 4
function getProperty <O, K extends keyof O> (obj: O, key:K) {
    return obj[key]
}

//Problem 5
interface Book{
    title: string
    author: string
    publishedYear: number
}

function toggleReadStatus (read:Book) {
    return {
        ...read,
        isRead: true
    }
}

//Problem 6
class Person {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

class Student extends Person{
    grade: string
    constructor(name: string, age: number, grade: string) {
        super(name, age)
        this.grade = grade
    }

    getDetails() : string {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
    }
}


//Problem 7
function getIntersection(arr1:number[], arr2:number[]):number[] {
    return arr1.filter((value)=> arr2.includes(value))
}


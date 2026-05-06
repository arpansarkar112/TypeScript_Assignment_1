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

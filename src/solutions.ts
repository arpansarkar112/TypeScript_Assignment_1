//Problem 1
function filterEvenNumbers(arr:number[]):number[] {
    return arr.filter((value:number)=> value%2===0)
}

//Problem 2
function reverseString(str:string):string {
    return [...str].reverse().join('')
}

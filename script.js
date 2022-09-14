
function sqaure(number){
    return number*number
}

function cube(number){
    return number*number*number
}

function map(arr, fun){
    ar = []
    for(i=0;i<arr.length;i++)
    ar.push(fun(arr[i]))
    return ar
}

function filter(arr, fun){
    ar = []
    for(i = 0; i <= arr.length; i++)
    if(fun(arr[i]))
    ar.push(arr[i])
    return ar
}

function checkAdult(age){
    return age>=18
}


let sum = 0

function summition(number){
    sum += number
}

function forEach(arr, fun){
    for(i=0;i<arr.length;i++)
    fun(arr[i])
}


const numbers = [1,4,9,25,36]
const sqrts = map(numbers, Math.sqrt)

const squares = map(numbers, sqaure)

const cubes = map(numbers, cube)

console.log(sqrts)
console.log(squares)
console.log(cubes)
console.log(numbers)


const ages = [33, 12, 8, 18, 17, 19, 28, 11, 33, 44]

console.log(filter(ages, checkAdult))


forEach(numbers, summition)
console.log(sum)
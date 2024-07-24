function cubeNumbers(numbers) {
    return numbers.map(num => num*num*num/*Math.pow(num, 3)*/);
}

let numbers = [1, 2, 3, 4, 5];
let cubedNumbers = cubeNumbers(numbers);
console.log(cubedNumbers); 

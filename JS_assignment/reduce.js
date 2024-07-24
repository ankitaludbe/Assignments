function sumArray(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

let numbers = [1, 2, 3, 4, 5];
let sum = sumArray(numbers);
console.log(sum); 

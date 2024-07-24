function averageOfSquaredOdds(numbers) {

    const oddSquares = numbers.filter(num => num % 2 !== 0).map(num => num * num);  
    const sum = oddSquares.reduce((acc, curr) => acc + curr, 0); 
    const average = sum / oddSquares.length; 
    
    return average;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = averageOfSquaredOdds(numbers);
console.log(result); 

let scores = [
    { score: 80 },
    { score: 65 },
    { score: 90 },
    { score: 75 }
];

function calculateTotalScore(objects) {
    let totalScore = 0;
    
    objects.forEach(obj => {
        totalScore += obj.score;
    });
    
    return totalScore;
}
let totalScore = calculateTotalScore(scores);
console.log("Total Score:", totalScore); 

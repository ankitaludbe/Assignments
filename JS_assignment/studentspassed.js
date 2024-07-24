function findPassingStudents(students) {
    
    return students.filter(student => student.score >= 60);
}
let students = [
    { name: "Sanika", score: 70 },
    { name: "Sujay", score: 45 },
    { name: "Aparna", score: 85 }   
];

let passingStudents = findPassingStudents(students);
console.log(passingStudents);

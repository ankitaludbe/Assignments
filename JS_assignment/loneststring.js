function findLongestString(strings) {
  
    const maxLength = strings.reduce((max, str) => Math.max(max, str.length), 0);
   
    const longestStrings = strings.filter(str => str.length === maxLength);

    return longestStrings.find(str => str.length === maxLength);
}

let strings = ["Sanika", "Sweta", "Sujay", "Supriya", "Sonam"];
let longestString = findLongestString(strings);
console.log(longestString); 

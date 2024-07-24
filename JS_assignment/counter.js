function instancecounter() {
    let count = 0;
    return function() {
        count += 1;
        return count;
    };
}
 
const counter1 = instancecounter();
const counter2 = instancecounter();
console.log(counter1());
console.log(counter1());
console.log(counter2());
console.log(counter2());
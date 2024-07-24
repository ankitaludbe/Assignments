function capitalizeSentence(sentence) {
    return sentence
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

// Example usage:
let sentence = "Hi! My Name is Ankita";
let capitalized = capitalizeSentence(sentence);
console.log(capitalized); 

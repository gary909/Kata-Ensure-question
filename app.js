function ensureQuestion(s) {
    let myString = s.slice(-1);
    if(myString == "?"){
        return s;
    } else if (myString == ""){
        return "?";
    } else {
        return s + "?";
    }
}

console.log(ensureQuestion("")); // ?
console.log(ensureQuestion("Yes")); // Yes?
console.log(ensureQuestion("No?")); // No?
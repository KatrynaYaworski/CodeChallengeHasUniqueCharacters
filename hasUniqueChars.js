/*
Given a word, return true if that word contains only unique characters. Return false otherwise.

For example:

hasUniqueChars("Monday")
// returns true
hasUniqueChars("Moonday")
// returns false
Uppercase and lowercase letters should be considered separately:

hasUniqueChars("Bob")
// returns true
*/

function uniqueValues(word){
    let uniqueChars = {}
    for (let i = 0; i < word.length; i++){
        if(uniqueChars[word[i]]){
            return false
        }
        uniqueChars[word[i]] = true
    }
    return true
}

console.log(uniqueValues('Bob'))

function hasUniqueChars(word) {
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++) {
        uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
}

//   console.log(hasUniqueChars('Bob'))

function check(word) {
    arr = [false]
    for (i = 0; i < word.length; i++) {
        if (arr[word.charCodeAt(i)] === true) {
            return false;
        }
        arr[word.charCodeAt(i)] = true;
    }
    return true;
}

// console.log(check('Bob'))
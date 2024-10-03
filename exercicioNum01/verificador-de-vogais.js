/**
 * Counts the number of vowels in a word.
 *
 * @remarks
 * This function is part of the {@link core-library#StringUtilities | StringUtilities} subsystem.
 *
 * @param word - The word in which to count the vowels
 * @returns The number of vowels in the word
 *
 * @beta
 */
function countVowels(word) {
    var matches = word.match(/[aeiouAEIOU]/g);
    return matches ? matches.length : 0;
}
/**
 * Prints the result of the vowel count.
 *
 * @param word - The analyzed word
 * @param vowelCount - The number of vowels in the word
 */
function printResult(word, vowelCount) {
    console.log("The word \"".concat(word, "\" has ").concat(vowelCount, " vowels."));
}
/**
 * Validates if the input is a word composed only of letters and spaces.
 *
 * @param word - The word to be validated
 * @returns True if the word is valid, false otherwise
 */
function validateInput(word) {
    return /^[a-zA-Z\s]+$/.test(word);
}
var word = 'Orion Boot Camp Backend';
var vowelCount = countVowels(word);
var userWord = prompt("Enter a word:") || "";
userWord = userWord.trim();
while (!validateInput(userWord)) {
    alert("Please enter only letters and spaces, and do not leave the field empty.");
    userWord = prompt("Enter a word:") || "";
    userWord = userWord.trim();
}
var userVowelCount = countVowels(userWord);
printResult(word, vowelCount);
printResult(userWord, userVowelCount);

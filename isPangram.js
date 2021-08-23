// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence 
// "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
    const alphabeth = "abcdefghijklmnopqrstuvwxyz"

    for (let i = 0; i < alphabeth.length; i++) {
        const letter = alphabeth[i];
        if (!string.toLowerCase().includes(letter)) {
            return false
        }
    }
    return true
}

console.log(isPangram('How quickly daft jumping zebras vex.'))
console.log(isPangram('ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ'))
console.log(isPangram('Cwm fjord bank glyphs vext quiz'))
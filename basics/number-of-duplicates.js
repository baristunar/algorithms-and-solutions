// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text){

    const characters = text.toLowerCase().split('');
    let counter = 0;
    const uniques=[]
    const duplicates = []
    
    for(char of characters){
      if(uniques.includes(char) && !duplicates.includes(char)){
        counter++;
        duplicates.push(char)
      }
      else{
        uniques.push(char)
      }
    }
    return counter;
    
    //...
  }
console.log(duplicateCount("abcde"))
console.log(duplicateCount("aabbcde"))
console.log(duplicateCount("indivisibility"))
console.log(duplicateCount("Indivisibilities"))
console.log(duplicateCount("ABBA"))
console.log(duplicateCount("aA11"))
console.log(duplicateCount("abcde"))
console.log(duplicateCount("abcde"))
/* Write a recursive function which returns each word capitalized of given array  */

function capitalizeWords(array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length - 1)[0].toUpperCase());
  return res;
}

let words = ["am", "learning", "recursion", "test", "barış"];
console.log(capitalizeWords(words));
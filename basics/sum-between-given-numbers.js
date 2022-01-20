// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

function getSum( a,b )
{
  if (a === b ) return a;
const bigger = a > b ? a : b
const small = a <b ? a: b;
let result = 0;
  for(let i =small; i <= bigger; i++){
  result +=i;
  }
  return result
  
   //Good luck!
}
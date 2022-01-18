const areThereDuplicates = (...args) => {
  const values = {};

  for (const item of args) {
    values[item] = (values[item] || 0) + 1;

    if (values[item] > 1) return true
  }

  return false
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));

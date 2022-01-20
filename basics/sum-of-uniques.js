const countUniqueValues = (arr) => {
  if (arr.length === 0) return 0;

  const uniques = {};

  for (const num of arr) {
    if (!uniques[num]) {
      uniques[num] = 1;
    }
  }

  return Object.keys(uniques).length;
};

const t1 = performance.now();
countUniqueValues([1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 7, 7, 8]);
const t2 = performance.now();
console.log("Loop > ", t2 - t1 / 1000);

countUniqueValues([]);
countUniqueValues([2, 5, 6, 6, 7, 7, 7, 8]);

/* const countWithSet = (arr) => {
  new Set(arr).size;
};

const t3 = performance.now();
countWithSet([1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 7, 7, 8]);
const t4 = performance.now();

console.log("SET > ", t4 - t3 / 1000);
countWithSet([]);
countWithSet([2, 5, 6, 6, 7, 7, 7, 8]); */

/* First solution faster than set */

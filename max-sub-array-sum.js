
/* Window Sliding Pattern */

const maxSumofK = (arr, k) => {
  if(arr.length < k ) return false;

  let max = 0
  let tempMax = 0;

  for(let i = 0; i< k; i++){
    tempMax+= arr[i];
  }
  max = tempMax;

  for(let j = k; j < arr.length; j++){
      tempMax = tempMax - arr[j-k] + arr[j];

      if(tempMax > max) max = tempMax;
  }

  return max;

  }
  
  console.log(maxSumofK([1, 4, 2, 10, 2, 3, 1, 0, 20 ], 4)) // 24

  console.log(maxSumofK([2,6,9,2,1,8,5,6,3], 3)) // 19

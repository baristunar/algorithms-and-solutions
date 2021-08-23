// `
// Enough is enough!
// Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie 
// their entire collection. However, Charlie doesn't like these sessions, since the motive usually repeats. 
// He isn't fond of seeing the Eiffel tower 40 times. He tells them that he will only sit during the session if they show 
// the same motive at most N times. Luckily, Alice and Bob are able to encode the motive as a number. Can you help them to remove 
// numbers such that their list contains each number only up to N times, without changing the order?`

function deleteNth(arr, n) {
    const numbers = {}
    const newArr = []
    
    for (let i = 0; i < arrLength; i++) {
        const num = arr[i];
        if (numbers[num]) {
            numbers[num] += 1
            if (numbers[num] <= n) {
                newArr.push(num)
            }
        } else {
            numbers[num] = 1;
            newArr.push(num)
        }
    }
    return newArr;

}

console.log(deleteNth([36, 4, 36, 30, 30, 16, 4, 16, 16, 30, 17, 17, 36, 4, 16, 36, 4, 17, 16, 19, 4, 30, 17, 36, 36, 30, 36, 4, 16, 4, 19, 16, 36, 16, 17, 16, 4, 4, 37, 36, 17, 17], 4))
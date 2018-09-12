const naiveMaxSubArraySum = (arr, n) => {
    let maxSum = -Infinity;
    for (let i = 0; i < arr.length - n + 1; i++) {
        let tempSum = 0;
        for (let j = 0; j < n; j++) {
            tempSum += arr[i + j];
        }
        if (tempSum > maxSum) maxSum = tempSum;
    }
    return maxSum;
}

const maxSubArraySum = (arr, n) => {
    let maxSum = 0;
    for (let i = 0; i < n; i++) {
        maxSum += arr[i];
    }
    let tempSum = maxSum;
    for (let i = n; i < arr.length; i++) {
        tempSum = tempSum - arr[i - n] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}
const iterativeFactorial = (n) => {
    let factorial = 1;
    for (i = 1; i <= n; i++) {
        factorial = factorial * i;
    }
    return factorial;
}

const recursiveFactorial = (n) => {
    if (n <= 1) return 1;
    return n * recursiveFactorial(--n);
}

const powerIterative = (base, exp) => {
    for (let i = 0; i < exp - 1; i++) {
        base *= base;
    }
    return base;
}

const powerRecursive = (x, y) => {
    if (y === 0) return 1;
    if (y > 1) return x * powerRecursive(x, --y);
    if (y < 1) return 1 / x * powerRecursive(x, ++y);
    return x;
}

const productOfArrayIterative = arr => {
    let product = arr[0];
    for (let i = 1; i < arr.length; i++) {
        product = product * arr[i];
    }
    return product;
}

const productOfArrayRecursive = arr => {
    if (arr.length === 1) return arr[0];
    return arr[arr.length - 1] * productOfArrayRecursive(arr.slice(0, -1));
}

const recursiveRange = n => {
    if (n = 0) return 0;
    return n + recursiveRange(--n);
}

const fibIterative = n => {
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }
    return arr[n];
}

const fibRecursive = n => {
    if (n < 2) return n;
    return fibRecursive(n - 2) + fibRecursive(n - 1);
}

const reverseIterative = str => {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed.concat(str[i]);
    }
    return reversed;
}

const reverseHelperRecursive = str => {
    let reversed = '';
    const helper = helperStr => {
        if (helperStr.length === 0) return helperStr;
        reversed = reversed.concat(helperStr.slice(-1));
        helper(helperStr.slice(0, -1));
    }
    helper(str);
    return reversed;
}

const reverseRecursive = str => {
    if (str.length === 1) return str;
    return reverseRecursive(str.slice(1)) + str[0];
}

const isPalindromeIterative = str => {
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr = newStr.concat(str[i]);
    }
    return str === newStr;
}

const isPalindromeHelperRecursive = str => {
    let reversed = '';
    const helper = helperStr => {
        if (helperStr.length === 0) return helperStr;
        reversed = reversed.concat(helperStr.slice(-1));
        helper(helperStr.slice(0, -1));
    }
    helper(str);
    return str === reversed;
}

const isPalindromeRecursive = str => {
    if (str.length === 1) return str;
    return str === (isPalindromeRecursive(str.slice(1)) + str[0]);
}

const someRecursive = (arr, callback) => {
    if (arr.length === 0) return false;
    if (callback(arr[0])) return true;
    return someRecursive(arr.slice(1), callback);
}

const flattenIterative = arr => {
    let flatArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            flatArr.push(arr[i][j]);
        }
    }
    return flatArr;
}

const flattenRecursive = arr => {
    let flatArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flatArr = flatArr.concat(flattenRecursive(arr[i]));
        } else {
            flatArr = flatArr.concat(arr[i]);
        }
    }
    return flatArr;
}

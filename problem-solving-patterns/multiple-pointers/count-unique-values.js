const countUniqueValues = arr => {
    if (arr.length === 0) return 0;
    let i = 0;
    let j = 1; 
    while (j < arr.length) {
        arr[i] === arr[j] ? j++ : arr[++i] = arr[j];
    }
    return ++i;
}

module.exports = countUniqueValues;
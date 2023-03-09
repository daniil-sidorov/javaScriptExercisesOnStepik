function testArray(a, b) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i];
    }
    for (let i = 0; i < b.length; i++) {
        sum += b[i];
    }
    return (sum);
}

console.log(testArray([0, 1, 5, 3], [3]));


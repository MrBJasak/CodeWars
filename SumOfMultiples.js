function sumMul(n, m) {
    if (m <= 0) {
        return 'INVALID';
    } else {
        let a = m / n;
        let b = (m * (m + 1)) / 2;
        let xd = n * b;
        return xd;
    }
}

console.log(sumMul(2, 9));
console.log(sumMul(4, -7));

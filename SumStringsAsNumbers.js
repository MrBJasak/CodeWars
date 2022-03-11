function sumStrings(a, b) {
    console.log((BigInt(+a) + BigInt(+b)).toString());
}

sumStrings('123', '456');
sumStrings('', '456');

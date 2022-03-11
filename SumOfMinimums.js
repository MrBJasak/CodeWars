function sumOfMinimums(arr) {
    let temp = 0;
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        temp += Math.min.apply('', arr[i]);
    }
    console.log(temp);
}

sumOfMinimums([
    [7, 9, 8, 6, 2],
    [6, 3, 5, 4, 3],
    [5, 8, 7, 4, 5],
]);

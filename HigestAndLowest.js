function highAndLow(numbers) {
    numbers = numbers.split(' ');
    console.log(numbers);
    let max = Math.max.apply(Math, numbers);
    let min = Math.min.apply(Math, numbers);
    return `${max} ${min}`;
}

highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4');

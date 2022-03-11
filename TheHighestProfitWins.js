function minMax(arr) {
    console.log(arr);
    let max = Math.max.apply('', arr);
    let min = Math.min.apply('', arr);
    return [min, max];
}

minMax([2334454, 5]);

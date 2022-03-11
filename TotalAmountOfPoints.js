function points(games) {
    console.log(games);
    let x = 0;
    games.map((item) => {
        // console.log([...item]);
        let left = [...item].shift();
        let right = [...item].pop();
        console.log(left, right);
        if (left > right) {
            x = x + 3;
        } else if (left < right) {
            x = x + 0;
        } else if (left === right) {
            x = x + 1;
        }
    });
    console.log(x);
}

points(['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3']);

//30

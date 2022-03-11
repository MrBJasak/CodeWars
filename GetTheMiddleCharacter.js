function getMiddle(s) {
    s = s.split('');
    console.log(s);
    const length = Math.round(s.length / 2);
    console.log(length);
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(s[i]);
    }
    console.log(arr);
    console.log(arr.pop());
}

getMiddle('testing');
getMiddle('A'); 
getMiddle('middle');


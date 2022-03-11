function pigIt(str) {
    const ay = 'ay';
    let arr = str.split(' ');
    let x = arr.map((item) => {
        if (item.match(/[A-z]/i)) {
            let temp = [...item];
            temp.push(temp.shift() + ay);
            return temp.join('');
        } else return item;
    });

    console.log(x.join(' '));
}

// pigIt('Pig latin is cool');
pigIt('Oay emporatay oay oresmay !');

//'igPay atinlay siay oolcay'

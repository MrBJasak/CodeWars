function getCount(str) {
    var vowelsCount = 0;
    let vowelList = 'aeiou';
    vowelList = [...vowelList];
    console.log(vowelList); //beznadziejnie to napisane xD bo nie chciało mi się robić tablicy rećznie xD
    str = [...str];
    console.log(str);

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowelList.length; j++) {
            if (str[i] === vowelList[j]) {
                vowelsCount++;
            }
        }
    }

    console.log(vowelsCount);
}

getCount('abracadabra');

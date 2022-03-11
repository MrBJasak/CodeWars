function evensAndOdds(num) {
    if (num % 2 === 0) {
        return num.toString(2);
    } else {
        let a = num.toString(16);
        return a.toLowerCase();
    }
}

evensAndOdds(2);
evensAndOdds(255);

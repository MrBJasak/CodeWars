function century(year) {
    if (year % 100 === 0) {
        return parseInt(year / 100);
    } else {
        return parseInt(year / 100 + 1);
    }
}

century(1900);
century(1901);
century(89);

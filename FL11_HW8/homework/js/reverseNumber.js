const reverseNumber = a => {
    let b, sum = 0, c = a * Math.sign(a);
    while (c > 0) {
        b = c % 10;
        sum = sum * 10 + b;
        c = parseInt(c / 10);
    }
    return sum * Math.sign(a);
};

reverseNumber(123);
reverseNumber(-456);
reverseNumber(10000);

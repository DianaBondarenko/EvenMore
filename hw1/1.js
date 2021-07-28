//*************** task1 ***************//

// Write a function that takes an integer as input, and returns the number of bits that are equal to one
// in the binary representation of that number. You can’t guarantee that input is non-negative.
// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

function onesInBinary(number) {
    if (number >= 0 && Number.isInteger(number)) {
        let binary = number.toString(2);
        return binary.split('').filter(num => num == 1).length;
    } else {
        return ('Input must be a non-negative integer');
    }
}

console.log(onesInBinary(1234));


//*************** task2 ***************//

// Deep comparison. The operator === compares the variables of objects, checking if they refer to the
// same object. But sometimes it might be useful to compare objects by content. Write a function deepEqual
// that takes two values and returns true only if they are two of the same value, or if they are objects
// whose properties have the same values when compared by recursively calling deepEqueal.To find out when
// to compare values with === and when objects are by content, use the typeof operator. If it returns “object”
// for both values, then a deep comparison needs to be done. Don’t forget about one stupid exception for
// historical reasons: “typeof null” also returns “object”.

function deepComparison(a, b) {
    if ((typeof a != "object" || a == null) && (typeof b != "object" || b == null))
        return a === b;
    else {
        for (let key in a) {
            if (!b.hasOwnProperty(key) || !deepComparison(a[key], b[key])) return false;
        }
    }
    return true;
}

console.log(deepComparison(14, 14));
console.log(deepComparison({name: 'a', size: {h: 15, w: 20}}, {name: 'a', size: {h: 15, w: 20}}));


//*************** task3 ***************//

//Chess desk. Write a function, which will create a chess desk in the browser console or in the document.
// The function should accept a number of rows, columns, and symbol which will be used for the chess
// desk building.

function chessBoard(height, width, symbol) {
    let result = ``;
    let getLine = (line) => line.repeat(width / 2) + '\n';
    for (let i = 0; i < height; i++) {
        result += (i % 2) ? getLine((` ${symbol}`)) : getLine((`${symbol} `));
    }
    return result;
}

console.log(chessBoard(5, 15, '$'));


//*************** task4 ***************//

// Return an array containing the numbers from 1 to N, where N is the parametered value.
// Replace certain values however if any of the following conditions are met: If the value is a
// multiple of 3: use the value "Fizz" instead. If the value is a multiple of 5: use the value
// "Buzz" instead. If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

function fizzBuzz(n) {
    let res = [];
    for (let i = 1; i <= n; i++) {
        const fb = !(i % 3) && !(i % 5), f = !(i % 3), b = !(i % 5);
        res.push(fb && 'FizzBuzz' || f && 'Fizz' || b && 'Buzz' || i);
    }
    return res;
}

console.log(fizzBuzz(15))


//*************** task5 ***************//

// Multiply all the digits of a nonnegative integer n by each other, repeating with the product until
// a single digit is obtained. The number of steps required is known as the multiplicative persistence.
// Create a function that calculates the individual results of each step, not including the original
// number, but including the single digit, and outputs the result as a list/array. If the input is a
// single digit, return an empty list/array.

function per(n) {
    let res = [];
    if (n < 10) return res;
    let current = n;

    function product(num) {
        let str = num.toString().split('');
        return str.reduce((a, b) => a * b);
    }

    while (product(current) >= 0) {
        const prod = product(current);
        res.push(prod);
        if (prod == 0) break;
        current = prod;
    }
    return res;
}

console.log(per(1));
console.log(per(10));
console.log(per(69));
console.log(per(277777788888899));

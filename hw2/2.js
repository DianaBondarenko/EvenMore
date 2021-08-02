//*************** task1 ***************//

// Coding in function fiveLine, function accept 1 parameter:s. s is a string.
// Please return a string of 5 lines(newline symbol is \n). The first line has one s;
// Second line have two s; and so on..Fifth line have five s;  Note1: The two sides of the
// parameter s may contain some whitespace, please clear them before using s. Note2: Using
// a string template can make your job easier.

function fiveLine(s) {
    let res = ``;
    for (let i = 1; i <= 5; i++) {
        res += `${s.trim().repeat(i)}\n`;
    }
    return res;
}

console.log(fiveLine(' str '));


//*************** task2 ***************//

// Given a string, turn each character into its ASCII character code and join
// them together to create a number - let's call this number total1. Then replace
// any incidence of the number 7 with the number 1, and call this number 'total2':
// Then return the difference between the sum of the digits in total1 and total2:

function calc(string) {
    const total1 = string.split('').map(s => s.charCodeAt(0)).join('');
    const total2 = total1.replace(/7/g, '1');
    const sum = arr => arr.reduce((a, b) => Number(a) + Number(b));
    return sum(total1.split('')) - sum(total2.split(''));
}

console.log(calc('ABC'));
console.log(calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'));


//*************** task3 ***************//

// Coding in function alienLanguage, function accept 1 parameter:str. str is a sentence.
// We translate the sentence into an alien language according to the following rules:
// Each word in the sentence is separated by spaces. The last letter of each word in
// the sentence turns to lowercase, and the other letters are capitalized. Looks very strange?
// Because this is the form of alien language ;-)

function alienLanguage(str) {
    let arr = str.split(/\s+/);
    return arr.map(el => el.slice(0, -1).toUpperCase() + el.slice(-1).toLowerCase());
}

console.log(alienLanguage('this is an example'));


//*************** task4 ***************//

function automorphic(digit) {
    return digit.toString().slice(-1) === Math.pow(digit, 2).toString().slice(-1) ? 'Automorphic' : 'Not!!';
}

console.log(automorphic(6));


//*************** task5 ***************//

// Imagine JavaScript didn't natively include the call function. The apply
// function however still exists. Using apply, write call.

Function.prototype.call = function (context, ...args) {
    return this.apply(context, args);
};


//*************** task8 ***************//

// Functional closures can get overly attached. Set them straight! Why doesn't
// greet_abe() actually greet Abe?

// Because function takes the latest variable's value from lexical environment

var name = 'Abe';
var greet_abe = function () {
    return "Hello, " + name + '!';
};
var name2 = 'Ben';
var greet_ben = function () {
    return "Hello, " + name2 + '!';
};

console.log(greet_abe(), greet_ben());
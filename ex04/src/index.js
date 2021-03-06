function sumFibonacci(num) {
    let prevNum = 0;
    let currNum = 1;
    let result = 0;
    while (currNum <= num) {
        if (currNum % 2 !== 0) {
            result += currNum;
        }
        currNum += prevNum;
        prevNum = currNum - prevNum;
    }
    return result;
}


console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;
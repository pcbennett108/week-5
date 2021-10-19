//var y = 0;
var tenRandom = [22, 43, 27, 81, 51, 63, 42, 79, 17, 36];
var calc = {
  add: function (num1, num2) {
    x = num1 + num2;
    return x;
  },
  subtract: function (num1, num2) {
    x = num1 - num2;
    return x;
  },
  multiply: function (num1, num2) {
    x = num1 * num2;
    return x;
  },
  divide: function (num1, num2) {
    x = num1 / num2;
    return x;
  },
  largestNumber: function (array) {
    x = Math.max(...array);
    return x;
  },
};
console.log(calc.largestNumber(tenRandom));
console.log(calc.add(3, 6));
//
// At first I was going to try something like this below to find the largest number.
//but then I found the "Math.max" built in function. Much more direct.
/* var rnum = 0;
var rarr = [];
for (var i = 0; i < 10; i++) {
  rnum = Math.floor(Math.random() * 99) + 1;
  rarr.push(rnum);
  return rarr;
} */

/* rn = Math.floor(Math.random() * 99) + 1;
console.log(rn); */

/*
 * Programming Quiz: Factorials (4-7)
 * 
 * Write a for loop that prints out the factorial of the number 12. A
 * factorial is calculated by multiplying a number by all the numbers
 * below it. For instance, 3! or "3 factorial" is 3 * 2 * 1 = 6
 */
var factorialOf = 12;
var solution = factorialOf;

for (var num = (factorialOf - 1); num > 0; num--) {
  solution *= num;
}

console.log(solution);
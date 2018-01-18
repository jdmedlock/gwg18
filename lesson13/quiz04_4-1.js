/*
 * Programming Quiz: JuliaJames (4-1)
 * 
 * Instructions:
 * - Loop through the numbers 1 to 20
 * - If the number is divisible by 3, print "Julia"
 * - If the number is divisible by 5, print "James"
 * - If the number is divisible by 3 and 5, print "JuliaJames"
 * - If the number is not divisible by 3 or 5, print the number
 */

var x = 1;

while (x <= 20) {
  var printJulia = (x % 3) === 0 ? 'Julia' : '';
  var printJames = (x % 5) === 0 ? 'James' : '';
  if (printJulia || printJames) {
    // This will print either "Julia", "James", or "JuliaJames" based on
    // whether 'x' is divisible by 3, 5, or both.
    console.log(printJulia + printJames);
  } else {
    console.log(x);
  }
  ++x;
}

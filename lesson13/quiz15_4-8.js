/*
 * Programming Quiz: Find my Seat (4-8)
 * 
 * Write a nested for loop to print out all of the different seat combinations in the theater.
 * - The first row-seat combination should be 0-0 
 * - The last row-seat combination will be 25-99
 * 
 * Things to note: 
 *  - the row and seat numbers start at 0, not 1
 *  - the highest seat number is 99, not 100
 */

var firstRow = 0;
var lastRow = 25;
var seatsPerRow = 100;

for (var row = firstRow; row <= lastRow; ++row) {
  for (var seat = 0; seat < seatsPerRow; ++seat) {
    console.log(row + '-' + seat);
  }
}

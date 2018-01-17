/*
 * Programming Quiz: What do I Wear? (3-7)
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 29;
var shirtLength = 34;
var shirtSleeve = 10.14;

var shirtSize = "N/A";

if ( (shirtWidth >= 18 && shirtWidth < 20) && (shirtLength >= 28 && shirtLength < 29) && (shirtSleeve >= 8.13 && shirtSleeve < 8.38) ) {
    shirtSize = "S";
} else if ( (shirtWidth >= 20 && shirtWidth < 22) && (shirtLength >= 29 && shirtLength < 30) && (shirtSleeve >= 8.38 && shirtSleeve < 8.63) ) {
    shirtSize = "M";
} else if ( (shirtWidth >= 22 && shirtWidth < 24) && (shirtLength >= 30 && shirtLength < 31) && (shirtSleeve >= 8.63 && shirtSleeve < 8.88) ) {
    shirtSize = "L";
} else if ( (shirtWidth >= 24 && shirtWidth < 26) && (shirtLength >= 31 && shirtLength < 33) && (shirtSleeve >= 8.88 && shirtSleeve < 9.63) ) {
    shirtSize = "XL";
} else if ( (shirtWidth >= 26 && shirtWidth < 28) && (shirtLength >= 33 && shirtLength < 34) && (shirtSleeve >= 9.63 && shirtSleeve < 10.13) ) {
    shirtSize = "2XL";
} else if ( shirtWidth >= 28 && shirtLength >= 34 && shirtSleeve >= 10.13 ) {
    shirtSize = "3XL";
} 

console.log(shirtSize);
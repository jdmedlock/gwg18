/*
 * Programming Quiz: Colors of the Rainbow (6-4)
 * 
 * Using only the splice() method, insert the missing colors into the array,
 * and remove the color "Blackberry" by following these steps:
 * - Remove "Blackberry"
 * - Add "Yellow" and "Green"
 * - Add "Purple"
 */

let rainbow = ["Red", "Orange", "Blackberry", "Blue"];

rainbow.splice(2,1);
rainbow.push("Yellow");
rainbow.push("Green");
rainbow.push("Purple");

console.log(rainbow);
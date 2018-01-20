/*
 * Programming Quiz: Inline Functions (5-6)
 */

// don't change this code

/**
 * Emit an emotion and reaction to the console log
 * 
 * @param {any} myString The emotion to emit.
 * @param {any} myFunc A function that generates a reaction to the emotion.
 */
function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

// call the emotions function here and pass in an
// inline function expression
emotions("happy", function(num) {
  return 'ha'.repeat(num) + '!';
}, 2);

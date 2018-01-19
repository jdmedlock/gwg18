/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 *  - make sure that your function produces the correct results when it is called multiple times
 */

/**
 * @description Generate one or more laughs
 * @param {Integer} num Number of laughs to create 
 * @returns {String} The literal "ha" repeated noOfLaughs times suffixed by a "!"
 */
function laugh(num) {
  return 'ha'.repeat(num) + "!";
}

console.log(laugh(3));
/*
 * Programming Quiz: Laugh (5-4)
 */

/**
 * @description Generate one or more laughs
 * @param {Integer} num Number of laughs to create 
 * @returns {String} The literal "ha" repeated noOfLaughs times suffixed by a "!"
 */
var laugh = function(num) {
  return 'ha'.repeat(num) + '!';
}

console.log(laugh(10));

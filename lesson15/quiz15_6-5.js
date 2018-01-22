/*
 * Programming Quiz: Quidditch Cup (6-5)
 * 
 * Create a function called hasEnoughPlayers() that takes the team array as
 * an argument and returns true or false depending on if the array has at
 * least seven players.
 */

/**
 * Determine if a team contains at least seven players.
 * @param {String[]} team An array containing the player names
 * @returns {Boolean} true if there are 7 or more players, otherwise, false.
 */
const hasEnoughPlayers = (team) => {
  return team.length >= 7;
};

var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
console.log(hasEnoughPlayers(team));

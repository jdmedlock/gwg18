/*
 * Programming Quiz: Facebook Friends (7-5)
 * 
 * Create an object called facebookProfile. The object should have 3 properties:
 * - your name
 * - the number of friends you have, and
 * - an array of messages you've posted (as strings)
 *
 * The object should also have 4 methods:
 * - postMessage(message) - adds a new message string to the array
 * - deleteMessage(index) - removes the message corresponding to the index
 *   provided
 * - addFriend() - increases the friend count by 1
 * - removeFriend() - decreases the friend count by 1
 */

const facebookProfile = {
  name: "Jim",
  friends: 0,
  messages: [],
  /**
   * Increment the friend count
   * 
   * @returns {Integer} The new friend count
   */
  addFriend: function newFriend() {
    return ++facebookProfile.friends;
  },
  /**
   * Remove a message from the profile.
   * @param {any} message The message that was removed or false if the index
   * parameter is invalid.
   */
  deleteMessage: function (index) {
    // Ensure that the index is valid before using it
    if (index === undefined || index == null ||
        typeof index != 'number' ||
        index < 0 || index > facebookProfile.messages.length) {
      return false;
    }
    return facebookProfile.messages.splice(index,1)[0];
  },
  /**
   * Add a new message to the profile.
   * @param {String} message The new message to be added.
   * @returns {Integer} Index of the new message or false if the message
   * parameter is invalid.
   */
  postMessage: function (message) {
    // Ensure that the message is valid before adding it
    if (message === undefined || message === null || typeof message != 'string') {
      return false;
    }
    return (facebookProfile.messages.push(message) -1);
  },
  /**
   * Increment the friend count
   * 
   * @returns {Integer} The new friend count or false if the friend count was
   * already 0 
   */
  removeFriend: function () {
    if (facebookProfile.friends <= 0) {
      return false;
    }
    return --facebookProfile.friends;
  },
};

// Validation error tests
console.log('--- Failure condition tests ---');
console.log(`removeFriend before any were added: ${facebookProfile.removeFriend()}`);
console.log(`deleteMessage with no parameter: ${facebookProfile.deleteMessage()}`);
console.log(`deleteMessage with null parameter: ${facebookProfile.deleteMessage(null)}`);
console.log(`deleteMessage with undefined parameter: ${facebookProfile.deleteMessage(undefined)}`);
console.log(`deleteMessage with non-numeric parameter: ${facebookProfile.deleteMessage('Hi')}`);
console.log(`postMessage for delete test: ${facebookProfile.postMessage('Prime messages for delete tests')}`);
console.log(`deleteMessage with index out of range: ${facebookProfile.deleteMessage(1000)}`);
console.log(`postMessage with no parameter: ${facebookProfile.postMessage()}`);
console.log(`postMessage with null parameter: ${facebookProfile.postMessage(null)}`);
console.log(`postMessage with undefined parameter: ${facebookProfile.postMessage(undefined)}`);
console.log(`postMessage with non-string parameter: ${facebookProfile.postMessage(42)}`);

// Success condition tests
console.log('\n\n---Success condition tests---');
console.log(facebookProfile);
facebookProfile.addFriend();
facebookProfile.postMessage('Hello Wilma!');
facebookProfile.addFriend();
facebookProfile.postMessage('What time is the game Fred?');
console.log(facebookProfile);
facebookProfile.deleteMessage(0);
facebookProfile.removeFriend();
console.log(facebookProfile);

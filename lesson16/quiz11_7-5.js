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
   * @param {any} message The message that was removed or -1 if the index
   * parameter is invalid.
   */
  deleteMessage: function removeMessage(index) {
    // Ensure that the index is valid before using it
    if (index === undefined || index < 0 || index > facebookProfile.messages.length) {
      return -1;
    }
    return facebookProfile.messages.splice(index,1)[0];
  },
  /**
   * Add a new message to the profile.
   * @param {String} message The new message to be added.
   * @returns {Integer} Index of the new message or -1 if the message
   * parameter is invalid.
   */
  postMessage: function addMessage(message) {
    // Ensure that the message is valid before adding it
    if (message === undefined || message === null) {
      return -1;
    }
    facebookProfile.messages.push(message);
  },
  /**
   * Increment the friend count
   * 
   * @returns {Integer} The new friend count or -1 if the friend count was
   * already 0 
   */
  removeFriend: function deleteFriend() {
    if (facebookProfile.friends <= 0) {
      return -1;
    }
    return --facebookProfile.friends;
  },
};

console.log(facebookProfile);
facebookProfile.addFriend();
facebookProfile.postMessage('Hello Wilma!');
facebookProfile.addFriend();
facebookProfile.postMessage('What time is the game Fred?');
console.log(facebookProfile);
facebookProfile.deleteMessage(0);
facebookProfile.removeFriend();
console.log(facebookProfile);

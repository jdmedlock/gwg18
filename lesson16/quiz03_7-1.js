/*
 * Programming Quiz: Umbrella (7-1)
 */

var umbrella = {
    color: "pink",
    isOpen: true,
    /**
     * Open the umbrella.
     * @returns {String} A string indicating if the umbrella was newly opened
     * or was already opened.
     */
    open: function() {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },
    /**
     * Close the umbrella.
     * @returns {String} A string indicating if the umbrella was newly closed
     * or was already closed.
     */
    close: function() {
        if (umbrella.isOpen === false) {
            return "The umbrella is already closed!";
        } else {
            umbrella.isOpen = false;
            return "Julia closes the umbrella!";
        }
    },
};

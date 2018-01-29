/*
 * Programming Quiz: Murder Mystery (3-4)
 */

// change the value of `room` and `suspect` to test your code
const room = "dining room";
const suspect = "Mr. Parkes";

let weapon = "";
let solved = false;

if (room === "ballroom") {
    weapon = "poison";
    if (suspect === "Mr. Kalehoff") {
        solved = true;
    }
} else if (room === "gallery") {
    weapon = "trophy";
    if (suspect === "Ms. Van Cleve") {
        solved = true;
    }
} else if (room === "billiards room") {
    weapon = "pool stick";
    if (suspect === "Mrs. Sparr") {
        solved = true;
    }
} else {
    weapon = "knife";
    if (suspect === "Mr. Parkes") {
        solved = true;
    }
}

if (solved) {
	console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}

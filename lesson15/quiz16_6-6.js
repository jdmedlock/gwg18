/*
 * Programming Quiz: Joining the Crew (6-6)
 * 
 * Use the push() method to add the three new crew members to the crew array.
 */

// Current crew members
var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

var crew = [captain, second, pilot, companion, mercenary, mechanic];

// New crew members to be added
var doctor = "Simon";
var sister = "River";
var shepherd = "Book";

// Add new new members to the existing crew.
crew.push(doctor);
crew.push(sister);
crew.push(shepherd);

console.log(crew);

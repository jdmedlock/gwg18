/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}
/**
 * Construct a triangle with a certain base length
 * 
 * @param {any} widthOfBase An integer (>0) specifying the width of the triangles base.
 * @returns {String} String containing one line for each row of the triangle
 */
function buildTriangle(widthOfBase) {
  // Validate the value of the input parameter
  if (widthOfBase === undefined || widthOfBase === null || widthOfBase < 1) {
    return 'Error: invalid triangle base width of "' + widthOfBase + '" specified!';
  }
  // Iterate over each row to build the representation of the triangle
  let triangle = '';
  for (let rowNo = 1; rowNo <= widthOfBase; rowNo++) {
    triangle += makeLine(rowNo);
  }
  return triangle;
}

// test your code by uncommenting the following line
console.log(buildTriangle(10));

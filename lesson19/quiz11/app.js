/*
For this quiz, you'll need to add to the DOM tree that already exists.

'#family2' should be a sibling of and come after '#family1'. '#bruce' should be the only immediate child
of '#family2'. '#bruce' should have two <div>s as children, '#madison' and '#hunter'.
*/

const family1 = $('#family1');

// Start by building a DOM element for #family2, #bruce, #madison, and #hunter
const family2 = $(
  '<div id="family2"> \
	<h1>Family2</h1> \
  </div>'
  );
const bruce = $(
  '<div id="bruce"> \
     <h2>Bruce</h2> \
  </div>'
  );
const madison = $(
  '<div id="madison"> \
     <h3>Madison</h3> \
  </div>'
  );
const hunter = $(
  '<div id="hunter"> \
     <h3>Hunter</h3> \
  </div>'
  );

// Build up the DOM in reverse order to limit the amount
// of searching and manipulation

// Now add the children #madison and #hunter to #bruce
$(bruce).append(madison);
$(bruce).append(hunter);

// Next, add #bruce to #family2
family2.append(bruce);

// Finally, insert family2 as a sibling of family1
$(family2).insertAfter(family1);

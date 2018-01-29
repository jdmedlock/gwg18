/*
For this quiz, remove the <ul> from the first article item!

You must use jQuery's remove() method.
*/

// Start with this variable!
let articleItems;

articleItems = $('article-item');
const firstArticle = articleItems.first();
const extraUL = firstArticle.find('ul');
extraUL.remove();
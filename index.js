const findMatches = require('./findMatchSlow');
const Trie = require('./trie');

// dummy valid words
const validWords = [
  'flatware',
  'clash',
  'twin',
  'escape',
  'describe',
  'golf',
  'communication',
  'coffee',
  'split',
  'language',
];

const inputs = ['flat', 'c', 'esp', 'communi']; // dummy user input

// uncomment this block to use the array filter implementation of the auto complete
// inputs.forEach((input) => {
//   console.log(findMatches(validWords, input));
// });

const trie = new Trie();

// insert each valid word into the trie
validWords.map((word) => {
  trie.insertWord(word);
});

// find matches for each input
inputs.forEach((input) => {
  console.log(trie.findMatches(input));
});

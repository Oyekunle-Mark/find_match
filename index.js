const findMatches = require('./findMatchSlow');
const Trie = require('./trie');

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

const inputs = ['flat', 'c', 'esp', 'communi'];

inputs.forEach((input) => {
  console.log(findMatches(validWords, input));
});

const trie = new Trie();

validWords.map((word) => {
  trie.insertWord(word);
});

inputs.forEach((input) => {
  console.log(trie.findMatches(input));
});

const findMatches = require('./findMatchSlow');

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

inputs.forEach((input) => console.log(findMatches(validWords, input)));

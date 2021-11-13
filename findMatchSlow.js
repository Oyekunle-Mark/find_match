/**
 * finds matches for the userInput from validWords
 * @param {string[]} validWords the list of valid words
 * @param {string} userInput the input to find suggestions for
 * @returns []string the suggested words
 */
module.exports = function findMatches(validWords, userInput) {
  return validWords.filter((word) => word.startsWith(userInput));
};

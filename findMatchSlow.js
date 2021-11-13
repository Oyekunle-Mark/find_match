module.exports = function findMatches(validWords, userInput) {
    return validWords.filter(word => word.startsWith(userInput));
}

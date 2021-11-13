module.exports = class TrieNode {
  constructor() {
    this.marksEndOfWord = false;
    this.children = {};
    this.word = null;
  }

  hasChild(character) {
    return this.children[character] ? true : false;
  }

  getChildTrieNode(character) {
    if (this.hasChild(character)) return this.children[character];

    return null;
  }

  insertChild(character, trieNode) {
    this.children[character] = trieNode;
  }

  markEndOfWord(word) {
    this.marksEndOfWord = true;
    this.word = word;
  }

  isEndOfWord() {
    return this.marksEndOfWord;
  }

  getWordForTrieNode() {
    return this.word;
  }
};

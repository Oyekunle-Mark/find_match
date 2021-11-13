/**
 * Represents a trie node
 */
module.exports = class TrieNode {
  constructor() {
    this.marksEndOfWord = false;
    this.children = {};
    this.word = null;
  }

  /**
   * Checks if current trie node has a child node representing the character
   * @param {string} character
   * @returns boolean
   */
  hasChild(character) {
    return this.children[character] ? true : false;
  }

  /**
   * returns the child node of the current trie node representing character
   * @param {string} character
   * @returns TrieNode
   */
  getChildTrieNode(character) {
    if (this.hasChild(character)) return this.children[character];

    return null;
  }

  /**
   * inserts a new child trie node in this trie node for character
   * @param {string} character
   * @param {TrieNode} trieNode
   */
  insertChild(character, trieNode) {
    this.children[character] = trieNode;
  }

  /**
   * marks this trie node as the ending of path of trie node representing a valid word
   * @param {string} word
   */
  markEndOfWord(word) {
    this.marksEndOfWord = true;
    this.word = word;
  }

  /**
   * returns true if current trie node is end of a valid word
   * @returns boolean
   */
  isEndOfWord() {
    return this.marksEndOfWord;
  }

  /**
   * returns the word that this current trie node is an end node for it's trie nodes path. Otherwise, returns null
   * @returns string
   */
  getWordForTrieNode() {
    return this.word;
  }
};

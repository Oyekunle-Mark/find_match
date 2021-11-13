const TrieNode = require('./trieNode');

/**
 * the Trie class
 */
module.exports = class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  /**
   * inserts a new valid word into the trie
   * @param {string} word
   * @returns void
   */
  insertWord(word) {
    if (!word) return;

    let currentNode = this.root;

    for (let i = 0; i < word.length; i++) {
      if (currentNode.hasChild(word[i])) {
        currentNode = currentNode.getChildTrieNode(word[i]);
      } else {
        const newTrieNode = new TrieNode();
        currentNode.insertChild(word[i], newTrieNode);
        currentNode = newTrieNode;
      }
    }

    currentNode.markEndOfWord(word);
  }

  /**
   * finds all the words that input is a prefix for.
   * @param {string} word
   * @returns []string
   */
  findMatches(word) {
    const matches = [];

    if (!word) {
      return matches;
    }

    this.buildMatches(this.findTailTrieNodeForWord(word), matches);

    return matches;
  }

  /**
   * finds the trie node that terminates a valid word in the trie
   * @param {string} word
   * @returns TrieNode
   */
  findTailTrieNodeForWord(word) {
    let currentNode = this.root;

    for (let i = 0; i < word.length; i++) {
      if (!currentNode.hasChild(word[i])) return null;

      currentNode = currentNode.getChildTrieNode(word[i]);
    }

    return currentNode;
  }

  /**
   * recursively builds the valid words that can be found by traversing from root
   * @param {TrieNode} root
   * @param {[]string} matches
   * @returns void
   */
  buildMatches(root, matches = []) {
    if (root === null) return;

    if (root.isEndOfWord()) {
      matches.push(root.getWordForTrieNode());
    }

    for (const nodeProperty in root.children) {
      const childNode = root.children[nodeProperty];
      this.buildMatches(childNode, matches);
    }
  }
};

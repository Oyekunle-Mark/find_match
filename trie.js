module.exports = class Trie {
  constructor() {
    this.root = new TrieNode();
  }

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

  findMatches(word) {
    const matches = [];

    if (!word) {
      return matches;
    }

    this.buildMatches(this.findTailTrieNodeForWord(word), matches);

    return matches;
  }

  findTailTrieNodeForWord(word) {
    let currentNode = this.root;

    for (let i = 0; i < word.length; i++) {
      if (!currentNode.hasChild(word[i])) return null;

      currentNode = currentNode.getChildTrieNode(word[i]);
    }

    return currentNode;
  }

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

// Tree class file

class Node {
  value;
  left = null;
  right = null;

  constructor(value) {
    this.value = value;
  }
}

class Tree {
  root;

  constructor(array) {
    this.root = this.buildTree(array);

  }

  buildTree(array) {
    // Build a balanced binary tree full and returns the root node

    // TODO: 1. Sort the array and delete duplicates.
    // TODO: 2. Create a function createSubTree(array,left,right) that will 
    // call itself recursively.
    // // TODO: 3. Return the root node.
  }
  insert(value) { }
  delete(value) { }
  find(value) { }
  levelOrder(callback) { }
  inOrder(callback) { }
  preOrder(callback) { }
  postOrder(callback) { }
  height(value) { }
  depth(value) { }
  isBalanced() { }
  rebalance() { }

  #createSubTree(array, left, right) {
    // Recursive function that creates the trees
  }
}

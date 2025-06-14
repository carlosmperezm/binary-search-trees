// Tree class file

class Node {
  value;
  left = null;
  right = null;

  constructor(value) {
    this.value = value;
  }
}

export class Tree {
  root;

  constructor(array) {
    this.root = this.buildTree(array);
    // console.log(this.#createSubTree(array, 0, array.length - 1))

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

  #createSubTree(sortedArray, start, end) {
    // Recursive function that creates the trees.
    // Array must be sorted and with no duplicated values

    // Base case to stop the recursion
    if (start > end) return null;
    // The middle of the sorted array will be the root node; 
    const middleIndex = Math.floor((start + end) / 2);
    // Call recursively to get the left and right Nodes
    const leftNode = this.#createSubTree(sortedArray, start, middleIndex - 1);
    const rightNode = this.#createSubTree(sortedArray, middleIndex + 1, end);

    const rootNode = new Node(sortedArray[middleIndex]);
    rootNode.left = leftNode;
    rootNode.right = rightNode;

    return rootNode;
  }
}

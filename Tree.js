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
  }

  buildTree(array) {
    /**
     * Build a balanced binary tree and returns the root node
     * @param array The array to build the tree from
    */

    // Sort the array
    const sortedArray = array.sort();
    const cleanedArray = sortedArray.filter((value, index, array) => {
      // Remove duplicated value
      return value !== array[index - 1];
    })
    // Create a function createTree(array,left,right) that will create the whole tree
    const rootNode = this.#createTree(cleanedArray, 0, cleanedArray.length - 1);
    return rootNode;
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

  #createTree(sortedArray, start, end) {
    /**
     * Recursive function that creates the trees. 
     * Array must be sorted and with no duplicated values 
    */

    // Base case to stop the recursion
    if (start > end) return null;
    // The middle of the sorted array will be the root node; 
    const middleIndex = Math.floor((start + end) / 2);
    // Call recursively to get the left and right Nodes
    const leftNode = this.#createTree(sortedArray, start, middleIndex - 1);
    const rightNode = this.#createTree(sortedArray, middleIndex + 1, end);

    const rootNode = new Node(sortedArray[middleIndex]);
    rootNode.left = leftNode;
    rootNode.right = rightNode;

    return rootNode;
  }

}

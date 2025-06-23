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

  insert(value) {
    let node = this.root;
    let previousNode;
    let nextNodePosition = '';
    while (node) {
      // Iterate until find a leaf to place the new node
      previousNode = node;
      // If the value already exits do nothing
      if (value === node.value) return;
      if (value > node.value) {
        // Go to the right
        node = node.right;
        nextNodePosition = 'right';
      } else {
        // Go to the left
        node = node.left;
        nextNodePosition = 'left';
      }
    }
    // After a spot to place the node has been found
    const newNode = new Node(value);
    previousNode[nextNodePosition] = newNode;
  }

  deleteItem(value) {
    let node = this.root;
    let previousNode;
    let nextNodePosition = '';
    // Otherwise find the node
    while (node) {
      if (node.value === value) {
        // If the value is found stop the looking further
        break;
      }
      previousNode = node;
      if (value > node.value) {
        // Go to the right
        node = node.right;
        nextNodePosition = 'right';
      } else {
        // Go to the left
        node = node.left;
        nextNodePosition = 'left';
      }
    }
    // After node was found
    if (!node.right && !node.left) {
      // Check if the node has no children and then remove it
      previousNode[nextNodePosition] = null;
    }
    if (node.right && node.left) {
      // Check if the node has both children 
      let farthestLeftNode = node.right;
      while (farthestLeftNode.left) {
        // Find the farthest left node
        farthestLeftNode = farthestLeftNode.left;
      }
      if (farthestLeftNode.right) {
        // Check if the left furthest node has child.
        // Delete that node with this same function so that it will
        // take care of all the process of ordering the nodes
        this.deleteItem(farthestLeftNode.value);
      }
      // After the furthest node has been deleted,
      // change the value of the node to delete,
      // for the value of the furthest left node.
      node.value = farthestLeftNode.value
    }
    if (node.right && !node.left) {
      //Remove the node when it has just one child in the right
      previousNode[nextNodePosition] = node.right
    }
    if (node.left && !node.right) {
      //Remove the node when it has just one child in the left
      previousNode[nextNodePosition] = node.left;
    }
  }

  find(value) {
    /*
     * Returns the node with the given value.
     * Returns the node if exits, otherwise null.
     */
    let node = this.root;
    while (node) {
      // Iterate until find the node
      // If the value already exits return it
      if (value === node.value) return node;
      // Else move to the left or right 
      if (value > node.value) {
        // Go to the right
        node = node.right;
      } else {
        // Go to the left
        node = node.left;
      }
    }
    return null;
  }
  levelOrder(callback) {
    /**
     * Apply the callback function in level order to each node of the tree
     * @param callback a function to apply to each node of the tree
     */
    if (!callback) throw new Error('Callback is required');
    if (!this.root) return;
    const nodesToVisit = [this.root];
    while (nodesToVisit.length > 0) {
      let node = nodesToVisit.shift();
      if (node.left) { nodesToVisit.push(node.left) }
      if (node.right) { nodesToVisit.push(node.right) }
      callback(node);
    }
  }
  inOrder(callback, root = this.root) {
    /**
     * Apply the callback function to the left subtree, then to the root
     * and then to the right subtree.
     * @param callback a function to apply to each node of the tree.
     */
    if (!callback) throw new Error('Callback is required');
    if (!root) return;

    this.preOrder(callback, root.left)
    callback(root);
    this.preOrder(callback, root.right)

  }
  preOrder(callback, root = this.root) {
    /**
     * Apply the callback function to the root, then to the left subtree
     * and then to the right subtree.
     * @param callback a function to apply to each node of the tree.
     */
    if (!callback) throw new Error('Callback is required');
    if (!root) return;

    callback(root);
    this.preOrder(callback, root.left)
    this.preOrder(callback, root.right)
  }
  postOrder(callback, root = this.root) {
    /**
     * Apply the callback function to the left subtree, then to the right subtree
     * and then to the root.
     * @param callback a function to apply to each node of the tree.
     */
    if (!callback) throw new Error('Callback is required');
    if (!root) return;

    this.preOrder(callback, root.left)
    this.preOrder(callback, root.right)
    callback(root);

  }
  height(value) {
    /**
     * Retuns the number of edges in the longest path
     * from that node to a leaf node.
     * @param value the node where get the height of.
     */
    const node = this.find(value);
    // If no value is found means there is no such node
    if (!node) { return null }

    let leftSubTreeHeight = 0;
    let rightSubTreeHeight = 0;

    if (node.left) {
      leftSubTreeHeight = this.height(node.left.value);
    }
    if (node.right) {
      rightSubTreeHeight = this.height(node.right.value);
    }
    // If it is a leaf node
    if (!node.left && !node.right) { return -1; }

    // Get the biggest of the heights and add 1 to it
    return 1 + Math.max(leftSubTreeHeight, rightSubTreeHeight);
  }
  depth(value) {
    /**
     * Returns the number of edges in the path from the node to the root node.
     * @param value the node where get the depth of
     */
    let node = this.root;
    let depthCounter = 0;
    try {
      while (value !== node.value) {
        // Decide where to look for the next node
        // left or right.
        node = value < node.value ? node.left : node.right;
        depthCounter += 1;
      }
    } catch (TypeError) {
      // Node doesn't exits
      return null;
    }
    return depthCounter;
  }
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

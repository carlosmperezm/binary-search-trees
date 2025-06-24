import { Tree } from "./Tree.js";

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};

// const array = [1, 2, 3, 4, 5, 6, 7]
const array = [12, 1, 1, 2, 7, 7, 2, 4, 4, 2, 3];
// const array = [1, 2, 3, 4, 5, 6, 7]
// const array = [1, 2, 3, 4, 5, 6, 7]
const tree = new Tree(array);

// tree.insert(12);
tree.insert(6);
tree.insert(5);
// prettyPrint(tree.root);
// prettyPrint(tree.find(7))
// tree.deleteItem(3)
// tree.levelOrder(console.log);
// tree.preOrder(prettyPrint)
// tree.inOrder(prettyPrint)
// tree.postOrder(prettyPrint)
// console.log(tree.height(7))
prettyPrint(tree.root);
// console.log(tree.depth(6))
console.log(tree.isBalanced());
tree.rebalance();
// console.log(tree.root)
prettyPrint(tree.root);
console.log(tree.isBalanced());

import { Tree } from "./Tree.js";

// const array = [1, 2, 3, 4, 5, 6, 7]
const array = [1, 1, 1, 2, 7, 7, 2, 4, 4, 2, 3];
// const array = [1, 2, 3, 4, 5, 6, 7]
// const array = [1, 2, 3, 4, 5, 6, 7]
const tree = new Tree(array);

tree.insert(8);
console.log(tree.find(8))
tree.deleteItem(3)

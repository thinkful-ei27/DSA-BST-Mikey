const BinarySearchTree = require('./BinarySearchTree');


const dataList = [3, 1, 4, 6, 9, 2, 5, 7];

function createBst(list) {
  const BST = new BinarySearchTree();
  for (let i = 0; i < list.length; i++) {
    BST.insert(list[i], 'Hey');
    console.log(BST);
  }
  return BST;
}



/*================= height of BST +++++++++++====*/
function findLeft(tree, newHeight = 0) {
  newHeight++;
  if (tree.left) {
    return findLeft(tree.left, newHeight);
  }
  if (tree.right) {
    return findRight(tree.right, newHeight);
  }
  else return newHeight;
}

function findRight(tree, newHeight) {
  newHeight++;
  if (tree.right) {
    return findRight(tree.right, newHeight);
  }
  if (tree.left) {
    return findLeft(tree.left, newHeight);
  }
  else return newHeight;
}

function findHeight(tree) {

  const leftHeight = findLeft(tree.left, 1);
  const rightHeight = findRight(tree.right, 1);

  if (leftHeight > rightHeight) {
    return leftHeight;
  }
  else return rightHeight;
}


//  go left and right
//  before hitting null, check tree.right > tree
// tree.left > tree


function treeChecker(tree) {
  if (tree.right) {
    if (tree.right.key > tree.key) return treeChecker(tree.right);
    else return false;
  }
  if (tree.left) {
    if (tree.left.key < tree.key) return treeChecker(tree.left);
    else return false;
  }
  return true;
}








function main() {
  const BST = new BinarySearchTree;
  BST.insert(3);
  BST.insert(1);
  BST.insert(4);
  BST.insert(6);
  BST.insert(9);
  BST.insert(2);
  BST.insert(5);
  BST.insert(7);
  // console.log(JSON.stringify(BST, null, 2));
  // console.log(findHeight(BST));
  console.log(treeChecker(BST));

}
main();
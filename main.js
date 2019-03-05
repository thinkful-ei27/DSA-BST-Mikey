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

/*
     if height right is less than two need some
    edge cases on left of tree
     if height is greater than two
    go down right side of tree, 
   when  tree.right=null
    tree.parent.parent is third larges;
 */


const _rightSideChecker = (tree, familyArray) => {
  if (tree.right) {
    familyArray[0] = tree.parent;
    familyArray[1] = tree;
    familyArray[2] = tree.left;
    familyArray[3] = tree.right;
    return _rightSideChecker(tree.right, familyArray, tree.parent);
  } else {
    return familyArray;
  }
};

/* edge case disasters!!!! */

function thirdLargestValue(myTree) {
  const starterTree = myTree.right.right;
  if (!myTree.right && !myTree.left.right) {
    return myTree.left.left;
  }
  else {
    const myFamilyArray = [
      myTree,
      myTree.right,
      myTree.right.left,
      starterTree
    ];
    const [grandParent, parent, cousin] = _rightSideChecker(starterTree, myFamilyArray);
    if (!cousin) {
      return grandParent.key;
    }
    else if (cousin.right === null) {
      return cousin.key;
    }
    else {
      const finalFamilyArray = _rightSideChecker(cousin, [parent, cousin, cousin.left, cousin.right]);
      return finalFamilyArray[3].key;
    }
  }
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
  // console.log(treeChecker(BST));
  // console.log(thirdLargestValue(BST));
  const BST2 = new BinarySearchTree;
  BST2.insert(50);
  BST2.insert(60);
  BST2.insert(70);
  BST2.insert(80);
  BST2.insert(65);
  BST2.insert(64);
  BST2.insert(66);
  BST2.insert(68);
  BST2.insert(55);
  console.log(thirdLargestValue(BST2));



}
main();
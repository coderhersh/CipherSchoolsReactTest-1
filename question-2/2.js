class TreeNode {
    constructor(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class BSTIterator {
    constructor(BST) {
        this.BST = BST;
    }

    hasNext() {
        if (BST.left != null || BST.right != null) {
            return true;
        }
        return false;
    }

    get getNext() {
        if (BST.left != null) {
            return BST.left.val;
        }else if(BST.right != null) {
            return BST.right.val;
        }
        return null;
    }
}

let BST = new TreeNode(5, null, null);
BST.left = new TreeNode(3, null, null);
BST.right = new TreeNode(7, null, null);
BST.left.left = new TreeNode(1, null, null);
BST.left.right = new TreeNode(4, null, null);
BST.right.right = new TreeNode(8, null, null);

let obj = new BSTIterator();

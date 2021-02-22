class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;

      while (currentNode) {
        if (value > currentNode.value) {
          if (!currentNode.right) {
            currentNode.right = newNode;
            break;
          } else {
            currentNode = currentNode.right;
          }
        } else {
          if (!currentNode.left) {
            currentNode.left = newNode;
            break;
          } else {
            currentNode = currentNode.left;
          }
        }
      }
    }

    return this;
  }

  lookup(value) {
    //1
    if (!this.root) {
      return false;
    }
    //4
    let currentNode = this.root;
    while (currentNode) {
      if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (currentNode.value === value) {
        return true;
      }
    }
    return false;
  }

  DFSPreOrder(node, list) {
    list.push(node.value);
    if (node.left) {
      list.concat(this.depthFirstSearchR(node.left, list));
    }
    if (node.right) {
      list.concat(this.depthFirstSearchR(node.right, list));
    }
    return list;
  }

  DFSInOrder(node, list) {
    if (node.left) {
      list.concat(this.DFSInOrder(node.left, list));
    }
    list.push(node.value);
    if (node.right) {
      list.concat(this.DFSInOrder(node.right, list));
    }
    return list;
  }

  DFSPostOrder(node, list) {
    if (node.left) {
      list = this.DFSPostOrder(node.left, list);
    }
    if (node.right) {
      list = this.DFSPostOrder(node.right, list);
    }
    list.push(node.value);
    return list;
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.DFSPostOrder(tree.root, []);

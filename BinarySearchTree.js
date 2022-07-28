class Node {
  constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
      this.root = null;
  }

  
  insert(value) {
      const node = new Node(value);
      
      if (!this.root) {
          this.root = node;
          return this;
      }

      let currentNode = this.root;

      while (currentNode) {
          // Handle duplicate values
          if (value === currentNode.value) return undefined;

          if (value > currentNode.value) {
              if (!currentNode.right) {
                  currentNode.right = node;
                  break;
              } 
              currentNode = currentNode.right;
          } else if (value < currentNode.value) {
              if (!currentNode.left) {
                  currentNode.left = node;
                  break;
              } 
              currentNode = currentNode.left;
          }
      }

      return this;
  }

  // returns true if the value exist in the tree
  find(value) {
      if (!this.root) return false;

      let currentNode = this.root;
      const node = new Node(value);

      while(currentNode) {
          if (value === currentNode.value) return true;

          if (value < currentNode.value) {
              // if the currentNode.left does not exist place our searched node there
              if (!currentNode.left) {
                  currentNode.left = node;
                  return node;
              } else {
                  if (value === currentNode.left.value) {
                      return currentNode.left;
                  } else {
                      currentNode = currentNode.left;
                  }
              }
          } else if (value > currentNode.value) {
              // If the currentNode.right does not exist placed our search node there
              if (!currentNode.right) {
                  currentNode.right = node;
                  return node;
              } else {
                  if (value === currentNode.right.value) {
                      return currentNode.right;
                  } else {
                      currentNode = currentNode.right;
                  }
              }
          }
      }
  }
  
}

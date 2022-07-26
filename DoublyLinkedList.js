class Node {
  constructor(val) {
      this.val = val;
      this.prev = null;
      this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
  }

  
  push(val) {
      const newNode = new Node(val);
      this.length++;

      // If there is no nodes yet, make our new node
      // our head and tail
      if (!this.head) {
          this.head = newNode;
          this.tail = newNode;
          return newNode;
      }

      // Set the current tail.next to be the new node
      // [tail] -> newNode
      this.tail.next = newNode;
      // Set the new nodes prev property to the old tail
      newNode.prev = this.tail;
      // [tail] <- newNode
      // Make the new tail the new node
      this.tail = newNode;
      

      return newNode;
  }

  pop() {
      if (!this.head) {
          return undefined;
      }

      if (this.head === this.tail) {
          const nodeToReturn = this.head;
          this.head = null;
          this.tail = null;
          this.length--;
          return nodeToReturn;
      }

      const oldTail = this.tail;
      this.tail = oldTail.prev;
      this.tail.next = null;
      oldTail.prev = null;
      this.length--;
      return oldTail;
  }

  shift() {
      if (!this.head) {
          return undefined;
      }

      this.length--;

      if (this.head === this.length) {
          const nodeToReturn = this.head;
          this.head = null;
          this.tail = null;
          return nodeToReturn;
      }
      
      const oldHead = this.head;
      // [oldHead] -x- [node]
      oldHead.next.prev = null;
      // [node] - becomes new head
      this.head = oldHead.next;
      // [oldHead] -x- 
      oldHead.next = null;
      return oldHead;
  }

  unshift(val) {
      if (!this.head) {
          return this.push(val);
      }

      this.length++;
      const newNode = new Node(val);
      // [newNode] <-- [head]
      this.head.prev = newNode;
      // [newNode] -> [head]
      newNode.next = this.head;
      // [head] -> new node
      this.head = newNode;
      return newNode;
  }

  get(index) {
      if (index < 0 || index > this.length) {
          return undefined;   
      }

      const half = Math.floor(this.length/2);
      // 0 1 2 3 4 5 6

      // if the index is > than the half value, start from the tail
      // if the index is < than the half value, start from the head
      const isGreaterThanHalf = index > half;
          
      let currentNode = isGreaterThanHalf ? this.tail : this.head;

      if (isGreaterThanHalf) {
         for (let i = 0; i < this.length - index - 1; i++) {
              currentNode = currentNode.prev;
          }
      } else {
          for (let i = 0; i < index - 1; i++) {
              currentNode = currentNode.next;
          }
      }

      return currentNode;
  }
  
  insert(index, val) {

      if (index < 0 || index > this.length) {
          return undefined;   
      }

      if (index === 0) {
          this.push(val);
      }

      let currentNode = this.get(index);
  
      const newNode = new Node(val);

      // set the currentNode.prev.next = to our new node
      // [node] -> [newNode] [currentNode]
      currentNode.prev.next = newNode;
      // set the newNodes.next to be the current node
      // [node]  [newNode] -> [currentNode]
      newNode.next = currentNode;
      // set the currentNode.prev == newNode
      // [node]  [newNode] <-[currentNode]
      currentNode.prev = newNode;
      this.length++;
  
      return currentNode;
  }

  remove(index) {
      if (!this.head || index > this.length) {
          return undefined;
      }

      if (index === this.length - 1) {
          return this.pop();
      }

      if (index === 0) {
          return this.shift();
      }

      let nodeToRemove = this.get(index);
      // [node] [nodeToRemove] [node]
      nodeToRemove.prev.next = nodeToRemove.next;
      nodeToRemove.next = null;
      nodeToRemove.prev = null;

      this.length--;
      return nodeToRemove;

  }
}

const list = new DoublyLinkedList();
list.push("zero");
list.push("one");
list.push("three");
list.push("four");
list.push("five");
list.push("six");
list.push("seven");
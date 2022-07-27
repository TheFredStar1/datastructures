// Linked List Implementation
class Node {
  constructor(val) {
      this.val = val;
      this.next = null;
  }
}

class Stack {
  constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
  }

  // Adds a value to the top of our stack
  push(val) {
      const node = new Node(val);
      // For performance issues it's better that
      // we implement our stack with the right most being the oldest item
      // that way when we pop off items we don't have to iterate over the
      // entire stack
      // [5] [4] [3] [2] [1]

      if (!this.first) {
          this.first = node;
          this.last = node;
          return ++this.size;
      }       

      const oldFirst = this.first;
      this.first = node;
      this.first.next = oldFirst;
      return ++this.size;
  }


  // Removes a value from the top of our stack
  pop() {
      if (!this.first) {
          return undefined;
      }
      
      const oldFirst = this.first;
      this.size--;

      if (!this.size === 1) {
          this.first = null;
          this.tail = null;
          return old;
      }

      this.first = oldFirst.next;
      oldFirst.next = null;
      return oldFirst;
  }
}

class Queue {
  constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
  }

  enqueue(val) {
      const node = new Node(val);
      
      if (!this.first) {
          this.first = node;
          this.last = node;
          return ++this.size;
      }

      if (this.first === this.last) {
          this.first.next = node;
          this.last = node;
          return ++this.size;
      }

      this.last.next = node;
      return ++this.size;
  }

  dequeue() {
      if (!this.first) {
          return undefined;
      }

      const oldFirst = this.first;
      this.first = oldFirst.next;
      oldFirst.next = null;
      this.size--;
      return oldFirst; 
  }
}

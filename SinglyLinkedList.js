class Node {
  constructor(val) {
    this.next = null;
    this.val = val;
  }
}

class SinglyLinkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Creates a node and places it at the end of our Singly Link List
   * If there is no value in our list, we set both the head and the tail
   * to our newly created node. 
   * If there is a head, then we assign to the tail to be our newly created node
   * and the node previously will point to the new tail.
   * @param {*} val [Value to be stored as the val property on our node]
   * @return {Node} [The Node that was attached to the list] 
   */
  push(val) {
    const newNode = new Node(val || null)

    this.length++;

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return newNode;
    }

    const oldTail = this.tail;
    this.tail = newNode;
    oldTail.next = newNode;
    return newNode;
  }

  /**
   * Removes the last Node in the list
   * If there is no Nodes in our list, return undefined
   *
   * @return {Node} [The removed node]
   */
  pop() {
    if (this.length === 0) {
      return undefined;
    }

    if (this.length === 1) {
      const node = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return node;
    }

    // Because we don't have a pointer to the previous node
    // we have to iterate until we reach our tail.
    // Our tail next property will be null
    let prevNode = this.head;
    let currentNode = this.head.next;

    while (currentNode.next) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    this.length--;
    this.tail = prevNode;
    prevNode.next = null;
    return currentNode;
  }

  /**
   * Removes the first node in our list
   * (removes the head and replaces it with the node next to it)
   * @return {Node} [The removed node]
   */
  shift() {
    if (!this.head) {
      return undefined;
    }

    const oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return oldHead;
    }
    
    const nextNode = this.head.next;
    this.head = nextNode;
    this.length--;
    return oldHead;
  }

  /**
   * Adds a node to the start of linked list
   * @return {Node} [The New Node]
   */
  unshift(val) {
    if (!this.head) {
      this.push(val);
      return;
    }

    const newNode = new Node(val);
    const oldHead = this.head;
    this.head = newNode;
    newNode.next = oldHead;
    this.length++;
    return newNode;
  }

  /**
   * @return {Node} A node at the given index
   */
  get(index) {
    if (index >= this.length) {
      return undefined;
    }

    let node = this.head;

    for (let i = 0; i < index; i++) {
      node = node.next;
    }

    return node;
  }

  /**
   * Insert a node at the given index
   * @return {Node} the insereted node
   */
  insert(index, val) {
    if (index > this.length) {
      return undefined;
    }

    if (index === 0) {
      return this.unshift(val);
    }

    if (index === this.length) {
      return this.push(val);
    }
    
    const node = new Node(val);
    // Retrive the node before the one given
    const prevNode = this.get(index - 1);
    const nextNode = prevNode.next;
    prevNode.next = node;
    node.next = nextNode;

    this.length++;

    return node;
  }

  /**
   * Reverse our list in place
   * @returns {SinglyLinkList} [returns the reverse version of our list]
   */
  reverse() {
    // Swap the head and the tail
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev = null;
    let next = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const head = Symbol('head');

class LinkedList {
  constructor() {
    this[head] = null;
  }

  add(data) {
    const newNode = new Node(data);

    // Special condition. An empty list.
    if (this[head] === null) {
      this[head] = newNode;
    } else {
      let current = this[head];

      while (current.next !== null) {
        current = current.next;
      }

      current.next = newNode;
    }
  }

  get(index) {
    if (index > -1) {
      let current = this[head];
      let currentIndex = 0;

      while (current !== null && currentIndex < index) {
        current = current.next;
        currentIndex++;
      }

      return current ? current.data : undefined;
    } else {
      return undefined;
    }
  }

  clear() {
    this[head] = null;
  }

  get size() {
    if (this[head] === null) {
      return 0;
    }

    let current = this[head];
    let count = 0

    while (current !== null) {
      count++;
      current = current.next;
    }
    
    return count;
  }

  insertAfter(data, index) {
    const newNode = new Node(data);

    if (this[head] === null) {
      throw new RangeError(`Index ${index} does not exist in the list.`);
    }

    let current = this[head];
    let currentIndex = 0;

    while (current !== null && currentIndex < index) {
      current = current.next
      currentIndex++;
    }

    if (currentIndex < index) {
      throw new RangeError(`Index ${index} does not exist in the list.`);
    }

    newNode.next = current.next;
    current.next = newNode;
  }

  insertBefore(data, index) {
    const newNode = new Node(data);

    if (this[head] === null) {
      throw new RangeError(`Index ${index} does not exist in the list.`);
    }

    if (index === 0) {
      newNode.next = this[head];
      this[head] = newNode;
    } else {
      let current = this[head];
      let previous = null;
      let currentIndex = 0;

      while (current.next !== null && currentIndex < index) {
        previous = current;
        current = current.next;
        currentIndex++;
      }

      if (currentIndex < index) {
        throw new RangeError(`Index ${index} does not exist in the list.`);
      }

      previous.next = newNode;
      newNode.next = current;
    }
  }

  indexOf(data) {
    let current = this[head];
    let index = 0;

    while (current !== null) {
      if (current.data === data) {
        return index;
      }

      current = current.next;
      index++;
    }

    return -1;
  }

  remove(index) {
    if (this[head] === null || index < 0) {
      throw new RangeError(`Index ${index} does not exist in the list.`);
    }

    if (index === 0) {
      const data = this[head].data;
      this[head] = this[head].next;
      return data;
    }

    let current = this[head];
    let previous = null;
    let currentIndex = 0;

    while (current !== null && currentIndex < index) {
      previous = current;
      current = current.next;
      currentIndex++;
    }

    if (current !== null) {
      // skip over the node to remove
      previous.next = current.next;

      // return the value that was just removed from the list
      return current.data;
    }

    throw new RangeError(`Index ${index} does not exist in the list.`);
  }

  [Symbol.iterator]() {
    return this.values();
  }

  *values() {
    let current = this[head];

    while (current !== null) {
      yield current.data;
      current = current.next;
    }
  }

  toString(){
    return [...this].toString();
  }
}

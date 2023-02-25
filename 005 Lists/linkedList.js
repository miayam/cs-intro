class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const head = Symbol("head");

class LinkedList {
  constructor() {
    this[head] = null
  }

  push(data) {
    const newNode = new LinkedListNode(data);

    if (this[head] === null) {
      this[head] = newNode;
    } else {
      let current = this[head];

      while(current.next !== null) {
        current = current.next
      }

      current.next = newNode;
    }
  }

  get(index) {
    if (index > -1) {
      let current = this[head];
      let currentIndex = 0;

      while(current.next !== 0 && currentIndex < index) {
        current = current.next
        currentIndex++;
      }

      return current !== null ? current.data : undefined;
    } else {
      return undefined;
    }
  }

  remove(index) {
    if ((this[head] === null) || (index < 0)) {
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

    while (current.next !== null && currentIndex < index) {
      previous = current;
      current = current.next;
      currentIndex++;
    }

    if (current !== null) {
      previous.next = current.next;
      return current.data;
    }

    throw new RangeError(`Index ${index} does not exist in the list.`);
  }
}
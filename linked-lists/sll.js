class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SLL {
  constructor() {
    this.head = null;
  }

  front() {
    if (!this.head) {
      return null;
    }
    return this.head.data;
  }

  addFront(value) {
    let new_node = new Node(value);

    if (!this.head) {
      this.head = new_node;
      return this;
    }

    new_node.next = this.head;
    this.head = new_node;
    return this;
  }

  removeFront() {
    if (!this.head) {
      return null;
    }
    this.head = this.head.next;
  }

  display() {
    if (!this.head) {
      return null;
    }

    let runner = this.head;
    let arr = []

    while (runner !== null) {
      arr.push(`${runner.data}`);
      runner = runner.next;
    }
    return arr.toString();
  }
}

let SLL1 = new SLL();
SLL1.addFront(18);
SLL1.addFront(5);
SLL1.addFront(73);

console.log(SLL1.head);
console.log("Next: " + SLL1.head.next);

SLL1.removeFront();

console.log(SLL1.head);
console.log(SLL1.front());
console.log(SLL1.display());

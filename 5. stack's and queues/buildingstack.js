class Node {
  constructor(value) {
    this.value = value;
    this.last = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.top = newNode;
      this.bottom = newNode;
      this.length++;
      return this;
    }

    const holdingPointer = this.top;
    this.top = newNode;
    newNode.last = holdingPointer;
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 1) {
      this.bottom = null;
      this.length = 0;
      return this;
    }

    const currentTop = this.top;
    const second = currentTop.last;
    currentTop.last = null;
    this.top = second;
    this.length--;

    return this;
  }

  isEmpty() {
    if (this.length === 0) {
      return true;
    }

    return false;
  }
}

const myStack = new Stack();

myStack.push(" ");
myStack.push("Google");
myStack.push("Udemy");

myStack.pop();
myStack.pop();
myStack.pop();

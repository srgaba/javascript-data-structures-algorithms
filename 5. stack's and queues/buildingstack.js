class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {}
  push(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.top = newNode;
      this.bottom = newNode;
      this.length++;
      return this;
    }

    this.top.next = newNode;
    this.top = newNode;
    this.length++;
    return this;
    //criar nó
    //verificar se a nossa pilha está vazia, se sim
    //  fazer com que o nosso nó seja o topo e o bottom
    //se não
    //  apontar o primeiro nó para o novo
    //  e fazer o topo apontar para o novo nó
    //  incrementar a largura
  }
  pop() {}

  isEmpty() {
    if (this.length === 0) {
      return true;
    }

    return false;
  }
}

const myStack = new Stack();

myStack.push("Discord");
myStack.push("Google");
myStack.push("Udemy");

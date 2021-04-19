class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  preppend(value){
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value){
    if(index >= this.length){
      return 'the index is bigger than length';
    }

    if(index === 0){
      return this.preppend(value);
    }
    const newNode = new Node(value);
    index--;

    let lastNode = this.head;
    let currentNode; 

    for(let i = 0; i < index; i++){
      lastNode = lastNode.next;
    };
    currentNode = lastNode.next;
    
    lastNode.next = newNode;
    newNode.next = currentNode;
    this.length++;
  }

  delete(index){
    if(index === 0){
      return this.deleteHead();
    }

    if(index >= this.length){
      return this.deleteTail();
    }

    let lastNode = this.head;

    let i = 0;
    index--;

    while(i < index){
      lastNode = lastNode.next;
      i++;
    }

    let currentNode = lastNode.next;
    let nextNode = currentNode.next;
    lastNode.next = nextNode;
    return this;
  }

  deleteHead(){
    let currentNode = this.head;
    let nextNode = currentNode.next;
    this.head = nextNode;
    this.length--;
    return this;
  }

  deleteTail(){
    let currentNode = this.head;
    let i = 0;
    while(i < this.length - 2){
      currentNode = currentNode.next;
      i++;
    }
    currentNode.next = null;
    this.tail = currentNode;
    this.length--;
    return this;
  }

  reverse(){
    let first = this.head;
    this.tail = first;
    let second = first.next;

    while(second){
      const tmp = second.next;
      second.next = first;
      first = second;
      second = tmp;
    }

    this.head.next = null;
    this.head = first;
  }

  print(){
    const arr = [];
    let currentNode = this.head;
    while(currentNode){
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return console.log(arr);
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(3);
myLinkedList.preppend(1);
myLinkedList.insert(1, 53);
myLinkedList.print();
myLinkedList.reverse();
myLinkedList.print();




class Node {
    constructor(value){
      this.value = value;
      this.last = null;
      this.next = null;
    }
  }
  
  class DoublyList {
    constructor(value){
      this.head = new Node(value);
      this.tail = this.head;
      this.length = 1;
    }
  
    append(value){
      const newNode = new Node(value);    
      newNode.last = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
  
      this.length++;
      return this;
    }
  
    preppend(value){
      const newNode = new Node(value); 
      newNode.next = this.head;
      this.head.last = newNode;
      this.head = newNode;
  
      this.length++;
      return this;
    }
  
    insert(index, value){
      const newNode = new Node(value);
      let currentNode = this.head;
      let lastNode;
      let i = 0;
      while(i < index){
        currentNode = currentNode.next;
        i++;
      }
  
      lastNode = currentNode.last;
      lastNode.next = newNode;
      newNode.last = lastNode;
      newNode.next = currentNode;
      currentNode.last = newNode;
  
      this.length++;
  
      return this;
    }
  
    delete(index){
      if(index === 0){
        return this.shift()
      }
  
      if(index >= this.length){
        return this.pop();
      }
  
      let currentNode = this.head;
      let last;
      let next;
  
      let i = 0;
      while (i < index){
        currentNode = currentNode.next;
        i++;
      }
  
      last = currentNode.last;
      next = currentNode.next;
  
      last.next = next;
      next.last = last;
  
      this.length--;
  
      return this;
    }
  
    shift(){
      let currentNode = this.head.next;
      currentNode.last = null;
      this.head = currentNode;
      this.length--;
      return this;
    }
  
    pop(){
      let last = this.tail.last;
      last.next = null;
      this.tail = last;
      this.length--;
      return this;
    }
  
    print(){
      const arr = [];
      let currentNode = this.head;
      let i = 0;
      while(i < this.length){
        arr.push(currentNode.value);
        currentNode = currentNode.next;
        i++;
      }
      return console.log(arr);
    }
}
  
const myDoublyList = new DoublyList(5);
myDoublyList.append(3);
myDoublyList.append(7);
myDoublyList.append(9);
myDoublyList.insert(2, 29);
myDoublyList.print();
myDoublyList.delete(20);
myDoublyList.print();
  
  
  
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
      const newNode = {
        value,
        next: null
      };
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
  
    preppend(value){
      const newNode = {
        value,
        next: null
      };
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
    }
}
  
let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(3);
myLinkedList.preppend(1);
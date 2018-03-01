class Node {
  constructor(value, nama) {
    this.data = value;
    this.nama = nama;
    this.next = null;
  }
}

class singleLinkedList {

  constructor() {
    this.head = null;
    this.tail = null;
    this.totalData = 0;
  }

  addFirst(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.totalData += 1;
  }

  addLast(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.totalData += 1;
  }

  insertAfter(value, index) {
    /*  Handler
    1. If Linked List still empty
    2. index parameter > current total Data
    3. index parameter < 0
    4. index parameter is not a number
    5. index parameter is not an integer
    */
    if (!this.head || index >= this.totalData || index < 0 || !Number.isInteger(index)) {
      if (!this.head) {
        console.log("Linked List Still Empty");
      } else if (index > this.totalData) {
        console.log("Index parameter greater than total data in linked list");
      } else if (index === this.totalData) {
        this.addLast(value);
      } else if (index < 0) {
        console.log("Index parameter must be a positive number !");
      } else if (!Number.isInteger(index)) {
        console.log("Index Parameter must be whole number");
      }
    } else {
      const node = new Node(value);
      let curr = this.head;
      for (var i = 1; i <= index; i++) {
        curr = curr.next;
      }
      node.next = curr.next;
      curr.next = node;
      this.totalData += 1;
    }
  }

  insertBefore(value, index) {
    /*  Handler
    1. If Linked List still empty
    2. index parameter > current total Data
    3. index parameter < 0
    4. index parameter is not a number
    5. index parameter is not an integer
    */
    if (!this.head || index > this.totalData || index < 0 || !Number.isInteger(index)) {
      if (!this.head) {
        console.log("Linked List Still Empty");
      } else if (index > this.totalData) {
        console.log("Index parameter greater than total data in linked list");
      } else if (index < 0) {
        console.log("Index parameter must be a positive number !");
      } else if (!Number.isInteger(index)) {
        console.log("Index Parameter must be whole number");
      }
    } else {
      const node = new Node(value);
      let curr = this.head;
      for (var i = 1; i < index; i++) {
        curr = curr.next;
      }
      node.next = curr.next;
      curr.next = node;
      this.totalData += 1;
    }
  }

  removeValue(value) {
    /* Handler
    1. If Linked List still empty
    2. If value found in the head of linked list
    */
    if (!this.head || this.head.data === value) {
      if (!this.head) {
        console.log("Cant Delete, Empty Linked List");
      } else {
        this.head = this.head.next;
        this.totalData -= 1;
      }
    } else {
      let prev = this.head;
      let curr = this.head.next;
      while (curr) {
        if (curr.data === value) {
          prev.next = curr.next;
          this.totalData -= 1;
          return;
        }
        prev = prev.next;
        curr = curr.next;
      }
      console.log("Cannot find value");
    }
  }

  isEmpty() {
    return !this.head
      ? true
      : false;
  }

  print() {
    let curr = this.head
    while (curr) {
      console.log(curr.data);
      curr = curr.next;
    }
  }

  getFirst() {
    /* Handler
    1. If linked list still empty
    */
    if (!this.head) {
      console.log("Empty Linked List !");
      return;
    }
    return this.head.data;
  }

  removeFirst() {
    /* Handler
    1. If Linked List still empty
    2. If there is 1 data in linked list
    */
    if (!this.head) {
      console.log("Empty Linked List !");
    } else if (this.head === this.tail) {
      this.head = null;
      this.totalData -= 1;
    } else {
      this.head = this.head.next;
      this.totalData -= 1;
    }
  }

  getLast() {
    /*
    1. If Linked List still empty
    */
    if (!this.head) {
      console.log("Empty Linked List");
      return;
    }
    return this.tail.data;
  }

  removeLast() {
    if (!this.head) {
      console.log("Empty Linked List");
    } else if (this.head === this.tail) {
      this.head = null;
    } else {
      let curr = this.head;
      for(var i = 1 ; i < this.totalData-1;i++){
        curr = curr.next;
      }
      this.tail = curr;
      curr.next = null;
      this.totalData -= 1;
    }
  }

  contain(value) {
    let curr = this.head;
    while (curr) {
      if (curr.data === value) {
        return true;
      }
      curr = curr.next;
    }
    return false;
  }

  clear() {
    this.head = null;
    this.totalData = 0;
  }

  get(index) {
    /* Hanlder
    1. index < 0;
    2. index > total data
    3. index is not a number
    4. index is not a whole number
    5. index = 0
    6. index = total data
    */
    if (index < 0 || !Number.isInteger(index)) {
      console.log("Index parameter must be a positive whole number");
    } else if (index >= this.totalData) {
      console.log("Index parameter greater than a total data");
    } else if (index === 0) {
      return this.getFirst();
    } else if (index === this.totalData) {
      return this.getLast();
    } else {
      let curr = this.head;
      let counter = 0;
      while(counter < index){
        counter+=1;
        curr = curr.next;
      }
      return curr.data;
    }
  }

  removeIndex(index) {
    /* Hanlder
    1. index < 0;
    2. index > total data
    3. index is not a number
    4. index is not a whole number
    5. index = 0
    6. index = total data
    */
    if (index < 0 || !Number.isInteger(index)) {
      console.log("Index parameter must be a positive whole number");
    } else if (index >= this.totalData) {
      console.log("Index parameter greater than a total data");
    } else if (index === 0) {
      this.removeFirst();
    } else if (index === this.totalData) {
      this.removeLast();
    } else {
      let prev = this.head;
      let curr = this.head.next;
      for (var i = 1; i < index; i++) {
        prev = prev.next;
        curr = curr.next;
      }
      let temp = curr;
      prev.next = curr.next;
      temp = null;
      this.totalData -= 1;
    }
  }

  insertIndex(value, index){
    /* Handler
    1. index < 0
    2. index > total data + 1
    3. index is not a number
    4. index is not a whole number
    5. index = 0;
    */
    if(index < 0 || !Number.isInteger(index) ){
      console.log("Index parameter must be a positive whole number");
    }
    else if(index >= this.totalData + 1){
      console.log("Index should be at least less than total data + 1")
    }
    else if(index === 0){
      this.addFirst(value);
    }
    else{
      const node = new Node(value);
      let curr = this.head;
      let counter = 1;
      while(counter < index){
        counter+=1;
        curr = curr.next;
      }
      node.next = curr.next;
      curr.next = node;
      this.totalData += 1;  
    }
    

  }

  reverse() {
    let temp = new singleLinkedList();
    let curr = this.head;
    while(curr){
      temp.addFirst(curr.data);
      curr = curr.next;
    }
    this.head = temp.head;
    temp = null;
  }

  getReverse(){
    let temp = new singleLinkedList();
    let curr = this.head;
    while(curr){
      temp.addFirst(curr.data);
      curr = curr.next;
    }
    return temp;
  }

  size(){
    return this.totalData;
  }


}

let temp = new singleLinkedList();
temp.addFirst(1);
temp.addFirst(2);
temp.addFirst(3);
temp.addFirst(4);
temp.addFirst(5);
temp.addFirst(6);

class Node {

  constructor(value) {
    this.data = value;
    this.next = null;
    this.before = null;
  }

}

class doubleLinkedList {

  constructor() {
    this.head = null;
    this.tail = null;
    this.totalData = null;
  }

  addFirst(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.before = node;
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
      node.before = this.tail;
      this.tail = node;
    }
    this.totalData += 1;
  }

  addAll(collection) {
    /*
    1. Parameter is not a linked list
    2. Linked List still empty
    */
    try {
      if (collection.head.isEmpty) {
        //this condition is just for triggering the "not a Linked List" exception
      } else if (this.head == null) {
        this.head = collection.head;
        this.tail = collection.tail;
      } else {
        this.tail.next = collection.head;
        collection.head.before = this.tail;
        this.tail = collection.tail;
      }
      this.totalData += collection.totalData;
    } catch (e) {
      console.log("parameter should be a Linked List");
    }
  }

  insertAt(value, index) {
    /* Handler
      1. index < 0
      2. index > total data + 1
      3. index = total data
      4. index is not a number
      5. index is not a whole number
      6. index = 0;
      */
    if (index < 0 || !Number.isInteger(index)) {
      console.log("Index parameter must be a positive whole number");
    } else if (index >= this.totalData + 1) {
      console.log("Index should be at least less than total data + 1")
    } else if (index === 0) {
      this.addFirst(value);
    } else if (index === this.totalData) {
      this.addLast(value);
    } else {
      const node = new Node(value);
      let curr = this.head;
      let counter = 1;
      while (counter < index) {
        counter += 1;
        curr = curr.next;
      }
      node.next = curr.next;
      curr.next.before = node;
      curr.next = node;
      node.before = curr;
      this.totalData += 1;
    }
  }

  insertAfter(value, index) {
    /*  Handler
      1. If Linked List still empty
      2. index parameter >= current total Data
      3. index parameter < 0
      4. index parameter is not a number
      5. index parameter is not an integer
      */
    if (!this.head || index >= this.totalData || index < 0 || !Number.isInteger(index) || index === (this.totalData - 1)) {
      if (!this.head) {
        console.log("Linked List Still Empty");
      } else if (index >= this.totalData) {
        console.log("Index parameter greater than total data in linked list");
      } else if (index === (this.totalData - 1)) {
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
      curr.next.before = node;
      curr.next = node;
      node.before = curr;
      this.totalData += 1;
    }
  }

  insertBefore(value, index) {
    /*
      1. If Linked list still empty
      2. index parameter greater than total data
      3. index parameter == 0
      4. index parameter is not a number
      5. index parameter is not a integer
      6. index parameter < 0
      */
    if (!this.head || index >= this.totalData || index === 0 || !Number.isInteger(index) || index < 0) {
      if (!this.head) {
        console.log("Linked List Still Empty");
      } else if (index >= this.totalData) {
        console.log("Index should be at least less than total data");
      } else if (index < 0) {
        console.log("Index parameter must be a positive number !");
      } else if (!Number.isInteger(index)) {
        console.log("Index Parameter must be whole number");
      } else if (index === 0) {
        this.addFirst(value);
      }
    } else {
      const node = new Node(value);
      let curr = this.head;
      for (var i = 1; i <= index; i++) {
        curr = curr.next;
      }
      curr.before.next = node;
      node.before = curr.before;
      node.next = curr;
      curr.before = node;
      this.totalData += 1;
    }
  }

  removeValue(value) {
    /* Handler
      1. If Linked list still empty
      2. If Value found in the head of linked list
      3. If value found in the tail of linked list
      */
    if (!this.head || this.head.data === value || this.tail.data === value) {
      if (!this.head) {
        console.log("Cant Delete, Empty Linked List");
      } else if (this.head.data === value) {
        this.removeFirst();
      } else if (this.tail.data === value) {
        this.removeLast();
      }
    } else {
      let curr = this.head.next;
      while (curr) {
        if (curr.data === value) {
          curr.before.next = curr.next;
          curr.next.before = curr.before;
          curr = null;
          this.totalData -= 1;
          return;
        }
        curr = curr.next;
      }
      console.log("Cannot find value");
    }
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
      this.head.before = null;
      this.totalData -= 1;
    }
  }

  removeLast() {
    /* Handler
      1. If Linked List still empty
      2. If there is 1 data in linked list
      */
    if (!this.head) {
      console.log("Empty Linked List");
    } else if (this.head === this.tail) {
      this.head = null;
    } else {
      this.tail = this.tail.before;
      this.tail.next = null;
      this.totalData -= 1;
    }
  }

  getFirst() {
    /* Handler
      1. If linked list still empty
      */
    if (!this.head) {
      console.log("Empty linked list");
      return;
    }
    return this.head.data;
  }

  getLast() {
    /* Handler
      1. If linked list still empty
      */
    if (!this.head) {
      console.log("Empty linked list");
      return;
    }
    return this.tail.data;
  }

  get(index) {
    /* Hanlder
      1. index < 0;
      2. index >= total data
      3. index is not a number
      4. index is not a whole number
      5. index = 0
      6. index = total data-1
      */
    if (index < 0 || !Number.isInteger(index)) {
      console.log("Index parameter must be a positive whole number");
    } else if (index >= this.totalData) {
      console.log("Index parameter should be at least less than total data");
    } else if (index === 0) {
      return this.getFirst();
    } else if (index === this.totalData - 1) {
      return this.getLast();
    } else {
      let curr = this.head;
      let counter = 0;
      while (counter < index) {
        counter += 1;
        curr = curr.next;
      }
      return curr.data;
    }
  }

  reverse() {
    /* Handler
      1. if linked list still empty
      */
    if (!this.head) {
      console.log("Empty Linked List");
    } else {
      let temp = new doubleLinkedList();
      let curr = this.head;
      while (curr) {
        temp.addFirst(curr.data);
        curr = curr.next;
      }
      this.head = temp.head;
      this.tail = temp.tail;
      temp = null;
    }
  }

  getReverse() {
    /* Handler
      1. if linked list still empty
      */
    if (!this.head) {
      console.log("Empty linkled list !");
    }
    let temp = new singleLinkedList();
    let curr = this.head;
    while (curr) {
      temp.addFirst(curr.data);
      curr = curr.next;
    }
    return temp;
  }

  size() {
    return this.totalData;
  }

  isEmpty() {
    return (this.head);
  }

  contain(value) {
    /* Handler
      1. If linked list still empty
      */
    if (!this.head) {
      console.log("Empty Linked List");
    } else {
      let curr = this.head;
      while (curr) {
        if (curr.data === value) {
          return true;
        }
      }
      return false;
    }
  }

  print() {
    /* Handler
      1. if linked list still empty
      */
    if (!this.head) {
      console.log("Empty Linked List");
    } else {
      let curr = this.head;
      while (curr) {
        console.log(curr.data);
        curr = curr.next;
      }
    }
  }

  reversePrint() {
    /* Handler
      1. if linked list still empty
      */
    if (!this.head) {
      console.log("Empty Linked List");
    } else {
      let curr = this.tail;
      while (curr) {
        console.log(curr.data);
        curr = curr.before;
      }
    }
  }

  clear() {
    this.head = null;
  }

}

var tes = new doubleLinkedList();
tes.addFirst(6);
tes.addFirst(5);
tes.addFirst(4);
tes.addFirst(3);
tes.addFirst(2);
tes.addFirst(1);

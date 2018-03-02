class Node {
  constructor(value) {
    this.data = value;
    this.link = null;
  }
}

class Stack {

  constructor() {
    this.top = null;
    this.totalData = 0;
  }

  push(value) {
    /*  Handler
    1. If Stack Empty;
    */
    const node = new Node(value);
    if (this.isEmpty()) {
      this.top = node;
    } else {
      node.link = this.top;
      this.top = node;
    }
    this.totalData += 1;
  }

  pop() {
    /*  Handler
    1. If Stack Empty;
    */
    if (this.isEmpty()) {
      console.log("Empty Stack !");
    } else {
      this.top = this.top.link;
      this.totalData -= 1;
    }
  }

  isEmpty() {
    return (!this.top);
  }

  getSize() {
    return this.totalData;
  }

  getTop() {
    /*  Handler
    1. If Stack Empty;
    */
    if (this.isEmpty()) {
      console.log("Empty Stack !");
    } else {
      return this.top.data;
    }
  }

  clear() {
    this.top = null;
    this.totalData = 0;
  }

  print() {
    /*  Handler
    1. If Stack Empty;
    */
    if (this.isEmpty()) {
      console.log("Empty Stack !");
    } else {
      let curr = this.top;
      while (curr) {
        console.log(curr.data);
        curr = curr.link;
      }
    }
  }
}

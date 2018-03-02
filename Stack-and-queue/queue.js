class Node {
  constructor(value) {
    this.data = value;
    this.link = null;
  }
}

class Queue {

  constructor() {
    this.front = null;
    this.back = null;
    this.totalData = 0;
  }

  enqueue(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.front = node;
      this.back = node;
    } else {
      this.back.link = node;
      this.back = node;
    }
    this.totalData += 1;
  }

  dequeue() {
    /* Handler
    1. If Queue empty
    2. If there is 1 data remaining in queue
    */
    if (this.isEmpty()) {
      console.log("Empty Queue !");
    } else if (this.size === 1) {
      this.clear();
    } else {
      this.front = this.front.link;
      this.totalData -= 1;
    }
  }

  isEmpty() {
    return (!this.front);
  }

  getSize() {
    return this.totalData;
  }

  getFront(){
    /* Handler
    1. If Queue still empty
    */
    if(this.isEmpty()){
      console.log("Empty Queue !");
    }else{
      return this.front.data;
    }
  }

  getBack(){
    /* Handler
    1. If Queue still empty
    */
    if(this.isEmpty()){
      console.log("Empty Queue !");
    }else{
      return this.back.data;
    }
  }

  clear() {
    this.front = null;
    this.back = null;
    this.totalData = 0;
  }

  print() {
    /* Handler
    1. If Queue Still Empty
    */
    if (this.isEmpty()) {
      console.log("Empty Queue !");
    } else {
      let curr = this.front;
      while (curr) {
        console.log(curr.data);
        curr = curr.link;
      }
    }
  }
}

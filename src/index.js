class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(head) {
    this.head = {};
    this.size = 0;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    let tail = this.head;
    while (tail.next !== null) {
      tail = tail.next;
    }
    return tail;
  }

  append(node) {
    if (!this.head.value) {
      this.head.value = 'head';
      this.head.next = node.next;
    }

    let tail = this.getTail();

    tail.next = node;
    this.size++;
  }

  prepend(node) {
    let headNext = this.head.next;
    this.head.next = node;
    this.head.next.next = headNext;
    this.size++;
  }

  atIndex(index) {
    let indexCount = 1;
    let head = this.getHead();

    while (indexCount <= index) {
      head = head.next;
      indexCount++;
    }
    return head;
  }

  pop() {
    let head = this.getHead();
    for (let i = 1; i < this.size; i += 1) {
      head = head.next;
    }
    head.next = null;
    this.size--;
  }

  contains(value) {
    let head = this.getHead();

    while (head.next !== null) {
      if (head.value !== value) {
        head = head.next;
      } else {
        return true;
      }
    }
    return head.value === value ? true : false;
  }
  find(value) {
    let head = this.getHead();
    let index = 0;

    while (head.next !== null) {
      if (head.value !== value) {
        head = head.next;
        index += 1;
      } else {
        return index;
      }
    }
    return head.value === value ? index++ : null;
  }

  toString() {
    let head = this.getHead().next;
    let string = ``;
    while (head.next !== null) {
      string += ` -> (${head.value})`;
      head = head.next;
    }
    string = string + ` -> (${head.value}) -> null`;
    return string.slice(4, -1);
  }
}

let myList = new LinkedList();
let NodeA = new Node('A');
let NodeB = new Node('B');
let NodeC = new Node('C');
let NodeD = new Node('D');
let NodeE = new Node('E');
let Node0 = new Node('0');
let NodeF = new Node('F');
let NodeG = new Node('G');
let NodeH = new Node('H');
let NodeOmega = new Node('Omega');
myList.append(NodeA);
myList.append(NodeB);
myList.append(NodeC);
myList.append(NodeD);
myList.append(NodeE);
myList.prepend(Node0);
myList.append(NodeA);

console.log(myList);
console.log(myList.size);
console.log(myList.getHead());
console.log(myList.atIndex(3));
myList.pop();
console.log(myList);
console.log(myList.contains('Z'));
console.log(myList.contains('D'));
console.log(myList.find('C'));
console.log(myList.toString());
myList.append(NodeF);
console.log(myList);
myList.append(NodeG);
myList.append(NodeH);
myList.prepend(NodeOmega);
console.log(myList.toString());

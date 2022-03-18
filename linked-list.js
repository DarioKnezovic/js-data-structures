// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }
    lookup() {
        let head = this.head;

        while(head) {
            console.log(head.value);
            head = head.next;
        }
    }
    append(value) {
        const newNode = {
            value,
            next: null
        };
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }
    prepend(value) {
        const newNode = {
          value,
          next: this.head,
        };
        this.head = newNode;
        this.length++;
    }
    traverseToIndex(index) {
        let counter = 0,
            currentNode = this.head;

        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    insert(value, index) {
        if (index >= this.length) {
            this.append(value);
        }

        const newNode = {
            value,
            next: null
        }
        const prevNode = this.traverseToIndex(index-1);
        const nextNode = prevNode.next;
        prevNode.next = newNode;
        newNode.next = nextNode;
        this.length++;
    }
    remove(index) {
        let prevNode = this.traverseToIndex(index-1);
        let nextNode = prevNode.next.next;
        prevNode.next = nextNode;
    }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.prepend(2);
myLinkedList.append(3);
console.log("On index 2 is: " + myLinkedList.traverseToIndex(2).value);
myLinkedList.insert(66, 2);
console.log("Now on index 2 is: " + myLinkedList.traverseToIndex(2).value);
myLinkedList.remove(2);
myLinkedList.lookup();

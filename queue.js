class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    loop() {
        let pointer = this.first;

        while (pointer) {
            console.log(pointer.value);
            pointer = pointer.next;
        }
    }
    peek() {
        return this.first;
    }
    enqueue(value){
        if (this.first && this.last) {
            const newNode = new Node(value);
            this.last.next = newNode;
            this.last = newNode;
        }else {
            const newNode = new Node(value);
            this.first = newNode;
            this.last = newNode;
        }
        this.length++;
    }
    dequeue(){
        if (!this.first) {
            return;
        }

        if (this.first === this.last) {
            this.last = null;
        }

        let nodeForDequeue = this.first;
        this.first = nodeForDequeue.next;
        this.length--;
    }
    //isEmpty;
}

const myQueue = new Queue();
myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
myQueue.enqueue("Samir");
myQueue.loop();
console.log("-----------");
myQueue.dequeue();
myQueue.loop();
console.log("----------");
myQueue.enqueue("Patrick");
myQueue.loop();

//Joy
//Matt
//Pavel
//Samir

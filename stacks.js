class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    loop() {
        let pointer = this.top;

        while (pointer) {
            console.log(pointer.value);
            pointer = pointer.next;
        }
    }
    peek() {
        return this.top;
    }
    push(value){
        const newNode = new Node(value);

        if (this.top && this.bottom) {
            newNode.next = this.top;
            this.top = newNode;
        }else {
            this.top = newNode;
            this.bottom = newNode;
        }

        this.length++;
    }
    pop(){
        if (!this.top) {
            return;
        }

        if (this.top === this.bottom) {
            this.bottom = null;
        }

        this.top = this.top.next;
        this.length--;
    }
}

const myStack = new Stack();
myStack.push("Google");
myStack.push("Udemy");
myStack.push("Discord");
myStack.loop();
console.log("-------");
myStack.pop();
myStack.loop();

//Discord
//Udemy
//google

module.exports = Stack;

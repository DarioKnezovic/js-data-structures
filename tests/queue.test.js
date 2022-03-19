const Queue = require("../queue.js");
const testQueue = new Queue();

test("After enqueue it should return 2 in peek function", () => {
    testQueue.enqueue(2);
    expect(testQueue.peek().value).toBe(2);
});

test("After new enqueue it should return again 2 in peek function", () => {
    testQueue.enqueue(4);
    expect(testQueue.peek().value).toBe(2);
});

test("After dequeue it should return 4 in peek function", () => {
    testQueue.dequeue();
    expect(testQueue.peek().value).toBe(4);
});

test("After this dequeue, queue should be empty", () => {
    testQueue.dequeue();
    expect(testQueue.peek()).toBe(null);
});

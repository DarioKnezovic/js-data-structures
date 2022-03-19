const Stack = require("../stacks.js");
const testStack = new Stack();

test("After push in the stack, peek function should return 2", () => {
   testStack.push(2);
   expect(testStack.peek().value).toBe(2);
});

test("After new push in the stack, peek function should return 4", () => {
   testStack.push(4);
   expect(testStack.peek().value).toBe(4);
});

test("After pop in the stack, peek function should return 2", () => {
   testStack.pop();
   expect(testStack.peek().value).toBe(2);
});

test("After new pop, stack should be empty", () => {
   testStack.pop();
   expect(testStack.peek()).toBe(null);
});

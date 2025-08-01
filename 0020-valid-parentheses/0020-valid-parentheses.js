/**
 * @param {string} s
 * @return {boolean}
 */
 class Stack {
    constructor() {
        this.items = [];
    }
    push(val) {
        this.items.push(val);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
}

var isValid = function(s) {
    const stack = new Stack();
    const map = { ')': '(', ']': '[', '}': '{' };

    for (let char of s) {
        if (['(', '{', '['].includes(char)) {
            stack.push(char);
        } else {
            if (stack.isEmpty() || stack.pop() !== map[char]) {
                return false;
            }
        }
    }

    return stack.isEmpty();
};


/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */

class MyQueue {
    constructor() {
        this.items = [];
    }
    enqueue(item) {
        this.items.push(item);
    }
    dequeue() {
        return this.items.shift();
    }
    peek() {
        return this.items[0];
    }
    isEmpty() {
        return this.items.length === 0;
    }
}

var countStudents = function(students, sandwiches) {
    let queue = new MyQueue();
    for (let s of students) {
        queue.enqueue(s);
    }

    let index = 0;
    let rotations = 0;

    while (!queue.isEmpty() && rotations < queue.items.length) {
        if (queue.peek() === sandwiches[index]) {
            queue.dequeue();
            index++;
            rotations = 0;
        } else {
            queue.enqueue(queue.dequeue());
            rotations++;
        }
    }

    return queue.items.length;
};

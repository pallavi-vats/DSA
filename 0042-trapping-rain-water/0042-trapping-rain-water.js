/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let stack = [], water = 0;

    for (let i = 0; i < height.length; i++) {
        while (stack.length && height[i] > height[stack[stack.length - 1]]) {
            let top = stack.pop();
            if (!stack.length) break;

            let distance = i - stack[stack.length - 1] - 1;
            let boundedHeight = Math.min(height[i], height[stack[stack.length - 1]]) - height[top];
            water += distance * boundedHeight;
        }
        stack.push(i);
    }

    return water;
};

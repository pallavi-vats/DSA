/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    const res = new Array(n).fill(1);

    let leftProd = 1;
    for (let i = 0; i < n; i++) {
        res[i] = leftProd;
        leftProd *= nums[i];
    }

    let rightProd = 1;
    for (let i = n - 1; i >= 0; i--) {
        res[i] *= rightProd;
        rightProd *= nums[i];
    }

    return res;
};
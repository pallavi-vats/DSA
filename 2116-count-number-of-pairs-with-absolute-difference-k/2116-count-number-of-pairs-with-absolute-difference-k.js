/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
     let count = 0;
    let freq = new Map();

    for (let num of nums) {
        count += (freq.get(num - k) || 0) + (freq.get(num + k) || 0);
        freq.set(num, (freq.get(num) || 0) + 1);
    }
    return count;
};
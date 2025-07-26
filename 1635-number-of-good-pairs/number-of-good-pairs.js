/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
      let freq = new Map();
    let count = 0;

    for (let num of nums) {
        count += freq.get(num) || 0;
        freq.set(num, (freq.get(num) || 0) + 1);
    }
    return count;
};
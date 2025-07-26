/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
     let set1 = new Set(nums1);
    let set2 = new Set(nums2);

    let count1 = nums1.filter(num => set2.has(num)).length;
    let count2 = nums2.filter(num => set1.has(num)).length;

    return [count1, count2];
    
};
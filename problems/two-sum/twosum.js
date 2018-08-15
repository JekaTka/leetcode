/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twosum = (nums, target) => {
    const size = nums.length;
    for(let i = 0; i < size; i++) {
        for(let j = 0; j < size; j++) {
            if(nums[i] + nums[j] === target && i !== j) return [i, j];
        }
    }
    return [];
};

module.exports = twosum;
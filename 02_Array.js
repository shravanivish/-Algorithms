// Find The Max & Min Element In An Array

// Input: nums = [ 1000, 11, 445, 1, 330, 3000 ];
// Output: Minimum element is 1
//         Maximum element is 3000

// Algorithm

const nums = [5, 458, 120, -215, 228, 400, 122205, -85411];

const max = (arr) => Math.max.apply(Math, arr);
const min = (arr) => Math.min.apply(Math, arr);

console.log("Maximum Element is", max(nums));
console.log("Minimum Element is", min(nums));

// Output: Maximum element is 122205
//         Minimum element is -85411

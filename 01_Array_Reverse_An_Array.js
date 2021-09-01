// Write A Program To Reverse An Array
// Given an array (or string), the task is to reverse the array/string

// Input  : nums = [ 1, 2, 3 ]
// Output :        [ 3, 2, 1 ]

// Input :  nums = [ 4, 5, 1, 2 ]
// Output :        [ 2, 1, 5, 4 ]

// Algorithm 1
const reverseArray = (nums) => nums.reverse();
console.log(reverseArray([1, 2, 3, 4, 5]));
// Output : [ 5, 4, 3, 2, 1 ]

// Algorithm 2
const nums = [1, 2, 3];
const reverseArray = (nums) => nums.reverse();
console.log(reverseArray(nums));
// Output : [ 3, 2, 1 ]

// Algorithm 3
const nums = [ 4, 5, 1, 2 ];
const reverseArray = (nums) => {
  let start = 0, end = nums.length - 1;
	while (start <= end) {
		[nums[start], nums[end]] = [nums[end], nums[start]];
		start++;
		end--;
	}
	return nums;
};
console.log(reverseArray(nums));
// Output : [ 2, 1, 5, 4 ]

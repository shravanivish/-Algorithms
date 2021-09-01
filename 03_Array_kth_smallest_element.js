// Kth smallest element
// Given an array and a number K where K is smaller than size of array, 
// the task is to find the Kth smallest element in the given array 
// It is given that all array elements are distinct

// Input : nums = [7, 10, 4, 3, 20, 15] , K = 3
// Output : Kth smallest element is 7

// Algorithm
const nums = [7, 10, 4, 3, 20, 15];
const findKthSmallest = (array, k) => {
	array.sort((a, b) => {
		return a - b;
	});
	return array[k - 1];
};
console.log("Kth smallest element:", findKthSmallest(nums, 3));
// Output : Kth smallest element: 7

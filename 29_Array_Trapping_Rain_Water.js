const trap = (height) => {
    let leftMax = -1, 
        rightMax = -1, 
        left = 0, 
        right = height.length - 1, 
        water = 0;
  
    while (left <= right) {
        //Get the max wall height from both the ends
        leftMax = height[left] > leftMax ? height[left] : leftMax
        rightMax = height[right] > rightMax? height[right] : rightMax
        
        //calculate the amount of water trapped
        if (leftMax > rightMax) {
            water += rightMax - height[right]
            right--
        }
        else {
            water += leftMax - height[left]
            left++
        }
    }
  
    return water
};
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
// Output: 6

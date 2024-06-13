// to sum problem 
// in given array find a pair which sum up to the target value
// Brut force sol -
function toSum(arr,target){
    let n = arr.length 
    // outer loop 
    for(let i = 0; i<=n-2; i++){
        // inner loop
        for(let j = i+1; j<n; j++){
            if( arr[i] + arr[j] == target ){
                return [i,j]
            }
        }
    }
}

toSum([2,3,7,11,15],9)
//output - index 0 and 2




// leetcode
var twoSum = function(nums, target) {
    for(let i = 0; i<nums.length -2; i++){
        for(let j = i + 1; j<nums.length - 1; j++){
            if(nums[i] + nums[i] === target ){
                return [i,j]
        }
    }
    }
    return -1
}
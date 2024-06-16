var containsDuplicate = function(nums) {
    let n = nums.length
    let obj = {}
    let i = 0
    while(i< n){
        if(obj[nums[i]]){
            return true
        }else{
            obj[nums[i]] = 1
        }
        i++
    }
    return false
};


console.log(containsDuplicate([1,2,3,4]))
// 3 SUM
// finding triplets which sums up to the target 
// lets solve using TwoPointer approach 

function threeSum(nums) {
    const result = [];

    // Sort the array
    nums.sort((a, b) => a - b);

    for (let c = 0; c < nums.length - 2; c++) {
        // Skip duplicate elements
        if (c > 0 && nums[c] === nums[c - 1]) {
            continue;
        }

        let a = c + 1;
        let b = nums.length - 1;

        while (a < b) {
            const sum = nums[a] + nums[b];

            if (sum === -nums[c]) {
                result.push([nums[c], nums[a], nums[b]]);

                // Skip duplicate elements
                while (a < b && nums[a] === nums[a + 1]) {
                    a++;
                }
                while (a < b && nums[b] === nums[b - 1]) {
                    b--;
                }

                a++;
                b--;
            } else if (sum < -nums[c]) {
                a++;
            } else {
                b--;
            }
        }
    }

    return result;
}
// Example usage:
const nums = [-1, 0, 1, 2, -1, -4];
const result = threeSum(nums);
console.log(result);  // Output: [[-1, -1, 2], [-1, 0, 1]]


// Dry run or debug
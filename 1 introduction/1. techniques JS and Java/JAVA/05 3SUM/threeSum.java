import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class threeSum {

    public static void main(String[] args) {
        int nums[] = {-1, 0, 1, 2, -1, -4};
        
        // Find the triplets
        List<List<Integer>> result = threeSum(nums);

        // Print the result
        for (List<Integer> triplet : result) {
            System.out.println(triplet);
        }
    }

    public static List<List<Integer>> threeSum(int[] nums) {
        // This means result will be able to hold a list of lists of integers.
        List<List<Integer>> result = new ArrayList<>();

        // Sort the array
        Arrays.sort(nums);

        for (int c = 0; c < nums.length - 2; c++) {
            // Skip duplicate elements
            if (c > 0 && nums[c] == nums[c - 1]) {
                continue;
            }
            int a = c + 1;
            int b = nums.length - 1;
            while (a < b) {
                int sum = nums[a] + nums[b];
                int target = -nums[c];
                if (sum == target) {
                    // Adding new element in array using this method
                    result.add(Arrays.asList(nums[c], nums[a], nums[b]));

                    // Skip duplicate elements
                    while (a < b && nums[a] == nums[a + 1]) {
                        a++;
                    }
                    while (a < b && nums[b] == nums[b - 1]) {
                        b--;    
                    }
                    a++;
                    b--;
                } else if (sum < target) {
                    a++;
                } else {
                    b--;
                }
            }
        }

        return result;
    }
}




// Leet-code

// class Solution {
//     public List<List<Integer>> threeSum(int[] nums) {
//         // making new array This means result will be able to hold a list of lists of integers.
//         List<List<Integer>> result = new ArrayList<>();

//     // Sort the array
//     Arrays.sort(nums);

//     for (int c = 0; c < nums.length - 2; c++) {
//         // Skip duplicate elements
//         if (c > 0 && nums[c] == nums[c - 1]) {
//             continue;
//         }
//         int a = c + 1;
//         int b = nums.length - 1;
//         while (a < b) {
//             int sum = nums[a] + nums[b];
//             int target =  -nums[c];
//             if (sum == target) {
//                 // adding new element in array using this method
//                  result.add(Arrays.asList(nums[c], nums[a], nums[b]));

//                 // Skip duplicate elements
//                 while (a < b && nums[a] == nums[a + 1]) {
//                     a++;
//                 }
//                 while (a < b && nums[b] == nums[b - 1]) {
//                     b--;    
//                 }
//                 a++;
//                 b--;
//             } else if (sum < -nums[c]) {
//                 a++;
//             } else {
//                 b--;
//             }
//         }
//     }

//     return result;
//     }
// }
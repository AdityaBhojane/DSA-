// class toSum {
//     public static void main(String[] args) {
//         int[] arr = {1,2,3,4,5};
//         int target = 9;
//         int n = arr.length;
        
//         // outer loop 
//         for (int i = 0; i <= n - 2; i++) {
//             // inner loop
//             for (int j = i + 1; j < n; j++) {
//                 if (arr[i] + arr[j] == target) {
//                     System.out.println("Indices: " + i + ", " + j);
//                 }
//             }
//         }
//     }
// }



// LEETCODE

class Solution {
    public int[] twoSum(int[] num, int target) {
        for(int i = 0; i<num.length-1; i++){
            for(int j = i + 1; j < num.length ; j++){
                if(num[i] + num[j] == target){
                    return new int[]{i, j};
                }
            }
        }
    return new int[]{}; // No solution found
    }
}
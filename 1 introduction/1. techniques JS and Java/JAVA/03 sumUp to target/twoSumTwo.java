/**
 * twoSumTwo
 */
public class twoSumTwo {
    public static void main(String[] args) {
            int[] numbers = {2,7,11,15};
            int target = 9;
            int n = numbers.length;
            int i = 0;
            int j = n -1;
            while(i<j){
                if(numbers[i] + numbers[j] == target){
                    System.out.println( i+1 );
                    System.out.println( j+1 );
                    break; // stop loop, if this statement true then it again and again 
                    // reason is i and j always true 
                }else if(numbers[i] + numbers[j] < target) {
                    i++;
                }else{
                    j--;
                }
            }
            
    }
}









// leetcode solution

// class Solution {
//     public int[] twoSum(int[] numbers, int target) {
//             int n = numbers.length;
//             int i = 0;
//             int j = n -1;
//             while(i<j){
//                 if(numbers[i] + numbers[j] == target){
//                     return new int[] {i+1,j+1};
//                 }else if(numbers[i] + numbers[j] < target) {
//                     i++;
//                 }else{
//                     j--;
//                 }
//             }
//             return new int[]{}; // No solution found
//     }
// }
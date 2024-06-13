// class reverseString {
//     public static void main(String[] args) {
//         char[] arr = {'s','a','n','k','e','t'};
//         int n = arr.length;
//         int i = 0;
//         int j = n-1;
//         while(i<j){
//             char temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//             i++;
//             j--;
//         };
//     System.out.println(arr);
//     };
// }






// Leetcode solution 
class Solution {
    public void reverseString(char[] arr) {
        int n = arr.length;
        int i = 0;
        int j = n-1;
        while(i<j){
            char temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        };
        }
}

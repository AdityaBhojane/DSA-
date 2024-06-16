import java.lang.reflect.Array;
import java.util.Arrays;

/**
 * squareSort
 * Input: nums = [-7,-3,2,3,11]
    Output: [4,9,9,49,121]
 */
public class squareSort {
    public static void main(String[] args) {
        int arr[] = {-7,-3,2,3,11};
        int n = arr.length;
        int[] newArr = new int[n];
        int i = 0;
        int j = n - 1;
        int k = n - 1;
        while(i<=j){
            if(arr[i]*arr[i] > arr[j]*arr[j]){
                newArr[k] = arr[i]*arr[i];
                i++;
            }else{
                newArr[k] = arr[j]*arr[j];
                j--;
            }
            k--;
        }
        System.out.println(Arrays.toString(newArr));
        }
    }



/******************************* */



//LEET-CODE

// class Solution {
//     public int[] sortedSquares(int[] arr) {
//         int n = arr.length;
//         int[] newArr = new int[n];
//         int i = 0;
//         int j = n - 1;
//         int k = n - 1;
//         while(i<=j){
//             if(arr[i]*arr[i] > arr[j]*arr[j]){
//                 newArr[k] = arr[i]*arr[i];
//                 i++;
//             }else{
//                 newArr[k] = arr[j]*arr[j];
//                 j--;
//             }
//             k--;
//         }
//         return newArr;
//         }
// }
// insertion sort - assume index 0 is sorted and we have to check weather the 
// next value is small or big if it is small then we can shift that big value to the 
// place of small value then and the process continue if there are value available at
// left side of array if there is an empty spot then the smallest value goes there 

// working - it compare all two value and small value takes the place of big value like 
// if 7,4 then its going to be 4,7 also it not swap is shifting 


function insertionSort(arr) {
    /**
     * Space: O(1)
     * Time: O(n^2)
     */
    for (let i = 1; i < arr.length; i++) {
        let element = arr[i];
        let j;
        for (j = i - 1; j >= 0; j--) {
            if (arr[j] > element) {
                arr[j + 1] = arr[j];
            } else {
                // arr[j] <= element
                break;
            }
        }
        arr[j + 1] = element;
    }
}

// Example usage:
let arr = [4, 5, -1, 2, -8, 3];
insertionSort(arr);
console.log(arr)
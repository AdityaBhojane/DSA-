// square and sort

// brut force approach

// function squareSort(arr){
//     let n = arr.length
//     result = Array()
//     for (let i = 0; i < n; i++) {
//         result.push(arr[i]**2)
//     }
//     result.sort((a,b)=> a-b)
//     console.log(result)
// }

// squareSort([-4,-3,-1,0,2,4,6])


/****************************************************************************** */

// Two Pointers
function squareSort(arr){
    let n = arr.length
    result = Array()
    let left = 0;
    let right = n-1;
    // why this for loop ? we have to 
    // put elm in new array increasing order
    // this loop start for higher to lower idx (a) 
    for (let i = n-1; i >= 0; i--) {
        if(arr[left]**2 > arr[right]**2){
            result[i] = arr[left]**2
            left ++
        }else{
            result[i] = arr[right]**2
            right--
        }
    }
    console.log(result)
}
// squareSort([-4,-3,-1,0,2,4,6])
// [0, 1, 4, 9, 16, 16, 36]
 

/********************************************************************************** */

// save TC 
// Leet-code
var sortedSquares = function(arr) {
    let newArr = [];
    let n = arr.length;
    let i = 0;
    let j = n - 1;
    let k = n - 1;
    while(i<=j){
        if(arr[i]**2 > arr[j]**2){
            newArr[k] = arr[i]**2
            i++;
        }else{
            newArr[k] = arr[j]**2
            j--;
        }
        k--;
    }
    return newArr
};

/****************************************************************************** */


// Experimental solution

// function test(arr){
//     let n = arr.length
//     let i = 0
//     let j = n-1
//     while(i<j){
//         if(arr[i]**2 > arr[j]**2){
//             let temp = arr[j]
//             arr[j] = arr[i]**2
//             arr[i] = temp
//             j--
//         }else{
//             arr[j] = arr[j]**2
//             j--
//         }
//     }
//     console.log(arr)
// }

// test([-5,-3,-2,-1])
// not work







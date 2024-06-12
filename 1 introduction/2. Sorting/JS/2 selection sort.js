// selection sort - assume index 0 is a sorted region and remaining is unsorted
// now we have to find minimum element index by compare with the biggest element to unsorted 
// region then swap that elements 

// working - finding smallest element and put it on start then again find and put it at 2nd index like so

function selectionSort(arr){
    let n = arr.length
    for (let i = 0; i < n; i++) {
        let minIdx = findMin(arr,i)
        if(minIdx !== i){
            let temp = arr[i]
            arr[i] = arr[minIdx]
            arr[minIdx] = temp

        }
    }
}

function findMin(arr,i){
    minIdx = i
    for (let j = i+1; j < arr.length; j++) {
        if(arr[j] < arr[minIdx]){
            minIdx = j
        }
    }
    return minIdx
}
let arr = [5,1,4,2,3]
selectionSort(arr)
console.log(arr)
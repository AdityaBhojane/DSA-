// Bubble Sort - using to pointers we can put then at start and compare 
// biggest element should swap otherwise increase index 

// working - its works like a water bubble big bubble comes at the surface very fast and small bubble
// slowly comes means we can consider as its at bottom


function bubbleSort(arr){
    let n = arr.length
    for (let i = 0; i < n; i++) {
        let k = 0
        let j = k+1
        // why we need this debug
        // let isSwaped = false;
        while(j<n){
            if(arr[k] > arr[j]) {
                let temp = arr[k]
                arr[k] = arr[j]
                arr[j] = temp
                isSwaped = true
            }
            j++
            k++
        }
        // if(!isSwaped){
        //     return arr 
        // }
    }
    return arr
}

console.log(bubbleSort([2,1,4,3,7,6,5]))
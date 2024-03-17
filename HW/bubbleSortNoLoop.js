function bubbleSort(arr){
    let n = arr.length 
    let i = 0;
    return function outerLoop(){
        let j = 0;
        if(i<n-1){
             function innerLoop(){
                // n-i-1 means its should be next to i index  
                if(j < n-i-1){
                    if (arr[j] > arr[j + 1]) {
                        // Swap them if they are in the wrong order
                        const temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
                    j++
                    innerLoop()
                }
            }
            i++
            innerLoop()
        }
        return arr
    } 
}

let result = bubbleSort([64, 34, 25, 12, 22, 11, 90])()
console.log(result)
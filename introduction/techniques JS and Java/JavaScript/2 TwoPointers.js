// two pointer - for reverse array 

function Reverse(arr){
    let n = arr.length
    let i = 0
    let j = n - 1

    while(i<j){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i++
        j--
    }
    console.log(arr)
}

Reverse(['i','P','h','o','n','e'])

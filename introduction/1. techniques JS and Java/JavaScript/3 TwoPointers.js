function SumsUP(arr,target){
    let n = arr.length
    let i = 0
    let j = n-1
    while(i<j){
        if(arr[i] + arr[j] == target){
            return[i+1 ,j+1]
        }else if(arr[i] + arr[j] > target){
            j--
        }else{
            i++
        }
    }
}

let result = SumsUP([1,3,4,7,11,16,22],15)
console.log(result)
// [3,5]
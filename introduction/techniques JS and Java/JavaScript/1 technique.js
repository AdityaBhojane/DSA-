// to sum problem 
// in given array find a pain which sum up to the target value

function toSum(arr,target){
    let n = arr.length 
    // outer loop 
    for(let i = 0; i<=n-2; i++){
        // inner loop
        for(let j = i+1; j<n; j++){
            if( arr[i] + arr[j] == target ){
                console.log(i,j)
            }
        }
    }
}

toSum([2,3,7,11,15],9)
//output - index 0 and 2
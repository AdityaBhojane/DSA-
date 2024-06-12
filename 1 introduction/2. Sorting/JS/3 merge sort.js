function merge(left, right) {
    let i = 0, j = 0, k = 0;
    const l = left.length;
    const r = right.length;

    const result = [];

    while (i < l && j < r) {
        if (left[i] <= right[j]) {
            result[k] = left[i];
            k++;
            i++;
        } else {
            result[k] = right[j];
            k++;
            j++;
        }
    }

    while (j < r) {
        result[k] = right[j];
        k++;
        j++;
    }

    while (i < l) {
        result[k] = left[i];
        k++;
        i++;
    }

return result;
}

function mergeSortHelper(arr, start, end) {
    if (start === end) {
        return [arr[start]];
    }
    const mid = Math.floor((start + end) / 2);
    const left = mergeSortHelper(arr, start, mid);
    const right = mergeSortHelper(arr, mid + 1, end);
    return merge(left, right);
}

function mergeSort(array) {
    return mergeSortHelper(array, 0, array.length - 1);
}

// Example usage:
const arr = [6,1,5,2,4,3];
const sortedArray = mergeSort(arr);
console.log(sortedArray);

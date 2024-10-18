function merge(arr1, arr2) {
    let sortedArr = [];

    let ptr1 = 0;
    let ptr2 = 0;

    while (ptr1 < arr1.length && ptr2 < arr2.length) {
        if (arr1[ptr1] < arr2[ptr2]) {
            sortedArr.push(arr1[ptr1]);
            ptr1++;
        } else {
            sortedArr.push(arr2[ptr2]);
            ptr2++;
        }
    }

    while (ptr1 < arr1.length) {
        sortedArr.push(arr1[ptr1]);
        ptr1++;
    }

    while (ptr2 < arr2.length) {
        sortedArr.push(arr2[ptr2]);
        ptr2++;
    }

    return sortedArr;
}

function mergeSort(arr) {

    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const firstArr = arr.slice(0, mid);
    const secondArr = arr.slice(mid);

    const sortedFirst = mergeSort(firstArr);
    const sortedSecond = mergeSort(secondArr);

    return merge(sortedFirst, sortedSecond);

}

module.exports = { merge, mergeSort };
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(st1,st2) {
    console.log(st1,st2);
    const s= mergeSort([...st1])
    const t= mergeSort([...st2])
    console.log(s);
    console.log(t);
    let flag=0
    
    if (s.length !== t.length) {
        return false;
    }

    for(let i=0;i<s.length;i++){
        
            if(s[i]!==t[i]){
                flag=1
                break;
            }
        }
    

    if (flag==0) {
       return true
    } else {
        return false
    }
    
};

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}




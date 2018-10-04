---
title: Merge Sort
---
## Merge Sort

Merge Sort is a <a href='https://guide.freecodecamp.org/algorithms/divide-and-conquer-algorithms' target='_blank' rel='nofollow'>Divide and Conquer</a> algorithm. It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves. The major portion of the algorithm is given two sorted arrays, we have to merge them into a single sorted array. There is something known as the <a href='http://www.geeksforgeeks.org/merge-two-sorted-arrays/' target='_blank' rel='nofollow'>Two Finger Algorithm</a> that helps us merge two sorted arrays together. Using this subroutine and calling the merge sort function on the array halves recursively will give us the final sorted array we are looking for.

Since this is a recursion based algorithm, we have a recurrence relation for it. A recurrence relation is simply a way of representing a problem in terms of its subproblems. 

``` T(n) = 2 * T(n / 2) + O(n) ```

Putting it in plain english, we break down the subproblem into two parts at every step and we have some linear amount of work that we have to do for merging the two sorted halves together at each step. 

```
T(n) = 2T(n/2) + n
     = 2(2T(n/4) + n/2) + n
     = 4T(n/4) + n + n
     = 4(2T(n/8) + n/4) + n + n
     = 8T(n/8) + n + n + n
     = nT(n/n) + n + ... + n + n + n
     = n + n + ... + n + n + n
```
     
Counting the number of repetitions of n in the sum at the end, we see that there are lg n + 1 of them.  Thus the running time is n(lg n + 1) = n lg n + n. We observe that n lg n + n < n lg n + n lg n = 2n lg n for n>0, so the running time is O(n lg n).     

```Algorithm
MergeSort(arr[], left,  right):
If right > l:
     1. Find the middle point to divide the array into two halves:
             mid = (left+right)/2
     2. Call mergeSort for first half:
             Call mergeSort(arr, left, mid)
     3. Call mergeSort for second half:
             Call mergeSort(arr, mid+1, right)
     4. Merge the two halves sorted in step 2 and 3:
             Call merge(arr, left, mid, right)
 ```

![Merge Sort Algorithm](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Merge_sort_algorithm_diagram.svg/300px-Merge_sort_algorithm_diagram.svg.png)

### Properties:
* Space Complexity: O(n)
* Time Complexity: O(n*log(n)). The time complexity for the Merge Sort might not be obvious from the first glance. The log(n) factor that comes in is because of the recurrence relation we have mentioned before. 
* Sorting In Place: No in a typical implementation
* Stable: Yes
* Parallelizable :yes (Several parallel variants are discussed in the third edition of Cormen, Leiserson, Rivest, and Stein's Introduction to Algorithms.)

### Visualization:
* <a href='https://www.cs.usfca.edu/~galles/visualization/ComparisonSort.html'>USFCA</a>
* <a href='https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/'>HackerEarth</a>


### Relavant videos on freeCodeCamp YouTube channel
* <a href='https://youtu.be/TzeBrDU-JaY'>Merge Sort algorithm - MyCodeSchool</a>

### Other Resources:
* <a href='https://en.wikipedia.org/wiki/Merge_sort' target='_blank' rel='nofollow'>Wikipedia</a>
* <a href='www.geeksforgeeks.org/merge-sort' target='_blank' rel='nofollow'>GeeksForGeeks</a>
* <a href='https://youtu.be/sWtYJv_YXbo' target='_blank' rel='nofollow'>Merge Sort - CS50</a>

### Implementaion in JS
```js
const list = [23, 4, 42, 15, 16, 8, 3]

const mergeSort = (list) =>{
  if(list.length <= 1) return list;
  const middle = list.length / 2 ;
  const left = list.slice(0, middle);
  const right = list.slice(middle, list.length);
  return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
  var result = [];
  while(left.length || right.length) {
    if(left.length && right.length) {
      if(left[0] < right[0]) {
        result.push(left.shift())
      } else {
        result.push(right.shift())
      }
    } else if(left.length) {
        result.push(left.shift())
      } else {
        result.push(right.shift())
      }
    }
  return result;
}

console.log(mergeSort(list)) // [ 3, 4, 8, 15, 16, 23, 42 ]
```

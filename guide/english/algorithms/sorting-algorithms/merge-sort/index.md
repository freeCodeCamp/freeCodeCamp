---
title: Merge Sort
---
## Merge Sort

Merge Sort is a <a href='https://guide.freecodecamp.org/algorithms/divide-and-conquer-algorithms' target='_blank' rel='nofollow'>Divide and Conquer</a> algorithm. It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves. The major portion of the algorithm is given two sorted arrays, we have to merge them into a single sorted array. There is something known as the <a href='http://www.geeksforgeeks.org/merge-two-sorted-arrays/' target='_blank' rel='nofollow'>Two Finger Algorithm</a> that helps us merge two sorted arrays together. Using this subroutine and calling the merge sort function on the array halves recursively will give us the final sorted array we are looking for.

Since this is a recursion based algorithm, we have a recurrence relation for it. A recurrence relation is simply a way of representing a problem in terms of its subproblems. 

```
T(n) = 2 * T(n / 2) + O(n)
```

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

```
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

### Implementation in C
```C
#include<stdlib.h> 
#include<stdio.h>
void merge(int arr[], int l, int m, int r) 
{ 
    int i, j, k; 
    int n1 = m - l + 1; 
    int n2 =  r - m; 
  
    
    int L[n1], R[n2]; 
  
    for (i = 0; i < n1; i++) 
        L[i] = arr[l + i]; 
    for (j = 0; j < n2; j++) 
        R[j] = arr[m + 1+ j];
    i = 0; 
    j = 0; 
    k = l; 
    while (i < n1 && j < n2) 
    { 
        if (L[i] <= R[j]) 
        { 
            arr[k] = L[i]; 
            i++; 
        } 
        else
        { 
            arr[k] = R[j]; 
            j++; 
        } 
        k++; 
    } 
  
    
    while (i < n1) 
    { 
        arr[k] = L[i]; 
        i++; 
        k++; 
    } 
  
    while (j < n2) 
    { 
        arr[k] = R[j]; 
        j++; 
        k++; 
    } 
} 
  
void mergeSort(int arr[], int l, int r) 
{ 
    if (l < r) 
    {  
        int m = l+(r-l)/2; 
  
        
        mergeSort(arr, l, m); 
        mergeSort(arr, m+1, r); 
  
        merge(arr, l, m, r); 
    } 
}
void printArray(int A[], int size) 
{ 
    int i; 
    for (i=0; i < size; i++) 
        printf("%d ", A[i]); 
    printf("\n"); 
} 
int main() 
{ 
    int arr[] = {12, 11, 13, 5, 6, 7}; 
    int arr_size = sizeof(arr)/sizeof(arr[0]); 
  
    printf("Given array is \n"); 
    printArray(arr, arr_size); 
  
    mergeSort(arr, 0, arr_size - 1); 
  
    printf("\nSorted array is \n"); 
    printArray(arr, arr_size); 
    return 0; 

```
### Implementation in C++
 
We accept the array size and the array entries from the user as command line arguments and sort the array and output it.

```cpp
#include <bits/stdc++.h>
using namespace std;
// example of merge sort in C++
// merge function take two intervals
// one from start to mid
// second from mid+1, to end
// and merge them in sorted order

void merge(int *Arr, int start, int mid, int end) {
	// create a temp array
	int temp[end - start + 1];

	// crawlers for both intervals and for temp
	int i = start, j = mid+1, k = 0;

	// traverse both arrays and in each iteration add smaller of both elements in temp 
	while(i <= mid && j <= end) {
		if(Arr[i] <= Arr[j]) {
			temp[k] = Arr[i];
			k += 1; i += 1;
		}
		else {
			temp[k] = Arr[j];
			k += 1; j += 1;
		}
	}

	// add elements left in the first interval 
	while(i <= mid) {
		temp[k] = Arr[i];
		k += 1; i += 1;
	}

	// add elements left in the second interval 
	while(j <= end) {
		temp[k] = Arr[j];
		k += 1; j += 1;
	}

	// copy temp to original interval
	for(i = start; i <= end; i += 1) {
		Arr[i] = temp[i - start];
	}
}

// Arr is an array of integer type
// start and end are the starting and ending index of current interval of Arr

void mergeSort(int *Arr, int start, int end) {

	if(start < end) {
		int mid = (start + end) / 2;
		mergeSort(Arr, start, mid);
		mergeSort(Arr, mid+1, end);
		merge(Arr, start, mid, end);
	}
}
void printArray(int *Arr,int l){

	for (int j = 0; j < l; ++j)
	{
		cout << Arr[j] << "\t";
	}
	cout << endl;

}
int main(int argc, char const *argv[])
{
	int l = atoi(argv[1]);
	int *Arr = new int[l];

	for (int i = 0; i < l; ++i)
	{
		Arr[i] = atoi(argv[i+2]);           //argv[0] = ./a.out  argv[1] = length  and the rest are array entries
	}
	mergeSort(Arr,0,l-1);
	cout << endl;

	printArray(Arr,l);
	delete[] Arr;
	
	return 0;
}

```

### Implementation in Python

```python
temp = None
def merge(arr, left, right):
    global temp, inversions
    mid = (left + right) // 2
    for i in range(left, right + 1):
        temp[i] = arr[i]
    
    k, L, R = left, left, mid + 1
    while L <= mid and R <= right:
        if temp[L] <= temp[R]:
            arr[k] = temp[L]
            L += 1
        else:
            arr[k] = temp[R]
            R += 1
        k += 1
    
    while L <= mid:
        arr[k] = temp[L]
        L += 1
        k += 1
        
    while R <= right:
        arr[k] = temp[R]
        R += 1
        k += 1    
        
def merge_sort(arr, left, right):
    if left >= right:
        return
    
    mid = (left + right) // 2
    merge_sort(arr, left, mid)
    merge_sort(arr, mid + 1, right)
    merge(arr, left, right)

arr = [1,6,3,1,8,4,2,9,3]
temp = [None for _ in range(len(arr))]
merge_sort(arr, 0, len(arr) - 1)
print(arr, inversions)
```

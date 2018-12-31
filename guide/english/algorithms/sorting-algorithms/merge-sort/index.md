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
     
Counting the number of repetitions of n in the sum at the end, we see that there are lg n + 1 of them.  Thus the running time is n(lg n + 1) = n lg n + n. We observe that n lg n + n < n lg n + n lg n = 2n lg n for n>0, so the running time is O(n lg n). Another simple way to remember the time complexity O(n lg n) of merge sort is that it takes roughly log<sub>2</sub><sup>n</sup> steps to split an array of size n to multiple arrays of size one. After each split, the algorithm have to merge 2 sorted arrays into one which can take n steps in total. As a result, the time complexity for merge sort is O(n lg n).

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
 
Let us consider array A = {2,5,7,8,9,12,13}
and array B = {3,5,6,9,15} and we want array C to be in ascending order as well.

```c++
void mergesort(int A[],int size_a,int B[],int size_b,int C[])
{
     int token_a,token_b,token_c;
     for(token_a=0, token_b=0, token_c=0; token_a<size_a && token_b<size_b; )
     {
          if(A[token_a]<=B[token_b])
               C[token_c++]=A[token_a++];
          else
               C[token_c++]=B[token_b++];
      }
      
      if(token_a<size_a)
      {
          while(token_a<size_a)
               C[token_c++]=A[token_a++];
      }
      else
      {
          while(token_b<size_b)
               C[token_c++]=B[token_b++];
      }

}
```

### Implementation in Python

```python
def merge(left,right,compare):
	result = [] 
	i,j = 0,0
	while (i < len(left) and j < len(right)):
		if compare(left[i],right[j]):
			result.append(left[i])
			i += 1
		else:
			result.append(right[j])
			j += 1
	while (i < len(left)):
		result.append(left[i])
		i += 1
	while (j < len(right)):
		result.append(right[j])
		j += 1
	return result

def merge_sort(arr, compare = lambda x, y: x < y):
     #Used lambda function to sort array in both(increasing and decresing) order.
     #By default it sorts array in increasing order
	if len(arr) < 2:
		return arr[:]
	else:
		middle = len(arr) // 2
		left = merge_sort(arr[:middle], compare)
		right = merge_sort(arr[middle:], compare)
		return merge(left, right, compare) 

arr = [2,1,4,5,3]
print(merge_sort(arr))
```

### Implementation in Java
```java
public class mergesort {

	public static int[] mergesort(int[] arr,int lo,int hi) {
		
		if(lo==hi) {
			int[] ba=new int[1];
			ba[0]=arr[lo];
			return ba;
		}
		
		int mid=(lo+hi)/2;
		int arr1[]=mergesort(arr,lo,mid);
		int arr2[]=mergesort(arr,mid+1,hi);
		return merge(arr1,arr2);
	}
	
	public static int[] merge(int[] arr1,int[] arr2) {
		int i=0,j=0,k=0;
		int n=arr1.length;
		int m=arr2.length;
		int[] arr3=new int[m+n];
		while(i<n && j<m) {
			if(arr1[i]<arr2[j]) {
				arr3[k]=arr1[i];
				i++;
			}
			else {
				arr3[k]=arr2[j];
				j++;
			}
			k++;
		}
		
		while(i<n) {
			arr3[k]=arr1[i];
			i++;
			k++;
		}
		
		while(j<m) {
			arr3[k]=arr2[j];
			j++;
			k++;
		}
		
		return arr3;
		
	}
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int arr[]= {2,9,8,3,6,4,10,7};
		int[] so=mergesort(arr,0,arr.length-1);
		for(int i=0;i<arr.length;i++)
			System.out.print(so[i]+" ");
	}

}

```

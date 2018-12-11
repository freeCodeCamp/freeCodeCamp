---
title: Selection Sort
---

## Selection Sort

Selection Sort is one of the most simple sorting algorithms. It works in the following way,

1. Find the smallest element. Swap it with the first element.
2. Find the second smallest element. Swap it with the second element.
3. Find the third smallest element. Swap it with the third element.
4. Repeat finding the next smallest element and swapping it into the corresponding correct position till the array is sorted.

As you can guess, this algorithm is called Selection Sort because it repeatedly selects the next smallest element and swaps it into its place.

But, how would you write the code for finding the index of the second smallest value in an array? 

* An easy way is to notice that the smallest value has already been swapped into index 0, so the problem reduces to finding the smallest element in the array starting at index 1.


### Implementation in C/C++

```C
for(int i = 0; i < n-1; i++)
{
	int min_index = i;
	
	
	for(int j = i +1; j < n; j++)
	{
		if(a[j] < a[min_index])
		{
			
			min_index = j;
		}
	}
	
	swap(&a[i], &a[min_index]);
}
```

### Implementation in Javascript

``` Javascript
function selection_sort(A) {
    var len = array_length(A);
    for (var i = 0; i < len - 1; i = i + 1) {
        var j_min = i;
        for (var j = i + 1; j < len; j = j + 1) {
            if (A[j] < A[j_min]) {
                j_min = j;
            } else {}
        }
        if (j_min !== i) {
            swap(A, i, j_min);
        } else {}
    }
}

function swap(A, x, y) {
    var temp = A[x];
    A[x] = A[y];
    A[y] = temp;
}
```

### Implementation in Python
```python
def seletion_sort(arr):
         if not arr:
         return arr
    for i in range(len(arr)):
         min_i = i
         for j in range(i + 1, len(arr)):
              if arr[j] < arr[min_i]:
                  min_i = j
         arr[i], arr[min_i] = arr[min_i], arr[i]
```
### Implementation in Java
```java
public void selectionsort(int array[])
{
    int n = array.length;            //method to find length of array 
    for (int i = 0; i < n-1; i++)
    {
        int index = i;
        int min = array[i];          // taking the min element as ith element of array
        for (int j = i+1; j < n; j++)
        {
            if (array[j] < array[index])
            {
                index = j;
                min = array[j];
            }
        }
        int t = array[index];         //Interchange the places of the elements
        array[index] = array[i];
        array[i] = t;
    }
}
```
    

### Implementation in MATLAB
```MATLAB
function [sorted] = selectionSort(unsorted)
    len = length(unsorted);
    for i = 1:1:len
        minInd = i;
        for j = i+1:1:len
           if unsorted(j) < unsorted(minInd) 
               minInd = j;
           end
        end
        unsorted([i minInd]) = unsorted([minInd i]);    
    end
    sorted = unsorted;
end

```

### Properties

* Space Complexity: <b>O(n)</b>
* Time Complexity: <b>O(n<sup>2</sup>)</b>
* Sorting in Place: <b>Yes</b>
* Stable: <b>No</b>

### Visualization

* [USFCA](https://www.cs.usfca.edu/~galles/visualization/ComparisonSort.html)
* [HackerEarth](https://www.hackerearth.com/practice/algorithms/sorting/selection-sort/visualize/)

### References

* [Wikipedia](https://en.wikipedia.org/wiki/Selection_sort)
* [KhanAcademy](https://www.khanacademy.org/computing/computer-science/algorithms#sorting-algorithms)
* [MyCodeSchool](https://www.youtube.com/watch?v=GUDLRan2DWM)

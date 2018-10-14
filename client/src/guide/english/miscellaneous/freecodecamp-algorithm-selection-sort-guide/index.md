---
title: Freecodecamp Algorithm Selection Sort Guide
---
The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from the unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.  
1\. The subarray which is already sorted.  
2\. Remaining subarray which is unsorted.

In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray.

## Example

<a href='http://www.sorting-algorithms.com/selection-sort' target='_blank' rel='nofollow'>Animation of SelectionSort</a>

    arr<a href='https://repl.it/CZa0' target='_blank' rel='nofollow'>] = 64 25 12 22 11

    # Placing the minimum element in arr[0...4] in the beginning
    11 25 12 22 64

    # Placing the minimum element in arr[1...4] in the beginning
    11 12 25 22 64

    # Placing the minimum element in arr[2...4] in the beginning
    11 12 22 25 64

    # Placing the minimum element in arr[3...4] in the beginning
    11 12 22 25 64

#### C++ Implementation

    void selection_sort(int array[], int n)
    {
        // Contains index of minimum element in unsorted subarray
        int min_index;

        // Move boundary of unsorted subarray
    for(int i = 0; i < n-1; i++)
    {
        // Find the minimum element in unsorted subarray
        min_index = i;
        for(int j = i+1; j < n; j++)
        {
            // If present element is less than element at min_index
            // Then change min_index to present index
            if(array[j] < array[min_index])
            {
                min_index = j;
            }
        }

        // Swap the element at min_index with the first element
        int temp;
        temp = array[min_index];
        array[min_index] = array[i];
        array[i] = temp;
    }
    }

:rocket: [Run Code</a> #### Python Implementation  

    def selection_sort(arr):
        for i in range(len(arr)):
            min_x = i
            for j in range(i+1,len(arr)):
                if arr<a href='https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:"' target='_blank' rel='nofollow'>j] < arr[min_x]:
                    min_x = j
            arr[min_x], arr[i] = arr[i], arr[min_x]

    arr = [64, 25, 12, 22, 11]
    selection_sort(arr)
    print(arr) # Prints [11, 12, 22, 25, 64]

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CXwQ' target='_blank' rel='nofollow'>Run Code</a>

#### <a href='https://www.freecodecamp.com/videos/big-o-notation-what-it-is-and-why-you-should-care' target='_blank' rel='nofollow'>Complexity of Algorithm</a>

**Time Complexity:** O(n*n) Due to the two nested loops.
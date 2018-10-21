---
title: Freecodecamp Algorithm Merge Sort Guide
---
Most modern languages have an inbuilt sort() function which automatically sorts an input array or list. Did you ever wonder how the sort function actually works on the inside?. Knowing common sorting algorithms and their implementations is the most important part of a coding interview. In this series of articles, we will look at several important sorting algorithms. How they are implemented, the time and space complexity etc. Our very first post is on Merge Sort.

To learn about Merge Sort, a basic knowledge about <a href='http://programmers.stackexchange.com/questions/25052/in-plain-english-what-is-recursion' target='_blank' rel='nofollow'>Recursion</a> is a pre-requisite. Merge Sort is based on the principle of Divide and Conquer. The whole process of sorting an array of N integers can be summarized into three steps-

*   Divide the array into two halves.
*   Sort the left half and the right half using the same recurring algorithm.
*   Merge the sorted halves.

The biggest advantage of using Merge sort is that the <a href='https://www.youtube.com/watch?v=V42FBiohc6c&list=PL2_aWCzGMAwI9HK8YPVBjElbLbI3ufctn' target='_blank' rel='nofollow'>time complexity</a> is only n*log(n) to sort an entire Array. It is a lot better than n^2 running time of bubble sort or insertion sort.  

Before we write code, let us understand how merge sort works with the help of a diagram.

![Merge Sort](//discourse-user-assets.s3.amazonaws.com/original/2X/4/4712ef1a5d856dbb4af393fcc08a820a38787395.png)

*   Initially we have an array of 6 unsorted integers Arr(5, 8, 3, 9, 1, 2)
*   We split the array into two halves Arr1 = (5, 8, 3) and Arr2 = (9, 1, 2).
*   Again, we divide them into two halves: Arr3 = (5, 8) and Arr4 = (3) and Arr5 = (9, 1) and Arr6 = (2)
*   Again, we divide them into two halves: Arr7 = (5), Arr8 = (8), Arr9 = (9), Arr10 = (1) and Arr6 = (2)
*   We will now compare the elements in these sub arrays in order to merge them.

## Implementation

### C++ Implementation

    void merge(int array[], int left, int mid, int right)
    {
        int i, j, k;

        // Size of left sublist
    int size_left = mid - left + 1;

    // Size of right sublist
    int size_right =  right - mid;

    /* create temp arrays */
    int Left[size_left], Right[size_right];

    /* Copy data to temp arrays L[] and R[] */
    for(i = 0; i < size_left; i++)
    {
        Left[i] = array[left+i];
    }

    for(j = 0; j < size_right; j++)
    {
        Right[j] = array[mid+1+j];
    }

    // Merge the temp arrays back into arr[left..right]
    i = 0; // Initial index of left subarray
    j = 0; // Initial index of right subarray
    k = left; // Initial index of merged subarray

    while (i < size_left && j < size_right)
    {
        if (Left[i] <= Right[j])
        {
            array[k] = Left[i];
            i++;
        }
        else
        {
            array[k] = Right[j];
            j++;
        }
        k++;
    }

    // Copy the remaining elements of Left[]
    while (i < size_left)
    {
        array[k] = Left[i];
        i++;
        k++;
    }

    // Copy the rest elements of R[]
    while (j < size_right)
    {
        array[k] = Right[j];
        j++;
        k++;
    }
    }

    void mergeSort(int array[], int left, int right)
    {
        if(left < right)
        {
            int mid = (left+right)/2;

            // Sort first and second halves
        mergeSort(array, left, mid);
        mergeSort(array, mid+1, right);

        // Finally merge them
        merge(array, left, mid, right);
    }
    }

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CYVc/1' target='_blank' rel='nofollow'>Run Code</a> 

### Javascript Implementation 

Let's write MergeSort in JavaScript:  

    function mergeSort (arr) {
      if (arr.length < 2) return arr;
      var mid = Math.floor(arr.length /2);
      var subLeft = mergeSort(arr.slice(0,mid));
      var subRight = mergeSort(arr.slice(mid));
      return merge(subLeft, subRight);
    }

First we check the length of the array. If it is 1 then we simply return the array. This would be our base case. Else, we will find out the middle value and divide the array into two halves. We will now sort both of the halves with recursive calls to MergeSort function.  

    function merge (a,b) {
        var result = [];
        while (a.length >0 && b.length >0)
            result.push(a[0] < b[0]? a.shift() : b.shift());
        return result.concat(a.length? a : b);
    }

When we merge the two halfs, we store the result in an auxilliary array. We will compare the starting element of left array to the starting element of right array. Whichever is lesser will be pushed into the results array and we will remove it from there respective arrays using [shift() operator</a>. If we still end up with values in either of left or right array, we would simply concatenate it in the end of the result. Here is the sorted result:  

    var test = [5,6,7,3,1,3,15];
    console.log(mergeSort(test));

    >> [1, 3, 3, 5, 6, 7, 15]

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CYVd' target='_blank' rel='nofollow'>Run Code</a>

If you still have problem in understanding MergeSort, a <a href='https://www.youtube.com/watch?v=TzeBrDU-JaY' target='_blank' rel='nofollow'>video explanation</a> will make it even more clear.

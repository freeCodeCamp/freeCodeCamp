---
title: Freecodecamp Algorithm Insertion Sort Guide
---
Insertion sort is a <a href='https://en.wikipedia.org/wiki/Comparison_sort' target='_blank' rel='nofollow'>_comparison_ based sorting</a>. A sorting algorithm is comparison based, if it uses comparison operators (such as `less than` and `greated than`) to find the order between two numbers.

In this sorting technique, we always maintain a sorted sublist in lower position of list and then we take one element from the rest of list and insert it at it's correct place. We does so untill all of the elements are inserted into sublist. For example, while playing cards we sort cards in our hand. Starting from left and moving to right, we keep on inserting the card at it's right place till end.

## Example

![Insertion Sort](//discourse-user-assets.s3.amazonaws.com/original/2X/2/289cddf207e54981a05b56d9c267d078ed827c8b.png)

In the above example, the `grey shaded` sublist is always sorted. Please note that in the beginning, sublist contains ony one element, and _trivially_ sorted. Then at each step we are inserting the leftmost element of `white shaded` sublist at it's correct position.

Hence, we have sorted the complete list in this way.

## Algorithm

    Loop for i=0 to N-1:
    * Pick element array<a href='https://repl.it/CWZq' target='_blank' rel='nofollow'>i] and insert it into sorted sublist array[0...i-1]

## Complexity

    Space complexity: O(1)      // Auxillary/temporary space is used.

    Time complexity: O(n*n)     // Two nested for loops are used.

## C++ Implementation

    // Function to sort an array using insertion sort
    void insertionSort(int arr[], int n)
    {
       int i, key, j;
       for (i = 1; i < n; i++)
       {
           key = arr[i];
           j = i-1;

           /* Move elements of arr[0..i-1], that are greater than key,
          to one position ahead of their current position */
       while (j >= 0 && arr[j] > key)
       {
           arr[j+1] = arr[j];
           j = j-1;
       }
       arr[j+1] = key; // place element key at it's correct place
       }
    }

    int main()
    {
        // array to be sorted
        int arr[5] = {12, 11, 13, 5, 6};

        // call the insertion sort
    insertionSort(arr, 5);

    // prints sorted array i.e. 5 6 11 12 13
    for(int i=0; i<5; i++)
        std::cout << arr[i] << " ";
    return 0;
    }

:rocket: [Run Code</a> ## Python Implementation  

    # Function to perform insertion sort
    def insertionSort(arr):
        # Traverse through array
        for i in range(1, len(arr)):
            key = arr<a href='https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:"' target='_blank' rel='nofollow'>i]
            # Move elements of arr[0..i-1], that are greater than key,
            # to one position ahead of their current position
            j = i-1
            while j>=0 and key < arr[j] :
                    arr[j+1] = arr[j]
                    j -= 1
            arr[j+1] = key # place element key at it's correct place

    # array to be sorted
    arr = [12, 11, 13, 5, 6]
    # call the insertion sort
    insertionSort(arr)
    # prints sorted array i.e. 5 6 11 12 13
    for i in range(len(arr)):
        print(arr[i],end = ' ')

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CWZi' target='_blank' rel='nofollow'>Run Code</a>

## Advantages

1.  Efficient for small set of data and data set that are almost sorted.
2.  Simply implemented.
3.  Mostly better than bubble sort and selection sort & generally used with merge sort.

## Disadvantages

1.  It's less efficient on large set of data than merge sort, heap sort and quick sort.
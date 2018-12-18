---
title: C++ Arrays
---

## What is an Array?  
An array is a series of elements of the same data type which are stored in contiguous memory locations and can be referenced as a whole or individually.  

Declaration:
dataType arrayName[arraySize];

For example, an array containing 5 integer values called numbers is declared like so:  
```C++
int numbers [5];
```

Initializiation:  
```C++
//Initialization with values:
int numbers [5] = {1, 2, 3, 4, 5};
//When initializing an array with values, the first value will be stored as the first element, the second value will be stored as the second element, ect... so the first element in this array is the value 1, and the third element is the value 3.

//Initialization with no values:
int numbers [5] = {};
//In this case the elements in the array are of indeterminate value

//Initialization with fewer values than elements:
int numbers [5] = {6};
//Initializing an array with fewer values than there are elements will set the trailing elements to 0.
//int numbers [5] = {6} is equivalent to int numbers [5] = {6, 0, 0, 0, 0};

//Initialization with declaration:
int numbers [] = {1, 2, 3, 4, 5};
//Note that here the number of values defines the size of the array.
//In the examples above, the size was fixed at compile time
```
## Types Of Arrays
There are two types of arrays based on way the array is declared.

**1**. Static array:
Those arrays whose size is defined before compile time like in the examples above, are called static arrays. In these arrays we can't change their size once they are declared.

**2**. Dynamic array:
Dynamic arrays are those arrays, whose size is not known at compile time and we can define their size at run time. These arrays are created by using **new** keyword and when done with that array we can delete that array by using the **delete** keyword. Specifically, the use of the `delete[]` syntax.

### Access:  
Elements of an array are accessed using their index. The index of the first element in the array is zero and the second element's index is 1 and so on. You can think of the index of an element as the unit "distance" from the beginning of the array, that is the first element is 0 units from the start.  
Examples using the number array from above:  
```C++
int x = numbers[0]; // x is assigned 1. index 0 is the first position
numbers[2] = 55; // Sets the third position (index 2) to the new value 55
//numbers[] is now: {1, 2, 55, 4, 5}
```

How to insert and print array elements:
```C++
int vnum[5] = {1, 2, 3, 4, 5}

// change 4th element to 9
vnum[3] = 9;

// take input from the user and insert in third element
cin >> vnum[2];

// take input from the user and insert in (i+1)th element
cin >> vnum[i];

// print first element of the array
cout << vnum[0];

// print (i)th element of the array
cout >> vnum[i-1];
```

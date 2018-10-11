---
title: C++ Arrays
---

## What are Arrays?  
An array is a series of elements of the same data type which are stored in contiguous memory locations and can be referenced individually.  

For example, a array containing 5 integer values called numbers is declared like so:  
```C++
int numbers [5];
```

Initializiation:  
```C++
//Initialization with entries:
int numbers [5] = {1, 2, 3, 4, 5};

//Initialization with no values:
int numbers [5] = {};

//Initialization with declaration:
int numbers [] = {1, 2, 3, 4, 5};
//Note that here the number of values defines the size of the array.
//In the examples above, the size was fixed beforehand
```

**Note** that arrays in C++ are not permutable in size, which means that once you've declared a array with size 5 it cant be enlarged or made smaller. In case you really need a bigger array with the same entries, you would have to copy all entries to a new array of bigger size.  

### Access:  
Elements from an array can be accessed via reference of theire position in the array. (Start counting from 0).  
Example:  
```C++
x = numbers[0]; // = 1. [0] == first position
numbers[2] = 55; // Sets the third position (3) to the new number 55
//numbers[] is now: {1, 2, 55, 4, 5}
```

---
title: C++ Arrays
---

## What are Arrays?  
An array is a series of elements of the same data type which are stored in contiguous memory locations and can be referenced individually.  

For example, an array containing 5 integer values called numbers is declared like so:  
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
## Types Of Arrays
There are two types of array based on way, we declare it.

**1**. Static array:
Those arrays whose size is defined before compile time like in the examples above, are called static arrays. In these arrays we can't change their size, once they are declared.

```C++
//The number of elements must be specified at compile time.
int fixed[5] = {1, 2, 3, 4, 5};
```

**2**. Dynamic array:
Dynamic arrays are those arrays, whose size is not known at compile time and we can define their size at run time. These arrays are created by using **new** keyword and when done with that array we can delete that array by using the **delete** keyword.

```C++
int size;
std::cout << "Enter array size: ";
std::cin >> size;
//The number of elements can be specified at runtime.
int *dynamic = new int[size];

//Dynamic arrays must be deleted when they are no longer required.
delete[] dynamic;
```

### Access:  
Elements from an array can be accessed via reference of their position in the array. (Start counting from 0).  
Example:  
```C++
x = numbers[0]; // = 1. [0] == first position
numbers[2] = 55; // Sets the third position (3) to the new number 55
//numbers[] is now: {1, 2, 55, 4, 5}
```

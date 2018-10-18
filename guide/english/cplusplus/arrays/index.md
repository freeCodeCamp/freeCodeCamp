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

**2**. Dynamic array:
Dynamic arrays are those arrays, whose size is not known at compile time and we can define their size at run time. These arrays are created by using **new** keyword and when done with that array we can delete that array by using the **delete** keyword.

### Access:  
Elements from an array can be accessed via reference of their position in the array. (Start counting from 0).  
Example:  
```C++
x = numbers[0]; // = 1. [0] == first position
numbers[2] = 55; // Sets the third position (3) to the new number 55
//numbers[] is now: {1, 2, 55, 4, 5}
```
### Types Of Array Based On Dimensions

There are basically two types of array One-dimensional Array and Multi-Dimensional Array.

<b>One-Dimensional Arrays :</b>

A <b>One-Dimensional Array</b> (or Single Dimension Array) is a type of linear array. Accessing its elements involves a single subscript which can either represent a row or column index.

Syntax : datatype Arrayname[sizeofArray];
In the given example the array can contain 10 elements of any value available to the int type. The array element indices are 0-9 inclusive in this case. For example, the expressions ArrayName[0] and ArrayName[9] are the first and last elements respectively.

<b>Two-Dimensional Arrays :</b>

It contains arrray of more than one-dimension (example - two-dimensional array,third-dimensional array,Four-dimensional array) but most popularly used is two-dimensional array.

Syntax : datatype Arrayname[sizeofArray][sizeofArray];
For example: int a[2][3];
This means that array a has 2 rows and 3 columns, and the array is of integer type. Here we can store 6 elements they will be stored linearly but starting from first row linear then continuing with second row.
The above array will be stored as a11, a12, a13, a21, a22, a23.

### Complexity Of Array Operations 
Accesing an element takes O(1) time while traversal in array takes O(N) time.

### Application Of Arrays 
<ol>
  <li>Arrays are used to Store List of values</li>
  <li>Arrays are used to Perform Matrix Operations</li>
  <li>Arrays are used to implement Search Algorithms</li>
  <li>Arrays are used to implement Sorting Algorithms</li>
  <li>Arrays are used to implement Datastructures</li>
  <li>Arrays are also used to implement CPU Scheduling Algorithms</li>
 </ol>

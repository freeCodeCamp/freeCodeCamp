---
title: Arrays
---

# Arrays

An array is used to store a collection of data of the same type. This can be used as a single variable that holds multiple values, or a collection of variables.

# Rules of Arrays

Arrays start from zero. The first element of an array is 0, the second element is 1, the third element 2, and so on.

Arrays must be of the same data type. You can use any data type in an array (e.g. int, double, float, string, enum)

A new Array must first be declared and initialised before it can be called and accessed.

# Declaring an Array

Use the following format for declaring arrays:
`dataType [] nameOfArray;`

# Initialising an array

Use the following format for initialising an array. This method also declares the array and states how many values are to be stored into the array.

`dataType [] nameOfArray = new nameOfArray[numberOfElements];`

# Assigning values to an array

You can assign a value into an element directly by using the format below:

`nameOfArray[2] = 50;`

The will assign the value of 50 directly into element [2]


You can assign multiple values at once while declaring the array using the format below:

`dataType [] nameOfArray = {5,17,19,92};`

The will assign the value of 5 into element [0], 17 into element [1], 19 into element [2] and 92 into element [3].

You can declare, initilise and assign values in the array all at once by using the format below:

`dataType [] nameOfArray = new nameOfArray[numberOfElements] {value1,value2,value3,value4};`

You can store an array directly into another array by using the format below:

`int [] nameOfArray = new nameOfArray[4] {2,9,56,1280};`
`int [] nameOfSecondArray = nameOfArray;`


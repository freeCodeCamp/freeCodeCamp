---
title: Arrays
---

# Arrays

An array is used to store a collection of data of the same type. This can be used as a single variable that holds multiple values, or a collection of variables.

## Rules of Arrays

Arrays start from zero. That is to say that the first element of an array is indexed as 0, the second element is 1, the third element 2, and so on.

Arrays must be of the same data type. You can use any data type in an array (e.g. int, double, float, string, enum, List, People, etc.)

A new Array must first be declared and initialised before it can be called and accessed.

## Declaring an Array

Use the following format for declaring arrays:
`dataType [] nameOfArray;`

## Initializing an array

Use the following format for initialising an array. This method also declares the array and states how many values are to be stored into the array.

`dataType [] nameOfArray = new nameOfArray[numberOfElements];`

## Assigning values to an array

You can assign a value into an element directly by using the format below:

`nameOfArray[2] = 50;`

Code above will assign the value of 50 directly into element [2]


You can assign multiple values at once while declaring the array using the format below:

`dataType [] nameOfArray = {5, 17, 19, 92};`

The above code will assign the value of 5 into element [0], 17 into element [1], 19 into element [2] and 92 into element [3].

<table>
  
  <tr>
    <th>Position</th>
    <th>Element</th>
  </tr>
  <tr>
    <td>[0]</td>
    <td>5</td> 
  </tr>
  
  <tr>
    <td>[1]</td>
    <td>17</td> 
  </tr>
  
  <tr>
    <td>[2]</td>
    <td>19</td> 
  </tr>
  
  <tr>
    <td>[3]</td>
    <td>92</td> 
  </tr>
  
</table>

You can declare, initilise and assign values in the array all at once by using the format below:

`dataType [] nameOfArray = new dataType[numberOfElements] {value1, value2, value3, value4};`

or simply:

`var nameOfArray = new dataType {value1, value2, value3, value4};`

## Advantages

* Can be easily accessed in a random manner
* Can be easily manipulated

## Disadvantages

* The only disadvantage is that the size of an array is fixed. (Hence, a list can be used in case of a dynamic sizing.)

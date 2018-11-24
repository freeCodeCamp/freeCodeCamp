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

## Jagged Arrays

Jagged arrays contain elements that are arrays itself. Example of declaration and initialization of jagged array:

```csharp
int[][] array = new int[2][];
```

Each element of jagged array can contains array of different length, ex:

```csharp
array[0] = new int[2];
array[1] = new int[4];

array[0][0] = 1;
array[0][1] = 2;
 
array[1][0] = 1;
array[1][1] = 2;
array[1][2] = 3;
array[1][3] = 4;
```
As you see the array contains 2 other arrays which respectively contain 2 and 4 elements. Above code can be written shorter by using different format:

```csharp
int[][] array =
{
    new int[] {1,2},
    new int[] {1,2,3,4}
};
```

It's important to remember that types of subarrays must be the same as type of main array. To access specific element of jagged array you should use `array[x][y]` syntax where x is an index of main array which indicates subarray and y is index of subarray which indicates element within that subarray.

```csharp
Console.Write(array[0][0]); // Displays 1 (first element of first subarray)
Console.Write(array[1][2]); // Displays 3 (third element of second subarray)
Console.Write(array[1][0]); // Displays 1 (first element of second subarray)
```

## Multidimensional array
Arrays can have more than one dimension (every element will be represented by more than one index). Example of declaration and initialization of two dimensional array:

```csharp
string[,] weekDays = new string[2, 3];
```

Having two dimensional array we need to use two indexes to represent the position of element:

```csharp
weekDays[0,0] = "monday";
weekDays[0,1] = "montag";
weekDays[0,2] = "lundi";
weekDays[1,0] = "tuesday";
weekDays[1,1] = "dienstag";
weekDays[1,2] = "mardi";
```

To check number of dimensions we can use Rank property:

```csharp
int[,,,] array = new int[6, 4, 2, 8];
Console.WriteLine(array.Rank); // 4
```

## Advantages

* Can be easily accessed in a random manner
* Can be easily manipulated

## Disadvantages

* The only disadvantage is that the size of an array is fixed. (Hence, a list can be used in case of a dynamic sizing.)

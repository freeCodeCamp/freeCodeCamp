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

Use the following format for initializing an array. This method also declares the array and states how many values are to be stored into the array.

`dataType [] nameOfArray = new nameOfArray[numberOfElements];`

An array can also be initialized at declaration, in which case the number of elements does not need to be supplied because it is already initialzed with the number of values in the list. For example: 

`string[] months = {"January", "February", "March", "April", "May", "June"};`

It is also possible to initialize an array outside of the declaration. The `new` operator must be used when assigning the array to the variable. For example: 

```csharp

int[] evenNum;
evenNum = new int[] {2, 4, 6, 8};
```

## Assigning values to an array

You can assign a value into an element directly by using the format below:

```csharp
nameOfArray[2] = 50;
```

Code above will assign the value of 50 directly into element [2]

Note - Be careful when trying to assign/access a value to/from an array. If an invalid index is used, like `nameOfArray[-1]` you will encounter a run-time error. 

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

You can declare, initialize and assign values in the array all at once by using the format below:

`dataType [] nameOfArray = new dataType[numberOfElements] {value1, value2, value3, value4};`

or simply:

```csharp
int [] nameOfArray = new nameOfArray[4] {2,9,56,1280};
int [] nameOfSecondArray = nameOfArray;
```

## Sorting Values in Arrays

You can sort values in arrays by using the `Array.Sort` method.  `Array.Sort` sorts an array **by reference** so there is no need to assign the array to the output of the `Array.Sort` method.

There are a number of different ways to use `Array.Sort`, but for a vast majority of use cases, the following few ways should do the trick.

#### Sorting Implicitly (Ascending only)

One way to sort an Array is to just call `Array.Sort` and pass in the array to sort.  Keep in mind that only passing in the array this way will only sort an array in ascending order, which is why it is an implicit sort of sorting, as it is assumed that you want to sort this array in ascending order.  Integers are always sorted in numerical order from least to greatest. 

For Example:

```csharp
int [] myIntArray = { 7, 4, 1, 9, 8 };
Array.Sort(myIntArray);
//sorts myIntArray in Ascending order
//produces: { 1, 4, 7, 8, 9 } stored back into myIntArray
```

Strings are sorted going from left to right, with the lowest alphabetical representation from left to right being sent to the beginning and the highest being sent to the end.

For Example:

[Run the following code here at Repl.it](https://repl.it/@heyitsmarcus/SimpleArraySortingImplicit?language=csharp)
```csharp
string [] myStringArray = { "Hi", "Hello", "Konichiwa", "Hola", "Hallo" };
Array.Sort(myStringArray);
Console.WriteLine(String.Join(",", myStringArray));
//sorts myStringArray in Ascending order
//produces { "Hallo", "Hello", "Hi", "Hola", "Konichiwa" } back into myStringArray
```

#### Sorting Explicitly (Ascending/Descending/Any Order You Wish)

One way to sort an array is to **explicitly** set your sorting method within the `Array.Sort` method, which will allow you to sort in any order you choose including preferring certain array items over others in their order.

Using the `myStringArray` from above, you can sort it Ascending **explicitly** by passing in an anonymous method using delegate. 

For example:

[Run the following code here at Repl.it](https://repl.it/@heyitsmarcus/SortArrayExplicitly?language=csharp)
```csharp
string[] myStringArray = { "Hi", "Hello", "Konichiwa", "Hola", "Hallo" };

Array.Sort(myStringArray, delegate (string strPrev, string strNext) {
	//use a return statement here 
    //strPrev represents the previous string in the array (also the starting element)
    //strNext represents the next string in the array up to the very end of the array
    return strPrev.CompareTo(strNext);
});
Console.WriteLine(String.Join(",", myStringArray));
```
You can use this override to sort a vast array of arrays, no pun intended! There are several more overrides for `Array.Sort` but you can get by, in most cases, by an implicit sort or an explicit sort like above.  


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

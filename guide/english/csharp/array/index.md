---
title: Arrays
---

# Arrays

An array is single variable that represents a collection of multiple pieces of data of the same type (e.g. string, int). 
This variable holds those multiple values in separate positions within the array. Those positions are denoted by an address in brackets, like this: `[x]`.

## Rules of Arrays

Positional addresses in an array start at zero. Therefore, the first element of an array is `nameOfArray[0]`, the _second_ element is `nameOfArray[1]`, the third element is `nameOfArray[2]`, and so on.

Values in an array must be of the same data type, but you can create an array of any data type (e.g. int, float, string, enum)

A new array must first be declared and initialised before it can be called and accessed.

## Declaring an Array

Use the following format for declaring an array:
```csharp
dataType[] nameOfArray;
```

## Initializing an array

An array is initialized with its data type and size. Once an array is declared, its size remains fixed.
```csharp
dataType[] nameOfArray = new nameOfArray[numberOfElements];
```
(Note: Because array addresses start with 0, the last position in an array with `numberOfElements = 3` is going to be `nameOfArray[2]`)

Arrays can have multiple dimensions...
```csharp
char[] ticTacToeBoard = new ticTacToeBoard[3, 3]; // creates a new 3 x 3 array
                                                  //    0   1   2
ticTacToeBoard[1, 1] = 'x';                       // 0  x |   | o
ticTacToeBoard[0, 1] = 'o';                       //   ---#---#---
ticTacToeBoard[2, 2] = 'x';                       // 1  o | x | 
ticTacToeBoard[2, 0] = 'o';                       //   ---#---#---
ticTacToeBoard[0, 0] = 'x';                       // 2    |   | x
```
...or even be an array of arrays.
```csharp
int[][] jaggedArray = new jaggedArray int[3][];
jaggedArray[0] = new int[4];
jaggedArray[1] = new int[9];
jaggedArray[2] = new int[3];

jaggedArray[1][5] = 25;  // assigns the value 25 to position 5 of the array in position 1 of jaggedArray
```

## Assigning values to an array

You can access any value in an array directly by using the name of the array followed by the position of the desired value in brackets.
```csharp
nameOfArray[2] = 50;    // Array position 2 is assigned the value 50

x = nameOfArray[2];     // x = 50 (the value in array position 2)
```

You can assign multiple values at once to an array by using curly braces and separating the values with commas. These values will be added in order into the array.
```csharp
int[] arrayOfInts = {5, 17, 19, 92};    // Array position 0 holds value 5, 1 holds value 11,
                                        // 2 holds value 19, and 3 holds value 92
```

You can declare, initilise and assign values in the array all at once by using the following format:
```csharp
dataType[] nameOfArray = new nameOfArray[numberOfElements] {value1,value2,value3,value4};
```
You can store an array directly into another array.
```csharp
int[] firstArray = new firstArray[4] {2, 9, 56, 1280};
int[] secondArray = firstArray; // secondArray = {2, 9, 56, 1280}
```

## Advantages

* Can hold multiple related values, improving readability.
* Can be manipulated with array-specific functions.

## Disadvantages

* The size of an array is fixed, and attempting to access an address not in the array will cause an error. 
  (Lists can be used in case of a dynamic sizing.)

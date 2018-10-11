---
title: Arrays
---

# Array

An Array is used to store a collection of similar data types. 
Arrays always start with the index of 0 and are instantiated to a set number of indexes. 
All the variables in the array must be of the same type, declared at instantiation.

**Syntax:**

```java
dataType[] arrayName;   // preferred way
```
or
```java
dataType arrayName[];  //  works but not preferred way
```

## Code snippets of above syntax:

```java
double[] list; // preferred way
```
or 
```java
double list[]; // works but not preferred way
```

Note: The style `double list[]` is not preferred as it comes from the C/C++ language and was adopted in Java to accommodate C/C++ programmers. Additionally it's more readable: you can read that it's a "double array named list" other than "a double called list that is an array"

## Creating Arrays:

```java
dataType[] arrayName = new dataType[arraySize];
```

## Code snippets of the above syntax:

```java
double[] List = new double[10];
```

## Another way to create an Array:

```java
dataType[] arrayName = {value_0, value_1, ..., value_k};
```

## Code snippets of above syntax:

```java
double[] list = {1, 2, 3, 4};

The code above is equivalent to:
double[] list = new double[4];
*IMPORTANT NOTE: Please note the difference between the types of brackets
that are used to represent arrays in two different ways.
```

## Accessing Arrays:
```java
arrayName[index]; // gives you the value at the specified index
```

## Code snippets of above syntax:
```java
System.out.println(list[1]);
```
Output:
```
2.0
```

## Modifying Arrays:
```java
arrayName[index] = value; 
```

Note: You cannot change the size or type of an array after initialising it.
Note: You can however reset the array like so

```java
arrayName = new dataType[] {value1, value2, value3};
```

## Code snippets of above syntax:
```java
list[1] = 3; // now, if you access the array like above, it will output 3 rather than 2
```

_Example of code:_

```java
int[] a = {4, 5, 6, 7, 8}; // declare array
for (int i = 0; i < a.length; i++){ // loop goes through each index
    System.out.println(a[i]); // prints the array
}
```

Output:
```java
    4
    5
    6
    7
    8
```

### Multi-dimensional Arrays
Two-dimensional arrays (2D arrays) can be thought of as a table with rows and columns
```java
int M = 5;
int N = 5;
double[][] a = new double [M][N]; //M = rows N = columns
for(int i = 0; i < M; i++) {
    for (int j = 0; j < N; j++) {
        //Do something here at index 
    }
}
```
This loop will execute M ^ N times and will build this:

[ 0 | 1 | 2 | 3 | 4 ]  
[ 0 | 1 | 2 | 3 | 4 ]  
[ 0 | 1 | 2 | 3 | 4 ]  
[ 0 | 1 | 2 | 3 | 4 ]  
[ 0 | 1 | 2 | 3 | 4 ]  


### Jagged Arrays
Jagged arrays are multi-dimensional arrays that have a set number of rows but a varying number of columns. Jagged arrays are used to conserve memory use of the array. Here is a code example:


```java
int[][] array = new int[5][]; //initialize a 2D array with 5 rows
array[0] = new int[1]; //creates 1 column for first row
array[1] = new int[2]; //creates 2 columns for second row
array[2] = new int[5]; //creates 5 columns for third row
array[3] = new int[5]; //creates 5 columns for fourth row
array[4] = new int[5]; //creates 5 columns for fifth row
```	

Output: 

[ 0 ]                  
[ 0 | 1 ]              
[ 0 | 1 | 2 | 3 | 4 ]  
[ 0 | 1 | 2 | 3 | 4 ]  
[ 0 | 1 | 2 | 3 | 4 ]  

#### More Information:
* Source: <a href='https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html' target='_blank' rel='nofollow'>Java Arrays</a>

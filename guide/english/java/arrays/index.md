---
title: Arrays
---

# Array

An Array is a collection of values (or objects) of similar data types (primitive and reference, both form of data types are allowed) held in sequential memory addresses.
All the variables in the array must be of the same type, declared at instantiation.
Arrays always start with the index of 0 and are instantiated to a set number of indexes. 

**Syntax:**

```java
dataType[] arrayName;   // preferred way
```
Here, `datatype[]` describes that all the variables stated after it will be instantiated as arrays of the specified datatype. So, if we want to instantiate more arrays of the similar datatype, we just have to add them after the specified `arrayName`(don't forget to separate them through commas only). An example is given below in the next section for reference. 
```java
dataType arrayName[];  //  works but not preferred way
```
Here, `datatype` describes only that the variables stated after it belong to that datatype. Besides, `[]` after the variable name describes that the variable is an array of the specified datatype (not just a value or object of that datatype). So, if we want to instantiate more arrays of the similar datatype, we will add the variables names just after the one already specified, separated by commas and each time we will have to add `[]` after the variable name otherwise the variable will be instantiated as an ordinary value-storing variable (not an array). For better understanding an example is given in the next section.

## Code snippets of above syntax:

```java
double[] list1, list2; // preferred way
```
Above code snippet instantiates 2 arrays of double type named list1 and list2.
```java
double list1[], list2; // works but not preferred way
```
Above code snippet an array of datatype double named list1 and a simple variable of datatype double named list2 (Don't be confused by the name **list2**. Variables names have nothing to do with the type of variable).

Note: The style `double list[]` is not preferred as it comes from the C/C++ language and was adopted in Java to accommodate C/C++ programmers. Additionally it's more readable to use the style `double[] list`: you can easily read that it's a "double array named list" other than "a double called list that is an array."

## Creating Arrays:

```java
dataType[] arrayName = new dataType[arraySize];
```
Here we have declared and initialized the array in one step. We could have also written it in two parts with one step being the declaration of array followed by the initialization of array. By default, all memory locations allocated to the array is initialized to its default values, depending upon the datatype.

## Code snippets of the above syntax:

```java
double[] List = new double[10];
```
 We are creating a array variable named `List` of type double and allocating it 10 memory locations. This double datatype array is initialized to `0.0` by default.

## Another way to declare and initialize an Array:

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

## Declaring array literal

```java
dataType[] arrayName = new dataType[] {value_0, value_1, ..., value_k};
```

## Code snippets of above syntax:

```java
int[] intArray = new int[]{ 1,2,3,4,5,6,7,8,9,10 }; 
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

Note: You cannot change the size or type of an array after initializing it.
Note: You can however reset the array like so

```java
arrayName = new dataType[] {value1, value2, value3};
```

## Size of Arrays:
It's possible to find the number of elements in an array using the `length` attribute. It should be noted here that `length` is an **attribute** of every array, i.e., a variable storing the length of the array. It must not be confused for a **method** of Array since the name is same as the `length()` method corresponding to String classes.
```java
int[] a = {4, 5, 6, 7, 8}; // declare array
System.out.println(a.length); //prints 5
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
Two-dimensional arrays (2D arrays) can be thought of as a table with rows and columns. Though this representation is only a way to visualize the array for better problem-solving. The values are actually stored in sequential memory addresses only.
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
```java
[ 0 | 1 | 2 | 3 | 4 ]  
[ 0 | 1 | 2 | 3 | 4 ]  
[ 0 | 1 | 2 | 3 | 4 ]  
[ 0 | 1 | 2 | 3 | 4 ]  
[ 0 | 1 | 2 | 3 | 4 ]  
```

Similarly a 3D array can also be made. It can be visualized as a cuboid instead of a rectangle(as above), divided into smaller cubes with each cube storing some value. It can be initialized follows:
```java
int a=2, b=3, c=4;
int[][][] a=new int[a][b][c];
```
In a similar manner, one can declare an array of as many dimensions as desired, although visualizing an array of more than 3 dimensions is difficult.

### Jagged Arrays
Jagged arrays are multi-dimensional arrays that have a set number of rows but a varying number of columns. Jagged arrays are used to conserve memory use of the array. Here is an example:

```java
int[][] array = new int[5][]; //initialize a 2D array with 5 rows
array[0] = new int[1]; //creates 1 column for first row
array[1] = new int[2]; //creates 2 columns for second row
array[2] = new int[5]; //creates 5 columns for third row
array[3] = new int[5]; //creates 5 columns for fourth row
array[4] = new int[5]; //creates 5 columns for fifth row
```

Output: 
```java
[ 0 ]                  
[ 0 | 1 ]              
[ 0 | 1 | 2 | 3 | 4 ]  
[ 0 | 1 | 2 | 3 | 4 ]  
[ 0 | 1 | 2 | 3 | 4 ]  
```

**Advantages of Arrays**
- **Code Optimization**: It makes the code optimized, we can retrieve or sort the data efficiently.
+ **Random access**: We can get any data located at an index position.

**Disadvantages of Arrays**
- **Size Limit**: We can store only the fixed size of elements in the array. It doesn't grow its size at runtime. To solve this problem, collection framework is used in Java which grows automatically.

#### More Information:
* Source: [Java Arrays](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html)

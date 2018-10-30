---
title: Arrays
---

# Array

An Array is a collection of values (or objects) of similar datatypes (primitive and reference both form of datatypes are allowed) held in sequencial memory addresses.
An Array is used to store a collection of similar data types. 
Arrays always start with the index of 0 and are instantiated to a set number of indexes. 
All the variables in the array must be of the same type, declared at instantiation.

**Syntax:**

```java
dataType[] arrayName;   // preferred way
```
Here, ```java datatype[] ``` describes that all the variables stated after it will be instantiated as arrays of the specified datatype. So, if we want to instantiate more arrays of the similar datatype, we just have to add them after the specified ```java arrayName```(Don't forget to separate them through commas only). An example is given below in the next section for reference. 
```java
dataType arrayName[];  //  works but not preferred way
```
Here, ```java datatype``` describes only that the variables stated after it belong to that datatype. Besides, ```java []``` after the variable name describes that the variable is an array of the specified datatype (not just a value or object of that datatype). So, if we want to instantiate more arrays of the similar datatype, we will add the variables names just after the one already specified, separated by commas and each time we will have to add ```java []``` after the variable name otherwise the variable will be instantiated as an ordinary value-storing variable (not an array). For better understanding an example is given in the next section.

## Code snippets of above syntax:

```java
double[] list1, list2; // preferred way
```
Above code snippet instantiates 2 arrays of double type names list1 and list2.
```java
double list1[], list2; // works but not preferred way
```
Above code snippet an array of datatype double named list1 and a simple variable of datatype double named list2 (Don't be confused with the name **list2**. Variables names have nothing to do with the type of variable).

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

Note: You cannot change the size or type of an array after initialising it.
Note: You can however reset the array like so

```java
arrayName = new dataType[] {value1, value2, value3};
```

## Size of Arrays:
It's possible to find the number of elements in an array using the "length attribute". It should be noticed here that ```java length``` is an **attribute** of every array i.e. a variable name storing the length of the variable. It must not be confused for a **method** of array since the name is same as the ```java length()``` method corresponding to String classes.
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

[ 0 | 1 | 2 | 3 | 4 ]  
[ 0 | 1 | 2 | 3 | 4 ]  
[ 0 | 1 | 2 | 3 | 4 ]  
[ 0 | 1 | 2 | 3 | 4 ]  
[ 0 | 1 | 2 | 3 | 4 ]  

Similarly a 3D array can also be made. It can be visualised as a cuboid instead of a rectangle(as above), divided into smaller cubes with each cube storing some value. It can be initialised follows:
```java
int a=2, b=3, c=4;
int[][][] a=new int[a][b][c];
```
In a similar manner, one can an array of as many dimensions as he/she wishes to but visualizing an array of more than 3 dimensions is difficult to visualize in a particular way.

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

#Multiplication Of 2-Dimeshional Array
'''java
    //This is the program to Multiply two 2 Dimensional Arrays
//Developer : D.K.A.R.Y.A
//Please report if there are any kind of bug or improvement needed:-)

//Happy Coding  :-)
public class Multiply
{
	public static void main(String[] args) 
	{
		int b[][]={{1,-2,3}};
		int a[][]={{2},{4},{2}};
		int c[][];
		System.out.println("Your First Array is:-");
		for(int i=0;i<a.length;i++)
		{
			for(int j=0;j<a[0].length;j++)
			{
				System.out.print(a[i][j]+"\t");
			}
			System.out.println();
		}
		System.out.println("Your Second Array is:-");
		for(int i=0;i<b.length;i++)
		{
			for(int j=0;j<b[0].length;j++)
			{
				System.out.print(b[i][j]+"\t");
			}
			System.out.println();
		}
		if(a[0].length==b.length)
		{
			c=new int[a.length][b[0].length];
			for(int i=0;i<a.length;i++)
			{
				for(int j=0;j<b[0].length;j++)
				{
					c[i][j]=0;
					for(int k=0;k<a[0].length;k++)
					{
						c[i][j]+=a[i][k]*b[k][j];
					}
				}
			}
			System.out.print("Mulplication of Array is:-\n");
			for(int i=0;i<a.length;i++)
			{
				for(int j=0;j<b[0].length;j++)
				{
					System.out.print(c[i][j]+"\t");
				}
				System.out.println();
			}
		}
		else 
			System.out.print("Mulplication is not Possible\n");
	}	
}
'''


#Output

'''java
Your First Array is:-
2
4
2
Your Second Array is:-
1       -2      3
Mulplication of Array is:-
2       -4      6
4       -8      12
2       -4      6

'''

#### More Information:
* Source: <a href='https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html' target='_blank' rel='nofollow'>Java Arrays</a>

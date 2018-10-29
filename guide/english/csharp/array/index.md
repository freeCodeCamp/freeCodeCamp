perm_identity
C# | Arrays
An array is a group of like-typed variables that are referred to by a common name. And each data item is called an element of the array. The data types of the elements may be any valid data type like char, int, float etc. and the elements are stored in a contiguous location. Length of the array specifies the number of elements present in the array. In C# the allocation of memory for the arrays is done dynamically. And arrays are kind of objects, therefore it is easy to find their size using the predefined functions. The variables in the array are ordered and each has an index beginning from 0. Arrays in C# work differently than they do in C/C++.

Important Points to Remember About Arrays in C#

In C#, all arrays are dynamically allocated.
Since arrays are objects in C#, we can find their length using member length. This is different from C/C++ where we find length using sizeof.
A C# array variable can also be declared like other variables with [] after the data type.
The variables in the array are ordered and each has an index beginning from 0.
C# array is an object of base type System.Array.
Default values of numeric array and reference type elements are set to be respectively zero and null.
A jagged array elements are reference types and are initialized to null.
Array elements can be of any type, including an array type.
Array types are reference types which are derived from the abstract base type Array. These types implement IEnumerable and for it, they use foreach iteration on all arrays in C#.
The array has can contains primitives data types as well as objects of a class depending on the definition of an array. Whenever use primitives data types, the actual values have to be stored in contiguous memory locations. In case of objects of a class, the actual objects are stored in heap segment.

The following figure shows how array stores values sequentially :
C# Arrays

Explanation :
The index is starting from 0, which stores value. we can also store a fixed number of values in an array. Array index is to be increased by 1 in sequence whenever its not reach the array size.



 

Array Declaration

Syntax :

< Data Type > [ ] < Name_Array >
Here,
< Data Type > : It define the element type of the array.
[ ] : It define the size of the array.
< Name_Array > : It is the Name of array.

Example :

int[] x;  // can store int values
string[] s; // can store string values
double[] d; // can store double values
Student[] stud1; // can store instances of Student class which is custom class
Note : Only Declaration of an array doesn’t allocate memory to the array. For that array must be initialized.

Array Initialization

As said earlier, an array is a reference type so the new keyword used to create an instance of the array. We can assign initialize individual array elements, with the help of the index.

Syntax :

type [ ] < Name_Array > = new < datatype > [size];
Here, type specifies the type of data being allocated, size specifies the number of elements in the array, and Name_Array is the name of array variable. And new will allocate memory to an array according to its size.

Examples : To Show Different ways for the Array Declaration and Initialization
Example 1 :

// defining array with size 5. 
// But not assigns values
int[] intArray1 = new int[5]; 
Above statement declares & initializes int type array that can store five int values. The array size is specified in square brackets([]).

Example 2 :

// defining array with size 5 and assigning
// values at the same time
int[] intArray2 = new int[5]{1, 2, 3, 4, 5};
In the above statement is same as, but it assigns values to each index in {}.

Example 3 :

// defining array with 5 elements which 
// indicates the size of an array
int[] intArray3 = {1, 2, 3, 4, 5};
In above statement, the value of the array is directly initialized without taking its size. So, array size will automatically be the number of values which is directly taken.

Initialization of an Array after Declaration

Arrays can be initialized after the declaration. It is not necessary to declare and initialize at the same time using the new keyword. However, Initializing an Array after the declaration, it must be initialized with the new keyword. It can’t be initialized by only assigning values.

Example :

// Declaration of the array
string[] str1, str2;

// Intialization of array
str1 = new string[5]{ “Element 1”, “Element 2”, “Element 3”, “Element 4”, “Element 5” };

str2 = new string[]{ “Element 1”, “Element 2”, “Element 3”, “Element 4”, “Element 5” };

Note : Initialization without giving size is not valid in C#. It will give compile time error.

Example : Wrong Declaration for initializing an array

// compile-time error: must give size of an array
int[] intArray = new int[];

// error : wrong initialization of an array
string[] str1;
str1 = {“Element 1”, “Element 2”, “Element 3”, “Element 4” };

Accessing Array Elements

At the time of initialization, we can assign the value. But, we can also assign the value of array using its index randomly after the declaration and initialization. We can access an array value through indexing, placed index of the element within square brackets with the array name
Example :

//declares & initializes int type array
int[] intArray = new int[5];

// assign the value 10 in array on its index 0
intArray[0] = 10; 

// assign the value 30 in array on its index 2
intArray[2] = 30;

// assign the value 20 in array on its index 1
intArray[1] = 20;

// assign the value 50 in array on its index 4
intArray[4] = 50;

// assign the value 40 in array on its index 3
intArray[3] = 40;

// Accesing array elements using index
intArray[0];  //returns 10
intArray[2];  //returns 30
Implementation : Accessing Array elements using different loops

// C# program to illustrate creating an array 
// of integers, puts some values in the array, 
// and prints each value to standard output. 
using System; 
namespace geeksforgeeks { 
      
class GFG { 
      
    // Main Method 
    public static void Main() 
    { 
          
        // declares an Array of integers. 
        int[] intArray; 
  
        // allocating memory for 5 integers. 
        intArray = new int[5]; 
  
        // initialize the first elements 
        // of the array 
        intArray[0] = 10; 
  
        // initialize the second elements 
        // of the array 
        intArray[1] = 20; 
  
        // so on... 
        intArray[2] = 30; 
        intArray[3] = 40; 
        intArray[4] = 50; 
  
        // accessing the elements 
        // using for loop 
        Console.Write("For loop :"); 
        for (int i = 0; i < intArray.Length; i++) 
            Console.Write(" " + intArray[i]); 
  
        Console.WriteLine(""); 
        Console.Write("For-each loop :"); 
          
        // using for-each loop 
        foreach(int i in intArray) 
            Console.Write(" " + i); 
  
        Console.WriteLine(""); 
        Console.Write("while loop :"); 
          
        // using while loop 
        int j = 0; 
        while (j < intArray.Length) { 
            Console.Write(" " + intArray[j]); 
            j++; 
        } 
  
        Console.WriteLine(""); 
        Console.Write("Do-while loop :"); 
          
        // using do-while loop 
        int k = 0; 
        do
        { 
            Console.Write(" " + intArray[k]); 
            k++; 
        } while (k < intArray.Length); 
    } 
} 
} 
Copy CodeRun on IDE

Output :

For loop : 10 20 30 40 50
For-each loop : 10 20 30 40 50
while loop : 10 20 30 40 50
Do-while loop : 10 20 30 40 50
One Dimensional Array

In this array contains only one row for storing the values. All values of this array are stored contiguously starting from 0 to the array size. For example, declaring a single-dimensional array of 5 integers :

int[] arrayint = new int[5];
Above array contains the elements from arrayint[0] to arrayint[4]. Here, the new operator has to create the array and also initialize its element by their default values. Above example, all elements are initialized by zero, Because it is the int type.

Example :

// C# program to creating an array 
// of the string as week days, store  
// day values in the weekdays, 
// and prints each value. 
using System; 
namespace geeksforgeeks { 
      
class GFG { 
      
    // Main Method 
    public static void Main() 
    { 
          
        // declares an 1D Array of integers. 
        string[] weekDays; 
  
        // allocating memory for days. 
        weekDays = new string[] {"Sun", "Mon", "Tue", "Wed",  
                                       "Thu", "Fri", "Sat"}; 
  
        // Displaying Elements of array 
        foreach(string day in weekDays) 
            Console.Write(day + " "); 
    } 
} 
} 
Copy CodeRun on IDE

Output :

Sun Mon Tue Wed Thu Fri Sat 
Multidimensional Arrays

The multi-dimensional array contains more than one row to store the values. It is also known as a Rectangular Array in C# because it’s each row length is same. It can be a 2D-array or 3D-array or more. To storing and accessing the values of the array, one required the nested loop. The multi-dimensional array declaration, initialization and accessing is as follows :

// creates a two-dimensional array of 
// four rows and two columns.
int[, ] intarray = new int[4, 2];

//creates an array of three dimensions, 4, 2, and 3
int[,, ] intarray1 = new int[4, 2, 3];
Example :

// C# program to illustrate creating 
// an multi- dimensional array 
// puts some values in the array, 
// and print them 
using System; 
namespace geeksforgeeks { 
      
class GFG { 
      
    // Main Method 
    public static void Main() 
    { 
          
        // Two-dimensional array 
        int[, ] intarray = new int[, ] { { 1, 2 }, 
                                         { 3, 4 },  
                                         { 5, 6 },  
                                         { 7, 8 } }; 
                                           
        // The same array with dimensions  
        // specified 4 row and 2 column. 
        int[, ] intarray_d = new int[4, 2] { { 1, 2 }, { 3, 4 },  
                                             { 5, 6 }, { 7, 8 } }; 
  
        // A similar array with string elements. 
        string[, ] str = new string[4, 2] { { "one", "two" },  
                                            { "three", "four" },  
                                            { "five", "six" },  
                                            { "seven", "eight" } }; 
  
        // Three-dimensional array. 
        int[,, ] intarray3D = new int[,, ] { { { 1, 2, 3 },  
                                             { 4, 5, 6 } }, 
                                             { { 7, 8, 9 },  
                                           { 10, 11, 12 } } }; 
                                              
                                              
        // The same array with dimensions  
        // specified 2, 2 and 3. 
        int[,, ] intarray3Dd = new int[2, 2, 3] { { { 1, 2, 3 },  
                                                  { 4, 5, 6 } },  
                                                  { { 7, 8, 9 },  
                                                { 10, 11, 12 } } }; 
  
        // Accessing array elements. 
        Console.WriteLine("2DArray[0][0] : " + intarray[0, 0]); 
        Console.WriteLine("2DArray[0][1] : " + intarray[0, 1]); 
        Console.WriteLine("2DArray[1][1] : " + intarray[1, 1]); 
        Console.WriteLine("2DArray[2][0] " + intarray[2, 0]); 
  
        Console.WriteLine("2DArray[1][1] (other) : " 
                                 + intarray_d[1, 1]); 
                                   
        Console.WriteLine("2DArray[1][0] (other)" 
                             + intarray_d[1, 0]); 
  
        Console.WriteLine("3DArray[1][0][1] : " 
                           + intarray3D[1, 0, 1]); 
                             
        Console.WriteLine("3DArray[1][1][2] : " 
                          + intarray3D[1, 1, 2]); 
  
        Console.WriteLine("3DArray[0][1][1] (other): " 
                             + intarray3Dd[0, 1, 1]); 
                               
        Console.WriteLine("3DArray[1][0][2] (other): " 
                             + intarray3Dd[1, 0, 2]); 
  
        // using nested loop show string elements 
        Console.WriteLine("To String element"); 
        for (int i = 0; i < 4; i++) 
            for (int j = 0; j < 2; j++) 
                Console.Write(str[i, j] + " "); 
    } 
} 
} 
Copy CodeRun on IDE

Output :

2DArray[0][0] : 1
2DArray[0][1] : 2
2DArray[1][1] : 4
2DArray[2][0] 5
2DArray[1][1] (other) : 4
2DArray[1][0] (other)3
3DArray[1][0][1] : 8
3DArray[1][1][2] : 12
3DArray[0][1][1] (other): 5
3DArray[1][0][2] (other): 9
To String element
one two three four five six seven eight 
Jagged Arrays

An array whose elements are arrays is known as Jagged arrays it means “array of arrays“. The jagged array elements may be of different dimensions and sizes. Below are the examples to show how to declare, initialize, and access the jagged arrays.

Example :

// C# program to single-dimensional jagged array 
// that contains two single-dimensional array 
// elements of different sizes. 
using System; 
namespace geeksforgeeks { 
      
class GFG { 
      
    // Main Method 
    public static void Main() 
    { 
  
        /*----------2D Array---------------*/
        // Declare the array of two elements: 
        int[][] arr = new int[2][]; 
  
        // Initialize the elements: 
        arr[0] = new int[5] { 1, 3, 5, 7, 9 }; 
        arr[1] = new int[4] { 2, 4, 6, 8 }; 
  
        // Another way of Declare and 
        // Initialize of elements 
        int[][] arr1 = { new int[] { 1, 3, 5, 7, 9 }, 
                         new int[] { 2, 4, 6, 8 } }; 
  
        // Display the array elements: 
        for (int i = 0; i < arr.Length; i++) 
        { 
            System.Console.Write("Element [" + i + "] Array: "); 
            for (int j = 0; j < arr[i].Length; j++) 
                Console.Write(arr[i][j] + " "); 
            Console.WriteLine(); 
        } 
          
        Console.WriteLine("Another Array"); 
          
        // Display the another array elements: 
        for (int i = 0; i < arr1.Length; i++)  
        { 
            System.Console.Write("Element [" + i + "] Array: "); 
            for (int j = 0; j < arr1[i].Length; j++) 
                Console.Write(arr1[i][j] + " "); 
            Console.WriteLine(); 
        } 
    } 
} 
} 
Copy CodeRun on IDE

Output :

Element [0] Array: 1 3 5 7 9 
Element [1] Array: 2 4 6 8 
Another Array
Element [0] Array: 1 3 5 7 9 
Element [1] Array: 2 4 6 8 
It’s possible to mix jagged and multidimensional arrays. The jagged array is an array of arrays, and therefore its elements are reference types and are initialized to null.
Example : To Declare and initialization of a single-dimensional jagged array which contains three two-dimensional array elements of different sizes.

// C# program to single-dimensional jagged array 
// that contains three two-dimensional array 
// elements of different sizes. 
using System; 
namespace geeksforgeeks { 
      
class GFG { 
      
// Main Method 
public static void Main() 
{ 
  
    int[][, ] arr = new int[3][, ] {new int[, ] {{1, 3}, {5, 7}}, 
                                    new int[, ] {{0, 2}, {4, 6}, {8, 10}}, 
                                    new int[, ] {{11, 22}, {99, 88}, {0, 9}}}; 
  
    // Display the array elements: 
    for (int i = 0; i < arr.Length; i++) 
    { 
        int x = 0; 
        for (int j = 0; j < arr[i].GetLength(x); j++)  
        { 
            for (int k = 0; k < arr[j].Rank; k++) 
                Console.Write(" arr[" + i + "][" + j + ", " + k + "]:" 
                                               + arr[i][j, k] + " "); 
            Console.WriteLine(); 
        } 
        x++; 
        Console.WriteLine(); 
    } 
} 
} 
} 
Copy CodeRun on IDE

Output :

 arr[0][0, 0]:1  arr[0][0, 1]:3 
 arr[0][1, 0]:5  arr[0][1, 1]:7 

 arr[1][0, 0]:0  arr[1][0, 1]:2 
 arr[1][1, 0]:4  arr[1][1, 1]:6 
 arr[1][2, 0]:8  arr[1][2, 1]:10 

 arr[2][0, 0]:11  arr[2][0, 1]:22 
 arr[2][1, 0]:99  arr[2][1, 1]:88 
 arr[2][2, 0]:0  arr[2][2, 1]:9 

Points To Remember :

GetLength(int): returns the number of elements in the first dimension of the Array.
When using jagged arrays be safe as if the index does not exist then it will throw exception which is IndexOutOfRange.

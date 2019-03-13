---
title: Arrays
---
# Arrays in C
## Problems
Before trying to explain what arrays are, let's look at the code where we want to print 10 numbers given by the user in reverse order.
```C
#include <stdio.h>
int main(void) {
    int a, b, c, d, e, f, g, i, j, k;
    scanf("%d", &a);
    scanf("%d", &b);
    ... 
    printf("%d", k);
    printf("%d", j);
    printf("%d", i);
    ... //and so on..

    return 0;
}
```
So, this looks a bit tedious. Up until now every variable created had some special role. But right now, it would be great if we could just store multiple values in one place and get access to the values with their place in the line maybe (first value, second etc.). Another way to look at this is, suppose you want to store a set of names, you need not to create different variables for each name instead you can create an array of names where each name has its unique identity or *index*. Also, we could use loops on them, which are things you will learn about later, but basically they do the same thing over and over again.
eg. reading from the user or printing out values. 

## Arrays in C
Arrays are containers with a given size. They can store values of the **same type**. This is called base type of the array. You can access a value stored in the array with its *index*.

Let's look at some code:
```C
#include <stdio.h>
int main(void) {
    int arr[4] = {1, 2, 3, 88};
    int brr[] = {78, 65};
    int crr[100] = {3};

    int var = arr[0];

    return 0;
}
```
And now let's break the syntax down a bit: 
```C
int arr[4] = {1, 2, 3, 88};
```
Here you have created an `array` of `int`(Integers), called `arr`. This array has 4 elements: `1`, `2`, `3`, `88`. Note the syntax!
```C
datatype name[number of elements] 
```
The elements in this array are whatever values you choose to store. The values stored will replace the "number of elements" section.

```C
int brr[] = {78, 65};
```
You do not have to tell the dimension beforehand. Here an array of two will be created with the elements between the curly brackets.

```C
int crr[100] = {3};
```
If you do this, then the first element is going to be `3`, but the rest of them is going to be `0`. 

```C
int drr[10] = {0};
```
If you want to create an array with all the elements as `0`.

```C
int var = arr[0];
```

Here an int is created called `var`, and it is initialized to the 0th element of arr. **Very important to note** that in C, indexes start at zero as opposed to 1. This means that to access the first element, the index (between the brackets) is 0, to access the second element, the index is 1 etc. 
In this example, `var` is going to store the value `1`.

One for loop can be used to print the contents of an array.
```C
#include <stdio.h>
int main() {
    const int size = 6;
    int arr[size] = {5, 4, 12, 3, 9, 1}
    for (int i = 0; i < size; i++) {
        printf("%5d", arr[i]);
    }
    return 0;
}
```

```C
    5    4    12    3    9    1
```

## Array Stored in Memory
If you create an array locally, by default the values will be stored in a `stack` data structure. If you want to store many more elements, like in millions or billions, a heap may be used. Heaps are expanded up to the total memory in the machine, but a stack only can store a limited number of elements.

An array declared globally or statically would have different storage specification from an array declared locally such as
- A local array will be (usually) created on the stack.
- A global or static array will be (usually)created on bss/data segments.
- A dynamically created array will be created on the heap.

For declaring an array in heap we use the `malloc` function under the `stdlib` header file.

Here is an example of the syntax where `A` is an `int` type array of size `n`:
```C
int*A=(int*)malloc(sizeof(int)*n);
```

## Overview

* A one-dimensional array is like a list; A two dimensional array is like a table;  The C language places no limits on the number of dimensions in an array, though specific implementations may.

* Some texts refer to one-dimensional arrays as vectors, two-dimensional arrays as matrices, and use the general term arrays when the number of dimensions is unspecified or unimportant.

* Two types of arrays in C are statically allocated and dynamically allocated. The size and number of dimensions of statically allocated arrays are known at compile time. On the other hand, dynamically allocated are allocated on the heap at run time and require a call to ```malloc```.


## Multi-dimensional Arrays in C

C also supports multi-dimensional arrays.
```C
datatype name[size1][size2]...[sizeN] ;
```

Two-dimensional arrays are common and can be initialized using the following syntax. One can logically think of the first index as rows and the second index as columns. This example has 2 rows and 5 columns.
```C
int arr[2][5] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
```

We can also declare the two-dimensional array without giving the number of rows, but the number of columns is a must.

example: `int arr[][5]` - here the number of rows is variable

To access the element `arr[i][j]` we can also denote it by `*(arr+i*n+j)`,where `n` is the number of columns

It can be difficult to visualize a 2-dimensional array using the above syntax so developers often use optional, nested brackets to clarify the structure of the array. This is also a valid way to initialize a 2-dimensional array.
```C
int arr[2][5] = {
    {0, 1, 2, 3, 4},
    {5, 6, 7, 8, 9}
};
```

Two nested for loops can be used to print the contents of a 2-dimensional array in a tabular format.
```C
#include <stdio.h>


int main() {
    const int rows = 2, cols = 5;

    int arr[rows][cols] = {
            {0, 1, 2, 3, 4},
            {5, 6, 7, 8, 9}
    };

    for (int row = 0; row < rows; row++) {
        for (int col = 0; col < cols; col++) {
            printf("%5d", arr[row][col]);
        }
        printf("\n");
    }

    return 0;
}
```

```C
    0    1    2    3    4
    5    6    7    8    9
```

## Strings

To store strings/multiple characters, we use `char arrays` in C, because the language has no special type built in. One thing to be aware of is that a terminating null(represented as '\0') is automatically added to the end, signaling that it is the end of the string. However, you may also initialize a string with curly braces `{}` as well, but you have to manually add the terminating null. 

Like so:
```C
char string[6] = "Hello"; //here you get Hello\0, which is why we need an array with the length of 6
```
Just like with the int arrays in the example above, there are several ways to assign values to char arrays:
```C
char string[] = "I do not want to count the chars in this.";
char string2[] = {'C','h','a','r',' ','b','y',' ','c','h','a','r','\0'};
char string3[] = "This is a string"
                 "with two lines";
```
Equivalent to the approach above, you can also create a pointer to a char array:
```C
char* string = "I do not want to count the chars in this.";
```

## Typical mistakes, tips

- When you have an array filled with values and you want to make another array that is exactly the same as the first, never ever do this:
```C
double first[] = {2,3,7};
double second[] = first;
//Or this:
double a[5], b[5];
a = b;
```
You can **only** deal with the values in an array one by one. You **cannot assign all at once**, when you learn about pointers later, the reasons will be clear. 
>(Basically, the first element of an array points to a memory address, and the elements after that are the "houses" next to that first one. So technically an array is just its first element's memory address. When you want to assign the second array the first array, you run into error due to differing types, or you are trying to change the second memory address of the first element in the second array.)

- When you want to create an array, you have to either tell its size or assign values to it. Do not do this:
```C
int arr[];
```
The computer has to know how big storage to create for the array. Later on, you will learn about ways to create containers whose size are defined later. (Again, pointers.)

- When you index out of the array, the compiler is not always going to give you an error. This is called undefined behavior, we just do not know what is going to happen. It could lead to your program crashing, simply slowing down, anything. 
```C
int test[6];
int a = test[-2];
int b = test[89];
```
The reason for C not checking the indexing bound is simple: C is an efficient language. It was made, so your program is the fastest: communicates nicely with hardware etc. A nicely written C code does not contain indexing errors, so why would C want to check while running? 

- When you try to access the last element of the array. Suppose the length of the array A be 4 and while accessing the last element as
A[4] will return an error, as the indexing starts from 0.

But, the disadvantage of an array is that the memory required should be allocated before the run time of the program.

## Note
In the case of array any type of datatype can be used except 'void' and 'function'.

### Declaration of Character Array and String
When we use double quotes to initialize an array, the compiler takes it as a string and adds a `'\0'` to the end of the array.
However, if we use single quote to initialize then there is no `'\0'` added to the end and the array behaves normally.

```C
#include<stdio.h>
int main()
{
    int n;
    char array[]="window";
    n=sizeof(array);
    printf("%d",n);
}
```
#### Output
```
-> 7
```
The output is `7` but the array has only 6 characters.  This happens because the array is initialized with double quotes so there is an extra `'\0'` at the end which increases the count to 7.

```C
#include<stdio.h>
int main()
{
    int n;
    char array[]={'w', 'i', 'n', 'd', 'o', 'w'};
    n=sizeof(array);
    printf("%d",n);
}
```
#### Output
```
-> 6
```
Here the output is 6 because the array is initialized with single quotes so there is no extra `'\0'` at the end.

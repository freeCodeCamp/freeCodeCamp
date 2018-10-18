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
So, this looks a bit tedious.<br>Up until now every variable created had some special role. But right now, it would be great if we could just store multiple values in one place and get access to the values with their place in the line maybe (first value, second etc.). Another way to look at this is, suppose you want to store a set of names, you need not create different variables for each name, instead you can create an array of names where each name has its unique identity or *index*. Also, we could use loops on them, which are things you will learn about later, but basically they do the same thing over and over again.
eg. reading from the user, or printing out values. 

## Arrays in C
Arrays are containers with a given size. They contain variables of the **same type**.<br> For ex : A array of type **int** can only contain element of type **int**. You can access a variable stored in the array with its *index*.
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
The syntax is actually pretty simple :-

Datatype Array-Name[Size of Array] = {Assigned values for array };


Here you have created an `array` of `ints`(Integers), called `arr`. This array has 4 elements: `1`, `2`, `3`, `88`. Note the syntax!
```C
datatype name[number of elements] 
```
The first element of this array is `1`, the second is `2` etc.

```C
int brr[] = {78, 65};
```
You do not have to tell the dimension beforehand. Here an array of two will be created with the elements between the curly brackets.

```C
int crr[100] = {3};
```
If you do this, then the first element is going to be `3`, but the rest of them is going to be `0`. 
Nothing to worry about, Here We have just created a array of 100 elements .But only assigned index 0 value so rest of the values <br>
are automatically or we can say by default assigned value of 0.

```C
int var = arr[0];
```
Here an int is created called `var`, and it is initialized to the 0th element of arr. **Very importart to note** that in C, indexes start at **zero** not from **1**. This means that to access the first element, the index (between the brackets) is 0, to access the second element, the index is 1 etc. 
In this example `var` is going to store the value `1`.

## Overview

* A one-dimensional array is like a list; A two dimensional array is like a table;  The C language places no limits on the number of dimensions in an array, though specific implementations may.

* Some texts refer to one-dimensional arrays as vectors, two-dimensional arrays as matrices, and use the general term arrays when the number of dimensions is unspecified or unimportant.


## Multi-dimensional Arrays in C

C also supports multi-dimensional arrays.
```C
datatype name[size1][size2]...[sizeN] 
```

Two-dimensional arrays are common and can be initialized using the following syntax. One can logically think of the first index as rows and the second index as columns. This example has 2 rows and 5 columns.
```C
int arr[2][5] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
```

It can be difficult to visualize a 2-dimensional array using the above syntax so developers often use optional and obviously much better way, nested brackets to clarify the structure of the array. This is also a valid way to initialize a 2-dimensional array.
```C
int arr[2][5] = {
    {0, 1, 2, 3, 4},
    {5, 6, 7, 8, 9}
};
```

Two nested for loops can be used to print the contents of a 2-dimensional array in tabular format.
<br>First one to select row then second one to traverse the row with changing column value while row index remain constant till whole row is traversed and column value changes in this similar manner we traverse the reamaining rows.

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
        puts("");
    }

    return 0;
}
```

```C
    0    1    2    3    4
    5    6    7    8    9
```

## Strings

To store strings/multiple characters, we use `char arrays` in C, because the language has no special type built in as **Strings**. One thing to be aware of, is that a terminating null or specifically called **Sentinal operator** is automatically added to the end, signaling that it is the end of the string. However, you may also initialze a string with curly braces `{}` as well, but you have to manually add the terminating null i.e **/0**. 

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
**At this you may not know pointer But that is fine We have cover it later**
```C
char* string = "I do not want to count the chars in this.";
```

## Typical mistakes, tips

- When you have an array filled with values and you want to make an another array that is exactly the same as the first, never ever do this:
```C
double first[] = {2,3,7};
double second[] = first;
//Or this:
double a[5], b[5]
a = b;
```
You can **only** deal with the values in an array one by one. You **cannot assign all at once**, when you learn about pointers later, the reasons will be clear. 
>(Basically, the first element of an array points to a memory address of assigned location, and the elements after that are the "houses" next to that first one **And the first element is used as reference to calculate memory location of next element or any element in array Because of the fact that array contain element of same type(So it will be be quite easy to get next element for ex: A char element take 1 byte so from memory address of first elemnt the second one will br just one byte away)**. So technically an array is just it's first element's memory address. When you want to assign the second array the first array, you run into error due to differing types, or you are trying to change the second memory address of the first element in the second array.)

- When you want to create an array, you have to either tell its size, or assign values to it. Do not do this:
```C
int arr[];
```
The computer has to know how big of a storage to create for the array. Later on, you will learn about ways to create containers whose size are defined later. (Again, pointers.)

- When you index out of the array, the compiler is not always going to give you an error. This is called undefined behaviour, we just do not know what is going to happen. It could lead to your program crashing, simply slowing down, anything. 
```C
int test[6];
int a = test[-2];
int b = test[89];
```
The reason for C not checking the indexing bound is simple: C is an efficient language. It was made, so your program is the fastest: communicates nicely with hardware etc. A nicely written C code does not contain indexing errors, so why would C want to check while running? 

-** When you try to access the last element of the array. Suppose the length of the array A be 4 and while accessing the last element as
A[4] will return an error, as the the indexing starts from 0.**

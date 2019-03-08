---
title: calloc
---
# calloc in C
calloc() is a library function that allows C to allocate memory dynamically from the heap, and initializes allocated memory to zero. 

calloc() is part of stdlib.h and to be able to use it you need to use `#include <stdlib.h>`.

## Using Calloc
calloc() allocates memory of a requested size and returns a pointer to the beginning of the allocated block. It also sets the allocated memory to zero.
To hold this returned pointer, we must create a variable. The pointer should be of same type used in the calloc statement.  
Here we'll make a pointer to an array of chars.
```C
char* arrayPtr;
```
Unlike other languages, C does not know the data type it is allocating memory for; it needs to be told. Luckily, C has a function called `sizeof()` that we can use.
Here, 10 is the number of items in the array.
```C
arrayPtr = (char *)calloc(10, sizeof(char));
```
Note: Unlike malloc, calloc takes two parameters in the format `calloc(number of items, sizeof each item);`
This statement used calloc to set aside memory for an array of 10 characters. As sizes can change between computers, it's important to use the sizeof() function to calculate the size on the current computer.  

Any memory allocated during the program's execution will need to be freed before the program closes. To `free` memory, we can use the free() function
```C
free( arrayPtr );
```
This statement will deallocate the memory previously allocated. C does not come with a `garbage collector` like some other languages, such as Java. As a result, memory not properly freed will continue to be allocated after the program is closed.

## When to use calloc vs. malloc
- typically, it is better to use malloc over calloc because it is faster (it takes time to initialize memory!)
- calloc is more useful in situations where you want an initial value for each item in an array. For instance, the steps
- - malloc
- - initialize
- - increment
- can be shortened to 
- - calloc
- - increment

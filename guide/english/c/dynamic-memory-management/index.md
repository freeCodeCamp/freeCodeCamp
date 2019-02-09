---
title: Dynamic Memory Management
---
# Dynamic Memory Management
Sometimes you will need to allocate memory spaces in the heap also known as the dynamic memory. This is particulary useful when you do not know during compile time how large a data structure (like an array) will be. 
## An Example
Here's a simple example where we allocate an array asking the user to choose the dimension
```C
#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int arrayDimension,i;
    int* arrayPointer;
    
    printf("Please insert the array dimension:");
    scanf("%d",&arrayDimension);
    arrayPointer = (int*)malloc(sizeof(int)*arrayDimension);
    
    if(arrayPointer == NULL){
      printf("Error allocating memory!");
      return -1;
     }
     
     for(i=0;i<arrayDimension;i++){
        printf("Insert the %d value of the array:",i+1);
        scanf("%d\n",arrayPointer[i]);
     }
    
    free(arrayPointer);
    return 0;
}
```

As you can see in order to allocate a space in the dynamic memory you need to know how pointers work in C.
The magic function here is the `malloc` which will return as output a void pointer (it is a pointer to a region of unknown data type) to the new memory space we've just allocated.
Let's see how to use this function step by step: 

## Allocating an array during runtime

```C
sizeof(int)
```
Let's start from `sizeof`. The `malloc` needs to know how much space allocate for your data. In fact a `int` variable will use less storage space then a `double` one.
It is generally not safe to assume the size of any datatype. For example, even though most implementations of C and C++ on 32-bit systems define type int to be four octets, this size may change when code is ported to a different system, breaking the code.
`sizeof` as its name suggests generates the size of a variable or datatype.

```C
arrayPointer = (int*) malloc(sizeof(int) * arrayDimension);
```
In this example, malloc allocates memory and returns a pointer to the memory block. The size of the block allocated is equal to the number of bytes for a single object of type int multiplied by `arrayDimension`, providing the system has enough space available.
But what if you do not have enough space or `malloc` can not allocate it for some other reasons?

## Checking the malloc output
This do not happens commonly but it is a very good practice to check the value of your pointer variable after allocating a new space of memory.

```C
    if(arrayPointer == NULL)
      printf("Error allocating memory!");
```
This will also be very usefull during your debug phase and will prevent some possible errors using the last function used in the example.

## A word on free()
Usually variables are automatically de-allocated when their scope is destroyed, freeing the memory they were using.
This simple does not happen when you manually allocate memory using the `malloc`.
To prevent memory leaks in more complex programs and in order to not create garbage in the system you have to free the memory area recently used before terminating your code execution.

```C
  free(arrayPointer);
```

In the end you will understand for sure that checking `arrayPointer` value was necessary to prevent an error using the `free` function.
If `arrayPointer` value was equal to `NULL` you could have expirencied some kind of bug.

## Other functions similar to malloc
Sometimes you need to not only reserve a new area of memory for your operations, you might also need to initialize all bytes to zero.
This is what `calloc` is used for.
In other cases you wish to resize the amount of memory a pointer points to. For example, if you have a pointer acting as an array of size `n` and you want to change it to an array of size `m`, you can use `realloc`.

```C
  int *arr = malloc(2 * sizeof(int));
  arr[0] = 1;
  arr[1] = 2;
  arr = realloc(arr, 3 * sizeof(int));
  arr[2] = 3;
```

## Common errors 
The improper use of dynamic memory allocation can frequently be a source of bugs as you have seen before.
Most common errors are:

* Not checking for allocation failures
Memory allocation is not guaranteed to succeed, and may instead return a null pointer. 
Using the returned value, without checking if the allocation is successful, invokes undefined behavior. This usually leads to crash (due to the resulting segmentation fault on the null pointer dereference), but there is no guarantee that a crash will happen so relying on that can also lead to problems.
* Memory leaks
Failure to deallocate memory using `free` leads to buildup of non-reusable memory, which is no longer used by the program.
* Logical errors
All allocations must follow the same pattern: allocation using `malloc`, usage to store data, deallocation using `free`. If you not follow this pattern usually segmentation fault errore will be given and the program will crash. These errors can be transient and hard to debug – for example, freed memory is usually not immediately reclaimed by the system, and dangling pointers may persist for a while and appear to work.

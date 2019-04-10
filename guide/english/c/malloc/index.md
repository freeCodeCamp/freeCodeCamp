---
title: malloc
---
# malloc in C
malloc() is a library function that allows C to allocate memory dynamically from the heap. The heap is an area of memory that allows for dynamic storage which should be handled manually.

malloc() is part of stdlib.h and to be able to use it you need to use `#include <stdlib.h>`.

## Synopsis
 ```
 void *malloc(size_t size)
 void *free(void *ptr);
 ```

## Using Malloc
malloc() allocates memory of a requested size and returns a pointer to the beginning of the allocated block. To hold this returned pointer, we must create a variable.

Here we'll make a pointer to a soon-to-be array of ints
```C
int* arrayPtr;
```
The result of the malloc will be automatically promoted to whatever pointer type we are using. Unlike other languages, C does not know which data type it is allocating memory for; malloc() simply knows how many bytes it should allocate. Luckily, C has a function called `sizeof()` that we can use.
```C
arrayPtr = malloc(10 * sizeof(int));
```
This statement uses malloc to set aside memory for an array of 10 integers. As sizes can change between computers, it is important to use the sizeof() function to calculate the size on the current computer.  

Any memory allocated during the program's execution will need to be freed before the program closes. To `free` memory, we can use the free() function
```C
free( arrayPtr );
```
This statement will deallocate the memory previously allocated. C does not come with a `garbage collector` like some other languages, such as Java. As a result, memory not properly freed will continue to be allocated after the program is closed.

### Example
```C
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int num, i, *ptr, sum = 0;

    printf("Enter number of elements: ");
    scanf("%d", &num);

    ptr = (int*) malloc(num * sizeof(int));  //memory is allocated using malloc
    if(ptr == NULL)                     
    {
        printf("Error! memory not allocated.");
        exit(0);
    }

    printf("Enter elements of array: ");
    for(i = 0; i < num; ++i)
    {
        scanf("%d", ptr + i);
        sum += *(ptr + i);
    }

    printf("Sum = %d", sum);
    free(ptr);
    return 0;
}
```

# Before you go on...
## A Review
* Malloc is used for dynamic memory allocation and is useful when you don't know the amount of memory needed during compile time.
* Allocating memory allows objects to exist beyond the scope of the current block.
* C passes by value instead of reference. Using malloc to assign memory, and then pass the pointer to another function, is more efficient than having the function recreate the structure.
* ```malloc()``` reserves a block of memory of specified size and return a pointer of type void which can be casted into pointer of any form.

Difference between malloc() and calloc()
1. Malloc() does not assignes the created memory to zero where as calloc() assignes the memory created to zero.
2. malloc() is best suitable for Character data and calloc() for Numeric data.
3. Malloc() can give garbage value if it deals in numeric data as it does not assignes the meory to zero.

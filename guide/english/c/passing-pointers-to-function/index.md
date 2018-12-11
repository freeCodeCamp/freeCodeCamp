---
title: Passing pointers to funtions
---

# Passing pointers to funtions
C allows passing a pointer to a function. This is useful when you want to modify variables that are out of the scope of that function.

Let's look at an example where using variables alone won't work:

```C
// incorrect implementation of swap
#include <stdio.h>
void noswap(int a, int b){
    int c;
    c = a;
    a = b;
    b = c;
}
int main(){
    int var1 = 10;
    int var2 = 20;
    swap(var1, var2);
    printf("Value of var1: %d \n", var1); // prints 10
    printf("Value of var2: %d \n", var2); // prints 20
}
```
In this code example the swap function does not work as intended since it swaps two variables that exist only inside the scope of that function. The function allocates space on the stack and performs the swap within the scope of the function. However, the swap is promptly forgotten once the function is complete and the space on the stack is freed without updating the global variables.

To solve this, simply declare the parameters as pointers to the global variables:

```C
// correct implementation of swap
#include <stdio.h>
void swap(int* a, int* b){
    int c = *a;
    *a = *b;
    *b = c;
}
int main(){
    int var1 = 10;
    int var2 = 20;
    swap(&var1, &var2);
    printf("Value of var1: %d \n", var1); // prints 20
    printf("Value of var2: %d \n", var2); // prints 10
}
```

In the second code example you were able to change the values of the variables only because you were constantly de-referencing pointers within the function, changing the data directly in memory, instead of in the function's temporary frame on the stack.

Notice the use of `*` to denote a pointer to a piece of memory and the use of `&` to denote the address of a piece of memory.

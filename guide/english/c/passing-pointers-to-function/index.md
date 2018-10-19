---
title: Passing pointers to funtions
---

# Passing pointers to funtions
C allows passing a pointer to a function. To achieve this, simply declare the parameters as pointer type.
This way of passing references to functions is useful when you want to modify variables that are out of the scope of that function and also solves the problem of returning multiple values as the reference and not the actual value of the variable is passed.

```C
// incorrect implementation of swap
#include <stdio.h>
void swap(int a, int b){
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
In this code example the swap function does not work as intended since it swaps two variables that exist only inside the scope of that function. To fix this we make a modification as shown below.
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
In the second code example you were able to change the values of the variables only because you were constantly de-referencing a pointer within the function instead of trying to change the values directly

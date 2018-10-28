---
title: For Loop
---

# For Loop

The `for` loop executes a block of code until a specified condition is false. Use `while` loops when the number of iterations are variable, otherwise use `for` loops. A common use of `for` loops are array iterations. 
It is also known as an 'entry-controlled loop' since the condition is checked before the next iteration. Another example of an 'entry-controlled loop' is a while loop. 

## Syntax of For Loop

```c
for ( init; condition; increment ) {
   statement(s);
}
```

The `for` loop consists of 3 sections, the initialization section, a specific condition and the incremental or decremental operation section. These 3 sections control the `for` loop.

The initialization statement is executed only once. Then, the test expression (the condition) is evaluated. If the test expression is false (0), the `for` loop is terminated. But if the test expression is true (nonzero), the code inside the body of the `for` loop is executed and the update expression is executed. This process repeats until the test expression is false.

The `for` loop is commonly used when the number of iterations is known.

A `for` loop can also omit any or all of the 3 sections described above. For example, the following `for` loop is infinite:
```c
for ( ; ; ) {
   statement(s);
}
```

## Example
```c
#include <stdio.h>

int main () {

    int array[] = {1, 2, 3, 4, 5};

    for (int i = 0; i < 5; i++) {
    	printf("Item on index %d is %d\n", i, array[i]);
    }
}
```

## Output:
```shell
> Item on index 0 is 1
> Item on index 1 is 2
> Item on index 2 is 3
> Item on index 3 is 4
```


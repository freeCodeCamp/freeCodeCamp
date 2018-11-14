---
title: For Loop
---

# For Loop

The `for` loop executes a block of code until a specified condition is false. Use `while` loops when the number of iterations are variable, otherwise use `for` loops. A common use of `for` loops are array iterations. 
It is also known as an 'entry-controlled loop' since the condition is checked before the next iteration. Another example of an 'entry-controlled loop' is a while loop. 
The block of code around which the <b>for</b> loop iterates is packed inside the curly braces. A <b>for</b> loop is also acceptable without curly braces. The compiler assumes only the 1st statement to be under the <b>imaginary curly braces</b>.
A variable declared inside the curly braces of a <b>for</b> loop is only valid inside that particular for loop. We cannot use a variable declared inside a <b>for</b> loop outside it.

## Syntax of For Loop

```c
for ( init; condition; increment ) {
   statement(s);
}
```

The `for` loop consists of 3 sections, the initialization section, a specific condition and the incremental or decremental operation section. These 3 sections control the `for` loop.

The initialization statement is executed only once. Then, the test expression is evaluated. If the test expression is false (0), for loop is terminated. But if the test expression is true (nonzero), codes inside the body of for loop is executed and the update expression is updated. This process repeats until the test expression is false.

The for loop is commonly used when the number of iterations is known.

#### Example
```c
#include <stdio.h>

int main () {

    int array[] = {1, 2, 3, 4, 5};

    for (int i = 0; i < 5; i++) {
    	printf("Item on index %d is %d\n", i, array[i]);
    }
    
    return 0;
}
```

#### Output:
```shell
> Item on index 0 is 1
> Item on index 1 is 2
> Item on index 2 is 3
> Item on index 3 is 4
> Item on index 4 is 5
```
## Example for printing star pattern for pyramid 
```c

#include<stdio.h>
int
main ()
{
  int i, j;
  for (i = 1; i <= 5; i++)
    {

      for (j = i; j < 5; j++)
	{
	  printf (" ");
	}


      for (j = 1; j <= (2 * i - 1); j++)
	{
	  printf ("*");
	}


      printf ("\n");
    }

  return 0;
}
```
## Output:
```shell 
     *
    ***
   *****
  *******
 ********* 

``





## Syntax of For infinite loop

```c
for ( ; ; ) {
   statement(s);
}
```

An infinite loop occurs when the condition will never be met, due to some inherent characteristic of the loop. An infinite loop also called an endless loop, and it is a piece of coding that lacks a functional exit so that it repeats indefinitely.

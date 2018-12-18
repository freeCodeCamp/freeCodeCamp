---
title: For Loop
---

# For Loop

The `for` loop executes a block of code until the specified condition is false. Use `while` loops when the number of iterations are not known or variable; otherwise, use `for` loops. A common use of `for` loops is array iterations. 
It is also known as an 'entry-controlled loop' since the condition is checked before the next iteration. Another example of an 'entry-controlled loop' is a `while` loop. 
The block of code around which the <b>for</b> loop iterates is packed inside the curly braces. A <b>for</b> loop is also acceptable without curly braces. The compiler assumes only the 1st statement to be under the <b>imaginary curly braces</b>.
A variable declared inside the curly braces of a <b>for</b> loop is only valid inside that particular for loop. We cannot use a variable declared inside a <b>for</b> loop outside it.

## Syntax of For Loop

```c
for ( initialization; condition; update ) {
   statement(s);
}
```
The `for` loop consists of 3 sections:
   1. The initialization section (start value)
   2. Condition (stop value)
   3. Update Expression (step value)

The initialization statement is executed only once. Then, the condition is evaluated. If the condition is false (or 0), the `for` loop is terminated. But if the condition is true (nonzero), code inside the block of the `for` loop is executed. Finally, the update expression is executed. This process repeats until the condition is false.

You can leave any of the three field blank:
- If you leave initialization blank, then there is no initialization phase
- If you leave update blank, then there is no update phase
- If you leave the condition blank, then practically it becomes an infinite loop unless you break inside loop

The `for` loop is commonly used when the number of iterations is known.

#### Example
```c
#include <stdio.h>

int main() {
    int array[] = {1, 2, 3, 4, 5};

    for (int i = 0; i < 5; ++i) {
        printf("Item on index %d is %d\n", i, array[i]);
    }

    return 0;
}
```

- It should be noted that the value of `i` is set to `0` because arrays are indexed from `0` to `size-1`, and we want to print the first value as well

#### Output:
```shell
> Item on index 0 is 1
> Item on index 1 is 2
> Item on index 2 is 3
> Item on index 3 is 4
> Item on index 4 is 5
```

#### Explanation:
The `for` loop checks the value of `i` based on the conditions. If `i` is smaller than `5`, the text will be printed. After printing, the value of `i` is increased by 1. This function will continue until `i` is greater than 4, at which point the loop will stop and exit.

### For Loop Body
Generally the part which is inside the curly braces is considered as the body of the `for` loop. In certain circumstances we can ignore the curly braces:
- When there is only one line of code inside the loop
- When there is only one `if` statement inside the loop
- When there is only one loop inside the current loop

#### Examples
```C
#include<stdio.h>
int main() {
    int a=5,i;
    for(i=1;i<=5;i++)
    printf("%d ",i);
    return 0;
}
```
Output:
```output
->1 2 3 4 5
```

```C
#include<stdio.h>
int main() {
    int a=5,i;
    for(i=1;i<=5;i++)
    if(i%2==0)
    printf("%d ",i);
    return 0;
}
```
Output:
```output
->2 4
```

```C
#include<stdio.h>
int main() {
    int a=5,i;
    for(i=1;i<=5;i++)
        for(j=1;j<=2;j++)
            printf("%d ",i);
    return 0;
}
```
Output:
```output
->1 1 2 2 3 3 4 4 
```

## Example for printing star pattern for pyramid 
```C
#include<stdio.h>
int main() {
  int i, j;
  for (i = 1; i <= 5; i++) {
    for (j = i; j < 5; j++) {
      printf (" ");
    }
    for (j = 1; j <= (2 * i - 1); j++) {
      printf ("*");
    }
    printf ("\n");
  }

  return 0;
}
```
Output:
```shell 
     *
    ***
   *****
  *******
 ********* 
```
 
## Nested `for` loop in C
```C
#include <stdio.h>
#include <stdlib.h>
 
int main()
{
  int i, k, levels, space;
  printf("Enter the number of levels in pyramid:");
  scanf("%d",&levels);

  space = levels;

  for ( i = 1 ; i <= levels ; i++ ) {
    for ( k = 1 ; k < space ; k++ ) {
      printf(" ");
    }
    space--;

    for ( k = 1 ; k <= 2*i - 1 ; k++ ) {
      printf("*");
    }
    printf("\n");
  }
  return 0;
}
```

## Syntax of For Infinite loop

An infinite loop occurs when the condition will never be met, due to some inherent characteristic of the loop. An infinite loop also called an endless loop, and it is a piece of coding that lacks a functional exit so that it repeats indefinitely.

### Examples:

```C
for ( ; ; ) {
   statement(s);
}
```

```C
#include <stdio.h>

int main () {
    for (int i = 0; i < 5; i--) {
    	printf("%d \n", i);
    }

    return 0;
}
```

### Warning!

Some older versions of compilers don't support declaration inside the for loop:
```C
#include <stdio.h>

int main () {

    int array[] = {1, 2, 3, 4, 5};

    for (int i = 0; i < 5; i++) {      // The int i = 0 will show you an error on older compiler versions
    	printf("Item on index %d is %d\n", i, array[i]);
    }

    return 0;
}
```

You can solve this problem if you declare the variable before:
```C
#include <stdio.h>

int main () {

    int array[] = {1, 2, 3, 4, 5};
    int i;        // You declare the variable before the for loop

    for (i = 0; i < 5; i++) {       // Now you won't have a problem
    	printf("Item on index %d is %d\n", i, array[i]);
    }

    return 0;
}
```

## Break and Continue statements
When "break" statement is executed, the loop stops executing all other statements in it and immediately comes out of the loop.
 
 ```C
#include <stdio.h>

int main(void) {
    int n = 5,i;
   for(i=0;i<n;i++)
   {
   printf("%d\n",i);
    if(n == 3) 
        break;
        }
    return 0;
}
```
output:
```output
1
2
```

When "continue" statement is executed, the loop execution is skipped for that time and goes for incrementation/decrementation of the variable, validates the condition and continues the execution of the loop.

```C
#include <stdio.h>

int main(void) {
    int n = 5,i;
   for(i=0;i<n;i++)
   {
   printf("%d\n",i);
    if(n == 3) 
        continue;
        }
    return 0;
}
```
output:
```output
1
2
4
5
```

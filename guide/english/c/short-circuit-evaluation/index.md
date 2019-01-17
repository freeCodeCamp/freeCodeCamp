---
title: Short-Circuit Evaluation
---

# Short-Circuit Evaluation
The Short-Circuit evaluation consists in checking or executing the second argument only if the first argument is not enough to determine the value of the expression. 

You can do a short-circuit evaluation with `&&` and `||` operators.

### Example with `&&` Operator
```c
  canOpenFile(filename) && openFile(filename); // If you can open the file then open it.
```

The example above is equivalent to:

```c
  if ( canOpenFile(filename) ) {
    openFile(filename);
  }
```

### Example with `||` Operator

```c
  isServerOn || startServer(); // If the server is not on then start it.
 ```
 The example above is equivalent to:
 
 ```c
  if ( !isServerOn ) {
    startServer();
  }
 ```
 
### A Real-World Example with `||` Operator
```c
#include <stdio.h>
#include <stdlib.h>

char *getName();

int main(int argc, char *argv[]) { 
	// Get the first argument passed via terminal
	char *name = argv[1];

	// If the name is not passed via terminal, then print a message and then get the name
	name || printf("Please give me your name:") && (name = getName()); 

	printf("Hello %s\n", name);
}

char *getName() {
	// Allocate memory 
	char *name = (char*)malloc(30);
	
	scanf("%s", name);
	return name;
}
```
 
### Example with Nested `if` Statements
 
 ```c
 int i, j;
 scanf ( "%d %d", &i, &j );
 if ( i > 10 && j > 10 ) {
    printf("Both numbers are greater than 10! \n");
 }
 ```
 The above example is equivalent to:
 
 ```c
 int i, j;
 scanf ( "%d %d", &i, &j );
 if ( i > 10 ) {
    if ( j > 10 ) {
       printf("Both numbers are greater than 10! \n");
    }
 }
 ```
 Notice when `if ( i > 10 )` fails, the statement is false and the check `if ( j > 10 )` is never run. `if ( i > 10 && j > 10 )` behaves exactly the same way, because if `i > 10` is false then the entire statement is automatically false, and there is no need to run an additional check.
 

 


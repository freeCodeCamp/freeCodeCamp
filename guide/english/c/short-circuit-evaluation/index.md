---
title: Short-Circuit Evaluation
---
# Short-Circuit Evaluation

The Short-Circuit evaluation consist in check or execute the second argument only if the first argument is not enough to determine the value of the expression. 

You can do a short-circuit evaluation with && and || operators.


## Example with && operator:

```c
  canOpenFile(filename) && openFile(filename); // If you can open the file then open it.
```

The example above is equivalent to:

```c
  if ( canOpenFile(filename) ) {
    openFile(filename);
  }
```

## Example with || operator:

```c
  isServerOn || startServer(); // If the server is not on then start it.
 ```
 The example above is equivalent to:
 
 ```c
  if ( !isServerOn ) {
    startServer();
  }
 ```
 
 ## Example with nested if statements
 
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
 
 ## Keep it all together in real example
 
 ```c
#include <stdio.h>
#include <stdlib.h>

char *getName();

int main(int argc, char *argv[]) { 
	// Get first argument passed via terminal
	char *name = argv[1];

	// If name is not passed via terminal then print message and then get the name
	name || printf("Please give me your name:") && (name = getName()); 

	printf("Hello %s\n", name);
}

char *getName() {
	// Allocate memory 
	char *name = malloc(30);
	
	scanf("%s", name);
	return name;
}
```
 


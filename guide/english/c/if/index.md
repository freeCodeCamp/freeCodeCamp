---
title: If
---

# If

The if statement executes different blocks of code based on conditions.

If the Boolean expression evaluates to true, then the block of code inside the 'if' statement will be executed. If the Boolean expression evaluates to false, then the first set of code after the end of the 'if' statement (after the closing curly brace) will be executed.

C programming language assumes any non-zero and non-null values as true and if it is either zero or null, then it is assumed as false value.

```
if (condition) {
	// Do something when `condition` is true
}
else {
	// Do something when `condition` is false
}
```

When `condition` is true, code inside the `if` section executes, otherwise `else` executes. Sometimes you would need to add a second condition. For readability, you should use a `else if` rather than nesting `if` statements.

```
if (condition) {
	// Do something if `condition` is true
}
else if (anotherCondition) {
	// Do something if `anotherCondition` is ture
}
else {
	// Do something if `condition` AND `anotherCondition` is false
}
```

Note that the `else` and `else if` sections are not required, while `if` is mandatory.


## Example
```
#include <stdio.h>

int main () {

   // Local variable definition
   int a = 100;

   // Check the boolean condition
   if(a < 5) {
      // If condition is true then print the following
      printf("a is less than 5!\n" );
   }
   else {
      // If condition is false then print the following
      printf("a is not less than 5!\n" );
   }

   printf("Value of a is : %d\n", a);

   return 0;
}
```

## Output
```
-> a is not less than 5!
-> Value of a is : 100
```

---
title: If
---

# If

The if statement executes different blocks of code based on conditions.

```
if (condition) {
	// Do something when `condition` is true
}
else {
	// Do something when `condition` is false
}
```

When the `condition` is true, the code inside the `if` section executes, otherwise the code after the `else` section executes. Sometimes you would need to add a second condition. For readability, you should use a `else if` statement with some code rather than nesting `if` statements.

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
   int a = 10;

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

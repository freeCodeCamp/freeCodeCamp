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
	// Do something when original if `condition` is false
}
```

When `condition` is true, code inside the `if` section executes, otherwise `else` executes. Sometimes you would need to add a second condition. For readability, you should use a `else if` rather than nesting `if` statements.

```
if (condition) {
	// Do something if `condition` is true
}
else if (anotherCondition) {
	// Do something if `anotherCondition` is true
}
else {
	// Do something if `condition` AND `anotherCondition` is false
}
```

Note: `else` and `else if` sections are not required, while `if` is mandatory. Furthermore, `else` and `else if` can only be used following an `if` statement. In the instance when one `if` statement is executed, the following `else if` and `else` statements are ignored.

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
-> Value of a is : 10
```

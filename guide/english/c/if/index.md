---
title: If
---

# If

The `if` statement executes a block of code conditionally.

```C
if (condition) {
        // Execute this only when `condition` is true
}
```

The `else` statement executes a block of code when the `if` condition is false.

```C
if (condition) {
	// Execute this when `condition` is true
}
else {
	// Do something when original if `condition` is false
}
```
If you need to add subsequent conditions. For readability, you should use `else if` rather than nesting `if` statements.

```C
if (condition) {
	// Execute this when `condition` is true
}
else if (anotherCondition) {
	// Do something if `anotherCondition` is true
}
else {
	// Execute this when `condition` AND `anotherCondition` are both false
}
```

Note: `else` and `else if` sections are not required, while `if` is mandatory. Furthermore, `else` and `else if` can only be used following an `if` statement. In the instance when one `if` statement is executed, the following `else if` and `else` statements are ignored.

## Example
```C
#include <stdio.h>

int main() {

   // Local variable definition
   int a = 100;

   // Check the boolean condition
   if (a < 5) {
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

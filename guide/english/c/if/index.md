---
title: If
---

# If

The if statement executes different blocks of code based on conditions.

```
if (condition) {
	// Do something when `condition` is true or 1
}
else {
	// Do something when `condition` is false or 0
}
```

When `condition` is true, code inside the `if` section executes, otherwise `else` executes. Sometimes you would need to add a second condition. For readability, you should use a `else if` rather than nesting `if` statements.

```
if (condition) {
	// Do something if `condition` is true or 1
}
else if (anotherCondition) {
	// Do something if `anotherCondition` is true or 1
}
else {
	// Do something if `condition` AND `anotherCondition` is false or 0
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
## Example 2
        #include<stdio.h>

        int main()
        {
            int i=1,j=0;
            if(i)
            {
                printf("this will work\n");
            }
            if(j)
            {
                printf("this will not work\n");
            }
            if(j==0)
            {
                printf("this will work again\n");
            }
            return 0;
         }  
            
        

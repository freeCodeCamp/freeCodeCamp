---
title: For Loop
---

A For Loop is used to repeat statement/s for a specific number of times i.e. until a condition is satisfied.
The for loop can be distinguished from other loop statements by its 'loop counter'. To declare a for loop, 3 things need to be done: Initialization of counter variable/ initializing statement, adding a test expression which checks the condition which needs to be checked, and post loop execution chnage in counter - increment/decrement.  


## Syntax

```
for ( init; condition; increment ) {
   statement(s);
}
```

The increment can also placed inside the for loop i.e. in its body- 

```
for ( init; condition;) {
   statement(s);
   increment;
}
```
It is also allowed to ignore the init variables if and only if they are declared beforehand. For example :
```
int a = 1;
for (; a <= 10 ;)
{
    cout << a << '\n';
    a++;
}
```
But the condition must be declared inside the () in the for loop, as empty condition is always return false, so the for-loop won't run at all.

### init
This step allows you to declare and initialize any loop control variables. This step is performed first and only once.  
Note that the variables declared in init can only be used inside the brackets of the for loop.

### condition
Next the condition is evaluated. If it holds true, the body of the loop is executed. If it holds false, the body of the loop does not execute and flow of control jumps to the next block of code outside the loop.

### update
The update statement is used to alter the loop variable by using simple operations like addition,subtraction,multiplication or division.
The update statement executes after the execution of the body of the loop.

## IMPLEMENTATION:
```C++
#include <iostream>
using namespace std; // Here we use the scope resolution operator to define the scope of the standar functions as std::
 
int main () {
   // for loop execution
   for( int a = 10; a < 20; a = a + 1 ) { // The loop will run till the value of a is less than 20
      cout << "value of a: " << a << endl;
   }

   return 0;
}```

Output:
value of a: 10
value of a: 11
value of a: 12
value of a: 13
value of a: 14
value of a: 15
value of a: 16
value of a: 17
value of a: 18
value of a: 19

##Single lined loop
The body of the for loop need not be enclosed in braces if the loop iterates over only one satatement.
##Example
```c++
   #include<iostream.h>
   using namespace std;
 
   int main () {
   // Single line for loop
   for( int a = 10; a < 20; a = a + 1 ) 
      cout << "value of a: " << a << endl;
   

   return 0;
}```

This would generate the same output as the previous program.
i.e 
Output:
value of a: 10
value of a: 11
value of a: 12
value of a: 13
value of a: 14
value of a: 15
value of a: 16
value of a: 17
value of a: 18
value of a: 19

```

## Explanation
Here's the initialization condition is first set to a=10. The loop first checks for this condition. It then checks for the condition expression i.e a<20 which holds true as 10<20(for the first case). Now the body of the loop is executed and we get the output "Value of a: 10". Then the update expression is executed which adds the number 1 to 'a' and the value of 'a' gets updated to 11 and the same steps are followed (as above) until the value of v reaches less than 20 i.e 19.

# Range-based for-loop
C++ also has what we call range-based for loops which iterates through all the elements of a container(e.g. array).

## Syntax

```
for ( element: container )
   statement(s);
}
```

```
int[5] array = { 1, 2, 3, 4, 5 }
for ( int i: array )
   cout << i << endl;
}

Output:
1
2
3
4
5
```

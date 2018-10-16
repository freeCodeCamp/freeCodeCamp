---
title: Conditional Operator
---

## Conditional Operator

Conditional operator is a ternary operator, that is it needs 3 operands.
It returns one of two values depending on the result of an expression
Conditional operator is used to replace a simple if-else statements.

Syntax :
```cpp
  (condition)?(expression-1):(expression-2);
```
Here, expression-1 is evaluated when condition is true and expression-2 is evaluated when condtion is false.
Similar if-else statement would be :
```cpp
if(condition)
  {
    expression-1;
  }
else
  {
    expression-2;
  }
```
Hence conditional operator is very handy when you need to write simple if-else statement. It can also be used in #define 
preprocessor when similar condition is to be used in multiple places.

For example, to find maximum of two number conditional operator can be used as follows :

```cpp
#define big(a,b) (a>=b)?a:b

int maximum,x=5,y=6; // variable to store maximum of two numbers
maximum=(x>y)?x:y; // directly using conditional operator
maximum=big(x,y); // using the #define preprocessor defined above as big
```
 **Good Luck to all of you** 

 **Happy Coding ! :)**

 **Feel free to ask any queries on FreeCodeCamp's GitHub page or [FreeCodeCamp's Forum .](https://forum.freecodecamp.org/)**

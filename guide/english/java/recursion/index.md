---
title: recursion
---
## Recursion
Recursion is a concept found in Java as well as in other programing languages such as C++. It is used to solve complex problems where loops are to uneficcient or not flexible enough. Recursion essentially is calling the current method within the method itself.

Example:

```java
public static int multiply(int num1, int num2) 
{
    // If either number 1 or 2 are 0 we know that the result is 0
    if (num1 == 0 || num2 == 0) 
    {
        return 0;
    }
    else if(num2 > 0)
    {
        return num1 + multiply(num1, num2 - 1);
    }
    else
    {
        return -num1 + multiply(num1, num2 + 1);
    }
}
```
Side notes:

One needs to remember that recursion can be very memory intesive which can easily lead to stack overflows when dealing with big recursive methods. Another thing to watch out for is branching recursion since the recursion can easily slow down very fast. In some languages such as C++ tailend recursion is rewarded with better memory management since it will keep the recursion in one growing memory location. The example at the top is a good example for tail end recursion.

#### More Information:
[Wikipedia - Recursion](https://en.wikipedia.org/wiki/Recursion_(computer_science))

---
title: Functions in C++
---
## Definition:

A function is a group of statements that together perform a task. Every C++ program has at least one function, which is main().

A function declaration tells the compiler about a function's name, return type, and parameters. A function definition provides the actual body of the function.

## The general form of a C++ function definition:

```cpp
return_type function_name( parameter list )
{
   body of the function
}
```

### Return type:
A function may return a value. The return_type is the data type of the value the function returns. Some functions perform the desired operations without returning a value. In this case, the return_type is the keyword void.

### Function name:
This is the actual name of the function. The function name and the parameter list together constitute the function signature.

### Parameters:
A parameter is like a placeholder. When a function is invoked, you pass a value to the parameter. This value is referred to as actual parameter or argument. The parameter list refers to the type, order, and number of the parameters of a function. Parameters are optional; that is, a function may contain no parameters.

### Function body:
The function body contains a collection of statements that define what the function does.

##Example:

```cpp
int max(int num1, int num2)
{
   // local variable declaration
   int result;
 
   if (num1 > num2)
      result = num1;
   else
      result = num2;
 
   return result; 
}
```

## More Information

* [TutorialsPoint](https://www.tutorialspoint.com/cplusplus/cpp_functions.htm)



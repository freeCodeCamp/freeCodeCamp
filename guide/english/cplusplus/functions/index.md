---
title: Functions in C++
---
## Definition:

A function is a group of statements that together perform a task. Every C++ program has at least one function, which is `main()`.

A function declaration tells the compiler about a function's name, return type, and parameters. A function definition provides the actual body of the function.
One must always make sure, before using a function in the program, the function is defined.
Even if function definition is after the main, just the function name and its arguments have to be declared above, so that compiler knows what is being talked about.

## The general form of a C++ function definition:

```cpp
return_type function_name( parameter list )
{
   body of the function
}
```

### Return type:
A function may return a value. The `return_type` is the data type of the value the function returns. Some functions perform the desired operations without returning a value. In this case, the `return_type` is the keyword `void`, but the [return type of main() must always be int](https://stackoverflow.com/a/4207223/). In C++, the return type of a function can be any primitive data type, a reference to an object, or a pointer to an object.
```cpp
int func1();      // Returns a primitive data type
char & func2();   // Returns a reference to an object (Careful not to return a obeject local to the function)
float * func3();  // Returns a pointers to a float

struct node{};
node * func4();  // Returns a pointer to a user defined data type
```

### Function name:
This is the actual name of the function. The function name and the parameter list together constitute the function signature.

### Parameters:
A parameter is like a placeholder. When a function is invoked, you pass a value to the parameter. This value is referred to as actual parameter or argument. The parameter list refers to the type, order, and number of the parameters of a function. Parameters are optional; that is, a function may contain no parameters.

The parameters of a function are passed by value unless explicitly specified by the programmer. This means that the program will create a temporary copy of the arguments, and any changes made to those copies from within the function will not remain once the function returns.

The address of operator, `&`, allows the programmer to pass in a parameter by reference. When the function is invoked, the program will not create a copy of the parameter, and any changes made from within the function will remain once the function returns.

```cpp
// Function prototypes
void increment_by_value (int a); 
void increment_by_reference (int & a);

int main() {
   int number = 0;
   
   // Invoking functions
   increment_by_value(number);   // The value of number stays at 0
   increment_by_reference(number);  // The value of number changes to 1
   return 1;
}

// Function definitions
void increment_by_value (int a) {
   a = a + 1;
   return;
}

void increment_by_reference (int & a) {
   a = a + 1;
   return;
}
```

### Function body:
The function body contains a collection of statements that define what the function does.

#### Example:

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
#### Calling the function:
```cpp
int res;
res = max(5,10);
```

## Functions with void return type

If a function returns a value, assign it to a variable, else just invoke the function like so:
```cpp
void printMax(int num1, int num2)        
{
   // local variable declaration
   int result;
 
   if (num1 > num2)
      result = num1;
   else
      result = num2;
 
   cout << result; 
}
```
#### calling the function:
```cpp
printMax(5,10);
```

## Functions without parameters

Also note that it is not necessary to create a function with parameters, we can also make functions without parameters like so:

```cpp
// Function without parameter
int test()     
{
   // code goes here
}

// In main you can call it like:
int val = test();

```

## Why are functions important?

Functions support modularity (breaking down of work into smaller pieces called modules), which is an essential feature of object-oriented programming (OOP) which primarily separates C++ from C.

Having specific functions to perform specific tasks removes confusion and shortens the length of the main function.

The function also performs reusability of code. So the next time you have to calculate the maximum of two different numbers again and again in the same program, you do not need to copy and paste your code. You just have to call the function and it does rest of the work.

## More Information

* [TutorialsPoint](https://www.tutorialspoint.com/cplusplus/cpp_functions.htm)

---
title: The Auto Feature
---

## The Auto Feature

`auto` is a C++11 feature that lets the compiler infer the data type for you in a definition. This can save you a lot of typing, especially with complicated types. 

Without `auto`:
```cpp
double x = 10.425;
double y = x * x;
```

With `auto`:
```cpp
double x = 10.425;
auto y = x * x;
```

While it may seem trivial, it becomes incredibly useful when data types begin to get complicated. For example, assume you want to store a [`vector`](https://guide.freecodecamp.org/cplusplus/vector) of employees, and you are only interested in their name and age. One way to store the name and age could be a `pair` with a `string` and an `unsigned int`. This is declared as `std::vector<std::pair<std::string, unsigned int>> employees`. Now suppose you want to access the last employee added:

```cpp
std::vector<std::pair<std::string, unsigned int>> employees;

// without auto, you have to write:
std::pair<std::string, unsigned int>> last_employee = employees.back();

// with auto, you just have to write:
auto last_employee = employees.back();
```

Once the compiler determines the type on the right side of the `=` it replaces `auto` with that type.

In modern versions of C++ (since C++14), `auto` can also be used in a function declaration as the return type. The compiler will then infer the return type from the return statement inside of the function. Following the example with employees:

```
std::vector<std::pair<std::string, unsigned int>> employees;
auto get_last_employee() {
	return employees.back(); // Compiler knows the return type from this line.
}
```
The compiler will know from the line with the return statement that the return type from the function should be `std::vector<std::pair<std::string, unsigned int>>`.

While quite technical, the [cppreference page on auto](http://en.cppreference.com/w/cpp/language/auto) describes many more usages of `auto` and the details of when it can and can't be used.

### `auto` before C++11
In some old textbooks containing _very_ old code, the keyword `auto` is used in a very different manner. 

This particular `auto` was a keyword borrowed from C, and was probably the least used keyword of all time.

In C++, all variables have _automatic duration_, that is, they are defined until you get out of the function they're defined in.

For example:

```cpp
#include <iostream> 

int main()
{
        int a;
        a = 1; //makes sense, as it was defined in the same function
        
        return 0;
 }
 a = 2; //makes no sense, since a isn't defined here
 ```
 
 This is a given in C++, and `auto` specified that the variable should have an _automatic duration_, hence the lack of use.

## Further Reading :
* http://www.stroustrup.com/C++11FAQ.html#auto


---
title: Macros in C
---
## Macros in C

A macro is a piece of code with a given name. When the name is used, it is replaced by the content of the macro. The `#define` keyword is used to define new macros. It's followed by a name and a content. By convention, macro names are written in uppercase. There are two type of macros: `Object-like` macros and `Function-like` macros.

#### Object-like Macros
```C
#define PI 3.14
```

If you use the macro this way:
```C
printf("Value of PI: %d", PI);
```
Is the same as write this:
```C
printf("Value of PI: %d", 3.14);
```
#### Undefining Macros
After defining macros you can also undefine them at any point.
just Type
```C
#undefine PI
```
This is used to use macros only for specific lines of code and again undefine it.

#### Function-like Macros
Function-like uses the same `#define` keyword. The difference is that you use a pair of parentheses after the function name.
```C
#define hello_world() printf("Hello World!")
```
So calling:
```C
hello_world()
```
You get:
```C
printf("Hello World!");
```
You can set parameters too:
```C
#define hello(X) printf("Hello " X "!")
```
Now calling:
```C
hello("World");
```
You get the equivalent of:
```C
printf("Hello World!");
```
#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
[GCC Online Documentation: Macros](https://gcc.gnu.org/onlinedocs/cpp/Macros.html)

[GCC Online Documentation: Object-like macros](https://gcc.gnu.org/onlinedocs/cpp/Object-like-Macros.html#Object-like-Macros)

[GCC Online Documentation: Function-like macros](https://gcc.gnu.org/onlinedocs/cpp/Function-like-Macros.html#Function-like-Macros)

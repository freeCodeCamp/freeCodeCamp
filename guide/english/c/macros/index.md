---
title: Macros in C
---
## Macros in C

A macro is a piece of code with a given name. When the name is used, it is replaced by the content of the macro.

#### Defining macros
The `#define` keyword is used to define new macros. It's followed by a name and a content. By convention, macro names are written in uppercase.
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

#### Types of macros
There are two type of macros. The `Object-like` macros, showed above, and the `Function-like` macros.

#### Function-like Macros
Function-like uses the same `#define` keyword. The difference is that you use a pair o parentheses after the function name.
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
You get the equivallent of:
```C
printf("Hello World!");
```
An example to explain how code is replaced by macros
```c
#define add(a,b) a+b
```
Now calling :
```c
int x = 2*add(3,5)*4;
```
Here, the value of x will be 26 because the expression will become 2*3+5*4 which evaluates to give 26. Sometimes we think that the macro will give us 3+5 i.e. 8 and the expression will become 2*8*4 but this is not the case. This shows how the code is replaced exactly.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
[GCC Online Documentation: Macros](https://gcc.gnu.org/onlinedocs/cpp/Macros.html)

[GCC Online Documentation: Object-like macros](https://gcc.gnu.org/onlinedocs/cpp/Object-like-Macros.html#Object-like-Macros)

[GCC Online Documentation: Function-like macros](https://gcc.gnu.org/onlinedocs/cpp/Function-like-Macros.html#Function-like-Macros)

---
title: Macros in C
---
## Macros in C

A macro is a piece of code with a given name. When the name is used, it is replaced by the content of the macro.

#### Defining macros
The `#define` keyword is used to define new macros. It's followed by a name and a content, but no equals sign. By convention, macro names are written in uppercase.
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

#### Why Macros?
The C compiler will go through your code and replace every occurrence of a macro with it's value. This begs the question, what is the point of using macros? The answer: macros are a tool for the programmer, not for the program.

If you have the number `365` hard-coded into your program, it becomes difficult for you and other people who may look at your code to understand what it means. If you `#define DAYSINYEAR 365` and use that instead of the number, the code makes a lot more sense.

It's also beneficial if you have many instances of the same thing. If you'd used `2018` as the year in multiple places in your program, and then the year changed to `2019`, you would have to go and find every single line containing `2018` and change it, hoping you didn't miss any. With the macro `#define YEAR 2018`, you can simply change the value of the macro and be confident all of the values have been updated accordingly.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
[GCC Online Documentation: Macros](https://gcc.gnu.org/onlinedocs/cpp/Macros.html)

[GCC Online Documentation: Object-like macros](https://gcc.gnu.org/onlinedocs/cpp/Object-like-Macros.html#Object-like-Macros)

[GCC Online Documentation: Function-like macros](https://gcc.gnu.org/onlinedocs/cpp/Function-like-Macros.html#Function-like-Macros)

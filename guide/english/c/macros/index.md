---
title: Macros in C
---
## Macros in C

A macro is a piece of code with a given name. When the name is used, it is replaced by the content of the macro. The `#define` keyword is used to define new macros. It's followed by a name and a content. By convention, macro names are written in uppercase. There are two type of macros: `Object-like` macros and `Function-like` macros.

#### Why Macros?
The C compiler will go through your code and replace every occurrence of a macro with it's value. This begs the question, what is the point of using macros? The answer: macros are a tool for the programmer, not for the program.

If you have the number `365` hard-coded into your program, it becomes difficult for you and other people who may look at your code to understand what it means. If you `#define DAYSINYEAR 365` and use that instead of the number, the code makes a lot more sense.

It's also beneficial if you have many instances of the same thing. If you'd used `2018` as the year in multiple places in your program, and then the year changed to `2019`, you would have to go and find every single line containing `2018` and change it, hoping you didn't miss any. With the macro `#define YEAR 2018`, you can simply change the value of the macro and be confident all of the values have been updated accordingly.


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
hello_world();
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
An example to explain how code is replaced by macros
```c
#define add(a,b) a+b
```
Now calling :
```c
int x = 2*add(3,5)*4;
```
Here, the value of x will be 26 because the expression will become 2*3+5*4 which evaluates to give 26. Sometimes we think that the macro will give us 3+5 i.e. 8 and the expression will become 2*8*4 but this is not the case. This shows how the code is replaced exactly.

#### Special Operators in Macros
One can use the special operators # (stringize) and ## (concatenate) in macros for achieving unique functionality.

##### Stringizing Operator (#)
A macro's parameter preceded by a `#` is converted and treated as a string token.  
For example, we can define ERROR and WARN macros that print a LOG message.  
While the LOG message gets prefixed with either an `ERR` or a `WARN`, respectively.
```C
#define LOG(level, message) printf(#level ": " #message "\n")
#define ERROR(msg) LOG(FAIL, msg)
#define WARN(msg) LOG(WARN, msg)
```

Now, one can use it as
```C
ERROR(Invalid settings);  // Output-> FAIL: Invalid settings
WARN(Upper threshold);    // Output-> WARN: Upper threshold 
```

##### Concatenation (or token-pasting) Operator (##)
Using concatenation the parameters can be joined together to form one single token. Token-pasting is much more powerful in the sense that the resulting token could be an object defined in the C program. 
```C
#define NUM(x) number_##x

void foo() {
  int number_one = 10;
  int number_two = 15;

  printf("%d + %d = %d\n", NUM(one), NUM(two), NUM(one) + NUM(two));
  // Output-> 10 + 15 = 25
}
```

#### More Information:
- [GCC Online Documentation: Macros](https://gcc.gnu.org/onlinedocs/cpp/Macros.html)
- [GCC Online Documentation: Object-like macros](https://gcc.gnu.org/onlinedocs/cpp/Object-like-Macros.html#Object-like-Macros)
- [GCC Online Documentation: Function-like macros](https://gcc.gnu.org/onlinedocs/cpp/Function-like-Macros.html#Function-like-Macros)

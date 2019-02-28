---
title: C
---

# C Programming Language

## Table of Contents
- [What is C?](#what-is-c)
- [Hello World in C](#hello-world-in-c)
    - [C File Extension](#c-file-extension)
    - [Compilation and Running](#compilation-and-running)
- [Review and Additional Details](#review-and-additional-details)
- [More Information](#more-information)

## What is C?
C is a general-purpose programming language invented by [Dennis Ritchie](https://en.wikipedia.org/wiki/Dennis_Ritchie) between 1969 and 1973 at Bell Labs. Since then, it has been used to create useful tools like the Linux Kernel, which allows software to interact with hardware on Linux-based operating systems. It can perform this and other low-level operations because it was designed to be very close to machine code while still being human-readable. Because of this, it provides direct access to computer memory and hardware. This makes it very useful in hardware and robotics applications where having access to those features quickly is important. 

C, like other low-level languages, requires compilation. The compilation process takes the C code that can be read by a person and turns it into code that can be read and executed by a computer. Compilation requires a compiler, which can either be used from the command line or can be used in an Integrated Development Environment (IDE).

If you would prefer to use the command line, you may consider using the GNU Compiler Collection `gcc`. It can be found installed by default on GNU+Linux operating systems and on macOS and is simple to install on Windows. For beginners, however, having an IDE may be more comfortable. Consider CodeBlocks or Xcode (use Command Line Tools if you do not want the whole Xcode package) if you're interested in being able to write and run code from a Graphical User Interface (GUI).

## Hello World in C
Now that you have some background, let's start with a `'Hello, World'` program. `'Hello, World'` is a traditional way of getting started with a language - it allows us to write a small amount of code and see immediate feedback when compiled and ran.

```C
#include <stdio.h>

int main(void)    
{
    printf("Hello, World!\n");
    return 0;
}
```

Let's break this program down step-by-step:

First, the `#include` directive:
```C
#include <stdio.h>
```

This is an instruction to the preprocessor to find and include a header file. Header files contain additional code that we can access and use from our code. In this case, the preprocessor has been instructed to include `<stdio.h>`, which contains all kinds of useful functions like `printf()`. The `include` directive can also be written as `#include "stdio.h"`. The difference between the two is using quotes will look for the file in the current directory first, while using angle brackets will look for the file in the include path.

```C
int main(void)
{
}
```

This code declares the `main` function. The `main` function is special - it will always get called exactly one time and is always the 'main' part of your program. If this isn't in your program, your program won't compile.

Starting the function declaration with `int` means that this function will return an `int` value when running the code. `int` is the 'integer' data type, and integers are whole numbers (e.g., `-3`, `0`, `18`). After the function has no more code to run, it will return an integer value. By convention, the integer returned is `0` to signal to the operating system the program exited successfully.

Next is `main`. The `main` function is the parent where all the other elements and functions are its children. `main` is followed by a list of arguments or inputs to the function. In our case, there are none so we denote it with `(void)`. This tells the compiler that this function doesn't take any arguments, meaning that it has no input.

Finally, there are the brackets: `{` and `}`. These mark the beginning and end of the function block. Any code within them defines what the function does.

Now let's look at the body of the `main` function:

```C
    printf("Hello, World!\n");
```

`printf` is a function that takes a sequence of characters (commonly known as a 'string') and displays it on the screen. The parenthesis indicate the list of parameters passed to the function - in this case we want the `printf` function to take the `"Hello, World!\n"` string as an argument and print to the screen. Strings are surrounded by quotes "like this" to denote the start and end of the character sequence.

Notice the `\n` within the quotes - this is an escape sequence that tells the `printf` function to print the newline character. A newline character is what gets printed when you hit enter on your keyboard. Without explicitly telling C to print a newline, all output will continue on the same line.

Finally, the `printf()` statement is concluded with a semicolon (`;`). This tells the compiler that the statement (our instruction) is complete. Without it, the compiler doesn't know where one statement ends and another begins, so it's important to include it!

The program ends with a return statement:
```C
return 0;
```
The return statement will exit the function and return the specified value to the calling function or, in the case of `main`, the operating system. When you're running code on your computer, the return value of `main` (more commonly known as the `exit code`) is used as a signal to other programs that interact with your code.

As before, this line ends with a semicolon to indicate that the statement has completed.

### C File Extension
You can save your hello world file as whatever you want, but it needs to end with the `.c` file extension. In this example, the file is given a descriptive name `helloworld.c` that ends with a `.c` file extension.

### Compilation and Running
There are many ways to compile and get C code running on your computer. Here are a few:

#### Compilation and running from the command line with GCC
If you're running Mac or GNU+Linux, you most likely have GCC already installed.

`gcc` is the GNU C Compiler, and it will compile the C file we give it into a program that can be run by your computer.

To compile from the command line using `gcc`, run the following command from the terminal:
```shell
gcc -o helloworld ./helloworld.c
```

`-o helloworld` tells GCC that you want the compiled file (the output of `gcc`) to be a file called "helloworld". The final part of the command tells GCC where the C file to be compiled can be found.

Once it is compiled, run the following command:
```shell
./helloworld
```

If everything has gone well, you should see `Hello, World!` printed to the screen!

#### Compilation and running C in Windows with Cygwin
[Cygwin](htttp://www.cygwin.com) is a program that provides a UNIX environment for the Windows operating system. Cygwin is bundled with the `gcc` compiler, allowing Windows users to compile their C code.

You do not need to specify the path (prepending the name of the C program with '`./`') in Windows as you would in Linux and macOS.

#### Compilation and running C with CodeBlocks
[Code::Blocks](http://www.codeblocks.org/downloads) is a free C, C++ and Fortran IDE built to meet the most demanding needs of its users. It is designed to be very extensible and fully configurable.
Make a new program with `file` -> `new` -> `file`, select C/C++ source, select C as your language, and then copy over the helloworld.c code that you read through earlier. Compile and run it with `Build` -> `Build and Run`.

#### Compilation and running C with Xcode
[Xcode](https://developer.apple.com/xcode/) is an integrated development environment (IDE) for macOS containing a suite of software development tools developed by Apple for developing software for macOS, iOS, watchOS, and tvOS.

#### Compilation and running C with Dev-C++
[Dev-C++](https://sourceforge.net/projects/orwelldevcpp/) is a free, portable, fast and simple C/C++ IDE

Make a new program with `file` -> `new` -> `Source File`, then copy over the helloworld.c text that you read through earlier and then save the file with `file` -> `Save As`  as hello.c , and compile and run the code with `Execute` -> `Compile & Run`.

## Review and Additional Details
- C is the common language or *lingua franca* of programming languages; many other languages are based on C.
- C was used to re-implement the Unix operating system as Linux.
- C is useful because it is small, fast, and has access to low-level operations. Because of this, it gets used a lot in robotics, operating systems, and consumer electronics.
- C can be used to access specific hardware addresses and to perform type punning to match externally imposed interface requirements, with a low run-time demand on system resources.

- A C program has a few critical parts:
  - The `include` directive, tells the C preprocessor where to find additional code that will be used to compile the program.
  - The main function, which is where the code will first be executed and is required in order to compile.
  - Code within the main function will get executed, including a return statement that exits the function, ends the program and returns the value to the operating system that called it.
  - C code needs to be compiled in order to run.

## More information:
- [C Programming Tutorials.](https://www.tutorialspoint.com/cprogramming/)

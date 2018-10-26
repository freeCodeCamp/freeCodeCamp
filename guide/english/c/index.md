---
title: C
---

# Hello World! - Your first C Program

## Getting the most out of this course
Make sure that you're comfortable with all of the concepts in this part of the guide before moving on. Getting your first program running is important because it will allow you to follow along with the examples, which is another good thing to do &mdash; practice makes perfect! Concepts that might be confusing will have an annotation that links to the appendix. If you don't understand a concept, make sure that you consult the appendix for more information.

## Course Goal
The goals of this course are to teach the C language to beginners. Ideally, someone who has never touched a computer language before will be able to know C by following these guides. However, they will still be useful to more experienced programmers by including a summary at the end of each article. Although the content taught here is transferable to microcontrollers like the Arduino, it is not the focus of this guide.

## What is C?

C is a general purpose programming language invented by Dennis Ritchie between 1969 and 1973 at Bell Labs. Since then, it has been used to create things like the Linux Kernel, which allows software to interact with hardware on Linux-based operating systems. It can do this, and other low-level operations, because it was designed to be very close to machine code while still being human-readable. Because of this, it provides direct access to computer memory and hardware. This makes it very useful in hardware and robotics applications where having access to those features quickly is important. 
C, like other low-level languages, requires compilation. The compilation process takes the C code that can be read by a person and turns it into code that can be read and executed by a computer. Compilation requires a compiler, which can either be used from the command line or can be used in an Integrated Development Environment (IDE).

If you would prefer to use the command line, consider the GNU Compiler Collection `gcc`. It can be found by default on GNU+Linux operating systems and on Mac, and is easy to get on Windows. For beginners, however, having an IDE may be more comfortable. Consider CodeBlocks or Xcode (use Command Line Tools if you do not want the whole XCode package) if you're interested in being able to write and run code from a Graphics User Interface (GUI).

Now that you have that background, let's start with our 'Hello, World' program. 'Hello, World' is a traditional way of getting started with a language: it shows that we can write code and make it run, so it's a good place to start!

## Hello world in C

```C
#include <stdio.h>

int main(void)
{
    printf("hello, world\n");
    return 0;
}
```

Let's break this program down step-by-step.

First the `#include` directive:
```C
#include <stdio.h> // This is called preprocessor directives
```
This is an instruction to the preprocessor to find and include a header file. Header files contain additional code that we can use. In this case, the preprocessor has been instructed to include `<stdio.h>`, which contains all kinds of useful functions like `printf()`. We'll get into detail about what functions are later, but for now just remember that a function is a collection of code that we can use. The include directive can also be written as `#include "stdio.h"`. The difference is if we use quotes, it will look for the file in the current directory first, while using brackets will look for the file in the include path, but don't worry too much about it right now.

```C
int main(void)
{
}
```
This code declares the main function. The main function is special &mdash; it will always get called and is always the 'main' part of your program. If this isn't in your program, your program can't run and won't compile.

Starting the function declaration with `int` means that this function will return an `int` value when it's done running through its code &mdash; it's this function's return value. `int` is the 'integer' data type, and integers are whole numbers like -3, 0, or 18. So we know that this code will run, and when it's done, it will return an integer. By convention, this integer is 0 to signal the operating system that it was successful.

Next is `main`. `main` is the name of the function, and as you learned earlier, it's important to have a `main` function because your program won't work without it. `main` is followed by a list of arguments or inputs to the function, in our case there are none, so we denote it with `(void)`. This tells the compiler that this function doesn't take any arguments, meaning that it has no input.

This might not make a lot of sense right now, but you'll be learning more about this when you start reading about functions in C later. For now, just remember that `main` is required for your C program, it isn't taking any arguments, and it's returning an integer.

Finally, there are the brackets: `{` and `}`. These mark the beginning and end of the function block. The open curly bracket (`{`) marks the beginning, and the close curly bracket (`}`) marks the end. Any code within them defines what the function does.

Now let's look at the meat of the program:

```C
    printf("Hello, World!\n");
```

`printf` is a function that takes a sequence of characters commonly known as a string, and prints it to the screen. The parenthesis indicate the list of parameters passed to the function, in this case we want the `printf` function to take the string and print to the screen. Strings are surrounded by quotes "like this" to denote the start and end of the character sequence.

Notice the \n found within the quotes &mdash; this is an escape sequence, which tells the `printf` function to print the newline character. A newline character is what gets printed when you hit enter on your keyboard. Without explicitly telling C to print a newline, everything will continue on the same line.

Finally, the printf() statement is concluded with a semicolon (`;`). This tells the compiler that the statement &mdash; our instruction, is complete. Without it, the compiler doesn't know where one statement ends and another begins, so it's important to include it.

The program ends with a return statement:
```C
return 0;
```
The return statement will exit the function and retun the specified value to the calling function or in the case of `main` the operating system. When you're running code on your computer, the return value of `main` more commonly known as exit code is used to signal other programs that interact with your code.

As before, this line ends with a semicolon to indicate that the statement has completed.

## Compilation and Running
You can save your hello world file as whatever you want, but it needs to end with the .c file extension. In this example, the file has been named "helloworld.c", because that is a clear name with a .c file extension.

There are many ways to compile and get C code running on your computer. Here are a few:

#### Compilation and running from the command line with GCC
If you're running Mac or GNU+Linux, you've most likely already have GCC installed.

In order to run your C program, it needs to be compiled. In order to compile from the command line using gcc, run the following command from your terminal:
```shell
gcc -o helloworld ./helloworld.c
```
`gcc` is the Gnu C Compiler, and it will compile the C file we give it into a program that can be run by your computer.

`-o helloworld` tells GCC that you want the compiled file (the output of gcc) to be a file called "helloworld". The final part of the command tells GCC where the C file to be compiled can be found. If you aren't comfortable with navigating from the command line, this step will be hard, but that's okay &mdash; it's easy to learn and come back, or you can try from an IDE.

Once you've got it compiled, run the following command:
```shell
./helloworld
```

If everything has gone well, you should see `Hello, World!` printed to the screen.

#### Compilation and running C with CodeBlocks
<a href='http://www.codeblocks.org/downloads/26' target='_blank' rel='nofollow'>Codeblocks can be downloaded from here.</a>
Make a new program with `file` -> `new` -> `file`, select C/C++ source, select C as your language, and then copy over the helloworld.c code that you read through earlier. Compile and run it with `Build` -> `Build and Run`.


#### Compilation and running C with Xcode
[Xcode can be downloaded from here.](https://developer.apple.com/xcode/)

#### Compilation and running C with Dev-C++
<a href='https://sourceforge.net/projects/orwelldevcpp/' target='_blank' rel='nofollow'>Dev-C++ can be downloaded from here.</a>
Make a new program with `file` -> `new` -> `Source File`, then copy over the helloworld.c text that you read through earlier and then save the file with`file` -> `save As`  as hello.c , and Compile and run the code with `Execute` -> `Compile & Run`.

# Before you go on...

## A review
* C is the common language or *lingua franca* of programming languages, many other languages are based on C.
* C was used to re-implement the Unix operating system as Linux.
* C is useful because it's small, fast, and has access to low-level operations. Because of this, it gets used a lot in robotics, operating systems, and consumer electronics, and if you really wanted to even to generate webpages.
* A C program has a few critical parts:
 * The include directive, tells the C preprocessor where to find additional code that will be used to compile the program.
 * The main function, which is where the code will first be executed and is required in order to compile.
 * Code within the main function will get executed, including a return statement that exits the function, ends the program and returns the value to the operating system that called it.
* C code needs to be compiled in order to run.
* C can be used to access specific hardware addresses and to perform type punning to match externally imposed interface requirements, with a low run-time demand on system resources.
#### More information:

* [C Programming Tutorials.](https://www.tutorialspoint.com/cprogramming/)




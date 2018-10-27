---
title: C
---



# INTRODUCTION TO C

C is a general purpose programming language initially developed by Dennis Ritchie between 1969 and 1973 at Bell Labs. It was mainly developed as a system programming language to write operating system in high level language.

Since then, it has been used to create things like the Linux Kernel, which allows software to interact with hardware on Linux-based operating systems. Because it was designed to be very close to machine code while still being human-readable it provides direct access to computer memory and hardware. This makes it very useful in hardware and robotics applications where having access to those features quickly is important.

## How to use C language
C, like other low-level languages, requires compilation. The compilation process takes the C code that can be read by a person and turns it into code that can be read and executed by a computer.

Compilation requires a compiler. There are certain online compilers like <https://ide.geeksforgeeks.org/>, <http://ideone.com/> or <http://codepad.org/> that can be used to start C without installing a compiler.

**Windows**: There are many compilers available freely for compilation of C programs like Code Blocks  and Dev-CPP.   We strongly recommend Code Blocks.

**Linux**: For Linux, gcc comes bundled with the linux,  Code Blocks can also be used with Linux.




## Program to Print "Hello World!" in C.

```C
#include <stdio.h>  //header file

int main(void)
{
    printf("hello, world\n");      //to print the sentence
    return 0;
}
```

Let's break this program down step-by-step.

First is the `#include<>`:
It is used to call or use preprocessor directives in the program. In a very basic term, preprocessor takes a C program and produces another C program in that program which contains functions defination which are used in the program to reduce code. 

```C
#include <stdio.h> // This is called preprocessor directives
```
This is an instruction to the compiler to find and include a set of header files. Header files contain additional code that we can use. In this case, the compiler has been instructed to include `<stdio.h>`, which contains all kinds of useful functions like `printf()`. We can also write it as `#include"stdio.h"`. We'll get into detail about what functions are later, but for now just remember that a function is a collection of code that we can use.

```C
int main(void)
{
}
```
This code declares the main function. The main function is special- it will always get called and is always the 'main' part of your program. If this isn't in your program, your program can't run and won't compile.

Starting the function declaration with `int` means that this function will return an `int` value when it's done running through its code-. `int` is the 'integer' data type, and integers are whole numbers like -3, 0, or 18. So we know that this code will run, and when it's done, it will give us back an integer. By convention, this integer is 0.

Next is `main`. `main` is the name of this function, and as you learned earlier, it's important to have a `main` function because your program won't work without it. `main` is the point in the program from where the compilation starts. `(void)` tells the compiler that this function doesn't take any parameters, meaning that it has no input in the Parameter.


Finally, there are the brackets: `{` and `}`. These mark the beginning and end of the function. The open curly bracket (`{`) marks the beginning, and the close curly bracket (`}`) marks the end. Everything between the two is within the function.

Now let's look at the meat of the program:

```C
    printf("Hello, World!\n");
```

`printf` is a function whose defination is written in the preprocessive directive which we included in the beginning of the program. It used to print anything on the screen which we want to tell to the user. The parenthesis includes the information we want the `printf` function to take and print to the screen.

Notice the \n found within the quotes- this tells the `printf` function to print a newline. A newline is what gets printed when you hit enter on your keyboard. Without explicitly telling C to print a newline, everything will be printed on the same line.

Finally, the printf() statement is concluded with a semicolon (`;`). This shows that this line of code is over. Without it, the compiler doesn't know where one line ends and another begins, so it's important to include.

The program ends with a return statement:
```C
return 0;
```
This shows that the function is over and that it should end by giving a value of 0 to whatever made it run. When you're running code on your computer, this is good to have because it allows other programs to interact with yours in a better way.

As before, this line ends with a semicolon to indicate that the line has completed.

## Compilation and Running
You can save your hello world file as whatever you want, but it needs to end with the .c file extension. In this example, the file has been named "helloworld.c", because that is a clear name with a .c file extension.


###To learn more about C you can refer to following websites
* [C Programming Tutorials.](https://www.tutorialspoint.com/cprogramming/) , <https://www.geeksforgeeks.org> or <https://www.w3schools.in/c-tutorial>

or you can refer to following youtube videos

##In Hindi

<a href="http://www.youtube.com/watch?feature=player_embedded&v=Bjzfag1zZPg" target="_blank"><img src="http://img.youtube.com/vi/Bjzfag1zZPg/0.jpg" 
alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>


##In English

<a href="http://www.youtube.com/watch?feature=player_embedded&v=BjVeWRNiddE" target="_blank"><img src="http://img.youtube.com/vi/BjVeWRNiddE/0.jpg" 
alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>




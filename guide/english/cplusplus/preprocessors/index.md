---
title: Preprocessors
---

## Preprocessors in C / CPP

As the name suggests Preprocessors are programs that processes our source code before compilation. There are a number of steps involved between writing a program and executing a program in C / C++. Let us have a look at these steps before we actually start learning about Preprocessors.

![Img](https://i.imgur.com/Pb0aTkV.png)

You can see the intermediate steps in the above diagram. The source code written by programmers is stored in the file program.c. This file is then processed by preprocessors and an expanded source code file is generated named program. This expanded file is compiled by the compiler and an object code file is generated named program.obj . Finally the linker links this object code file to the object code of the library functions to generate the executable file program.exe .

Preprocessor programs provides preprocessors directives which tell the compiler to preprocess the source code before compiling. All of these preprocessor directive begins with a `#` (hash) symbol. This (‘#’) symbol at the beginning of a statement in a C/C++ program indicates that it is a pre-processor directive. We can place these pre processor directives anywhere in our program. Examples of some preprocessor directives are: `#include` , `#define`, `#ifndef` etc.

### Types of Preprocessor directives:

1. Macros
2. File Inclusion
3. Conditional Compilation
4. Other directives

###Macros:

Macros are piece of code in a program which is given some name. Whenever this name is encountered by the compiler the compiler replaces the name with the actual piece of code. The `#define` directive is used to define a macro.

```cpp
  #include<iostream>
  #define LIMIT 3
  int main()
  {
    for(int i=0; i < LIMIT; i++)
    {
	  std::cout<<i<<" " ;
	}
	  return 0;
  }
```

Output:

`0 1 2`

In the above program, when the compiler executes the word `LIMIT` it replaces it with 3. The word `LIMIT` in macro definition is called macro template and ‘3’ is macro expansion.

There should not be semi-colon(‘;’) at the end of macro definition. Macro definitions do not need a semi-colon to end.

###File Inclusion: 
This type of preprocessor directive tells the compiler to include a file in the source code program. There are two types of files which can be included by the user in the program:
* ####Header File or Standard files: 
These files contains definition of pre-defined functions like printf(), ...scanf() etc. These files must be included for working with these functions. ...Different function are declared in different header files. For example ...standard I/O funuctions are in ‘iostream’ file whereas functions which ...perform string operations are in ‘string’ file.
####Syntax:
`#include< file_name >`
 where file_name is the name of file to be included. The `<` and `>` brackets  tells the compiler to look for the file in standard directory.
* ####User defined files: 
When a program becomes very large, it is good practice to divide it into smaller files and include whenever needed. These types of files are user defined files. These files can be included as:
...`#include"filename"`

###Conditional Compilation: 
Conditional Compilation directives are type of directives which helps to compile a specific portion of the program or to skip compilation of some specific part of the program based on some conditions. This can be done with the help of two preprocessing commands `ifdef` and `endif`.
####Syntax:
```cpp
  ifdef macro_name
    statement1;
    statement2;
    statement3;
    .
    .
    .
    statementN;
  endif
```
If the macro with name as ‘macroname‘ is defined then the block of statements will execute normally but if it is not defined, the compiler will simply skip this block of statements.

###Other directives: 
Apart from the above directives there are two more directives which are not commonly used. These are:
1. #####`#undef` Directive: 
The `#undef` directive is used to undefine an existing macro. This directive works as:
#####Syntax:
`#undef LIMIT`
Using this statement will undefine the existing macro LIMIT. After this statement every `#ifdef LIMIT` statement will evaluate to false.

2. #####`#pragma` Directive: 
This directive is a special purpose directive and is used to turn on or off some features. This type of directives are compiler-specific i.e., they vary from compiler to compiler. Some of the `#pragma` directives are discussed below:
##### `#pragma startup` and `#pragma exit`:
These directives helps us to specify the functions that are needed to run before program startup( before the control passes to main()) and just before program exit (just before the control returns from main()).
```cpp
#include<stdio.h>
void func1();
void func2();
#pragma startup func1
#pragma exit func2 
void func1()
{
    printf("Inside func1() ");
}
void func2()
{
    printf("Inside func2() ");   
}
int main()
{
    printf("Inside main() ");
     
    return 0;
}
```
Output:  
`Inside func1() Inside main() Inside func2() `  
<br>
The above code will produce the output as given below when run on GCC compilers:  
<br>
Output:  
`Inside main()`  
<br>
This happens because GCC does not supports #pragma startup or exit. However you can use the below code for a similar output on GCC compilers.
```cpp
#include<stdio.h>
void func1();
void func2();
void __attribute__((constructor)) func1();
void __attribute__((destructor)) func2();
void func1()
{
    printf("Inside func1()\n");
}
void func2()
{
    printf("Inside func2()\n"); 
}
int main()
{
    printf("Inside main()\n");
     
    return 0;
}
```
##### `#pragma warn` Directive:
This directive is used to hide the warning message which are displayed during compilation.
We can hide the warnings as shown below:
#####`#pragma warn -rvl`:
This directive hides those warning which are raised when a function which is supposed to return a value does not returns a value.
#####`#pragma warn -par`:
This directive hides those warning which are raised when a function does not uses the parameters passed to it.
#####`#pragma warn -rch`:
This directive hides those warning which are raised when a code is unreachable. For example: any code written after the return statement in a function is unreachable.
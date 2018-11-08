---
title: Hello World C
---

 ## Hello World

Probably the first line of text that everyone prints out on the console when one begins his/her remarkable jouney of this endless programming world.
To write on console you can use the function `printf()` contained in the library `include <stdio.h>`

 ```C
 #include <stdio.h>

 int main(void)
 {

     printf("Hello World!\n");  //lines starting with this are called comments..

     return 0;
 }
 ```
  ## Explanation 
 * The #include <stdio.h> is a preprocessor command. This command tells compiler to include the contents of stdio.h (standard input and        output) file in the program.
 * The stdio.h file contains functions such as scanf() and print() to take input and display output respectively.
 * If you use printf() function without writing #include <stdio.h>, the program will not be compiled.
 * The execution of a C program starts from the main() function.
 * The printf() is a library function to send formatted output to the screen. In this program, the printf() displays Hello, World! text        on the screen.
 * The \n in printf creates a new line for the forthcoming text. 
 * The return 0; statement is the "Exit status" of the program. In simple terms, program ends with this statement

 ## Output:
 ```
 >Hello World!
 ```
 #### More Information
 
 * Conventionally, the first ever program you write is the "hello world" program, be it in any language.
 * This is because Brian Kernighan was the  first  to write "hello, world" program for the documentation of the BCPL programming language developed by Martin Richards. 


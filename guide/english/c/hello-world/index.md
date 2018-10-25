---
title: Hello World in C
---

 ## Hello World

To write on console you can use the function `printf()` contained in the library `include <stdio.h>`

 ```C
 #include <stdio.h>

 int main(void)
 {

     printf("hello, world\n");  //lines starting with this are called comments..

     return 0;
 }
 ```
  ## Explanation 
 * The #include <stdio.h> is a preprocessor command. This command tells compiler to include the contents of stdio.h (standard input and        output) file in the program.
 * The stdio.h file contains functions such as scanf() and print() to take input and display output respectively.
 * If you use printf() function without writing #include <stdio.h>, the program will not be compiled because stdio.h file has the all details that's mean pre defined functions.
 * The execution of a C program starts from the main() function.
 * The printf() is a library function to send formatted output to the screen(Display the output) . In this program, the printf() displays    hello, world, which is in double quote "", wecan also use sngle quotes. like this->
    
    printf('hello, world');.
    
 * "\n" is used to print new line that's mean next statment will print on new line.
 * The return 0; statement is the "Exit status" of the program. In simple terms, program ends with this statement

 ## Output:
 ```
 >hello, world
 ```

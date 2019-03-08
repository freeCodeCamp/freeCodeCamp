---
title: Hello World C
---

 ## Hello World

Probably the first line of text that everyone prints out on the console when one begins his/her remarkable journey of this endless programming world.
To write on console you can use the function `printf()` contained in the library `include <stdio.h>`

 ```C
 #include <stdio.h>
 
 /* Any text in between these two characters is a block comment.
    Block comments, unlike inline comments, can span multiple lines.
    Comments are ignored by the compiler and will not be executed.
  */
 int main(void)
 {
     printf("Hello, World\n");  // text after two slashes '/' are called inline comments.
     return 0;
 }
 ```
 
## Explanation 
 * The `#include <stdio.h>` is a preprocessor directive. This directive tells preprocessor to include the contents of `stdio.h` (standard input and output) file in this file.
 * The `stdio.h` file contains functions such as `scanf()` and `printf()` to take input and display output respectively.
 * If you use `printf()` function without writing `#include <stdio.h>`, the compiler will generate an error during compliation of the program.
 * The execution of a C program starts from the `main()` function. We write `int` before it to specify that the program returns a integer value.
 * The `printf()` is a library function to send formatted output to the standard output stream, most commoly the screen. In this program, the `printf()` displays `Hello, World!` text on the screen.
 * `\n` is used here to take the cursor to the next line. Hence, if we print anything after this command, it will be printed on a new line.
 * The `return 0;` statement is the "Exit code" of the program. In simple terms, the program ends with this statement or it signifies that function does not return any value.

## Output:
 ```
 Hello, World!
 ```
 
 #### More Information
 
 * Conventionally, the first ever program you write is the "hello world" program, be it in any language.
 * This is because Brian Kernighan was the  first  to write "hello, world" program for the documentation of the BCPL programming language developed by Martin Richards.
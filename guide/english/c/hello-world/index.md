---
title: Hello World C
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
 * The stdio.h file contains functions such as scanf() and printf() to take input and display output respectively.
 * If you use printf() function without writing #include <stdio.h>, the program will not be compiled.
 * The execution of a C program starts from the main() function.
 * The printf() is a library function to send formatted output to the screen. In this program, the printf() displays Hello, World! text        on the screen.
 * The return 0; statement is the "Exit status" of the program. In simple terms, program ends with this statement

 ## Output:
 ```
 >hello, world
 ```
## What does printf() return
It returns the total number of character or interger it prints, and sometimes return negative value if there is an output error.
Here is a simple code to make the concept clear.
```C
#include <stdio.h>

 int main() 
{ 
    int n = 5555; 
    
    printf("The number is:-");
    
    printf(" so the return value of printf() is : %d",printf("%d", n)); 
  
    return 0; 
} 
```
### Output
```
-> The number is:-5555 so the return value of printf() is : 4
```





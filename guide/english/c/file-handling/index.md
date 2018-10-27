---
title: File Handling
---
## File Handling

### Introduction
If you've written the C `helloworld` program before, you've already done file IO in C!  Congratulations! :tada:

```c
/* A simple hello world in C. */
#include <stdlib.h>

// Import IO functions.
#include <stdio.h>

int main() {
    // This printf is where all the file IO magic happens!
    // How exciting!
    printf("Hello, world!\n");
    return EXIT_SUCCESS;
}
```

File Handling is most important part of a programmer . In C language we use a structure pointer of a file type to declare a file

```c
FILE *fp;
```
C provides a number of build-in function to perform basic file operation

**fopen()**   **-**   **create a new file or open a existing file**

**fclose()**   **-**   **close a file**

**getc()**   **-**   **reads a character from a file**

**putc()**   **-**   **writes a character to a file**

**fscanf()**   **-**   **reads a set of data from a file**

**fprintf()**   **-**   **writes a set of data to a file**

**getw()**   **-**   **reads a integer from a file**

**putw()**   **-**   **writes a integer to a file**

**fseek()**   **-**   **set the position to desire point**

**ftell()**   **-**   **gives current position in the file**

**rewind()**   **-**   **set the position to the begining point**

### Opening a file

  The **fopen()** function is used to create a file or open a existing file
  
  ```c
  fp = fopen(const char filename,const char mode);
  ```
  
  In C there are many mode for opening a file 
  **r**  **-**   **open a file in reading mode**
  
  **w**  **-**   **opens or create a text file in writing mode**
  
  **a**  **-**   **opens a file in append mode**
  
  **r+**  **-**   **opens a file in both reading and writing mode**
  
  **a+**  **-**   **opens a file in both reading and writing mode**
  
  **w+**  **-**   **opens a file in both reading and writing mode**
  
  Here's an  example of reading and writing data to a file
  
  ```c
  #include<stdio.h>
#include<conio.h>
main()
{
 FILE *fp;
 char ch;
 fp = fopen("hello.txt", "w");
 printf("Enter data");
 while( (ch = getchar()) != EOF) {
    putc(ch,fp);
 }
 fclose(fp);
 fp = fopen("hello.txt", "r");
 
 while( (ch = getc(fp)! = EOF)
    printf("%c",ch);
    
 fclose(fp);
}
```

Now you might be thinking, "this justs prints text to my screen.  How is this file IO?"
The answer isn't obvious at first, and needs some understanding about the UNIX system.
Under a UNIX system, everything is treated as a file, meaning you can read and write from it.
This means that your printer can be abstracted as a file since all you do with a printer is write with it.
It is also useful to think of these files as streams, since as you'll see later, you can redirect them with the shell.

So how does this relate to `helloworld` and file IO?

When you call `printf`, you are really just writing to a special file called `stdout`, short for __standard output__.
`stdout` represents, well, the standard output as decided by your shell, which is usually the terminal.
This explains why it printed to your screen.

There are two other streams (i.e. files) that are available to you with effort, `stdin` and `stderr`.
`stdin` represents the __standard input__, which your shell usually attaches to the keyboard.
`stderr` represents the __standard error__ output, which your shell usually attaches to the terminal.

### Rudimentary File IO, or How I Learnt to Lay Pipes
Enough theory, let's get down to business by writing some code!
The easist way to write to a file is to redirect the output stream using the output redirect tool, `>`.
If you want to append, you can use `>>`. _N.b. these redirection operators are in_ `bash` _and similar shells._

```bash
# This will output to the screen...
./helloworld
# ...but this will write to a file!
./helloworld > hello.txt
```

The contents of `hello.txt` will, not surprisingly, be

```
Hello, world!
```

Say we have another program called `greet`, similar to `helloworld`, that greets you given your name.

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    // Initialize an array to hold the name.
    char name[20];
    // Read a string and save it to name.
    scanf("%s", name);
    // Print the greeting.
    printf("Hello, %s!", name);
    return EXIT_SUCCESS;
}
```

Instead of reading from the keyboard, we can redirect `stdin` to read from a file using the `<` tool.

```bash
# Write a file containing a name.
echo Kamala > name.txt
# This will read the name from the file and print out the greeting to the screen.
./greet < name.txt
# ==> Hello, Kamala!
# If you wanted to also write the greeting to a file, you could do so using ">".
```

### The Real Deal
The above methods only worked for the most basic of cases.  If you wanted to do bigger and better things, you will probably want to work with files from within C instead of through the shell.
To accomplish this, you will use a function called `fopen`.  This function takes two string parameters, the first being the file name and the second being the mode.
Mode is basically permissions, so `r` for read, `w` for write, `a` for append.  You can also combine them, so `rw` would mean you could read and write to the file.  There are more modes, but these are the most used.

After you have a `FILE` pointer, you can use basically the same IO commands you would've used, except that you have to prefix them with `f` and the first argument will be the file pointer.
For example, `printf`'s file version is `fprintf`.

Here's a program called `greetings` that reads a from a file containing a list of names and writes to another file the greetings.

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    // Create file pointers.
    FILE *names = fopen("names.txt", "r");
    FILE *greet = fopen("greet.txt", "w");

    // Check that everything is OK.
    if (!names || !greet) {
        fprintf(stderr, "File opening failed!\n");
        return EXIT_FAILURE;
    }

    // Greetings time!
    char name[20];
    // Basically keep on reading untill there's nothing left.
    while (fscanf(names, "%s\n", name) > 0) {
        fprintf(greet, "Hello, %s!\n", name);
    }

    // When reached the end, print a message to the terminal to inform the user.
    if (feof(names)) {
        printf("Greetings are done!\n");
    }

    return EXIT_SUCCESS;
}
```

Suppose `names.txt` contains the following:

```
Kamala
Logan
Carol
```

Then after running `greetings` the file `greet.txt` will contain:

```
Hello, Kamala!
Hello, Logan!
Hello, Carol!
```

Super awesome, right! :smile:

### More Information:
- <a href='https://en.wikibooks.org/wiki/C_Programming/File_IO' target='_blank' rel='nofollow'>Wikibooks page on file IO</a>

So far the operations using C program are done on a prompt / terminal which are not stored anywhere. But in software industry, most of the programs are written to store the information fetched from the program. One such way is to store the fetched information in a file. Different operations that can be performed on a file are:

Creation of a new file (fopen with attributes as “a” or “a+” or “w” or “w++”)
Opening an existing file (fopen)
Reading from file (fscanf or fgetc)
Writing to a file (fprintf or fputs)
Moving to a specific location in a file (fseek, rewind)
Closing a file (fclose)
The text in the brackets denotes the functions used for performing those operations.

Opening or creating file –
For opening a file, fopen function is used with the required access modes. Some of the commonly used file access modes are:

“r” – Searches file. If the file is opened successfully fopen( ) loads it into memory and sets up a pointer which points to the first character in it. If the file cannot be opened fopen( ) returns NULL.
“w” – Searches file. If the file exists, its contents are overwritten. If the file doesn’t exist, a new file is created. Returns NULL, if unable to open file.
“a” – Searches file. If the file is opened successfully fopen( ) loads it into memory and sets up a pointer that points to the last character in it. If the file doesn’t exist, a new file is created. Returns NULL, if unable to open file.
“r+” – Searches file. If is opened successfully fopen( ) loads it into memory and sets up a pointer which points to the first character in it. Returns NULL, if unable to open the file.
“w+” – Searches file. If the file exists, its contents are overwritten. If the file doesn’t exist a new file is created. Returns NULL, if unable to open file.
“a+” – Searches file. If the file is opened successfully fopen( ) loads it into memory and sets up a pointer which points to the last character in it. If the file doesn’t exist, a new file is created. Returns NULL, if unable to open file.
As given above, if you want to perform operations on binary file, then you have to append ‘b’ at the last. For example, instead of “w” you have to use “wb”, insead of “a+” you have to use “a+b”. For performig the operations on file, a special pointer called File pointer is used which is decalared as

FILE *fp; 
So, the file can be opened as 
fp = fopen(“fileName.txt”, “w”)
The second parameter can be changed to contain all the attributes listed in the above table.



 

Reading from a file –
The file read operations can be perfomed using functions fscanf or fgets. Both the functions performd the same operations as that of printf and gets but with an additional parameter, the file pointer. So, it depends on you if you want to read the file line by line or character by character.

And the code snippet for reading a file is as:

FILE * fp; 
fp = fopen(“fileName.txt”, “r”);
fscanf(fp, "%s %s %s %d", str1, str2, str3, &year);
Writing a file –:

The file write operations can be perfomed by the functions fprintf and fputs with similarities to read operations. The snippet for writing to a file is as :

FILE *fp ; 
fp = fopen(“fileName.txt”, “w”);
fprintf(fp, "%s %s %s %d", "We", "are", "in", 2012);
Closing a file –:
After every successful fie operations, you must always close a file. For closing a file, you have to use fclose function. The snippet for closing a file is given as :

FILE *fp ; 
fp= fopen(“fileName.txt”, “w”);
---------- Some file Operations -------
fclose(fp)

---
title: File Handling
---
## File Handling

### Introduction
If you've written the C `helloworld` program before, you've already done file INPUT/OUTPUT(Genrally reffered as IO) in C!  Congratulations! :tada:

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

File Handling is one of the most important part of a programming . In C language we use a **FILE** type structure pointer  to declare a **file**.

```c
FILE *fp;
..// declaration of file name as fp
```
C provides a number of build-in function to perform basic file operation

**fopen()**   **-**   **create a new file or open a existing file**

**fclose()**   **-**   **close a file**
//Most important part is to close the file to restrict any further changes.

**getc()**   **-**   **reads a character from a file**

**putc()**   **-**   **writes a character to a file**
//getc and putc() both method are are used for string or char arrays.

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
  ..//Provide access only to read a file but not to write it.
  
  **w**  **-**   **opens or create a text file in writing mode**
  ..//Provides access only to write on file not to read it.
  
  **a**  **-**   **opens a file in append mode**
  ..//Provides acces to append more words in file.
  
  **r+**  **-**   **opens a file in both reading and writing mode**
  
  **a+**  **-**   **opens a file in both reading and writing mode**
  
  **w+**  **-**   **opens a file in both reading and writing mode**
  
  **b**  **-**   **opens a file in binary mode**
  
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
This explains why it printed to your screen. `stdout` is stream used by O's to display the output on the monitor or particularly in your terminal.

There are two other streams (i.e. files) that are available to you with effort, `stdin` and `stderr`.
`stdin` represents the __standard input__, which your shell usually attaches to the keyboard in terms via keyboard service to console.
`stderr` represents the __standard error__ output, which your shell usually attaches to the terminal but this time to display **errors**.

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

There are a number of modes that can be used for file handling.

**"r"**   **-**   **Open file for reading**

**rb**   **-**   **Open file for reading in binary mode**

**w**   **-**   **Open file for writing**

**wb**   **-**   **Open file for writing in binary mode**

**a**   **-**   **Open file for appending**

**ab**   **-**   **Open file for appending in binary mode**

**r+**   **-**   **Open file for both reading and writing**

**rb+**   **-**   **Open file for both reading and writing in binary mode**

**w+**   **-**   **Open file for both writing and reading**

**wb+**   **-**   **Open file for both writing and reading in binary mode**

**a+**   **-**   **Open file for both reading and appending**

**ab+**   **-**   **Open file for both reading and appending in binary mode**

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

    fclose(names);
    fclose(greet);
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

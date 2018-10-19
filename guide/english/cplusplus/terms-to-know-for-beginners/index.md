---
title: IDE and Printing different text 
---
# Introduction to an IDE and printing different text : 

* In the last article, some download links for software required for programming . Software like this is known as an IDE.
 **IDE stands for Integrated Development Environment**

## IDEs mainly consist of 3 kinds of software :

**1 Editor :** A slightly modified text editor to make coding easy. An example of an editor for coding is Notepad++.

**2 Debugger :** Software that helps you find errors in your program , and resolve them before execution. Imagine FaceBook crashing on loading an application or a game crashing all of a sudden. To prevent faulty execution of a program, the debugger is a programmer's best friend.

**3 Compiler :** A compiler is the part of the computer which converts your high level program code to machine code : 0s & 1s ; so that the computer's Central Processing Unit (CPU) can understand the commands and execute them. From now on, we will be using the word **compiler** frequently.

*Q : Try searching for an IDE on Google and run your first program on it . Check the output*

Now, install the IDE and try changing the text from the program in the last article.

### Changing text on C++

* To change text ,change what's typed in the `""` after `cout<<`

A sample program :

```cpp

#include <iostream>
using namespace std :
int main()
{
    cout << "I Love freeCodeCamp ! ";
}
```

The above code returns an error because at line 2, we have used a colon(:) instead of a semicolon(;)
So, let's debug the error:

```C++
#include <iostream>
using namespace std ;
int main()
{
    cout << "I Love freeCodeCamp ! ";
    return 0;
}

```

Note that now the program runs perfectly.
The output will be : `I Love freeCodeCamp!`

### Now , let's change the text to something else like this:

```cpp
    cout << "Hello World!\t I love freeCodeCamp!";
```

The output will be something different this time:

```
Hello World!	 I love freeCodeCamp!
```

If you realised , the `\t` command created a _tab space_ between the two texts . This is one kind of special command in C++. These special commands are known as *Escape Sequences* .
They are used to print certain special characters a compiler cannot display.

#### Useful escape sequences:

* `\'` to print a single inverted comma
* `\"` to print a double inverted comma
* `\n` to print on a new line
* `\t` for a horizontal tab
* `\f` for a new page
* `\\` for a backslash
* `\?` for a question mark

##### Now, let's try printing numbers and special characters with some escape sequences:

```cpp
    cout << "40158 \t 236708 ! \n \\ @ \?" << endl;
```

The output changes to:
```
40158 	 236708 ! 
 \ @ ?
```

##### Let's try some other ways of printing:

```cpp
    cout << "1+2" << endl;
    cout << 1+2 << endl;
```

Output:

* The first output statement is `1+2`
* The second output statement is `3`

This is because we did not add the quotation marks for the second print statement and so, the compiler added the numbers before printing them.

#### Comments:

* Comments are an important feature of many programming languages. They allow the programmer to take notes for self help, and won't affect the running of the program.They also help another programmer to understand your code.

**The different types of comments and Syntax of a comment**:

  1 `//`  ~ _Single Line Comments_  : The length of these comments is 1 line (the line it is typed on) .
  2 `/* */` ~ _Multi Line Comments_ : These comments can take up a space of more than one line.

#### Example of using comments:

 ```cpp
     cout << "Hello Comment" << endl; //cout<<"Hello Comment"<<endl; , Single Line Comment.
     
    /* This is an example of a multi line comment. No output is generated for this .
    I now end the comment.  :) */
 ```

The output will be :

`Hello Comment`

As you may notice, the comments are ignored during program execution and do not show up on checking the output of the program.
It should be noted that while comments do add an extra level of readability to one's code, it's a bad habit to rely too heavily on comments to describe the logic in your code. In general, your code should speak for itself and reflect the intention of the programmer.

As you may notice, the comments are ignored during program execution and do not show up on checking the output of the program.
 
## Operators 
#### Variable Designation
* `*` Dereference
* `&` Address (of operand)
#### Compare two or more expressions
* `==` equal to
* `!=`  not equal to
* `<` less than
* `>` greater than
* `<=` less than or equal to
* `>=` greater than or equal to
* `||` Logical OR
* `&&` Logical AND
#### Assigns the right expression/value to the left variable/pointer
* `=` Assignment
* `+= , -=` Addition/subtraction assignment
* `*= , /=` Multiplication/Division assignment


```cpp
    (7==5); 
```
This evaluates to false

```cpp 
    (7!=5); 
```
This evaluates to true

<a href='https://repl.it/L4ox' target='_blank' rel='nofollow'>A summation of all the print statements used in this article. Feel free to tweak around woth the code ! :) </a>

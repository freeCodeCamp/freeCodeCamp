---
title: C++
---
# Hello World! - Your First C++ Program

## What is C++?

* C++ is a general purpose programming language which has been used since the 1990's
* It was designed by Bjarne Stroustrup under the name "C with classes".
* It is a version of C that includes Object-Oriented elements, including classes and functions.

* It is considered one of the biggest programming languages, as you can see in the following image:
![Img](http://static1.businessinsider.com/image/59deb30392406c21008b6148-1200/for-bonus-points-heres-the-chart-showing-these-languages-relative-popularity.jpg)
_source: Github_

### Your First Program in C++

```cpp
#include <iostream>
using namespace std;
int main()
{
    cout << "Hello World" << endl;
    return 0;
}
```

#### The Output of this program will simply be :

```
Hello World!
```

Now, let's break down the code:


#### Lines 1 and 2

```cpp
#include <iostream>
using namespace std;
```

* The first line tells the computer to use the "iostream" header file for this specific program . A header file is a seperate file with prewritten C++ code. There are many other header files which are requireed for a specific program to run properly. Some of them are : math , vector and string. Header files are generally represented by a ".h" extension (you don't need to add .h when including C++ standard library files)
* `iostream` stands for input-output stream . The "iostream" file contains code for allowing the computer to take input and generate an output, using the C++ language.
* The second line tells the computer to use the standard namespace which includes features of standard C++. You could write this program without this line, but you'd have to use `std::cout` instead of `cout` and `std::endl` instead of `endl` on line 4. It makes the code more readable and our lives as programmers easier.

#### Line 3 and 4

```cpp
int main()
{
```

* C++ starts execution of a program from the -main function- `int main()` . During execution , the computer starts running the code from every line from `{`(opening bracket) till `}`(closing bracket)
  **NOTE : Every function starts with an opening curly brace "{" and ends with a closing curly brace "}".**
* Line 4 indicates the start of the main() function. 

#### Lines 5, 6 & 7

```cpp
    cout << "Hello World" << endl;
    return 0;
}
```

* The word `cout` in C++ is used to output. 
* It is followed by `<<` , the _insertion operator_ . 
* Whatever is in the double quotes `""` is printed . Certain special characters have a different syntax for print statements   
* Now to print any other kind of data , you have to  add `<<` .

***Challenge: Try to change Hello World to any other sentence or word(s). What will be the output ?***

* `endl` is a reserved word when using the C++ language to **end this line and go to the next line during output** .   - _cout stands for "console output"_
* Finally, finish the command with a semicolon `;`.

**NOTE : Every command except the main function definition and the #include directive needs to be ended by the semicolon. Without a ";" , you may encounter an error.**

* `return 0;` safely terminates the current function i.e. 'main()' in this case and since no function follows after 'main()' the program is terminated. 
* Don't forget to tell the computer that this is end of the main() function. To do this , you add the closing curly brace "}". You will encounter an error before program execution if you do not include the **}** .

### The code should look something like this:

![Img](https://i.imgur.com/d1liGwI.png)

Programmers use a Hello World program (like this one) as a ritual on using a new programming language. It is a symbol of good luck.  
_You have finished coding your first C++ program and have understood most of the code you have written/typed. CONGRATULATIONS!_
 
 **Good Luck to all of you and happy coding! :)**
 
 **Happy Coding ! :)**
 
 **Feel free to ask any questions on FreeCodeCamp's GitHub page or [FreeCodeCamp's Forum.](https://forum.freecodecamp.org/)**

 [Try it yourself ! :)](https://repl.it/L4k3)

**You may need some software to write and execute C++ code. I recommend using CodeBlocks. There's a download link below :**

Download Link : [Download Here](http://www.codeblocks.org/downloads/26)

* Click the link with the GNU/GCC compiler for windows. This will not require an additional installation

Other alternatives could be visual studio, using a compiler or an online IDE such as Cloud9 or repl.it

Link #2 for Mac : [Download for Mac #2 here](https://developer.apple.com/xcode/)

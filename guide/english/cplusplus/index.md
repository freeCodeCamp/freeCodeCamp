---
title: C++
---
# C++

## What is C++?

- C++ is a general purpose programming [object-oriented programming](https://en.wikipedia.org/wiki/Object-oriented_programming) (OOP) language which has been used since the 1990's
- It was designed as a thesis paper by [Bjarne Stroustrup](https://en.wikipedia.org/wiki/Bjarne_Stroustrup) under the name "C with classes", which later became C++.
- It is a version of C that includes OOP elements, including classes and functions.

## A Simple C++ Program

```cpp
#include <iostream>
using namespace std;
int main()
{
    cout << "Hello, World!" << endl;
    return 0;
}
```

**Output:**

```
Hello, World!
```

### Code Breakdown

```cpp
#include <iostream>
```

- The first line tells the compiler to use the `iostream` header file for this specific program. A header file is a separate file with pre-written C++ code. There are many other header files which are required for a specific program to run properly. Some examples are the `math`, `vector` and `string` header files. Header files are generally represented by a `.h` extension, but when including standard library header files you do not need to include the `.h` extension.
- The `iostream` header contains the public interface for the input-output stream from the standard library. The `iostream` file contains code for allowing the computer to take input and generate an output, using the C++ language.

```cpp
using namespace std;
```

- This line tells the compiler to use the standard namespace, which includes features of standard C++. You could write this program without this line, but you'd have to use `std::cout` instead of `cout` and `std::endl` instead of `endl` on line four.
- Adding the namespace makes the code more readable, but it is not necessarily good practice to omit the namespace as putting the namespace in front helps ensure that functions with the same name but from different libraries can still together without conflict.

```cpp
int main()
{
    /*
        Code Body
    */
}
```

- A C++ program starts execution at the `main` function `int main()`. During execution, the computer will run each line of code from the `{` opening curly brace until the `}` closing curly brace.
- **NOTE**: Every function starts with an opening curly brace ( `{` ) and ends with a closing curly brace ( `}` ).

```cpp
{
    cout << "Hello, World!" << endl;
    return 0;
}
```

- `cout` (console output) in C++ is used to stream data to standard output. 
- It is followed by `<<` (the _insertion operator_) which is used to stream the following text in quotes `"Hello, World!"` to `cout`
    - Certain special characters may require escaping by preceding the character with a backslash character ( `\` ).
- `endl` (end line) is then streamed to `cout` to insert a newline character, which tells `cout` to move to the next line in the output.
- `return 0;` safely terminates the current function (e.g., `main()`). A `0` return value tells the execution environment that the program exited without error.

Programmers use a _Hello World_ program like this one as a common learning tool when using a new programming language. Successful execution indicates a basic understanding of the syntax and allows the programmer to move on to more complicated features of the language.

## Additional Resources

### IDE Software that Support C++
- [Codeblocks](http://www.codeblocks.org/downloads/26)  
- [Xcode](https://developer.apple.com/xcode/)  
- [Eclipse](http://www.eclipse.org/downloads/)

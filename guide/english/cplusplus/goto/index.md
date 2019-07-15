---
title: goto
---

# Intro to the use of goto and labels

`goto label` goes to the mentioned occurence of the `label`, which can be either before or after the `goto` statement, as long as the `label` is in the same function as the `goto` statement.

If a `goto` causes program execution to exit some scope where a variable is defined, then the variable will be destroyed. If multiple of these variables exist, then they will be destroyed in opposite order of their construction.

See https://en.cppreference.com/w/cpp/language/goto for more information.

A common use of `goto` is to break out of a multiply-nested loop following some condition. However, there are several C++ language constructs that can be used to avoid this use case, including early `returns`, refactoring into different functions, and local variables in the loop.

**The use of goto is discouraged in C++, since it encourages poor design and creates code that is hard to debug and trace through. https://stackoverflow.com/questions/3517726/what-is-wrong-with-using-goto#3517746)**  


# Terminology

	goto - The keyword used to go to the particular label.
	label - this can be named anything.
    
# Syntax

```cpp
goto labelName; //This takes the program flow to the next appearance of label.
labelName: //to create a label name, write the name followed by a colon
```

# Scope

`goto` can only jump to a label in the **same scope** (set of braces - {}).

### Example:
```cpp
#include <iostream> 
int main(){
    goto x:
    std::cout << "Hello World"; //no text is printed.
    x:
    return 0;
}
int someFunction(){
    x: //the program does not jump to this label becaue it is in another scope.
    return 0;
}
```

`goto` is something that transcends all loops. To be clearer on this point, here is an example.

```cpp
#include <iostream>
using std::cout;

int main(){
    for(;;){
        if(1) goto label;
    }
    
label:
    cout << "lol";
    //here, goto is used to get out of an otherwise infinite loop. That is one of the only places where goto is tolerated.
    
    return 0;
}
```

Even though the above code works, a **much** better option is to structure your code such that `goto` is not needed for the program flow. For this reason, many modern programming languages (like java, javascript, python, etc.) do support `goto`. Instead, control statements like `break` and `continue` are used.

The above example can be rewritten using `break` as:

```cpp
#include <iostream>
using std::cout;

int main(){
    for(;;){
        if(1) break;
    }
    
    cout << "lol";
    
    return 0;
}
```

**However, care must be taken to use goto very carefully**, especially in the early days of coding as it can lead to crazy issues, if not understood well enough. `goto` violates the standard flow of the program, and as C++ is an object oriented language, goto should **NEVER EVER, EVER** be used in a normal program, under **ANY CIRCUMSTANCES**. The same effect can usually be replicated by using functions or loops, with the resulting code being easier to read as well as maintain.

#### The consequences of using goto are illustrated in this XKCD comic (#292)
![](https://imgs.xkcd.com/comics/goto.png)

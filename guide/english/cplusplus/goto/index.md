---
title: goto as a powerful utility
---

# Intro to the use of goto and labels

goto is one of the most powerful, yet highly underrated piece of logic in C++. Crazy amount of optimization can be achieved using goto, provided it is used properly.
It does exactly what it is named as. It goes to the mentioned occurence of the next label, wherever may it be.

# Terminology

	goto - The keyword used to go to the particular label.
	label - this can be named anything.
# syntax
```C++
goto label_name;
```

This takes the program to the next appearance of label. The label must be in the same scope (set of braces - {}).

Labels are defined as a name, followed by a colon (**:**)
```C++
label_name:
```
### Example:
```C++
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

goto is something that transcends all loops. To be clearer on this point, here is an example.

https://code.sololearn.com/cI4qqQA8W2q3

However, care must be taken to use goto very carefully, especially in the early days of coding as it can lead to crazy issues, if not understood well enough. goto violates the standard flow of the program, and as C++ is an object oriented language, goto should **NEVER EVER, EVER** be used in a normal program, under **ANY CIRCUMSTANCES**. The same effect can usually be replicated by using functions or loops.

#### The consequences of using goto are illustrated in this XKCD comic (#292)
![](https://imgs.xkcd.com/comics/goto.png)

---
title: goto
---

# Intro to the use of goto and labels

goto is one of the most powerful pieces of logic in C/C++. Crazy amounts of optimization can be achieved using goto, provided it is used properly. **It is, however, discouraged for use in C++, since better ways of programming exist, and it [leads to spaghetti code](https://stackoverflow.com/questions/3517726/what-is-wrong-with-using-goto#3517746)**  
It does exactly what it is named as. It goes to the mentioned occurence of the next label, wherever may it be.

# Terminology

	goto - The keyword used to go to the particular label.
	label - this can be named anything.
    
# Syntax

```C++
goto label_name;
//This takes the program flow to the next appearance of label_name.
```
Labels are defined as a name, followed by a colon (**:**)
```C++
label_name:
```
# Scope

`goto` can only jump to a label in the **same scope** (set of braces - {}).

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

`goto` is something that transcends all loops. To be clearer on this point, here is an example.

```C++
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
[Try the code here!](https://wandbox.org/permlink/2zm4f4WMR7ybvJlQ)

Even though the above code works, a **much** better option is to structure your code such that `goto` is not needed for the program flow. For this reason, many modern programming languages (like java, javascript, python, etc.) do support `goto`. Instead, control statements like `break` and `continue` are used.

The above example can be rewritten using `break` as:
```C++
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
[Try the code here!](https://wandbox.org/permlink/faRaw7paaRwWGkln)

**However, care must be taken to use goto very carefully**, especially in the early days of coding as it can lead to crazy issues, if not understood well enough. `goto` violates the standard flow of the program, and as C++ is an object oriented language, goto should **NEVER EVER, EVER** be used in a normal program, under **ANY CIRCUMSTANCES**. The same effect can usually be replicated by using functions or loops, with the resulting code being easier to read as well as maintain.

#### The consequences of using goto are illustrated in this XKCD comic (#292)
![](https://imgs.xkcd.com/comics/goto.png)

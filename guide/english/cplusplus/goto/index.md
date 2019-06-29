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
# syntax

```
goto labelName; //This takes the program flow to the next appearance of label.
labelName: //to create a label name, write the name followed by a colon
```

goto is something that transcends all loops. To be clearer on this point, here is an example.

```
#include <iostream>
using std::cout;

int main() {
for(;;)
{
if(1)
goto label;

}
label:
cout << "lol"; //here, goto is used to get out of an otherwise infinite loop. That is one of the only places where goto is tolerated.
    return 0;
}
```

[Try the code here!](https://wandbox.org/permlink/tG0aInbyuKJQC4ER)


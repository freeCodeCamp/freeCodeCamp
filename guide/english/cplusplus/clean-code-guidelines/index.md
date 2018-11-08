---
title: Clean Code Guidelines
---

# Clean Code Guidelines

When coding, the coding style you follow can be really important. Specially when you are working with a team or you plan on sharing your 
code.
Most of these guidelines are standard and can be applied to most of the programming languages, however, here you have applications and 
snippets with c++ code, so you can familiarize with it easier.
Remember that these are only recommendations for achieving clarity, which can be a personal preference, so take these pieces of advice 
into account but don't take them to the letter. Sometimes breaking some of these rules can lead to cleaner code.

## Use good variable names and make comments

Make sure you create good variable names, for example, if you are creating a game, avoid using the variable "a" use something like "p1" referring to player 1. The [hungarian notation](https://en.wikipedia.org/wiki/Hungarian_notation) is commonly spread and can give you some guidelines for declaring variables.

Also, PLEASE, use comments, I'm not even kidding, just try to read some old projects you did without comments... now imagine being someone else who didn't even code it.

## Global variables

Global variables can be easy to use, and with little code it might look like a great solution. But, when the code gets larger and larger, it becomes harder to know when are they being used.

Instead of using global variables you could use variables declared in functions which can help you telling what values are being passed 
and identifying errors faster.

```cpp
#include <iostream>
using namespace std;

// Global variables are declared outside functions
int cucumber; // global variable "cucumber"
```

## Using goto, continue, etc.

This is a usual discussion among programmers, just like global variables, these types of statements are usually considered bad practice.

They are considered bad because they lead to ["spaghetti code"](https://en.wikipedia.org/wiki/Spaghetti_code). When we program we want a
linear flow, when using those statements the flow is modified and lead to a "twisted and tangled" flow.

Goto was used in the past when while, for, if functions, however, with the introduction of those structured programming was created.
In general avoid using goto unless you are sure it will make your code cleaner and easier to read. An example might be using it in nested loops.

The usage of break and continue are practically the same. Use them in switches and try to make functions with an only purpose so you only have one exit point.

![img](https://imgs.xkcd.com/comics/goto.png)

## Avoid changing the control variable inside of a for loop

Usually there are works around this that look clearer and less confusing, eg. while loops.
Do:
```cpp
int i=1;
while (i <= 5)
{
    if (i == 2)
        i = 4;

    ++i;
}
```

Instead of:
```cpp
for (int i = 1; i <= 5; i++)
{
    if (i == 2)
    {
       i = 4;
    }
    // Do work
}
```

## Declare constants and types at the top

They are usually declared after libraries, this makes them be together and easier to read.

For local variables it happens the same, declare them at the top (Other people prefer it declaring them as later as possible in order to save memory see: [cplusplus.com](http://www.cplusplus.com/forum/general/33612/)

## Use only one return function at the end

Just like we said before, we tend to make only one entry and exit to make the flow clearer.

## Use curly braces even when writing one-liners

Making it systematically will help you doing it faster and in case you want to change the code in the future you will be able to do it without worries.

Instead of:
```cpp
for (int i = 1; i <= 5; i++)
    //CODE
```

Do:
```cpp
for (int i = 1; i <= 5; i++)
{
    //CODE
}
```
## Other recommendations

* #### Use for when you know the number of iterations, while and do while when you don't.

* #### Use const, pass by value/reference when suitable. This will help with saving memory.

* #### Write const in caps, datatypes starting with T and variables in lower case.

```cpp
const int MAX= 100;             //Constant
typedef int TVector[MAX];       //Data type
TVector vector;                 //Vector
```

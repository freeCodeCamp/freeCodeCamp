---
title: Functions
---
# Functions in C
Sometimes you have a chunk of code that you need to use over and over, but at different times and places in your code. You could copy and paste it over and over, but that's not a great solution- your file size ends up being bigger, your code is harder to debug, and your code is harder to read. Instead, use a function: functions are like mini-programs that exist within your code. You can pass them variables to use, and they can give back data.
## An Example
Here's a simple example of a function that divides two numbers. It's not very useful since we have `/`, but it shows the different parts of a function.
```C
#include <stdio.h>

int divides(int a, int b) {
    return a / b;
}

int main(void) {
    int first = 5;
    int second = 10; //MUST NOT BE ZERO;

    int result = divides(first, second);

    printf("first divided by second is %i\n", result);

    return 0;
}
```
## WHAT DOES THE main() FUNCTION DO ?
Suppose a program is divided into hundreds of mini programs (each such mini program is called 'function'). Now the programmer wants that certain functions are used only when they are called or told to run. But it is quite confusing for the compiler to know which function to skip and which to run. So, the idea of the <b>main()</b> function was created, in which only a single function is executed by the compiler and is the <b>main()</b> function. All the other function calls are to be made inside of the <b>main()</b> function wherever neccessary. Any other piece of code (functions) is not accessible unless it is called in inside the <b>main()</b> function.

Notice that like `main`, `divides` has a similar format. That's because `main` is also a function- it's just special because C looks for it first. `divides` also comes before `main`. This is important because `main` calls `divides`. Calling a function means that its code is beiEng used. Code must be compiled before it gets used, and C compiles line by line from the top, so in order for a function to be called, it must be written out before it is called like in this example. If `divides` came after `main`, it would fail because the compiler doesn't know that `divides` exists yet. You may also use a function prototype before main to allow you to place `divides` after main. A function prototype is identical to the function with the same variables and return type, except they braces are omitted and replaced with a semicolon like so:
```C
int divides(int a, int b);
```

Also notice that `divides` and `main` are not sharing brackets and are not in each other's brackets. They are meant to be separate, even though one calls the other.

With that in mind, let's go over the first line in a function in our next section, titled:

## Breaking down the function declaration

```C
int divides(int a, int b)
```
The function declaration begins with a data type, which in this case is `int`. Whatever data type you want the function to return, you should place here. You can have the return be any data type, or it can be no data type by placing `void` here.

Next is the name of the function. Whenever you want to call the function, this is the name you'll use. Try to make it be something descriptive, so you can easily identify what it does.

After the name comes a pair of parenthesis. In these parenthesis go our function's parameters, which are the variables that this function will take and use when the code runs. In this case, there are two. Both of them are the `int` data type, and they will be named `a` and `b`. Ideally, there would be better names to use here, but you'll find that for simple and quick methods temporary variable names are often used.

Now let's take a look at what's inside the brackets:
```C
return a / b;
```
This is pretty straightforward, because this is such a simple function. `a` is divided by `b`, and that value is returned. You've seen `return` before in the `main` function, but now instead of ending our program, it ends the function and gives the value to whatever called it.

So to recap what this function does- it gets two integers, divides them, and gives them back to whatever called it.

###Parameters of a function
Parameters are used to pass arguements to the function.
Their are two types of parameters:
Parameter Written In Function Definition is Called “Formal Parameter”.
Parameter Written In Function Call is Called “Actual Parameter”.They are also known as arguments.They are passed to the function definition and a copy is created in the form of formal parameters.


## A more complex example
That one was a single line function. You'll see them when there's a pretty simple operation that needs to be performed over and over, or an operation that ends up being one long line. By making it a function, the code ends up being more readable and manageable.

That being said, most functions will not be a single line of code. Let's take a look at another, slightly more complex example that chooses the greater of two numbers.
```C
int choose_bigger_int(int a, int b) {
    if(a > b)
        return a;

    if(b > a)
        return b;

    return a;
}
```
Just like before, the function is going to return an integer and takes two integers. Nothing new to see there.

This code starts with an if statement that checks if `a` is greater than `b`. In the event that it is, it will return `a`. If this is done, the function ends here- the rest of the code doesn't get evaluated. If this return statement isn't reached, however, the next if statement will be evaluated. If it is true, `b` will be returned and the function ends here.

With that, the conditions for a being greater than b, and b being greater than a, have been accounted for. However, if a equals b, the function still won't have returned anything. For that reason, we return a (a is equal to b, so we could return either).

## A word on 'scope'
Scope is a thing to be aware of. It refers to the areas in your code where a variable is accessible. When you pass a variable to a function, the function gets its own copy to use. This means that adjusting the variable in the function will not adjust it anywhere else. Similarly, if you haven't passed a variable to a function, it doesn't have it and can't use it.

You may have observed a similar issue with things like if statements and any of the loops. If you declare a variable within brackets, it won't be accessible outside of those brackets. This is true for functions in the same way, but there are some ways to get around it:
* Make a global variable by declaring it outside of any functions
 * This makes your code messier and is generally not recommended. It should be avoided whenever possible
* Use pointers, which you'll read about next
 * This can make your code harder to read and debug
* Pass into your functions like you're supposed to
 * This is the best way to do it, if doing so is an option

Ideally, you'll always pass into your functions as parameters, but you may not always be able to. Picking the best solution is your job as a programmer.

## Recursion in C
When function is called within the same function, it is known as recursion in C. The function which calls the same function, is known as recursive function.
```
int factorial (int n)
{
    if ( n < 0)
        return -1; /*Wrong value*/
    if (n == 0)
        return 1; /*Terminating condition*/
    return (n * factorial (n -1));
}   
```
<!-- Some minor additional info on Recursion -MR -->
The recursion continues until some condition is met to prevent it.
To prevent infinite recursion, an if...else statement or similar approach can be used where one branch makes the recursive call and the other doesn't.

Recursion makes program more elegant and clean. All algorithms can be defined recursively, which makes it easier to visualize and prove. 
If the speed of the program is important then you may not want to use recursion as it uses more memory and can slow the program down.


## Defining a function after main program
There can be instances when you provide the function definition after the main program. In those cases the function should be declared before the main program with arguments and should be ended with semi-colon(;). Later the function can be defined after the main program.

```C
#include <stdio.h>

int divides(int a, int b);

int main(void) {
    int first = 5;
    int second = 10; //MUST NOT BE ZERO;

    int result = divides(first, second);

    printf("first divided by second is %i\n", result);

    return 0;
}

int divides(int a, int b) {
    return a / b;
}

```

# Before you go on...
## A review
* Functions are good to use because they make your code cleaner and easier to debug.
* Functions need to be declared before they get called.
* Functions need to have a data type to return- if nothing is getting returned, use `void`.
* Functions take parameters to work with- if they're taking nothing, use `void`.
* `return` ends the function and gives back a value. You can have several in one function, but as soon as you hit one the function ends there.
* When you pass a variable to a function, it has its own copy to use - changing something in a function doesn't change it outside the function.
* Variables declared inside a function are only visible inside that function, unless they are declared static.

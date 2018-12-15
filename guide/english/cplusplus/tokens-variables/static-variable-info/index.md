---
title: Variables
---

Let's discuss something know as variables. Variables are like a bucket. You can put something in it and then change it 
afterwards when needed.
In C++, there are many types of variables like Integers, Strings, Booleans and many other.
Let's look at a simple program using integer variables. Integers store whole numbers that are positive, negative or zero. Whole numbers are not fractional numbers for example 1/2, 1/4, and 1/5. Lets look at a simple program which uses an integer 
variable.

```cpp
#include <iostream>
using namespace std ;
int main()
{
    int a;          // Declare an integer variable a
    a = 5;          // Assign value of 5 to variable a
    cout << a;      // Display the value of variable a which contains 5
    return 0;
}
```

When you execute this program, you will see 5 displayed on the screen

* Note that in the above program // is placed after the lines. The symbol "//" is for commenting our code. Code after the symbol
  "//" is not execueted in the line where its placed.

* On line 5 n simple integer variable is declared.
* On line 6 the value 5 is assigned to the variable a. Now whenever we use the variable a in our program its value will be 5
  unless we change it.
* On line 7 we display the value of variable a and 5 is printed on the screen.
### Scope of Variables
All the variables have their area of functioning, and out of that boundary they don't hold their value, this boundary is called scope of the variable. For most of the cases its between the curly braces,in which variable is declared that a variable exists, not outside it. We will study the storage classes later, but as of now, we can broadly divide variables into two main types,

*Global Variables.

*Local variables.

#### Global variables

Global variables are those, which ar once declared and can be used throughout the lifetime of the program by any class or any function. They must be declared outside the main() function. If only declared, they can be assigned different values at different time in program lifetime. But even if they are declared and initialized at the same time outside the main() function, then also they can be assigned any value at any point in the program.

Example : Only declared, not initialized.

```cpp
include <iostream>
using namespace std;
int x;                // Global variable declared
int main()
{
 x=10;                 // Initialized once
 cout <<"first value of x = "<< x;
 x=20;                 // Initialized again
 cout <<"Initialized again with value = "<< x;`
}
```

#### Local Variables
Local variables are the variables which exist only between the curly braces, in which its declared. Outside that they are unavailable and leads to compile time error.

Example :

```cpp
include <iostream>
using namespace std;
int main()
{
 int i=10;
 if(i<20)        // if condition scope starts
  {
    int n=100;   // Local variable declared and initialized
  }              // if condition scope ends
 cout << n;      // Compile time error, n not available here
}
```

Now let's read about a new type of variable-
#### Static variable

Static variables : When a variable is declared as static, space for it gets allocated for the lifetime of the program. Even if the function is called multiple times, space for the static variable is allocated only once and the value of variable in the previous call gets carried through the next function call. This is useful for implementing coroutines in C/C++ or any other application where previous state of function needs to be stored.
In layman's terms , it means that when a normal variable goes out of scope it loses its identity (value), but a static variable has a global scope and retains its value until the end of the program, but unlike a global variable it is not necessary to declare it at the start of the program.

#### EXTRA-
Static is a keyword in C++ used to give special characteristics to an element. Static elements are allocated storage only once in a program lifetime in static storage area. And they have a scope till the program lifetime.


#### CODE-

```
#include <iostream>
#include <string>
using namespace std;
 
void howstaticworks()
{
    static int count = 0;  // static variable
    cout << count << " ";
     
    /* value is updated and
     will be carried to next
     function calls*/
    count++;
}
 
int main()
{
    for (int i=0; i<5; i++)    
        howstaticworks();
    return 0;
}
```
#### Try yourself
just copy the code and paste it in link given.
Run on IDE- https://ideone.com/


Output:
0 1 2 3 4 

You can see in the above program that the variable count is declared as static. So, its value is carried through the function calls. The variable count is not getting initialized for every time the function is called.

Let's give the same code a try by removing "static" keyword and guess the output and compare it with one on IDE.
The static is now converted into normal variable



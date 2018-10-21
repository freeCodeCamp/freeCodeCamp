---
title: C++ If Statement
---

# The IF statement.

**What is an If statement?**
An `if` statement is a function that checks a parameter, and if it proves true, executes the code associated with it.

**What does an if statement do?**

* The `if` statement evaluates the test expression present inside the parenthesis.
* The `if` statement uses relational and logical operators to make logical expressions.

  -----------------------------------------------
  The general form of `if` statement:

```cpp
  if (Test Expression / Condition)
  {
    // Block of statements if test expression is True
  }
```
If there is only one statement to be executed after the if statement, the brackets{} are not necessarily required. But if there is more than one statement to be executed once the condition proves true, then it is mandatory to put all those statements in brackets{}.

If the value of the test expression is **true**, then the block of
code inside the if statement is executed.

If the value of the test expression is **false**, then the block of
code inside the if statement is skipped and the compiler continues from the next line of code.

Example `if` statement:

```cpp
  int a = 10;
  
  // true statement
  if (a < 20)
  {
    // execute this block of code
  }

  // false statement
  if (a < 0)
  {
    // Skip this block of code.
  }
```


Example In C++ :

```cpp
  // Program to check if number entered by the user is positive
  // If negative, the block of code is skipped

  #include <iostream>
  using namespace std;

  int main()
  {
    int no ;
    cout << "Enter a number: ";
    cin >> no;

    // if statement to check if the number is positive
    if ( no > 0)
    {
      cout << "You have entered a positive number: " << no << endl;
    }

    // If number is not positive, then if statement is skipped a program continues
    cout << "This step is always printed" << endl;

    return 0;
  }
```


**Output:**

OUTPUT 1:

```
Enter a number: 5
You have entered a positive number: 5
This step is always printed 
 ```
This is the output when the number entered is positive.

OUTPUT 2:

```
Enter a number:  -1
This step is always printed
```
This is the output when the number entered is negative.

<a href='https://repl.it/Mg9X' target='_blank' rel='nofollow'>Try the code yourself ! :) </a>


_CONGRATULATIONS . This is the end of the article on the IF statement_ 
 
 **Good Luck, and Happy Coding ! :)** 
 
 
 **Feel free to ask any queries on FreeCodeCamp's GitHub page or [FreeCodeCamp's Forum .](https://forum.freecodecamp.org/)**

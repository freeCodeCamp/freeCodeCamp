---
title: If-Else Statement
---

## What does an If-Else Statement do?

* The If-Else statement is an extension of the simple If statement.
* In the simple If statement, if the value of the test expression is false, then we skip the code of block and continue with our next statement.
* But many times, we want to execute certain steps if the value of test expression is false.
* In such cases, we use the if-else statement.

### General Form of If-Else Statement

```cpp

if (test expression)
{
  //statements that run if the test expression is true
}
else
{
  //statements that run if the test expression is false
}
```

### Example of If-Else Statement

If test expression is true :

```cpp

int a=10;
if (a < 20) // This expression is true, so...
{
  //...the code in this block gets executed, and...
}
else
{
  //...the code in this block gets skipped.
}
//program continues
```

If test expression is false :

```cpp
int a=10;
if (a>20) // This expression is false, so this time...
{
  //...this code gets skipped...
}
else
{
  //...and this code executes instead.
}
//program continues
```

### Example in C++:

```cpp
//Program to check whether number entered by user is positive or negative
#include <iostream>
using namespace std;

int main()  
{
  int no;
  cout << "Enter a number: " << endl;
  cin >> no;
  
  // condition to check if number is positive or negative
  if (no >= 0) // positive
  {
    // block if value is true
    cout << "You entered a positive number: " << no << endl;
  }
  else         // negative
  {
    // block if value is false
    cout << "You entered a negative number: " << no << endl;
  }
  
  // program continues
  cout << "This step is always printed" << endl;
  return 0;
}
```

#### Output

* When a positive number is entered :
```
Enter a number: 
4
You entered a positive number: 4
This step is always printed
```

* When a negative number is entered :
```
Enter a number: 
-200
You entered a negative number: -200
This step is always printed
```

<a href='https://repl.it/MzBq' target='_blank' rel='nofollow'>Try the code yourself</a>

 **Feel free to ask any queries on FreeCodeCamp's GitHub page or [FreeCodeCamp's Forum .](https://forum.freecodecamp.org/)**
=======
[Try the code yourself](https://repl.it/MzBq)


### Use of if...else if...else ladder
If we have to make decisions based on more than one conditions using if else. We use else if condition as follows -
```cpp
#include<iostream>
using namespace std;

int main()
{
    int score;
    cout << "Enter your score: \n";
    cin >> score;
    
    if (score >= 90)
        cout << "Top performance.";
    else if (score < 90 && score >= 70)
        cout << "Good performance";
    else if (score < 70 && score >= 45)
        cout << "Average performance";
    else if (score < 45 && score >= 30)
        cout << "You can improve it.";
   return 0;
}
```

#### Output
```
Enter your score:
85
Good performance
```
### Another example of if...else if...else ladder
Suppose we have the user input two numbers and we are going to display if either number is greater than the other. And if neither is greater than the other, then we print the statement "Both are equal".

In this scenario, we will need an if...else if...else ladder statement. The program will look like this :

```
#include<iostream>
using namespace std;

int main()
{
	int number1,number2;
	cout << "Enter first number: \n";
	cin >> number1;
	cout << "Enter second number: \n";
	cin >> number2;

	if (number1 > number2)     // Checks if the first number is greater than the second number
	{
		cout << "Number 1 is greater.";
	}
	else if (number2 > number1)    // Checks if the second number is greater than the first number
	{
		cout << "Number 2 is greater.";
	}
	else    // If both of the above cases return false, then both numbers are equal
	{
		cout << "Both the numbers are equal.";
	}

	return 0;
}
```

#### Output
```
Enter first number:
85
Enter second number:
86
Number 2 is greater.
```

* Note that the program will only check the 'else if' condition when the initial 'if' condition is not satisfied. And if neither of these conditions are satisfied, the last 'else' block gets executed which prints the statement: "Both the numbers are equal.". 

* The size of the if...else if...else ladder may vary depending on the problem the program is trying to solve and the number of conditions that need to be checked.

**Good Luck to all of you** 

**Happy Coding ! :)**

 **Feel free to ask any queries on freeCodeCamp.org's GitHub page or [the freeCodeCamp.org Forum](https://forum.freecodecamp.org/)**.

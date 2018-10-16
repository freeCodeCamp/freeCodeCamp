---
title: Error Handling
---
# C++ Exception Handling
An exception is a problem that arises during the execution of a program.Exceptions provide a way to transfer control from one part of a program to another. C++ exception handling is built upon three keywords: #try, #catch, and #throw.
* #throw − A program throws an exception when a problem shows up. This is done using a throw keyword.

* #catch − A program catches an exception with an exception handler at the place in a program where you want to handle the problem. The catch keyword indicates the catching of an exception.

* #try − A try block identifies a block of code for which particular exceptions will be activated. It's followed by one or more catch blocks.
```CPP
#include <iostream>
using namespace std;

int main()
{
   int x = -1;

   // Some code
   cout << "Before try \n";
   try {
      cout << "Inside try \n";
      if (x < 0)
      {
         throw x;
         cout << "After throw (Never executed) \n";
      }
   }
   catch (int x ) {
      cout << "Exception Caught \n";
   }

   cout << "After catch (Will be executed) \n";
   return 0;
}
```

# Before you go on...
## A review
* Grouping of Error Types.
* Separation of Error Handling code from Normal Code.
* Functions/Methods can handle any exceptions they choose.

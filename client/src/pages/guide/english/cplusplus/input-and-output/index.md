---
title: Input and Output
---

## Input and Output

* Input stream objects in C++ use 'cin'. This is used to save input data into the program.

* Output stream objects use 'cout', as shown in the first introduction of C++, to print out statements to the console.

```cpp
#include <iostream>
using namespace std;

int main()
{
  int x;

  cout << "Enter a number: " << endl; // Ask user for input
  cin >> x; // Take user input
  cout << "The output value of int x: " << x << endl;

  return 0;
}
```

* The header file `<iostream>` is required for stream objects.
* After declaring a variable, using the `cin` object, input data can be saved into the variable.
* The `cout` object prints the data saved into the variable to the console.


The operators `<<` and `>>` are used to point in the direction of the data.
* For `cin`, the `>>` operator is used. You can visualize the input data flowing into the variable.
* For `cout`, the `<<` operator is used. You can visualize data from a string or variable flowing into the `cout` object.

Try the code <a href="https://repl.it/ND8q/1" target='_blank' rel='nofollow'>here</a> .

 **Happy Coding ! :)**
 
 **Feel free to ask any queries on FreeCodeCamp's GitHub page or [FreeCodeCamp's Forum .](https://forum.freecodecamp.org/)**

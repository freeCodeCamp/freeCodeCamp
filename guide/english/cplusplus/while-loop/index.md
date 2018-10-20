---
title: While-loop
---

A while loop statement repeatedly executes a target statement as long as a given condition is true.

Syntax:
while(condition) {
   statement(s);
}

A key point of the while loop is that the loop might not ever run.
When the condition is tested and the result is false, the loop body will be skipped and the first statement after the while loop will be executed.


Example:

```C++
#include <iostream>
using namespace std;

int main () {
   // Local variable declaration:
   int a = 10;

   // while loop execution
   while( a < 20 ) {
      cout << "value of a: " << a << endl;
      a++;
   }

   return 0;
}
```

Output:

```
value of a: 10
value of a: 11
value of a: 12
value of a: 13
value of a: 14
value of a: 15
value of a: 16
value of a: 17
value of a: 18
value of a: 19
```


###Sources
www.tutorialspoint.com

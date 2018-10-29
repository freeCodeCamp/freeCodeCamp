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

##Do-While loop

   The do while construct consists of a process symbol and a condition. First, the code within the block is executed, and then the condition is evaluated. If the condition is true the code within the block is executed again. This repeats until the condition becomes false. Because do while loops check the condition after the block is executed, the control structure is often also known as a post-test loop. Contrast with the while loop, which tests the condition before the code within the block is executed, the do-while loop is an exit-condition loop. This means that the code must always be executed first and then the expression or test condition is evaluated. If it is true, the code executes the body of the loop again. This process is repeated as long as the expression evaluates to true. If the expression is false, the loop terminates and control transfers to the statement following the do-while loop. In other words, whereas a while loop sets the truth of a statement as a condition precedent for the code's execution, a do-while loop provides for the action's ongoing execution subject to defeasance by the condition's falsity, which falsity (i.e., the truth of the condition's negation) is set as a condition subsequent.
   
   Example:
   
   #include <iostream>
   using namespace std;
 
   int main () {
   // Local variable declaration:
   int a = 10;

   // do loop execution
   do {
      cout << "value of a: " << a << endl;
      a = a + 1;
   } while( a < 20 );
 
   return 0;
   }

Output:

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

###Sources
www.tutorialspoint.com

---
title: For Loop
---

# For Loop

A `for` loop is a repetitive statement that is used to check for some condition and then, based upon the condition a block of code, is executed repeatedly until the specified condition is satisfied.
It is typically used when the number of iterations are known; contrasting to that of a while loop where, generally, the number of iterations is unknown.

The `for` loop is distinguished from other looping statements through an explicit loop counter or loop variable which allows the body of the loop to know the exact sequencing of each iteration.

Hence a `for` loop is a repetition control structure that allows you to efficiently write a loop that needs to execute a specific number of times.

For loop is an entry controlled loop unlike do-while loop.

## Syntax

```cpp
for (init; condition; increment ) {
   update_statement(s);
}
```

The increment can also placed inside the for loop i.e. in its body- 

```cpp
for ( init; condition;) {
   update_statement(s);
   increment;
}
```

It is also allowed to ignore the init variables if and only if they are declared beforehand. For example :

```cpp
int a = 1;
for (; a <= 10 ;) {
    cout << a << '\n';
    a++;
}
```

The condition must be declared inside the parenthesis `()` in the for loop because the empty condition always returns false, which will prevent the loop from running.

### init
This step allows you to declare and initialize any loop control variables. This step is performed first and only once.  
Note that the variables declared in init can only be used inside the brackets of the For Loop.

### condition
Next the condition is evaluated. If it holds true, the body of the loop is executed. If it holds false, the body of the loop does not execute and flow of control jumps to the next block of code outside the loop.

### increment
The increment statement is used to alter the loop variable by using simple increment operations and executes after the completion of the body of the loop.

### update
The update statement is used to alter the loop variable by using simple operations like addition, subtraction, multiplication or division and executes after the execution of the body of the loop.

You will often see an increment operation as the update statement (e.g. i++, count++). This is often seen as one of the distinguishing features and possible name sources for the C++ language.

## Implementation
```cpp
#include <iostream>
using std::cout; // Here we use the scope resolution operator to define the scope of the standard functions as std
using std::endl;

int main () {
   // for loop execution
   for( int a = 10; a < 20; a++ ) { // The loop will run till the value of a is less than 20
      cout << "value of a: " << a << endl;
   }

   return 0;
}
```

Output:
```shell
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

## Single lined loop
The body of the for loop need not be enclosed in braces if the loop iterates over only one statement.

### Example
```cpp
#include<iostream.h>
using std::cout;
   
int main () {
   // Single line for loop
   for( int a = 10; a < 20; a++ ) 
      cout << "value of a: " << a << endl;

   return 0;
}
```

This would generate the same output as the previous program.

Output:
```shell
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

### Explanation
Here, the initialization condition is first set to `a=10`. The loop first checks for this condition. It then checks for the condition expression i.e. `a < 20` which holds true as `10 < 20` (for the first case). Now the body of the loop is executed and we get the output "Value of a: 10". Then the update expression is executed which adds the number 1 to 'a' and the value of 'a' gets updated to 11 and the same steps are followed (as above) until the value of v reaches less than 20 i.e 19.

## Range-based for-loop
C++ also has what we call "range-based" `for` loops which iterate through all the elements of a container (e.g., array).

### Syntax

```cpp
for ( element: container ) {
   statement(s);
}
```

```cpp
int[5] array = { 1, 2, 3, 4, 5 }
for ( int i: array ) {
   cout << i << endl;
}
```

Output:
```shell
1
2
3
4
5
```

## Iterator-based for-loop
Iterator based for loops are also possible in C++ and functionality for them exists in many of the data structures found within the STL. Unlike for-each loops, iterator based loops allow for mutating the contents of the container during iteration. This is rather useful when one needs to remove or insert values while looping over data.

### Syntax
```cpp
// Create a vector
std::vector<int> vec;

// Populate the vector
vec.push_back(1);
vec.push_back(2);
vec.push_back(3);

// Iterate over the vector using the 'it' object.
for(std::vector<string>::iterator it = vec.begin(); it != vec.end(); it++) {
    // Print the value held by the iterator (this is the object or primitive contained within 
    // the vector, in this case, an int).
    cout<< *it << endl;  // prints d.
}
```

## Applications of the for loops

### Use as infinite loops

This C-style for-loop is commonly the source of an infinite loop since the fundamental steps of iteration are completely in the control of the programmer. In fact, when infinite loops are intended, this type of for-loop can be used (with empty expressions), such as:
```cpp
for (;;) {
   //loop body
}
```

## Additional Resources
- [Range for-loop](https://guide.freecodecamp.org/cplusplus/range-for-loop)
- [More on For Loops](http://www.cplusplus.com/doc/tutorial/control/)

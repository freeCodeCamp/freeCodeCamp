---
title: stack
---

## Stacks

`stack` is one of the most used containers in C++. A container is a data structure that stores a collection of objects, some in order, some not. All containers have a different set of functions that allow you to access an object(s) in that collection.

It has a list of elements in which an element can be inserted or deleted only from one end ,called top of the stack.

`std::stack` is part of the C++ standard library (hence the prefix `std::`) and allows you to store data in Last In First Out (LIFO) order. NOTE: **All objects within a stack must be of the same data type**

The data type you store within a stack goes within angle brackets next to the stack keyword. For example, if you would like to store a collection of integers the stack would be `std::stack<int> stack_name`

### Stack LIFO Explanation

`stack` allows us to push and pop in specific order. 
**Push** means inserting an object at the top of the stack. 
**Pop** means pulling out the last inserted object from the top of the stack. So when you push it is at the top and when you pop you extract the last inserted element.

![alt text](https://github.com/mohammadaziz313/helloworld/blob/master/Lifo_stack.png "LIFO Stack Push and Pop Example")

### Stack Operations

The stack container supports the following operations:   
  - push
  - pop
  - empty
  - size
  - back

#### Push

Allows you to insert a new element at the top of the stack, above the current top element.

```cpp
//Push operation in Stack
#include <iostream>       // std::cout
#include <stack>          // std::stack

int main ()
{
  std::stack<int> s;

  s.push(1);    //Pushing 1 at top of the stack
  s.push(2);    //Pushing 2 at top of the stack
  
  return 0;
}
```

#### Top

Allows you to access the the top element without removing it from your stack.

```cpp
//Top operation in Stack
#include <iostream>       // std::cout
#include <stack>          // std::stack

int main ()
{
  std::stack<int> s;

  s.push(1);    //Pushing 1 at top of the stack
  s.push(2);    //Pushing 2 at top of the stack
  
  std::cout<<s.top()<<'\n';     //Accessing the top of the stack
  std::cout<<s.top()<<'\n';     //Accessing the top of the stack
  
  return 0;
}
```
    
    Output:
    2
    2

#### Pop

Removes the element on top of the stack, effectively reducing your stack's size by one.

```cpp
//Pop operation in Stack
#include <iostream>       // std::cout
#include <stack>          // std::stack

int main ()
{
  std::stack<int> s;

  s.push(1);    //Pushing 1 at top of the stack
  s.push(2);    //Pushing 2 at top of the stack
  
  std::cout<<s.top()<<'\n';   //Accessing the top of the stack
  s.pop();                    //Removing element from the top of stack
  std::cout<<s.top()<<'\n';   //Accessing the top of the stack
  
  
  return 0;
}
```
    
    Output:
    2
    1

#### Size

Returns the number of elements in the `stack`.

```cpp
//Size operation in Stack
#include <iostream>       // std::cout
#include <stack>          // std::stack

int main ()
{
  std::stack<int> s;

  s.push(1);    //Pushing 1 at top of the stack      
  s.push(2);    //Pushing 2 at top of the stack
  
  std::cout<<s.size()<<'\n';  //Showing the size of the stack
  s.pop();                    //Removing element from the top of stack
  std::cout<<s.size()<<'\n';  //Showing the size of the stack
  s.pop();                    //Removing element from the top of stack
  std::cout<<s.size()<<'\n';  //Showing the size of the stack
  
  return 0;
}
```
    
    Output:
    2
    1
    0

#### Empty

Returns whether the `stack` is empty ,i.e. whether your stack size is zero.

It returns `true` if the size of the stack is 0 else returns `false`. An alternative to using this is
```cpp 
    if (stackname.size()==0)
```

```cpp
//Empty operation in Stack
#include <iostream>       // std::cout
#include <stack>          // std::stack

int main ()
{
  std::stack<int> s;

  s.push(1);
  s.push(2);
  
  while(s.empty() != false){
      std::cout<<s.top()<<'\n';
      s.pop();
  }
  
  std::cout<<"Out of loop"<<'\n';
  return 0;
}
```
    
    Output:
    2
    1
    Out of loop
    
## Uses of Stack

1. Expression Evaluation and Conversion.
2. Stacks are used to evaluate and convert expressions like Prefix, Postfix and Infix expression. 
3. In Recursive functions, Stacks are used to keep information about the active functions or subroutines.
4. In Backtracking, as in DFS algorithm.
5. Memory management, run-time environment for nested language features. etc

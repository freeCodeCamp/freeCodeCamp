---
title: Stacks
---
## Stacks

A stack is a First In Last Out (FILO) or Last In First Out (LIFO) linear data structure.

Imagine the way plates are stacked in a buffet restaurant. You can only pick plates from top otherwise the stack will collapse.

Some basics operations of stack are:
1. Push() - Inserts the item on the top of the stack
2. Pop() - Removes the top item (often times, it is a good idea to implement this function so that it returns the element it removed)
3. isEmpty() - Check whether the stack is empty or not (returns a boolean)
4. Size() - Return the number of items in the stack
(All the operations can be done in O(1) time - depending on the implementation)

Implementation of a stack is possible using either arrays or linked lists. The following is a simple array implementation of the stack data structure with its most common operations.

```C++
//Stack implementation using array in C++
//You can also include<stack> and then use the C++ STL Library stack class.

#include <bits/stdc++.h>

using namespace std;

class Stack {
    int t;
    int arr[MaxN];
public:
    Stack() {
        t = 0;
    }
    int size() {
        return t;
    }
    bool isEmpty() {
        return t < 1;
    }
    int top() {
        return arr[t];
    }
    void push(int x) {
        if (++t >= MaxN) {
            cout << "Stack is full" << '\n';
            return;
        }
        arr[t] = x;
    }
    void pop() {
        arr[t--] = 0;
    }
};

int main() {
    Stack st;

    st.push(4);
    st.push(3);
    st.push(5);
    while (!st.isEmpty()) {
        cout << st.size() << ' ' << st.top() << '\n';
        st.pop();
    }
    return 0;
}
```

#### Using Arrays as Stacks

In some programming languages an array has stack functionality, allowing the developer to perform **push** and **pop** operations without the need for a custom stack data structure.

For example, an array in JavaScript has **push** and **pop** methods allowing one to easily implement stack functionality in an application.

```js
stack = [];

let i = 0;
while(i < 5)
  stack.push(i++);

while(stack.length) {
  stack.pop();
}
```

A List in Python can also perform stack functionality in an application. Instead of **push**, one can use the **append** method.
```python
stack = []

for i in range(5):
    stack.append(i)

while len(stack):
    stack.pop()
```

#### Applications

* Turn recursion into loop.
* Redo-Undo features.
* Sudoku solver
* Depth First Search.
* Tree traversals
* Infix expression -> Prefix/Postfix expression
* Valid Parentheses



#### More Information:
* [More Info on Stacks - GeeksForGeeks](http://www.geeksforgeeks.org/stack-data-structure/)
* [Stack - Wikipedia](https://en.wikipedia.org/wiki/Stack_(abstract_data_type)
* [Tower of Hanoi Problem and how the solution uses stacks and recursions](https://en.wikipedia.org/wiki/Tower_of_Hanoi)
* [HackerRank Stacks and Queues Video](https://www.youtube.com/watch?v=wjI1WNcIntg)

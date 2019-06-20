---
title: Stacks
localeTitle: 堆栈
---
## 堆栈

堆栈是先进先出（FILO）数据结构。它是一种线性数据结构。

你可以想象一个堆栈就像在自助餐厅组织盘子一样。您只能在顶部拾取板，否则堆栈将会崩溃。通常，将首先删除要插入的最后一个项目。

堆栈的一些基本操作是：

1.  推送 - 在堆栈顶部插入项目。
2.  Pop - 删除堆栈顶部的项目。
3.  isEmpty - 检查堆栈是否为空
4.  大小 - 返回堆栈中的项目数 （所有操作都可以在O（1）时间内完成）

使用数组或链表可以实现堆栈。以下是具有最常见操作的堆栈数据结构的简单数组实现。

```cpp
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

#### 使用数组作为堆栈

在某些编程语言中，数组具有堆栈功能，允许开发人员执行**推送**和**弹出**操作，而无需自定义堆栈数据结构。

例如，JavaScript中的数组具有**push**和**pop**方法，允许用户在应用程序中轻松实现堆栈功能。

```js
stack = []; 
 
 let i = 0; 
 while(i < 5) 
  stack.push(i++); 
 
 while(stack.length) { 
  stack.pop(); 
 } 
```

Python中的List也可以在应用程序中执行堆栈功能。可以使用**append**方法而不是**push** 。

```python
stack = [] 
 
 for i in range(5): 
    stack.append(i) 
 
 while len(stack): 
    stack.pop() 
```

#### 应用

*   将递归转换为循环。
*   重做撤消功能。
*   数独求解器
*   深度优先搜索。
*   树遍历
*   中缀表达式 - >前缀/后缀表达式
*   有效的括号

#### 更多信息：

*   [有关Stacks的更多信息 - GeeksForGeeks](http://www.geeksforgeeks.org/stack-data-structure/)
*   [堆栈 - 维基百科](https://en.wikipedia.org/wiki/Stack_(abstract_data_type)
*   [河内塔问题以及解决方案如何使用堆栈和递归](https://en.wikipedia.org/wiki/Tower_of_Hanoi)
*   [HackerRank堆栈和队列视频](https://www.youtube.com/watch?v=wjI1WNcIntg)
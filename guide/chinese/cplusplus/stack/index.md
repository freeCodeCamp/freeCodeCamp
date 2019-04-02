---
title: stack
localeTitle: 堆
---
## 堆栈

`stack`是C ++中最常用的容器之一。容器是一种存储对象集合的数据结构，有些是有序的，有些则不是。所有容器都有一组不同的功能，允许您访问该集合中的对象。

`std::stack`是C ++标准库的一部分（因此前缀为`std::` ，允许您以后进先出（LIFO）顺序存储数据。注意： **堆栈中的所有对象必须具有相同的数据类型**

存储在堆栈中的数据类型位于stack关键字旁边的尖括号内。例如，如果要存储整数集合，则堆栈将为`std::stack<int> stack_name`

### 堆栈LIFO说明

`stack`允许我们按特定顺序推送和弹出。 **推送**意味着将对象插入堆栈顶部。 **Pop**意味着从堆栈顶部拉出最后插入的对象。因此，当您按下它时，它位于顶部，当您弹出时，您将提取最后插入的元素。

![alt text](https://github.com/mohammadaziz313/helloworld/blob/master/Lifo_stack.png "LIFO Stack Push和Pop示例")

### 堆栈操作

堆栈容器支持以下操作：

*   推
*   流行的
*   空
*   尺寸
*   背部

#### 推

允许您在当前顶部元素上方的堆栈顶部插入新元素。

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

#### 最佳

允许您访问顶部元素而无需从堆栈中删除它。

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

```
Output: 
 2 
 2 
```

#### 流行的

移除堆栈顶部的元素，有效地将堆栈的大小减少一个。

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

```
Output: 
 2 
 1 
```

#### 尺寸

返回`stack`的元素数。

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

```
Output: 
 2 
 1 
 0 
```

#### 空

返回`stack`是否为空，即堆栈大小是否为零。 它返回`true` ，如果堆栈的大小0，否则，返回`false`

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

```
Output: 
 2 
 1 
 Out of loop 

```
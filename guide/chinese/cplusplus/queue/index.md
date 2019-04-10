---
title: queue
localeTitle: 队列
---
## 队列

`queue`是C ++中最常用的容器之一。容器是一种存储对象集合的数据结构，有些是有序的，有些则不是。所有容器都有一组不同的功能，允许您访问该集合中的对象。

`std::queue`是C ++标准库的一部分（因此前缀为`std::` ，允许您以先入先出（FIFO）顺序存储数据。注意： **队列中的所有对象必须具有相同的数据类型**

存储在队列中的数据类型位于queue关键字旁边的尖括号内。例如，如果要存储整数集合，则队列将为`std::queue<int> queue_name`

### 队列LIFO解释

`queue`允许我们按特定顺序推送/排队和弹出/出列。 **推送**意味着在队列的前面插入一个对象。 **Pop**意味着从队列末尾拉出“最旧的”对象。所以当你推动它在前面时，当你弹出时，你提取最旧的元素。

![alt text](https://github.com/mohammadaziz313/helloworld/blob/master/Fifo_queue.png "FIFO队列入队和出队示例")

### 队列操作

队列容器支持以下操作：

*   推（入队）
*   pop（出队）
*   空
*   尺寸
*   面前
*   背部

#### 推

允许您在队列末尾的当前最后一个元素之后插入一个新元素。

```cpp
//Push operation in Queue 
 #include <iostream>       // std::cout 
 #include <queue>          // std::queue 
 
 int main () 
 { 
  std::queue<int> q; 
 
  q.push(1);    //Pushing 1 at front of the queue 
  q.push(2);    //Pushing 2 at front of the queue 
 
  return 0; 
 } 
```

#### 面前

允许您访问队列中的下一个元素而不删除它。 下一个元素是队列中“最旧的”元素。

```cpp
//Front operation in Queue 
 #include <iostream>       // std::cout 
 #include <queue>          // std::queue 
 
 int main () 
 { 
  std::queue<int> q; 
 
  q.push(1);    //Pushing 1 at front of the queue 
  q.push(2);    //Pushing 2 at front of the queue 
 
  std::cout<<q.front()<<'\n';     //Accessing the front of the queue 
  std::cout<<q.front()<<'\n';     //Accessing the front of the queue 
 
  return 0; 
 } 
```

```
Output: 
 1 
 1 
```

#### 流行的

允许您删除队列中的下一个元素，有效地将其大小减小一个。 删除的元素是“最旧的”元素。

```cpp
//Pop operation in Queue 
 #include <iostream>       // std::cout 
 #include <queue>          // std::queue 
 
 int main () 
 { 
  std::queue<int> q; 
 
  q.push(1);    //Pushing 1 at front of the queue 
  q.push(2);    //Pushing 2 at front of the queue 
 
  std::cout<<q.front()<<'\n';     //Accessing the front of the queue 
  q.pop();                        //Removing the oldest element 
  std::cout<<q.front()<<'\n';     //Accessing the front of the queue 
  q.pop();                        //Removing the oldest element 
 
  return 0; 
 } 
```

```
Output: 
 1 
 2 
```

#### 尺寸

返回`queue`的元素数。

```cpp
//Size operation in Queue 
 #include <iostream>       // std::cout 
 #include <queue>          // std::queue 
 
 int main () 
 { 
  std::queue<int> q; 
 
  q.push(1);    //Pushing 1 at front of the queue 
  q.push(2);    //Pushing 2 at front of the queue 
 
  std::cout<<q.size()<<'\n';     //Accessing the front of the queue 
  q.pop();                        //Removing the oldest element 
  std::cout<<q.size()<<'\n';     //Accessing the front of the queue 
  q.pop();                        //Removing the oldest element 
  std::cout<<q.size()<<'\n';     //Accessing the front of the queue 
 
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

返回`queue`是否为空，即队列大小是否为零。 如果队列的大小为0，则返回`true` ，否则返回`false`

\`\`\`cpp //队列中的空操作

# 包括 // std :: cout

# 包括 // std :: stack

int main（） { 的std ::队列 q;

q.push（1）; q.push（2）;

while（q.empty（）！= true）{ 的std :: COUT << q.front（）<< '\\ n'; q.pop（）; }

std :: cout <<“Out of loop”<<'\\ n'; 返回0; }
```
    Output: 
    1 
    2 
    Out of loop 
 
 #### Back 
 
 Allows you to access the last element in the queue without removing it. 
 The next element is the "newest" element in the queue. 
```

CPP //在队列中返回操作

# 包括 // std :: cout

# 包括 // std :: queue

int main（） { 的std ::队列 q;

q.push（1）; //在队列前面按1 q.push（2）; //在队列前面按2

的std :: COUT << q.back（）<< '\\ n'; //访问队列的后面 的std :: COUT << q.back（）<< '\\ n'; //访问队列的后面

返回0; } \`\`\`
```
Output: 
 2 
 2 
```

### 更多资源：

http://www.cplusplus.com/reference/queue/queue/

### 引文：

图片礼貌：https _：_ //en.wikipedia.org/wiki/FIFO _（computing_ and\_electronics）
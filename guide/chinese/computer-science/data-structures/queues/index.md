---
title: Queues
localeTitle: 尾巴
---
## 队列

队列是先进先出（FIFO）数据结构。许多算法在其核心使用队列来提高性能。

队列是基本的抽象数据类型（ADT）之一。它类似于我们在电影或超市中排队的队列。第一个到达的人将首先服务吗？同样，首先要删除要插入的第一个元素。有几种类型的队列，如，

1.  简单队列（或队列）
2.  循环队列
3.  优先级队列
4.  出队（双端队列）

如果你能理解简单的队列（从这里开始将被称为'队列'），那么所有其他队列同样容易，几乎没有修改。

队列中最常见的操作是，

1.  添加/提供 - 将元素插入队列的末尾。
2.  删除/轮询 - 从队列的开头删除元素。
3.  Peek - 返回队列开头的元素，但不会删除它。
4.  Size / Count - 返回队列中当前存在的元素数。
5.  IsEmpty - 检查队列是否为空。

使用数组或链表可以实现队列。以下是具有最常见操作的队列数据结构的简单数组实现。

\`\`\`的JavaScript  
var Queue = function（）{ var queue = \[\]; var front = 0; var back = 0; 返回{ isEmpty：function（）{ 返回前面> =后退|| queue.length === 0; }， add：function（elem）{ / \*您也可以在JavaScript中执行queue.push（elem）。 这就是他们用其他语言做的事情\* / queue \[back ++\] = elem; }， remove：function（）{ if（！this.isEmpty（））{ return queue \[front ++\]; //或queue.shift（） } 其他{ 抛出新错误（“队列为空。”）; } }， peek：function（）{ if（！this.isEmpty（））{ 返回队列\[前\]; } } } };

var queue = new Queue（）; 的console.log（queue.isEmpty（））; //真的 queue.add（1）; queue.add（2）; 的console.log（queue.remove（））; // 1 的console.log（queue.peek（））; // 2 的console.log（queue.remove（））; // 2 的console.log（queue.remove（））; //例外 \`\`\`

#### 应用

*   模拟
*   调度（作业调度，磁盘调度）
*   共享资源管理
*   键盘缓冲区
*   广度优先搜索
*   处理网络拥塞

#### 更多信息：

*   [关于队列的更多信息 - GeeksForGeeks](http://www.geeksforgeeks.org/queue-data-structure/)
*   [使用队列解决挑战 - Hackerrank](https://www.hackerrank.com/domains/data-structures/queues)
*   [HackerRank堆栈和队列视频](https://www.youtube.com/watch?v=wjI1WNcIntg)
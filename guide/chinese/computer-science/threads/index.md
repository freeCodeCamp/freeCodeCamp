---
title: Threads
localeTitle: 主题
---
## 主题

给操作系统执行的一系列程序指令。它是可以执行的最小同步序列。作为同步，线程中的指令是线性的并且一个接一个地执行。如果程序具有多个线程，则整个程序可以是异步的，因为这些线程彼此独立地执行它们自己的指令（同时）。

线程是操作系统用于将CPU表示为程序的抽象。机器代码或汇编语言中没有真正的线程概念。

线程是编程的一种方式，可以同时执行多个任务。

应该做的一个共同点是线程和进程之间的区别。一个线程可以说是一个过程的孩子。  
在进程的上下文中可能存在任意数量的子线程。线程可以通过增加用于任务的CPU百分比来提高程序的执行速度。  
请注意，大幅增加程序中的线程数可能会占用大量CPU资源，如果使用100％的CPU，则线程将不会影响执行速度。

![流程图中的线程](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Multithreaded_process.svg/440px-Multithreaded_process.svg.png)

假设您打开了多个程序 - 每个程序的CPU时间份额由与该程序关联的一个或多个线程表示。当操作系统的**调度程序**决定程序A运行时，操作系统将程序A的线程中的指令（或更准确，多路复用）提供给CPU，然后CPU运行这些指令。

某个程序的线程包含该程序的一些或全部编译指令，以及CPU执行这些指令所需的一些信息。

**多线程**是一种编程概念，程序在执行期间生成多个线程，以便更快地执行任务。

这是python中一个简单的多线程示例，它通过为每个print语句生成一个单独的线程来打印数字1到10。
```
import threading 
 
 def print_number(number): 
    print(number) 
 
 if __name__ == "__main__": 
    for i in range(1, 11): 
        threading.Thread(target=print_number, args=(i,)).start() 
```

#### 更多信息：

*   [主题（维基百科）](https://en.wikipedia.org/wiki/Thread_(computing))
*   [了解多线程](http://www.nakov.com/inetjava/lectures/part-1-sockets/InetJava-1.3-Multithreading.html)
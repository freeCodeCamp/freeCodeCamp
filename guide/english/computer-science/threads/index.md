---
title: Threads
---
## Threads
A sequence of program instructions given to the operating system to execute. It is the smallest synchronous sequence that can be executed. Being synchronous, instructions in a thread are linear and execute one after another. If a program has multiple threads, the program as a whole can be asynchronous in that these threads are executing their own instructions independently of each other (simultaneously).

A thread is an abstraction that operating systems use to represent the CPU to programs. There is no real concept of threads in machine code or assembly languages.

Threads are a way in programming to perform multiple tasks at the same time.  

A common distinction one should make is the difference between threads and processes. A thread is a child of a process so to speak.  
There may be any number of child threads within the context of a process. Threads can increase the speed of execution of a program, by increasing the percentage of CPU used for the task.  
Note that drastically increasing the number of threads in a program can be highly CPU intensive, and if 100% of a CPU is being used, then threads will have no effect on the speed of execution.

![Threads inside a Process graph](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Multithreaded_process.svg/440px-Multithreaded_process.svg.png)

Suppose you have multiple programs open - each program’s share of the CPU’s time is represented by one or more threads associated with that program. When the operating system’s **scheduler** decides that it is Program A’s turn to run, the OS feeds (or to be more accurate, multiplexes) instructions in Program A’s thread to the CPU, which then runs these instructions.

A thread for a certain program consists of some or all of that program’s compiled instructions, plus some information required for the CPU to execute these instructions.

**Multithreading** is a programming concept where a program spawns multiple threads during execution so as to perform tasks faster.

Here is a simple multithreading example in python which prints the numbers 1 through 10, by spawning a separate thread for each print statement.

````
import threading

def print_number(number):
    print(number)
    
if __name__ == "__main__":
    for i in range(1, 11):
        threading.Thread(target=print_number, args=(i,)).start()
````

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

- [Threads (Wikipedia)](https://en.wikipedia.org/wiki/Thread_(computing))  
- [Understanding Multithreading](http://www.nakov.com/inetjava/lectures/part-1-sockets/InetJava-1.3-Multithreading.html)

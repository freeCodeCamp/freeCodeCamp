---
title: Multithreading
---

## Multithreading

Multithreading is a process of executing multiple processes simultaneously. Java starts the program with a main thread and further threads are added upon main thread whenever any user creates it. Main thread is the first user thread in any Java program. Also, JVM makes sure that all the user threads are closed before the program ends.

## Thread LifeCycle

A thread at any of point exists in any one of the following states:

1. New - When a new thread is created, it is in the new state. The thread has not started yet.

2. Runnable - A thread that is ready to run is moved to runnable state.

3. Running - The thread scheduler picks up a thread from runnable threads pool and ensures that each thread gets to run.

4. Waiting/Blocked - When a thread is temporarily inactive, then is in blocked/waiting state. Example - a thread waiting for I/O to complete.

5. Terminated - A thread can be terminated due to 2 reasons. Either it has completed the job and terminates normally or due to some unhandled exception or segmentation fault, etc.

For more info on thread states, refer :- https://www.geeksforgeeks.org/lifecycle-and-states-of-a-thread-in-java/


A thread has both advantages and disadvantages. 

## Advantages:

*   Running code independently of other threads.
*   Creation of a modular design.

## Disadvantages:

Race conditions and Deadlocks if threads are not syncrhronized properly.

Threads can further be divided into two classes:
 *   User Threads
 *   Daemon Threads
    
    
A thread can be created in 2 ways:
1. implementing Runnable interface:
There is only one method in Runnable interface i.e. public void run(). Implementing this method will make sure that whenever this thread starts the code inside run() executes.

2. extending thread class.
This class also contains public void run() which we need to override in order to run our own code. The disadvantage of using this method is that we have a superclass in Thread and cannot extend any other class which we may want to.

The code for both can be found here: http://ide.geeksforgeeks.org/k7GjcA. 

You will notice that if this code is ran multiple times, the results may differ. and that is decided by the OS upon which it is run. The OS can pick any thread from a runnable state and can run it. We have NO CONTROL over that. If there are multiple threads in runnable state (ready to run), anyone can be picked. It even does not depend upon priority.


change by infitake.

# Java Concurrency – yield(), sleep() and join() methods
We can prevent the execution of a thread by using one of the following methods of Thread class.

1. yield(): Suppose there are three threads t1, t2, and t3. Thread t1 gets the processor and starts its execution and thread t2 and t3 are in Ready/Runnable state. Completion time for thread t1 is 5 hour and completion time for t2 is 5 minutes. Since t1 will complete its execution after 5 hours, t2 has to wait for 5 hours to just finish 5 minutes job. In such scenarios where one thread is taking too much time to complete its execution, we need a way to prevent execution of a thread in between if something important is pending. yeild() helps us in doing so.
yield() basically means that the thread is not doing anything particularly important and if any other threads or processes need to be run, they should run. Otherwise, the current thread will continue to run.




Use of yield method:

Whenever a thread calls java.lang.Thread.yield method, it gives hint to the thread scheduler that it is ready to pause its execution. Thread scheduler is free to ignore this hint.
If any thread executes yield method , thread scheduler checks if there is any thread with same or high priority than this thread. If processor finds any thread with higher or same priority then it will move the current thread to Ready/Runnable state and give processor to other thread and if not – current thread will keep executing.

# Inter-thread Communication in Java

Prerequisite : Multithreading in Java, Synchronized in Java

What is Polling and what are problems with it?
The process of testing a condition repeatedly till it becomes true is known as polling.

Polling is usually implemented with the help of loops to check whether a particular condition is true or not. If it is true, certain action is taken. This waste many CPU cycles and makes the implementation inefficient.
For example, in a classic queuing problem where one thread is producing data and other is consuming it.

How Java multi threading tackles this problem?
To avoid polling, Java uses three methods, namely, wait(), notify() and notifyAll().
All these methods belong to object class as final so that all classes have them. They must be used within a synchronized block only.

wait()-It tells the calling thread to give up the lock and go to sleep until some other thread enters the same monitor and calls notify().
notify()-It wakes up one single thread that called wait() on the same object. It should be noted that calling notify() does not actually give up a lock on a resource.
notifyAll()-It wakes up all the threads that called wait() on the same object.

# start function in java

We have discussed that Java threads are typically created using one of the two methods : (1) Extending thread class. (2) Implementing Runnable

In both the approaches, we override the run() function, but we start a thread by calling the start() function. So why don’t we directly call the oveerridden run() function? Why always the start function is called to execute a thread?

What happens when a function is called?
When a function is called the following operations take place:



The arguments are evaluated.
A new stack frame is pushed into the call stack.
Parameters are initialized.
Method body is executed.
Value is retured and current stack frame is popped from the call stack.

# Java.lang.Thread class in Java
Thread a line of execution within a program. Each program can have multiple associated threads. Each thread has a priority which is used by thread scheduler to determine which thread must run first. Java provides a thread class that has various method calls inorder to manage the behaviour of threads.
Note: Every class that is used as thread must implement Runnable interface and over ride it’s run method.

Constructors:

Thread(): Allocates a new Thread object
Thread(Runnable target): Allocates a new Thread object
Thread(Runnable target, String name): Allocates a new Thread object
Thread(String name): Allocates a new Thread object
Thread(ThreadGroup group, Runnable target): Allocates a new Thread object
Thread(ThreadGroup group, Runnable target, String name): Allocates a new Thread object so that it has target as its run object, has the specified name as its name, and belongs to the thread group referred to by group
Thread(ThreadGroup group, Runnable target, String name, long stackSize): Allocates a new Thread object so that it has target as its run object, has the specified name as its name, and belongs to the thread group referred to by group, and has the specified stack size
Thread(ThreadGroup group, String name): CAllocates a new Thread object

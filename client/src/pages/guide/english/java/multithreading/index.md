---
title: Multithreading
---

## Multithreading

Multithreading is a process of executing multiple processes simultaneously. Java starts the program with a main thread and further threads are added upon main thread whenever any user creates it. main thread is the first user thread in any Java program. Also, JVM makes sure that all the user threads are closed before the program ends.

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

You will notice that if this code is ran multiple times, the results may differ. and that is decided by the OS upon which it is run. The OS can pick any thread from a runnable state and can run it. We hsve NO CONTROL over that. If there are multiple threads in runnable state (ready to run), anyone can be picked. It even does not depend upon priority.

Further details: https://www.ntu.edu.sg/home/ehchua/programming/java/J5e_multithreading.html

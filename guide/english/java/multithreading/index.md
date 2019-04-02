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
    
## Creation

A thread can be created in 3 ways:
1. implementing Runnable interface:
There is only one method in Runnable interface i.e. public void run(). Implementing this method will make sure that whenever this thread starts the code inside run() executes.

2. extending thread class.
This class also contains public void run() which we need to override in order to run our own code. The disadvantage of using this method is that we have a superclass in Thread and cannot extend any other class which we may want to.

3. implementing Callable interface:
There is one method in Callable interface i.e. V call(). Implementing this method will make sure that whenever this thread starts the code inside call() executes. The Callable interface provides an edge over Runnable interface as it returns some values as well as can throw exceptions as opposed to Runnable interface

The code for the first two can be found here: http://ide.geeksforgeeks.org/k7GjcA. 

You will notice that if this code is ran multiple times, the results may differ. and that is decided by the OS upon which it is run. The OS can pick any thread from a runnable state and can run it. We have NO CONTROL over that. If there are multiple threads in runnable state (ready to run), anyone can be picked. It even does not depend upon priority.



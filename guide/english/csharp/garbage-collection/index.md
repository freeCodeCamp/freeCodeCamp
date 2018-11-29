---
title: Garbage Collection
---
## Garbage Collection

#### What is Garbage Collection?

Garbage collection(GC) is a process in which programs try to free up memory space that is no longer used by objects and such.  Garbage collection is implemented differently for every language.  Most high-level programming languages have some sort of garbage collection built-in.  Low-level programming languages may add garbage collection through libraries.

As said above, every programming language has their own way of GC. In C programming, developers need to take care of memory allocation and deallocation using `malloc()` and `dealloc()` functions. For C# applications, developers no longer need to take care of GC and it's not recommended as well because .NET framework handles this already. However, if you are using unmanaged code blocks in your code you may need to explicitly invoke a destructor for GC.
 
 #### How memory allocation happens?
 In C#, memory allocation of objects happens in managed heap and this is taken care by CLR (Common Language Runtime). Memory allocation for the heap is done through win32.dll in Operation System (OS) just like in C. But in C, references are placed in memory whereever the free space suits the size of reference. And the memory mapping works based on Linkedlist concepts. In C#, memory allocation for heap happens in linear manner, i.e., one after another. 
 
Whenever a new object is created, a memory is allocated in the heap and the pointer moves to next memory address. Memory allocation in C# is faster than the C. In C the memory needs to search and allocate for the object which adds some overhead time.
 
 #### Generations in C# GC
In .net programming, heap has three generations called Generation 0, 1, 2. 

Generation 0 get filled first whenever new object gets created.  Garbage collector runs when the Generation 0 get filled. Newly created objects are placed in Generation 0. While performing garbage collection all the unwanted objects are destroyed, memory gets freed and compacted. GC takes care of pointing the pointers of freed memory once GC happens. 

Generations 1 and 2 has object which has the longer life time. GC on generations 1 and 2 will not happen until the generations 0 has sufficient memory to allocate.

Its not advisable to invoke the GC programmatically. It's good to let it happen on its own. GC is executed whenever the generation 0 gets filled. GC does not impact the performance of the application. 

There are different ways to manage disposal of your objects with out explicitly calling GC. In c# there is IDisposable interface that takes care of GC activities without explicitly calling it from the code. This is one of the safe handling features.

Garbage collection is a tool that saves time for the programmer, for example it replaces the need for functions such as malloc() and free() which are found in C. It can also help in preventing memory leaks.

The downside of garbage collection is that it has a negative impact on performance. The program has to regularly run though the program, checking object references and cleaning out memory - this takes up resources and often requires the program to pause.
 
If an object has no references (is no longer reachable) then it is eligible for garbage collection. This ensures there are not much dangling pointers around the memory heap. 

#### More Information:
 - [Garbage Collection Fundamentals](https://docs.microsoft.com/en-us/dotnet/standard/garbage-collection/fundamentals)
 - [Memory Management and GC](https://docs.microsoft.com/en-us/dotnet/standard/garbage-collection/memory-management-and-gc)

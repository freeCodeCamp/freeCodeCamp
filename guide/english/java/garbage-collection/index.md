---
title: Garbage Collection
---
# Garbage Collection in Java
In languages like C/C++, it is the duty of the programmer to create and destroy objects. But if the programmer does not performs his duty, sufficient memory may not be available for the creation of a new object and the program may terminate causing **OutOfMemoryErrors**.

Java relieves the programmer from memory management task and itself reclaims the memory occupied by the objects which are no longer in use. Garbage Collection in java is carried out by a daemon thread called **Garbage Collector**. **JVM(Java Virtual Machine)** invokes it when there is lack of memory(heap) for new objects.

## When an object becomes eligible for Garbage Collection? 
* An object becomes eligible for Garbage Collection if it is not reachable from any live threads or any static references.
* An object becomes eligible for Garbage Collection if it’s all references are null.
```java
         Integer n = new Integer();
         n = null;			                    //the Integer object is no longer accessible
```
* Cyclic dependencies are not counted as reference so if Object X has reference of Object Y and Object Y has reference of Object X and they don’t have any other live reference then both Objects X and Y will be eligible for Garbage Collection.

## How to manually make an object eligible for Garbage Collection?
* Even though it is not the task of the programmer to destroy the objects, it is a good programming practice to make an object unreachable(thus eligible for GC) after it is used.
* There are generally four different ways to make an object eligible for garbage collection.
1. Nullifying the reference variable
2. Re-assigning the reference variable
3. Object is created inside a block and reference goes out of scope once control exit that block.
4. [Island of Isolation](http://www.geeksforgeeks.org/island-of-isolation-in-java/)

## Ways of requesting JVM to run Garbage Collector<sup>1</sup>
* Though making an object eligible for Garbage Collection, it depends on sole discretion of JVM to run the Garbage Collector to destroy it.
* We can also request JVM to run Garbage Collector. There are two ways to do it :
1. Using _**System.gc()**_ method : System class contain static method gc() for requesting JVM to run Garbage Collector.
2. Using _**Runtime.getRuntime().gc()**_ method : Runtime class allows the application to interface with the JVM in which the application is running. Hence by using its gc() method, we can request JVM to run Garbage Collector.
```java
         // Java program to request
	// JVM to run Garbage Collector
public class Test
{
    public static void main(String[] args) throws InterruptedException
    {
        Test test1 = new Test();
        Test test2 = new Test();
         
        // Nullifying the reference variable
        test1 = null;
         
        // requesting JVM for running Garbage Collector
        System.gc();
         
        // Nullifying the reference variable
        test2 = null;
         
        // requesting JVM for running Garbage Collector
        Runtime.getRuntime().gc();
     
    }
     
    @Override
    // finalize method is a method which is called on object once 
    // before garbage collector is destroying it and reclaiming its memory
    protected void finalize() throws Throwable
    {
        System.out.println("Garbage collector is called");
        System.out.println("Object garbage collected : " + this);
    }
}
```
```java
  OUTPUT - 
    Garbage collector called
    Object garbage collected : Test@46d08f12
    Garbage collector called
    Object garbage collected : Test@481779b8
```
Note :

1. There is no guarantee that any one of above two methods will definitely run Garbage Collector.
2. The call System.gc() is effectively equivalent to the call : Runtime.getRuntime().gc()

## Object Finalization
* Objects have resources associtated with them. It is their responsibility to free the resources. 
* The finalize(), is declared in Object class and is called by garbage collector once, just before destroying the object. An object can take any last action using this method jst before its area is reclaimed by the garbage collector.
* finalize() method is present in Object class with following prototype.
```java
    protected void finalize() throws Throwable
```
## NOTE<sup>1</sup> :
1. The finalize() method called by Garbage Collector not JVM. Although Garbage Collector is one of the module of JVM.
2. Object class finalize() method has empty implementation, thus it is recommended to override finalize() method to dispose of system resources or to perform other cleanup.
3. The finalize() method is never invoked more than once for any given object.
4. If an uncaught exception is thrown by the finalize() method, the exception is ignored and finalization of that object terminates.
### SOURCES 
1. [geeksforgeeks.](http://www.geeksforgeeks.org/garbage-collection-java/)Accessed: October 24,2017.


change by infitake.

# Mark-and-Sweep: Garbage Collection Algorithm

Background

All the objects which are created dynamically (using new in C++ and Java) are allocated memory in the heap. If we go on creating objects we might get Out Of Memory error, since it is not possible to allocate heap memory to objects. So we need to clear heap memory by releasing memory for all those objects which are no longer referenced by the program (or the unreachable objects) so that the space is made available for subsequent new objects. This memory can be released by the programmer itself but it seems to be an overhead for the programmer, here garbage collection comes to our rescue, and it automatically releases the heap memory for all the unreferenced objects.
There are many garbage collection algorithms which run in the background. One of them is mark and sweep.

Mark and Sweep Algorithm
Any garbage collection algorithm must perform 2 basic operations. One, it should be able to detect all the unreachable objects and secondly, it must reclaim the heap space used by the garbage objects and make the space available again to the program.
The above operations are performed by Mark and Sweep Algorithm in two phases:
1) Mark phase
2) Sweep phase

Mark Phase
When an object is created, its mark bit is set to 0(false). In the Mark phase, we set the marked bit for all the reachable objects (or the objects which a user can refer to) to 1(true). Now to perform this operation we simply need to do a graph traversal, a depth first search approach would work for us. Here we can consider every object as a node and then all the nodes (objects) that are reachable from this node (object) are visited and it goes on till we have visited all the reachable nodes.

Root is a variable that refer to an object and is directly accessible by local variable. We will assume that we have one root only.
We can access the mark bit for an object by: markedBit(obj).
Algorithm -Mark phase:



Mark(root)
    If markedBit(root) = false then
        markedBit(root) = true
        For each v referenced by root
             Mark(v)
Note: If we have more than one root, then we simply have to call Mark() for all the root variables.

 

Sweep Phase
As the name suggests it “sweeps” the unreachable objects i.e. it clears the heap memory for all the unreachable objects. All those objects whose marked value is set to false are cleared from the heap memory, for all other objects (reachable objects) the marked bit is set to true.
Now the mark value for all the reachable objects is set to false, since we will run the algorithm (if required) and again we will go through the mark phase to mark all the reachable objects.

Algorithm – Sweep Phase

Sweep()
For each object p in heap
    If markedBit(p) = true then
        markedBit(p) = false
    else
        heap.release(p)
The mark-and-sweep algorithm is called a tracing garbage collector because it traces out the entire collection of objects that are directly or indirectly accessible by the program.

# Advantages of Mark and Sweep Algorithm
It handles the case with cyclic references, even in case of a cycle, this algorithm never ends up in an infinite loop.
There are no additional overheads incurred during the execution of the algorithm.
# Disadvantages of Mark and Sweep Algorithm
 The main disadvantage of the mark-and-sweep approach is the fact that that normal program execution is suspended while the garbage collection algorithm runs.
Other disadvantage is that, after the Mark and Sweep Algorithm is run several times on a program, reachable objects end up being separated by many, small unused memory regions. Look at the below figure for better understanding.
Figure:HeapMemory
Here white blocks denote the free memory, while the grey blocks denote the memory taken by all the reachable objects.
Now the free segments (which are denoted by white color) are of varying size let’s say the 5 free segments are of size 1, 1, 2, 3, 5 (size in units).
Now we need to create an object which takes 10 units of memory, now assuming that memory can be allocated only in contiguous form of blocks, the creation of object isn’t possible although we have an available memory space of 12 units and it will cause OutOfMemory error. This problem is termed as “Fragmentation”. We have memory available in “fragments” but we are unable to utilize that memory space.
We can reduce the fragmentation by compaction; we shuffle the memory content to place all the free memory blocks together to form one large block. Now consider the above example, after compaction we have a continuous block of free memory of size 12 units so now we can allocate memory to an object of size 10 units.

# Island of Isolation in Java

In java, object destruction is taken care by the Garbage Collector module and the objects which do not have any references to them are eligible for garbage collection. Garbage Collector is capable to identify this type of objects.
Island of Isolation:

Object 1 references Object 2 and Object 2 references Object 1. Neither Object 1 nor Object 2 is referenced by any other object. That’s an island of isolation.
Basically, an island of isolation is a group of objects that reference each other but they are not referenced by any active object in the application. Strictly speaking, even a single unreferenced object is an island of isolation too.

# Iterator Vs. Collection

Iterator can only move to next() element or remove() an element.
However Collection can add(), iterate, remove() or clear() the elements of the collection.
Iterator provides a better speed than Collections, as the Iterator interface has limited number of operations.
java.sql.SQLException extends Iterable. Hence it allows the caller to safely iterate over causes of SQLException.
Using a collection, in this case, would be expensive because, in a chain of n exceptions, use of a collection in the SQLException interface would potentially require the construction of O(n^2) elements.
However, use of Iterable provides O(n) access to the exception chain.

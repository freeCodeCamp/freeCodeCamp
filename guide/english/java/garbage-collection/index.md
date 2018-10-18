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


---
title: Garbage Collection
localeTitle: 垃圾收集
---
# Java中的垃圾收集

在像C / C ++这样的语言中，程序员有责任创建和销毁对象。但是如果程序员没有履行职责，则可能无法为创建新对象提供足够的内存，程序可能会终止导致**OutOfMemoryErrors** 。

Java使程序员免于内存管理任务，并且自己回收不再使用的对象所占用的内存。 java中的垃圾收集由名为**Garbage Collector**的守护程序线程执行。当新对象缺少内存（堆）时， **JVM（Java虚拟机）会**调用它。

## 当一个对象有资格进行垃圾收集？

*   如果无法从任何活动线程或任何静态引用访问对象，则该对象符合垃圾收集条件。
*   如果对象的所有引用都为null，则该对象符合Garbage Collection的条件。

```java
         Integer n = new Integer(); 
         n = null;                                //the Integer object is no longer accessible 
```

*   循环依赖不计为引用，因此如果对象X具有对象Y的引用而对象Y具有对象X的引用并且它们没有任何其他实时引用，则对象X和Y都将有资格进行垃圾收集。

## 如何手动使对象符合垃圾收集条件？

*   尽管程序员不是要销毁对象的任务，但在使用它之后使对象无法访问（因此符合GC条件）是一种很好的编程习惯。
*   通常有四种不同的方法可以使对象符合垃圾回收的条件。

1.  取消引用变量
2.  重新分配参考变量
3.  对象在块内创建，一旦控制退出该块，引用就会超出范围。
4.  [隔离岛](http://www.geeksforgeeks.org/island-of-isolation-in-java/)

## 请求JVM运行垃圾收集器1的方​​法

*   尽管使对象符合垃圾收集条件，但它依赖于JVM自行决定运行垃圾收集器来销毁垃圾收集器。
*   我们也可以请求JVM运行垃圾收集器。有两种方法可以做到：

1.  使用_**System.gc（）**_方法：System类包含静态方法gc（），用于请求JVM运行Garbage Collector。
2.  使用_**Runtime.getRuntime（）。gc（）**_方法：运行时类允许应用程序与运行应用程序的JVM进行交互。因此，通过使用其gc（）方法，我们可以请求JVM运行垃圾收集器。

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

注意 ：

1.  无法保证上述两种方法中的任何一种都能运行垃圾收集器。
2.  调用System.gc（）实际上等同于调用：Runtime.getRuntime（）。gc（）

## 对象终结

*   对象具有与其关联的资源。他们有责任释放资源。
*   finalize（）在Object类中声明，并且在销毁对象之前由垃圾收集器调用一次。在垃圾收集器回收其区域之前，对象可以使用此方法jst进行任何最后操作。
*   finalize（）方法存在于Object类中，具有以下原型。

```java
    protected void finalize() throws Throwable 
```

## 注1 ：

1.  垃圾收集器调用的finalize（）方法而不是JVM。虽然垃圾收集器是JVM的模块之一。
2.  对象类finalize（）方法具有空实现，因此建议覆盖finalize（）方法以处置系统资源或执行其他清理。
3.  对于任何给定对象，finalize（）方法永远不会被多次调用。
4.  如果finalize（）方法抛出未捕获的异常，则忽略该异常并终止该对象的终止。

### 来源

1.  [geeksforgeeks。](http://www.geeksforgeeks.org/garbage-collection-java/)访问时间：2017年10月24日。
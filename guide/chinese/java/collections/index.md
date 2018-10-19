---
title: Collections
localeTitle: 集合
---
# 集合

Java中的Collection是一组可以排序（LinkedList）或无序（Set）的对象。 Collection接口位于层次结构的顶部，所有其他类和接口都从此接口扩展。它位于java.util包中。

Collection接口还扩展了Iterable接口，这意味着java中的每个集合都必须是可迭代的。这反过来意味着for-each循环可用于按顺序获取它们。

```java
public interface Collection<E> extends Iterable<E> 
```

此接口提供的一些最常用的方法是：

```java
boolean add(E e) // Adds the specified element to the collection if not present and returns true if this collection changed. 
 
 void clear() // Removes all the elements from the collection. 
 
 boolean contains(Object o) // Returns true if the specified element is in the collection else false 
 
 boolean isEmpty() // Returns true if the collection is empty else false 
 
 boolean remove(Object o) // Removes the specifies element and return true on successful removal else false. 
 
 int size() // Returns number of items in the collection. 
```

这些和其他各种方法必须由实现Collection接口的任何类实现。

## 接口扩展Collection接口

扩展集合接口的其他重要接口是：

组： 仅包含唯一元素的集合。

队列： 实现队列行为，其中元素仅在开头添加并从末尾删除。

列表： 此集合处理对象的列表/序列。

这四个接口（Collection，Set，Queue，List）以及SortedSet，Deque和NavigableSet构成了集合Collection层次结构。

# LinkedList类

LinkedList是最重要的Collection类之一，它提供了双向链表实现。它实现了List，Deque，Cloneable和Serializable接口。

**创建LinkedList**

```java
LinkedList<Integer> intList = new LinkedList<Integer>(); // Creates a new list of Integer objects. 
```

您还可以创建任何其他对象类型的列表。例如。

```java
LinkedList<String> stringList = new LinkedList(); 
 
 LinkedList<LinkedList<Integer>> listOfList = new LinkedList(); 
```

注意：自JDK 1.5以来，Java中的所有集合都已转换为泛型类型

**将元素添加到列表中**

```java
intList.add(new Integer(1)); // Add 1 to the end. 
 
 intList.add(2); // This works as Java provides autoboxing and unboxing of primitive datatypes and their respective wrapper classes 
 
 intList.addFirst(3); // Add to the beginning of the list 
 
 intList.addLast(2); // Add to the end of the list 
 
 intList.add(2, 5); // Add element 5 at index 2 
```

让我们打印清单

```java
System.out.println(intList); // toString() method is automatically called on the list 
```

输出： \[3,1,5,2,2\]

**从列表中检索元素**

```java
intList.get(3); // Returns element at index 3 ie 2 
 
 intList.getFirst(); // Get the first element ie 3 
 
 intList.getLast(); // Returns last element ie 2 
 
 intList.indexOf(2); // Returns first occured index of 2 ie 3 
 
 intList.lastIndexOf(2); // Returns last occured index of 2 ie 4 
```

**LinkedList作为堆栈**

由于Java没有提供单独的

```java
intList.push(5); // Add element to the end of list. Works same as addLast() 
 
 intList.pop(); // Removes and returns the last element of the list. 
```

**从列表中删除元素**

```java
intList.remove(3); // Removes the element at index 3 of the list 
 
 intList.removeFirst(); // Removes first element of the list 
 
 intList.removeLast(); // Removes last element of the list 
```

注意：上述所有用于删除和获取元素的方法都会在空列表中返回NoSuchElementException。

#### 更多信息：

*   来源： [Java文档](https://docs.oracle.com/javase/9/docs/api/overview-summary.html)
---
title: Collections
localeTitle: Коллекции
---
# Коллекции

Коллекция в Java - это группа объектов, которые могут быть упорядочены (LinkedList) или неупорядочены (Set). Интерфейс Collection находится в верхней части иерархии, и все остальные классы и интерфейсы распространяются на этот интерфейс. Он находится в пакете java.util.

Интерфейс Collection также расширяет интерфейс Iterable, что означает, что каждая коллекция в java должна быть итерируемой. Это, в свою очередь, означает, что для каждого цикла можно использовать для каждого цикла.

```java
public interface Collection<E> extends Iterable<E> 
```

Некоторые из наиболее распространенных методов, предоставляемых этим интерфейсом:

```java
boolean add(E e) // Adds the specified element to the collection if not present and returns true if this collection changed. 
 
 void clear() // Removes all the elements from the collection. 
 
 boolean contains(Object o) // Returns true if the specified element is in the collection else false 
 
 boolean isEmpty() // Returns true if the collection is empty else false 
 
 boolean remove(Object o) // Removes the specifies element and return true on successful removal else false. 
 
 int size() // Returns number of items in the collection. 
```

Эти и различные другие методы должны быть реализованы любым классом, реализующим интерфейс Collection.

## Интерфейсы, расширяющие интерфейс коллекции

Другими важными интерфейсами, расширяющими интерфейс коллекции, являются:

Задавать: Коллекция, содержащая только уникальные элементы.

Очередь: Реализуйте поведение очереди, когда элементы добавляются только в начале и удаляются с конца.

Список: Эта коллекция обрабатывает список / последовательность объектов.

Эти четыре интерфейса (Collection, Set, Queue, List) вместе с SortedSet, Deque и NavigableSet образуют коллективную иерархию Collection.

# Класс LinkedList

LinkedList - один из самых важных классов Collection, который обеспечивает реализацию двусвязного списка. Он реализует интерфейсы List, Deque, Cloneable и Serializable.

**Создать LinkedList**

```java
LinkedList<Integer> intList = new LinkedList<Integer>(); // Creates a new list of Integer objects. 
```

Вы также можете создать список любого другого типа объекта. Напр.

```java
LinkedList<String> stringList = new LinkedList(); 
 
 LinkedList<LinkedList<Integer>> listOfList = new LinkedList(); 
```

Примечание. Все коллекции в Java были преобразованы в общие типы, поскольку JDK 1.5

**Добавить элементы в список**

```java
intList.add(new Integer(1)); // Add 1 to the end. 
 
 intList.add(2); // This works as Java provides autoboxing and unboxing of primitive datatypes and their respective wrapper classes 
 
 intList.addFirst(3); // Add to the beginning of the list 
 
 intList.addLast(2); // Add to the end of the list 
 
 intList.add(2, 5); // Add element 5 at index 2 
```

Распечатаем список

```java
System.out.println(intList); // toString() method is automatically called on the list 
```

Вывод: \[3, 1, 5, 2, 2\]

**Извлечение элементов из списка**

```java
intList.get(3); // Returns element at index 3 ie 2 
 
 intList.getFirst(); // Get the first element ie 3 
 
 intList.getLast(); // Returns last element ie 2 
 
 intList.indexOf(2); // Returns first occured index of 2 ie 3 
 
 intList.lastIndexOf(2); // Returns last occured index of 2 ie 4 
```

**LinkedList как стек**

Поскольку Java не предоставляет отдельную

```java
intList.push(5); // Add element to the end of list. Works same as addLast() 
 
 intList.pop(); // Removes and returns the last element of the list. 
```

**Удалить элементы из списка**

```java
intList.remove(3); // Removes the element at index 3 of the list 
 
 intList.removeFirst(); // Removes first element of the list 
 
 intList.removeLast(); // Removes last element of the list 
```

Примечание. Все вышеупомянутые методы удаления и извлечения элемента возвращают NoSuchElementException в пустой список.

#### Дополнительная информация:

*   Источник: [Java-документация](https://docs.oracle.com/javase/9/docs/api/overview-summary.html)
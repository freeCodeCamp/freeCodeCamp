---
title: Collections
localeTitle: Colecciones
---
# Colecciones

Una colección en Java es un grupo de objetos que se pueden ordenar (lista enlazada) o desordenados (conjunto). La interfaz de la Colección se encuentra en la parte superior de la jerarquía y todas las demás clases e interfaces se extienden desde esta interfaz. Se encuentra en el paquete java.util.

La interfaz de la Colección también extiende la interfaz de Iterable, lo que significa que cada colección en java debe ser iterable. Esto a su vez significa que se puede usar un bucle para cada uno para obtenerlos en una secuencia.

```java
public interface Collection<E> extends Iterable<E> 
```

Algunos de los métodos más comunes proporcionados por esta interfaz son:

```java
boolean add(E e) // Adds the specified element to the collection if not present and returns true if this collection changed. 
 
 void clear() // Removes all the elements from the collection. 
 
 boolean contains(Object o) // Returns true if the specified element is in the collection else false 
 
 boolean isEmpty() // Returns true if the collection is empty else false 
 
 boolean remove(Object o) // Removes the specifies element and return true on successful removal else false. 
 
 int size() // Returns number of items in the collection. 
```

Estos y otros varios métodos deben ser implementados por cualquier clase que implemente una interfaz de Colección.

## Interfaces que extienden la interfaz de la colección

Otras interfaces importantes que extienden la interfaz de colección son:

Conjunto: Una colección que contiene solo elementos únicos.

Cola: Implemente el comportamiento de la cola donde los elementos se agregan solo al principio y se eliminan del final.

Lista: Esta colección maneja una lista / secuencia de objetos.

Estas cuatro interfaces (Collection, Set, Queue, List) junto con SortedSet, Deque y NavigableSet forman la jerarquía colectiva de Collection.

# La clase LinkedList

LinkedList es una de las clases de Colección más importantes que proporciona una implementación de lista con doble enlace. Implementa las interfaces List, Deque, Cloneable y Serializable.

**Crear una lista enlazada**

```java
LinkedList<Integer> intList = new LinkedList<Integer>(); // Creates a new list of Integer objects. 
```

También puede crear una lista de cualquier otro tipo de objeto. Por ejemplo.

```java
LinkedList<String> stringList = new LinkedList(); 
 
 LinkedList<LinkedList<Integer>> listOfList = new LinkedList(); 
```

Nota: Todas las colecciones en Java se han convertido a tipos genéricos desde JDK 1.5

**Añadir elementos a la lista**

```java
intList.add(new Integer(1)); // Add 1 to the end. 
 
 intList.add(2); // This works as Java provides autoboxing and unboxing of primitive datatypes and their respective wrapper classes 
 
 intList.addFirst(3); // Add to the beginning of the list 
 
 intList.addLast(2); // Add to the end of the list 
 
 intList.add(2, 5); // Add element 5 at index 2 
```

Imprimimos la lista

```java
System.out.println(intList); // toString() method is automatically called on the list 
```

Salida: \[3, 1, 5, 2, 2\]

**Recuperar elementos de la lista.**

```java
intList.get(3); // Returns element at index 3 ie 2 
 
 intList.getFirst(); // Get the first element ie 3 
 
 intList.getLast(); // Returns last element ie 2 
 
 intList.indexOf(2); // Returns first occured index of 2 ie 3 
 
 intList.lastIndexOf(2); // Returns last occured index of 2 ie 4 
```

**LinkedList como una pila**

Dado que Java no proporciona un separado

```java
intList.push(5); // Add element to the end of list. Works same as addLast() 
 
 intList.pop(); // Removes and returns the last element of the list. 
```

**Eliminar elementos de la lista**

```java
intList.remove(3); // Removes the element at index 3 of the list 
 
 intList.removeFirst(); // Removes first element of the list 
 
 intList.removeLast(); // Removes last element of the list 
```

Nota: Todos los métodos mencionados anteriormente para eliminar y recuperar un elemento devuelven la excepción NoSuchElementException en una lista vacía.

#### Más información:

*   Fuente: [Documentación Java](https://docs.oracle.com/javase/9/docs/api/overview-summary.html)
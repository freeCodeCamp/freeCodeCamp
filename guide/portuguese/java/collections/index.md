---
title: Collections
localeTitle: Coleções
---
# Coleções

Uma coleção em Java é um grupo de objetos que podem ser ordenados (LinkedList) ou desordenados (Set). A interface Collection está no topo da hierarquia e todas as outras classes e interfaces se estendem a partir dessa interface. Está localizado no pacote java.util.

A interface Collection também estende a interface Iterable, o que significa que cada coleção em java deve ser iterável. Isso, por sua vez, significa que um loop for-each pode ser usado para buscá-los em uma sequência.

```java
public interface Collection<E> extends Iterable<E> 
```

Alguns dos métodos mais comuns fornecidos por essa interface são:

```java
boolean add(E e) // Adds the specified element to the collection if not present and returns true if this collection changed. 
 
 void clear() // Removes all the elements from the collection. 
 
 boolean contains(Object o) // Returns true if the specified element is in the collection else false 
 
 boolean isEmpty() // Returns true if the collection is empty else false 
 
 boolean remove(Object o) // Removes the specifies element and return true on successful removal else false. 
 
 int size() // Returns number of items in the collection. 
```

Estes e vários outros métodos devem ser implementados por qualquer classe que implemente a interface Collection.

## Interfaces que estendem a interface da coleção

Outras interfaces importantes que estendem a interface de coleta são:

Conjunto: Uma coleção contendo apenas elementos exclusivos.

Fila: Implemente o comportamento da fila em que os elementos são adicionados apenas no início e removidos do final.

Lista: Esta coleção lida com uma lista / seqüência de objetos.

Essas quatro interfaces (Coleção, Conjunto, Fila, Lista) juntamente com SortedSet, Deque e NavigableSet formam a hierarquia coletiva da Coleção.

# A classe LinkedList

LinkedList é uma das classes de coleção mais importantes que fornece uma implementação de lista duplamente vinculada. Implementa as interfaces List, Deque, Cloneable e Serializable.

**Crie um LinkedList**

```java
LinkedList<Integer> intList = new LinkedList<Integer>(); // Creates a new list of Integer objects. 
```

Você também pode criar uma lista de qualquer outro tipo de objeto. Por exemplo

```java
LinkedList<String> stringList = new LinkedList(); 
 
 LinkedList<LinkedList<Integer>> listOfList = new LinkedList(); 
```

Nota: Todas as coleções em Java foram convertidas em tipos genéricos desde o JDK 1.5

**Adicionar elementos à lista**

```java
intList.add(new Integer(1)); // Add 1 to the end. 
 
 intList.add(2); // This works as Java provides autoboxing and unboxing of primitive datatypes and their respective wrapper classes 
 
 intList.addFirst(3); // Add to the beginning of the list 
 
 intList.addLast(2); // Add to the end of the list 
 
 intList.add(2, 5); // Add element 5 at index 2 
```

Deixe-nos imprimir a lista

```java
System.out.println(intList); // toString() method is automatically called on the list 
```

Saída: \[3, 1, 5, 2, 2\]

**Recuperar elementos da lista**

```java
intList.get(3); // Returns element at index 3 ie 2 
 
 intList.getFirst(); // Get the first element ie 3 
 
 intList.getLast(); // Returns last element ie 2 
 
 intList.indexOf(2); // Returns first occured index of 2 ie 3 
 
 intList.lastIndexOf(2); // Returns last occured index of 2 ie 4 
```

**LinkedList como uma pilha**

Como o Java não fornece um

```java
intList.push(5); // Add element to the end of list. Works same as addLast() 
 
 intList.pop(); // Removes and returns the last element of the list. 
```

**Remover elementos da lista**

```java
intList.remove(3); // Removes the element at index 3 of the list 
 
 intList.removeFirst(); // Removes first element of the list 
 
 intList.removeLast(); // Removes last element of the list 
```

Nota: Todos os métodos acima mencionados para remover e buscar um elemento retornam NoSuchElementException em uma lista vazia.

#### Mais Informações:

*   Fonte: [Documentação Java](https://docs.oracle.com/javase/9/docs/api/overview-summary.html)
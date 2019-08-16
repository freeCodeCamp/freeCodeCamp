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
boolean add(E e) // Adiciona elementos específicos do tipo <E>. Retorna true se a coleção foi modificada. 
 
void clear() // Remove todos os elementos da coleção. 
 
boolean contains(Object o) // Retorna true se o elemento estiver na coleção e false caso não esteja. Esse método leva em consideração os métodos equals e hashcode, portanto, esses precisam ser sobrescritos.
 
boolean isEmpty() // Retorna true se a coleção estiver vazia e false caso não esteja.
 
boolean remove(Object o) // Remove o elemento espefícifo e retorna true, caso não exista o elemento na coleção o método retorna false.
 
int size() // Retorna o número de itens contidos na coleção.
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
LinkedList<Integer> intList = new LinkedList<Integer>(); // Cria um novo objeto LinkedList que aceitará apenas elementos do tipo Integer. 
```

Você também pode criar uma lista de qualquer outro tipo de objeto. Por exemplo

```java
LinkedList<String> stringList = new LinkedList(); 
 
LinkedList<LinkedList<Integer>> listOfList = new LinkedList(); 
```

Nota: Todas as coleções em Java foram convertidas em tipos genéricos desde o JDK 1.5

**Adicionar elementos à lista**

```java
intList.add(new Integer(1)); // Adiciona na lista um objeto Integer cujo valor é 1.
 
intList.add(2); // Também adiciona na lista um objeto Integer cujo valor é 2, porém vai obrigar o compilador a fazer um autoboxing do tipo primitivo int para o objeto do tipo Integer. 
 
 intList.addFirst(3); // Adiciona o elemento ao início da lista. 
 
 intList.addLast(2); // Adiciona o elemento ao final da lista.
 
 intList.add(2, 5); // Adiciona o elemento 5 no índice 2
```

Deixe-nos imprimir a lista

```java
System.out.println(intList); // toString() method is automatically called on the list 
```

Saída: \[3, 1, 5, 2, 2\]

**Recuperar elementos da lista**

```java
intList.get(3); // Retorna o elemento cujo conteúdo seja 3. 
 
intList.getFirst(); // Retorna o primeiro elemento da lista.
 
intList.getLast(); // Retorna o último elemento da lista.
 
intList.indexOf(2); //Retorna o elemento que está no índice 2 
 
intList.lastIndexOf(2); // Retorna o índice do elemento cujo valor seja 2.
```

**LinkedList como uma pilha**

Como o Java não fornece um

```java
intList.push(5); // Adiciona o elemento ao final da lista, funciona como o addLast().
 
intList.pop(); // Remove e retorna o último elemento da lista.
```

**Remover elementos da lista**

```java
intList.remove(3); // Remove o elemento que está no índice 3 da lista. 
 
intList.removeFirst(); // Remove e retorna o primeiro elemento da lista. 
 
intList.removeLast(); // Remove e retorna o último elemento da lista. 
```

Nota: Todos os métodos acima mencionados para remover e buscar um elemento retornam NoSuchElementException em uma lista vazia.

#### Mais Informações:

*   Fonte: [Documentação Java](https://docs.oracle.com/javase/9/docs/api/overview-summary.html)

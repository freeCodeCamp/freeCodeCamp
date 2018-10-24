---
title: Streams
localeTitle: Streams
---
# Streams

En Java 8 Streams se agregó como una nueva característica a la caja de herramientas de Java. Los Streams le permiten procesar colecciones de forma rápida y limpia.

Lea el capítulo sobre lambdas y la programación funcional antes de continuar.

## Cómo funciona

Los Stream recorren los elementos de una colección, todos los pasos intermedios y operaciones terminales son llamadas para cada objeto en la colección. Una vez que todas las operaciones han finalizado para el primer objeto, se carga el segundo objeto.

## Métodos importantes

### Creación

*   `Collection.stream()` : crea un Stream desde cualquier objeto de cualquier clase que implementa `Collection`
*   `Arrays.stream(array)` : crea un Stream desde un Array

### Operaciones intermedias

Estas operaciones convierten los objetos Stream de alguna manera.

*   `Stream.map(Function<In,Out> function)` : aplica una función para convertir el objeto de entrada en otro distinto de salida
*   `Stream.filter(Predicate<In> predicate)` : elimina los objetos para los cuales el Predicate no es verdadero
*   `Stream.distinct()` : elimina los objetos de la secuencia que son duplicados
*   `Stream.sorted()` : ordena los Objetos en el Stream
*   `Stream.limit(int n)` : parar Stream después de n objetos

### Operaciones terminales

Estas operaciones reciben los objetos de secuencia y terminan la secuencia.

*   `Stream.collect(Collector<In,?,Out> collector)` : recopila todos los objetos del Stream en un Object
*   `Stream.forEach(Consumer<In> consumer)` : consume todos los Objetos del Stream utilizando la función de consumidor
*   `Stream.count()` : cuenta todos los objetos del Stream
*   `Stream.findFirst()` : devuelve el primer objeto de la secuencia y se detiene
*   `Stream.anyMatch(Predicate<In> predicate)` : devuelve verdadero si algún Objeto en el Stream es verdadero para el Predicado
*   `Stream.allMatch(Predicate<In> predicate)` : devuelve verdadero si todos los Objetos en el Stream son verdaderos para el Predicado

## Ejemplos

```java
// Imprime el largo de todos los Strings de la lista
 for (String string : Arrays.asList("abc", "de", "f", "abc")) { 
    int length = string.length(); 
    System.out.println(length); 
 } 
 
 Arrays.asList("abc", "de", "f", "abc") 
        .stream() 
        .map(String::length) 
        .forEach(System.out::println); 
 
 // salida: 3 2 1 3 
```

```java
// imprime todos los Strings de la lista con un largo mayor que 2
 for (String string : Arrays.asList("abc", "de", "f", "abc")) { 
    if (string.length() > 2) { 
        System.out.println(string); 
    } 
 } 
 
 Arrays.asList("abc", "de", "f", "abc") 
        .stream() 
        .filter(string -> string.length() > 2) 
        .forEach(System.out::println); 
 
 // salida: abc abc 
```

```java
// Crea una lista ordenada con todos los Strings unicos de otra lista que sean mayores o iguales a 2 de largo
 List<String> result = new ArrayList<>(); 
 for (String string : Arrays.asList("de", "abc", "f", "abc")) { 
    if (string.length() >= 2 
            && ! result.contains(string)) { 
        result.add(string); 
    } 
 } 
 Collections.sort(result); 
 
 List<String> result2 = Arrays.asList("de", "abc", "f", "abc") 
        .stream() 
        .filter(string -> string.length() >= 2) 
        .distinct() 
        .sorted() 
        .collect(Collectors.toList()); 
 
 // salida: abc de 
```

### Fuentes

1.  [Procesamiento de datos con Java SE 8 Streams, Parte 1](http://www.oracle.com/technetwork/articles/java/ma14-java-se-8-streams-2177646.html)

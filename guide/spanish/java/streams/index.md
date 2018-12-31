---
title: Streams
localeTitle: Corrientes
---
# Corrientes

En Java 8 Streams se agregó como una nueva característica a la caja de herramientas de Java. Los flujos le permiten procesar colecciones de forma rápida y limpia.

Lea el capítulo sobre lambdas y la programación funcional antes de continuar.

## Cómo funciona

The Stream recorre los elementos de la colección por ti. Cada intermedio y la operación terminal son llamados para cada objeto. Una vez que todas las operaciones han finalizado para los primeros objetos, se carga el segundo objeto.

## Métodos importantes

### Creación

*   `Collection.stream()` : crea un Stream desde cualquier objeto de cualquier clase que implementa `Collection`
*   `Arrays.stream(array)` : crea un Stream desde un Array

### Operaciones intermedias

Estas operaciones convierten los objetos Stream de alguna manera.

*   `Stream.map(Function<In,Out> function)` : aplique una función para convertir de entrada a salida
*   `Stream.filter(Predicate<In> predicate)` : elimina los objetos de Stream para los cuales el Predicate no prueba verdadero
*   `Stream.distinct()` : elimina los objetos de la secuencia que son duplicados
*   `Stream.sorted()` : ordena los Objetos en el Stream
*   `Stream.limit(int n)` : end Stream después de n objetos

### Terminal de Operaciones

Estas operaciones reciben los objetos de secuencia y terminan la secuencia.

*   `Stream.collect(Collector<In,?,Out> collector)` : recopila todos los objetos en Stream en Object
*   `Stream.forEach(Consumer<In> consumer)` : consume todos los Objetos en Stream utilizando la función de consumidor
*   `Stream.count()` : cuenta todos los objetos en Stream
*   `Stream.findFirst()` : devuelve el primer objeto de la secuencia y se detiene
*   `Stream.anyMatch(Predicate<In> predicate)` : devuelve verdadero si algún Objeto en el Corriente prueba verdadero para el Predicado
*   `Stream.allMatch(Predicate<In> predicate)` : devuelve verdadero si todos los Objetos en la Corriente son verdaderos para el Predicado

## Ejemplos

```java
// print the length of all Strings in a List 
 for (String string : Arrays.asList("abc", "de", "f", "abc")) { 
    int length = string.length(); 
    System.out.println(length); 
 } 
 
 Arrays.asList("abc", "de", "f", "abc") 
        .stream() 
        .map(String::length) 
        .forEach(System.out::println); 
 
 // output: 3 2 1 3 
```

```java
// print all Strings in a List with a Length greater than 2 
 for (String string : Arrays.asList("abc", "de", "f", "abc")) { 
    if (string.length() > 2) { 
        System.out.println(string); 
    } 
 } 
 
 Arrays.asList("abc", "de", "f", "abc") 
        .stream() 
        .filter(string -> string.length() > 2) 
        .forEach(System.out::println); 
 
 // output: abc abc 
```

```java
// create a sorted List with all unique Strings from another List which are longer than or requal 2 
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
 
 // result: abc de 
```

### Fuentes

1.  [Procesamiento de datos con Java SE 8 Streams, Parte 1](http://www.oracle.com/technetwork/articles/java/ma14-java-se-8-streams-2177646.html)
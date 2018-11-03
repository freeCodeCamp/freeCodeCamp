---
title: Streams
localeTitle: Streams
---
# Streams

В Java 8 Streams добавлена ​​новая функция Java toolbox. Потоки позволяют быстро и чисто обрабатывать коллекции.

Перед продолжением прочитайте главу о лямбдах и функциональном программировании.

## Как это устроено

Поток обходит элементы коллекции для вас. Каждое промежуточное и терминальное действие вызывается для каждого объекта. После завершения всех операций для первых объектов, загружается второй объект.

## Важные методы

### Создание

*   `Collection.stream()` : создать поток из любого объекта из любого класса, реализующего `Collection`
*   `Arrays.stream(array)` : создать поток из массива

### Промежуточные операции

Эти операции каким-то образом преобразуют объекты Stream.

*   `Stream.map(Function<In,Out> function)` : примените функцию для преобразования In to Out
*   `Stream.filter(Predicate<In> predicate)` : удалить объекты из потока, для которых предикат не проверяет true
*   `Stream.distinct()` : удалить объекты из потока, которые являются дубликатами
*   `Stream.sorted()` : сортировка объектов в потоке
*   `Stream.limit(int n)` : конец потока после n объектов

### Терминальные операции

Эти операции принимают объекты Stream и завершают поток.

*   `Stream.collect(Collector<In,?,Out> collector)` : собирать все объекты в потоке в объект
*   `Stream.forEach(Consumer<In> consumer)` : потребляет все объекты в потоке, используя функцию пользователя
*   `Stream.count()` : считать все объекты в потоке
*   `Stream.findFirst()` : возвращает первый объект Stream и останавливается
*   `Stream.anyMatch(Predicate<In> predicate)` : возвращает true, если какой-либо объект в потоке проверяет true для предиката
*   `Stream.allMatch(Predicate<In> predicate)` : возвращает true, если весь объект в потоке test true для предиката

## Примеры

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

### источники

1.  [Обработка данных с помощью потоков Java SE 8, часть 1](http://www.oracle.com/technetwork/articles/java/ma14-java-se-8-streams-2177646.html)
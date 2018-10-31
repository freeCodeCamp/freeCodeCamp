---
title: Streams
---
# Streams

In Java 8 Streams got added as a new feature the Java toolbox. Streams allow you to quickly and cleanly process Collections.  

Please read the chapter about lambdas and functional programming before continuing.

## How it works
The Stream loops the elements of the collection for you.
Each intermediate and the terminal operation are called for each object.
Once all operations are finished for the first objects, then the second object is loaded.

## Important Methods
### Creation
- `Collection.stream()`: create a Stream from any object from any class implementing `Collection`
- `Arrays.stream(array)`: create a Stream from an Array

### Intermediate Operations
These operations convert the Stream Objects somehow.
- `Stream.map(Function<In,Out> function)`: apply a Function to convert In to Out
- `Stream.filter(Predicate<In> predicate)`: remove Objects from Stream for which the Predicate does not test true
- `Stream.distinct()`: remove Objects from Stream which are duplicates
- `Stream.sorted()`: sort the Objects in the Stream
- `Stream.limit(int n)`: end Stream after n Objects

### Terminal Operations
These operations receive the Stream Objects and end the Stream.
- `Stream.collect(Collector<In,?,Out> collector)`: collect all Objects in Stream into Object
- `Stream.forEach(Consumer<In> consumer)`: consume all Objects in Stream using the consumer function
- `Stream.count()`: count all Objects in Stream
- `Stream.findFirst()`: return the first Object of the Stream and stop
- `Stream.anyMatch(Predicate<In> predicate)`: return true if any Object in the Stream tests true for the Predicate
- `Stream.allMatch(Predicate<In> predicate)`: return true if all Object in the Stream test true for the Predicate

## Examples

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

### Sources
1. [Processing Data with Java SE 8 Streams, Part 1](http://www.oracle.com/technetwork/articles/java/ma14-java-se-8-streams-2177646.html)

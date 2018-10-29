---
title: Streams
localeTitle: 流
---
# 流

在Java 8中，Streams被添加为Java工具箱的新功能。 Streams允许您快速，干净地处理集合。

在继续之前，请阅读有关lambdas和函数式编程的章节。

## 怎么运行的

Stream为您循环集合的元素。 为每个对象调用每个中间和终端操作。 完成第一个对象的所有操作后，将加载第二个对象。

## 重要方法

### 创建

*   `Collection.stream()` ：从任何实现`Collection`类中的任何对象创建一个Stream
*   `Arrays.stream(array)` ：从Array创建一个Stream

### 中级操作

这些操作以某种方式转换流对象。

*   `Stream.map(Function<In,Out> function)` ：应用函数将In转换为Out
*   `Stream.filter(Predicate<In> predicate)` ：从Stream中删除对象，谓词不测试为true
*   `Stream.distinct()` ：从Stream中删除重复的对象
*   `Stream.sorted()` ：对Stream中的对象进行排序
*   `Stream.limit(int n)` ：在n个对象之后的end `Stream.limit(int n)`

### 终端操作

这些操作接收流对象并结束流。

*   `Stream.collect(Collector<In,?,Out> collector)` ：将Stream中的所有对象收集到Object中
*   `Stream.forEach(Consumer<In> consumer)` ：使用使用者函数使用Stream中的所有对象
*   `Stream.count()` ：计算Stream中的所有对象
*   `Stream.findFirst()` ：返回Stream的第一个Object并停止
*   `Stream.anyMatch(Predicate<In> predicate)` ：如果Stream中的任何Object对Predicate测试为true，则返回true
*   `Stream.allMatch(Predicate<In> predicate)` ：如果Stream中的所有Object对Predicate测试为true，则返回true

## 例子

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

### 来源

1.  [使用Java SE 8 Streams处理数据，第1部分](http://www.oracle.com/technetwork/articles/java/ma14-java-se-8-streams-2177646.html)
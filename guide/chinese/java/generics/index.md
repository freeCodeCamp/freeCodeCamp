---
title: Generics
localeTitle: 泛型
---
# 泛型

Java Generics是一种方便地使用特定数据类型的集合和类而不必将数据转换回原始数据类型的方法。这可以防止以编译时和运行时错误的形式出现很多问题。

简单地说，Generics允许你明确地说，例如，一个ArrayList对象保存Integers，这样当你调用get方法时，你不需要在Object和Integer之间进行转换。下面是一个如何在Generics之前使用ArrayList的示例。

```java
import java.util.ArrayList; 
 
 public class Example { 
  private ArrayList classNames; 
 
  public Example() { 
    classNames = new ArrayList(); 
  } 
 
  public void addName(String name) { 
    classNames.add(name); 
  } 
 
  public String getNameAtIndex(int index) { 
    return (String) classNames.get(index); 
  } 
 } 
```

上面的主要问题是，如果以某种方式将类型为String的Object添加到ArrayList中，则`getNameAtIndex(int index)`方法将导致运行时错误。为了解决这个问题，我们使用泛型。

泛型的语法非常简单。下面是实例化ArrayList的示例。

```java
import java.util.ArrayList; 
 
 public class Example { 
  private ArrayList<String> classNames; 
 
  public Example() { 
    classNames = new ArrayList<String>(); 
  } 
 
  public void addName(String name) { 
    classNames.add(name); 
  } 
 
  public String getNameAtIndex(int index) { 
    return classNames.get(index); 
  } 
 } 
```

创建自己的Generic类的语法如下。

```java
import java.util.ArrayList; 
 
 public class Example <T> { 
  private ArrayList<T> classNames; 
 
  public Example() { 
    classNames = new ArrayList<T>(); 
  } 
 
  public void addName(T name) { 
    classNames.add(name); 
  } 
 
  public T getNameAtIndex(int index) { 
    return classNames.get(index); 
  } 
 } 
```

请注意，在命名类时，在尖括号内，您可以确保Generic类型是那样的 你要。例如，如果您想确保类型可以作为String的形式读取，那么您将去`<T extends String>` 。

请注意，字母`T`是占位符，只要您使用相同的字母，就可以制作任何您喜欢的内容 整个班级。
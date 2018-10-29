---
title: Static
localeTitle: 静态的
---
# 静态的

将变量或方法声明为静态时，它属于类，而不是特定实例。这意味着只有一个静态成员实例存在，即使您创建了该类的多个对象，或者您没有创建任何实例。它将由所有对象共享。

static关键字可以与变量，方法，代码块和嵌套类一起使用。

## 静态变量

**_例：_**

```java
public class Counter { 
  public static int COUNT = 0; 
  Counter() { 
    COUNT++; 
  } 
 } 
```

`COUNT`变量将由该类的所有对象共享。当我们在main中创建Counter类的对象时，访问静态变量。

```java
public class MyClass { 
  public static void main(String[] args) { 
    Counter c1 = new Counter(); 
    Counter c2 = new Counter(); 
    System.out.println(Counter.COUNT); 
  } 
 } 
 // Outputs "2" 
```

outout是2，因为`COUNT`变量是静态的，并且每次创建Counter类的新对象时都会增加1。您还可以使用该类的任何对象访问静态变量，例如`c1.COUNT` 。

## 静态方法

静态方法属于类而不是实例。因此，可以在不创建类实例的情况下调用它。它用于改变类的静态内容。静态方法有一些限制：

1.  静态方法不能使用类的非静态成员（变量或函数）。
2.  静态方法不能使用`this`或`super`关键字。

**_例：_**

```java
public class Counter { 
  public static int COUNT = 0; 
  Counter() { 
    COUNT++; 
  } 
 
  public static void increment(){ 
    COUNT++; 
  } 
 } 
```

也可以从类的实例调用静态方法。

```java
public class MyClass { 
  public static void main(String[] args) { 
    Counter.increment(); 
    Counter.increment(); 
    System.out.println(Counter.COUNT); 
  } 
 } 
 // Outputs "2" 
```

输出为2，因为它通过静态方法`increament()`递增。与静态变量类似，也可以使用实例变量访问静态方法。

## 静态块

静态代码块用于初始化静态变量。声明静态变量后立即执行这些块。

**_例：_**

```java
public class Saturn { 
  public static final int MOON_COUNT; 
 
  static { 
    MOON_COUNT = 62; 
  } 
 } 
```

```java
public class Main { 
  public static void main(String[] args) { 
    System.out.println(Saturn.MOON_COUNT); 
  } 
 } 
 // Outputs "62" 
```

输出为62，因为变量`MOON_COUNT`在静态块中分配了该值。

## 静态嵌套类

一个类可以有静态嵌套类，可以使用外部类名访问它。

**_例：_**

```java
public class Outer { 
 
  public Outer() { 
  } 
 
  public static class Inner { 
    public Inner() { 
    } 
  } 
 } 
```

在上面的示例中， `Inner`类可以作为类`Outer`的静态成员直接访问。

```java
public class Main { 
  public static void main(String[] args) { 
    Outer.Inner inner = new Outer.Inner(); 
  } 
 } 
```

[Builder中](https://en.wikipedia.org/wiki/Builder_pattern#Java)常用的静态嵌套类的一个用例java。
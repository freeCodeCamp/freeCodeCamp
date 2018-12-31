---
title: Static
---

# Static
When you declare a variable or a method as static, it belongs to the class, rather than a specific instance.  This means that only one instance of a static member exists, even if you create multiple objects of the class, or if you don't create any. It will be shared by all objects.

The static keyword can be used with variables, methods, code blocks and nested classes.

## Static Variables

***Example:***
```java
public class Counter {
  public static int COUNT = 0;
  Counter() {
    COUNT++;
  }
}
```
The `COUNT` variable will be shared by all objects of that class. When we create objects of our Counter class in main, and access the static variable.
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

The outout is 2, because the `COUNT` variable is static and gets incremented by one each time a new object of the Counter class is created.  You can also access the static variable using any object of that class, such as `c1.COUNT`.

## Static Methods

A static method belongs to the class rather than instances. Thus, it can be called without creating instance of class. It is used for altering static contents of the class. There are some restrictions of static methods :
1. Static method can not use non-static members (variables or functions) of the class.
2. Static method can not use `this` or `super` keywords.

***Example:***
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
Static methods can also be called from instance of the class.
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
The output is 2 because it gets incremented by static method `increment()`. Similar to static variables, static methods can also be accessed using instance variables.

## Static Blocks

Static code blocks are used to initialise static variables. These blocks are executed immediately after declaration of static variables.

***Example:***
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
The output is 62, because variable `MOON_COUNT` is assigned that value in the static block.


## Static Nested Classes

A class can have static nested class which can be accessed by using outer class name.

***Example:***
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
In above example, class `Inner` can be directly accessed as a static member of class `Outer`.
```java
public class Main {
  public static void main(String[] args) {
    Outer.Inner inner = new Outer.Inner();
  }
}
```
One of the use case of static nested classes in [Builder Pattern](https://en.wikipedia.org/wiki/Builder_pattern#Java) popularly used in java.

#### More Information:
- [Oracle Java Docs :Static Fields](https://docs.oracle.com/javase/specs/jls/se7/html/jls-8.html#jls-8.3.1.1)
- [Oracle Java Docs :Static Methods](https://docs.oracle.com/javase/specs/jls/se7/html/jls-8.html#jls-8.4.3.2)

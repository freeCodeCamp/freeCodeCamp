---
title: Concrete Classes
---
# Concrete Classes

In java we can divide classes into two parts based on abstraction
* Concrete class
* Abstract class

Abstract classes cannot be instantiated i.e there objects cannot be made. eg:

```
A a = new A()     // We can't do this if A is an abstract class

A a = new B()    // But we can do this if A is abstract class and B is its non-abstract child
```

Concrete classes are opposite to abstract classes. In abstract classes there is atleast one abstract method but in concrete <br>
class there is no abstract method and hence it can be instantiated.

For example:
```java
public class A      // This is a concete class because there is no abstract method in the class
{
  private int a;
  private int b;
  
  public void printA()
  {
    System.out.println(a);
  }
  
  public void printB()
  {
    System.out.println(b);
  }
}
```
So, in case of concrete class we can do the following:
```
A a = new A()     // We can do this if A is concrete class

A a = new B()    // We can also do this if A is concrete class and B is its non-abstract child
```


### Sources
[1. Stack Overflow java concrete classes](https://stackoverflow.com/questions/43224901/what-is-the-concrete-class-in-java)

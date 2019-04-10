---
title: POJO
---
## POJO
POJO stands for "Plain Old Java Object". This is different from Plain Old _Javascript_ Objects.
A Plain Old Java Object refers to the Object Oriented Programming (OOP) paradigm that is used in the Java programming language. The [OOP model](https://en.wikipedia.org/wiki/Object-oriented_programming) treats data as 'objects'. Each 'object' is an instance of a 'Class', which represents the archetype or template from which all objects inherit their properties and attributes. 

A POJO is therefore simply a Java Object.  However, it must also satisfy the following additional criteria:
1. it must not extend prespecified Java Classes;

```java
public class Foo extends javax.servlet.http.HttpServlet { 
...// body ... 
}
```
2. it must not implement prespecified Interfaces;

```java
public class Bar implements javax.ejb.EntityBean { 
  ...  // body
}  
```
3. it must not contain prespecified Annotations.
```java
@javax.persistence.Entity public class Baz { 
  ... // body ...
}  
```

4. For any class field which is marked as private it must have getter and setter methods alongside it. Also it must have EMPTY constructor if custom constructor declared.
```
public class Car {
  
  private int gear;
  
  // default constructor
  public Car() { }
  
  // custom constructor
  public Car(int car){
    this.car = car;
  }
  
  public int getGear() {
    return this.gear;
  }
  
  public void setGear(int gear){ 
    this.gear = gear;
  }
  
}
```

Therefore a Java Object qualifies as a POJO only when it is free from the above modifications. It therefore follows that a POJO is not 'bound by any restrictions' other those prescribed by the formal Java language specification.

POJO is usually used to describe a class that doesn't need to be a subclass of anything, or implement specific interfaces, or follow a specific pattern. It has properties, getters and setters for respective properties. It may also override Object.toString() and Object.equals().


#### More Information:
[Wikipedia - POJOs](https://en.wikipedia.org/wiki/Plain_old_Java_object)

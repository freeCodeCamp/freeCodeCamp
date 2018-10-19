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

Therefore a Java Object qualifies as a POJO only when it is free from the above modifications. It therefore follows that a POJO is not 'bound by any restrictions' other those prescribed by the formal Java language specification.


#### More Information:
[Wikipedia - POJOs](https://en.wikipedia.org/wiki/Plain_old_Java_object)

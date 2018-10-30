---
title: Typecasting
---

## Typecasting
Converting one data type to another data type is known as type casting. Since 
Java is an Object Oriented programming language and supports both **Inheritance** and **Polymorphism**.

When we assign value of one data type to another, the two types might not be compatible with each other. If the data types are compatible, meaning that they are sub-classes of the same super-class, then the JVM  will perform the conversion automatically known as automatic type conversion and if not then they need to be casted or converted explicitly. 
### Types of Typecasting
In Java, type casting is classified into two types.

***1.  Implicit Typecasting***
Here, Automatic Type casting takes place when the two types are compatible in a way, where the type to be casted fits seemlessly into the type it's being casted into. In this case, `int` is smaller than `long`, and `long` is smaller than float, so they can be casted automatically (without an explicit statement).

``` java
      int i = 100;
      long l = i;	//no explicit type casting required
      float f = l;	//no explicit type casting required
```
***2.  Explicit Typecasting***
When we assign a larger type value to a variable of smaller type, then we need to perform explicit type casting. We also need to use explicit type casting if we cast a subclass to an instance of a superclass. 
eg.
```java
      double d = 100.04;
      long l = (long)d;  //explicit type casting required
      int i = (int)l;	//explicit type casting required
```

#### More Information:
- [Oracle Java Docs :Typecasting](https://docs.oracle.com/javase/specs/jls/se7/html/jls-5.html)

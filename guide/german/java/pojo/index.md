---
title: POJO
---
## POJO
POJO steht für "Plain Old Java Object". Nicht zu verwechseln mit Plain Old _Javascript_ Objects.
Ein Plain Old Java Object bezieht sich auf das Object Oriented Programming (OOP) Paradigma, welches in der Java-Programmierung benutzt wird.

Daher ist ein POJO ein einfaches Java Object.  Es muss allerdings folgende Kriterien erfüllen:
1. es darf keine vorgegebenen Java Klassen erweitern;

```java
public class Foo extends javax.servlet.http.HttpServlet { 
...// body ... 
}
```
2. es darf keine vorgegebenen Schnittstellen implementieren;

```java
public class Bar implements javax.ejb.EntityBean { 
  ...  // body
}  
```
3. es darf keine vorgegebenen Annotations enthalten.
```java
@javax.persistence.Entity public class Baz { 
  ... // body ...
}  
```
Daher qualifiziert sich ein Java Object als POJO nur wenn es die obengenannten Modifikationen nicht enthält. Es ist also nicht an irgendwelche Restriktionen gebunden.


#### Mehr Informationen:
[Wikipedia - POJOs deutsch](https://de.wikipedia.org/wiki/Plain_Old_Java_Object)

[Wikipedia - POJOs englisch ](https://en.wikipedia.org/wiki/Plain_old_Java_object)

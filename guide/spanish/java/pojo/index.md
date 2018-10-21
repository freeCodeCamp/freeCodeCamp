---
title: POJO
localeTitle: POJO
---
## POJO

POJO significa "Plain Old Java Object". Esto es diferente de los objetos _Javascript_ de Plain Old. Un objeto Java antiguo simple se refiere al paradigma de programación orientada a objetos (OOP) que se utiliza en el lenguaje de programación Java. El [modelo OOP](https://en.wikipedia.org/wiki/Object-oriented_programming) trata los datos como 'objetos'. Cada 'objeto' es una instancia de una 'Clase', que representa el arquetipo o la plantilla de la cual todos los objetos heredan sus propiedades y atributos.

Un POJO es, por lo tanto, simplemente un objeto Java. Sin embargo, también debe cumplir los siguientes criterios adicionales:

1.  no debe extender las Clases Java preespecificadas;

```java
public class Foo extends javax.servlet.http.HttpServlet { 
 ...// body ... 
 } 
```

2.  no debe implementar interfaces preespecificadas;

```java
public class Bar implements javax.ejb.EntityBean { 
  ...  // body 
 } 
```

3.  no debe contener anotaciones preespecificadas.

```java
@javax.persistence.Entity public class Baz { 
  ... // body ... 
 } 
```

Por lo tanto, un objeto Java califica como POJO solo cuando está libre de las modificaciones anteriores. Por lo tanto, se deduce que un POJO no está "sujeto a ninguna restricción", aparte de los prescritos por la especificación formal del lenguaje Java.

#### Más información:

[Wikipedia - POJOs](https://en.wikipedia.org/wiki/Plain_old_Java_object)
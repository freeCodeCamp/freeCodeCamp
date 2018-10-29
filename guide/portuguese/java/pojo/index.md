---
title: POJO
localeTitle: POJO
---
## POJO

POJO significa "Plain Old Java Object". Isso é diferente dos Objetos _Javascript_ Antigos Simples. Um Objeto Java Velho Comum refere-se ao paradigma de programação orientada a objetos (Object Oriented Programming - OOP) que é usado na linguagem de programação Java. O [modelo OOP](https://en.wikipedia.org/wiki/Object-oriented_programming) trata os dados como 'objetos'. Cada 'objeto' é uma instância de 'Classe', que representa o arquétipo ou modelo a partir do qual todos os objetos herdam suas propriedades e atributos.

Um POJO é, portanto, simplesmente um objeto Java. No entanto, também deve satisfazer os seguintes critérios adicionais:

1.  não deve estender classes Java pré-especificadas;

```java
public class Foo extends javax.servlet.http.HttpServlet { 
 ...// body ... 
 } 
```

2.  não deve implementar Interfaces pré-especificadas;

```java
public class Bar implements javax.ejb.EntityBean { 
  ...  // body 
 } 
```

3.  não deve conter Anotações pré-especificadas.

```java
@javax.persistence.Entity public class Baz { 
  ... // body ... 
 } 
```

Portanto, um objeto Java se qualifica como um POJO apenas quando está livre das modificações acima. Segue-se, portanto, que um POJO não está “limitado por quaisquer restrições”, a não ser aquelas prescritas pela especificação formal da linguagem Java.

#### Mais Informações:

[Wikipedia - POJOs](https://en.wikipedia.org/wiki/Plain_old_Java_object)
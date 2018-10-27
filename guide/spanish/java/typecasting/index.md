---
title: Typecasting
localeTitle: Conversiones de Tipo (Casting)
---

## Conversiones de Tipo

La conversión de un tipo de dato a otro tipo de dato se conoce como conversión de tipos o casting. Ya que Java es un lenguaje de programación orientado a objetos y soporta tanto  **herencia** como **polimorfismo**. Es fácil que una variable de referencia del tipo de una  súper clase, apunte a un objeto del tipo de una subclase.

Cuando asignamos un valor de un tipo de dato a otro, puede que los dos tipos no sean  compatibles entre si. Si los tipos de datos son compatibles entonces la JVM realizará la conversión automáticamente, conocida como conversión de tipo automática, de no ser así, será necesario convertirlos explícitamente (hacerles casting).

### Tipos de Conversiones de Tipo

La conversión o casting de Tipos en Java se clasifica en dos.

***1\. Conversión de Tipo implícita*** Aquí, la conversión automática de tipos tiene lugar cuando los dos tipos son compatibles y el tipo de destino es más grande que el tipo de origen, por ejemplo:

```java
 int i = 100;
 long l = i; // no se requiere conversión de tipo explícita
 float f = l; // no se requiere conversión de tipo explícita
```

***2. Conversión de Tipo explícita*** Cuando asignamos un valor con un tipo mayor a una variable de un tipo menor, entonces necesitamos realizar una conversión de tipo explícita, por ejemplo:

```java
 double d = 100.04;
 long l = (long) d; // requiere conversión de tipo explícita
 int i = (int) l; // requiere conversión de tipo explícita
```

#### Más información (En inglés):

*   [Oracle Java Docs: Typecasting](https://docs.oracle.com/javase/specs/jls/se7/html/jls-5.html)
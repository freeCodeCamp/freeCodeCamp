---
title: Typecasting
localeTitle: Encasillado
---## Encasillado

La conversión de un tipo de datos a otro tipo de datos se conoce como conversión de tipos. Ya que Java es un lenguaje de programación orientado a objetos y es compatible con **herencia** y **polimorfismo** . Es fácil que la variable de referencia de súper clase apunte al objeto de subclase.

Cuando asignamos el valor de un tipo de datos a otro, los dos tipos pueden no ser compatibles entre sí. Si los tipos de datos son compatibles, entonces JVM realizará la conversión conocida automáticamente como conversión de tipo automática y, de no ser así, será necesario convertirlos o convertirlos explícitamente.

### Tipos de Typecasting

Java, el casting de tipos se clasifica en dos tipos.

**_1\. Typecasting implícito_** Aquí, la conversión automática de tipos tiene lugar cuando los dos tipos son compatibles el tipo de destino es más grande que el tipo de origen. p.ej. \`\` \`java int i = 100; larga l = i; // no se requiere conversión de tipo explícito float f = l; // no se requiere conversión de tipo explícito
```
***2.  Explicit Typecasting*** 
 When we assign a larger type value to a variable of smaller type, then we need to perform explicit type casting. 
 eg. 
```

Java doble d = 100.04; largo l = (largo) d; // Tipo explícito de casting requerido int i = (int) l; // Tipo explícito de casting requerido \`\` \`

#### Más información:

*   [Oracle Java Docs: Typecasting](https://docs.oracle.com/javase/specs/jls/se7/html/jls-5.html)
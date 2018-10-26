---
title: Variables
localeTitle: Variables
---
# Variables

Las variables almacenan valores. Son la entidad más básica utilizada para almacenar datos como texto, números, etc. en un programa.

En [Java](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Java) , las variables son [fuertemente tipeadas](https://en.wikipedia.org/wiki/Strong_and_weak_typing#Definitions_of_.22strong.22_or_.22weak.22), lo que significa que debe definir el tipo para cada variable cada vez que la declare. De lo contrario, el compilador lanzará un error en el [tiempo de compilación](https://en.wikipedia.org/wiki/Compile_time). Por lo tanto, cada variable tiene un '[tipo de dato](https://guide.freecodecamp.org/java/data-types)' asociado de uno de los siguientes:

*   Tipo primitivo: `int`, `short`, `char`, `long`, `boolean`, `byte`, `float`, `double`
*   Tipo envoltorio: `Integer`, `Short`, `Char`, `Long`, `Boolean`, `Byte`, `Float`, `Double`
*   Tipo referencia: `String`, `StringBuilder`, `Calendar`, `ArrayList`, etc.

Es posible que haya notado que el **Tipo Envoltorio** consiste en tipos escritos exactamente como el **Tipo Primitivo**, excepto por la letra mayúscula del principio (como el **Tipo Referencia**). Esto se debe a que los Tipos Envoltorio son en realidad una parte de los Tipos Referencia más generales, pero están _estrechamente relacionados_ con sus homólogos primitivos a través de [autoboxing y unboxing](https://docs.oracle.com/javase/tutorial/java/data/autoboxing.html). Por ahora, solo necesita saber que existe dicho 'Tipo Envoltorio'.

Generalmente, puede _declarar_ (es decir, crear) variables según la siguiente sintaxis: 

 < _tipo de dato_ > < _nombre de la variable_ >;

```java
 // Tipo de Dato Primitivo 
 int i; 
 
 // Tipo de Dato Referencia 
 Float miFlotante; 
```

Puede _asignar_ un valor a la variable de forma simultánea cuando la declara (lo que se denomina _inicialización_), o en cualquier lugar del código después de haberla declarado. El símbolo **\=** se utiliza para esto.

```java
 // Inicializa la variable de Tipo Primitivo 'int' para almacenar el valor 10 
 int i = 10; 
 double cantidad = 10.0; 
 boolean estaAbierto = false; 
 char c = 'a'; // Observe las comillas simples
 
 // Las variables también pueden ser declaradas en una sentencia, y despues asignarles valores. 
 int j; 
 j = 10; 
 
 // Inicializa un objeto Float con el valor de 1.0 
 // La variable miFlotante ahora apunta al objeto 
 Float miFlotante = new Float(1.0); 
 
 // Los bytes son uno de los Tipos en Java y pueden ser  
 // representados cone este codigo
 int valorDelByte = 0B101; 
 byte otroByte = (byte)0b00100001; 
```

Como se desprende del ejemplo anterior, las variables del tipo Primitivo se comportan de manera ligeramente diferente a las variables del tipo Referencia (y Envoltorio); mientras que las variables Primitivas _almacenan_ el valor real, las variables de Referencia hacen _referencia a_ un 'objeto' que contiene el valor real. Puede encontrar más información en las secciones vinculadas a continuación.

# Otros recursos (en Inglés)

*   [Tipos de datos](https://guide.freecodecamp.org/java/data-types)
*   [Clases y objetos](https://guide.freecodecamp.org/java/classes-and-objects)
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTIwNDc2ODYxNTksMjA3MzIyNzY5OCwtMj
M2MTI0ODQwLDE1NzUwNTYyMzksNjI5MzM5NTIxLDE4ODYzMDMw
MDcsLTg0OTg5MjI3MSwtMTA2MjgzNTUzMF19
-->
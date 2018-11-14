---
title: Variables
localeTitle: Variables
---
# Variables

Las variables almacenan valores. Son la entidad más básica utilizada para almacenar datos como texto, números, etc. en un programa.

En [Java](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Java) , las variables se [_escriben con mucha fuerza_](https://en.wikipedia.org/wiki/Strong_and_weak_typing#Definitions_of_.22strong.22_or_.22weak.22) , lo que significa que debe definir el tipo para cada variable cada vez que lo declare. De lo contrario, el compilador lanzará un error en el [tiempo de compilación](https://en.wikipedia.org/wiki/Compile_time) . Por lo tanto, cada variable tiene un ' [tipo de datos](https://guide.freecodecamp.org/java/data-types) ' asociado de uno de los siguientes:

*   Tipo primitivo: `int` , `short` , `char` , `long` , `boolean` , `byte` , `float` , `double`
*   Tipo de envoltura: `Integer` , `Short` , `Char` , `Long` , `Boolean` , `Byte` , `Float` , `Double`
*   Tipo de referencia: `String` , `StringBuilder` , `Calendar` , `ArrayList` , etc.

Es posible que haya notado que el **tipo de envoltorio** consiste en tipos escritos exactamente como el **tipo primitivo** , excepto el alfabeto en mayúscula al principio (como el **tipo de referencia** ). Esto se debe a que los tipos de envoltorio son en realidad una parte de los tipos de referencia más generales, pero están _estrechamente relacionados_ con sus homólogos [primarios a](https://docs.oracle.com/javase/tutorial/java/data/autoboxing.html) través de [autoboxing y unboxing](https://docs.oracle.com/javase/tutorial/java/data/autoboxing.html) . Por ahora, solo necesita saber que existe tal 'tipo de envoltura'.

Normalmente, puede _declarar_ (es decir, crear) variables según la siguiente sintaxis: < _tipo de datos_ > <nombre de _variable_ >;

```java
// Primitive Data Type 
 int i; 
 
 // Reference Data Type 
 Float myFloat; 
```

Puede _asignar_ un valor a la variable de forma simultánea cuando lo declara (lo que se denomina _inicialización_ ), o en cualquier lugar del código después de haberlo declarado. El símbolo **\=** se utiliza para el mismo.

```java
// Initialise the variable of Primitive Data Type 'int' to store the value 10 
 int i = 10; 
 double amount = 10.0; 
 boolean isOpen = false; 
 char c = 'a'; // Note the single quotes 
 
 //Variables can also be declared in one statement, and assigned values later. 
 int j; 
 j = 10; 
 
 // initiates an Float object with value 1.0 
 // variable myFloat now points to the object 
 Float myFloat = new Float(1.0); 
 
 //Bytes are one of types in Java and can be 
 //represented with this code 
 int byteValue = 0B101; 
 byte anotherByte = (byte)0b00100001; 
```

Como se desprende del ejemplo anterior, las variables del tipo Primitivo se comportan de manera ligeramente diferente a las variables del tipo Referencia (y envoltorio); mientras que las variables Primitivas _almacenan_ el valor real, las variables de referencia se _refieren a_ un 'objeto' que contiene el valor real. Puede encontrar más información en las secciones vinculadas a continuación.

# Otros recursos

*   [Tipos de datos](https://guide.freecodecamp.org/java/data-types)
*   [Clases y objetos](https://guide.freecodecamp.org/java/classes-and-objects)
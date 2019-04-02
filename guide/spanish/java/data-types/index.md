---
title: Data Types
localeTitle: Tipos de datos
---
# Tipos de datos

Java es un lenguaje fuertemente tipado. Esto significa que, en Java, cada tipo de datos tiene su propia definición estricta. No hay conversiones de tipo de datos implícitas cuando ocurren conflictos entre los tipos de datos. Cualquier cambio en los tipos de datos debe ser declarado explícitamente por el programador.

Java define 8 tipos de datos primitivos: `byte` , `short` , `int` , `long` , `char` , `float` , `double` y `boolean` .

Se dividen en las siguientes categorías:

*   Enteros
*   Números de punto flotante
*   Caracteres
*   Tipo booleano

Los detalles de cada uno de los tipos de datos se dan a continuación:

## Enteros:

Estos son de cuatro tipos: `byte` , `short` , `int` , `long` . Es importante tener en cuenta que estos son valores positivos y negativos firmados. Los enteros firmados se almacenan en una computadora utilizando [el complemento de 2](http://www.ele.uri.edu/courses/ele447/proj_pages/divid/twos.html) . Consiste en valores negativos y positivos, pero en diferentes formatos como `(-1 to -128)` o `(0 to +127)` . Un entero sin signo puede contener un valor positivo mayor y ningún valor negativo como `(0 to 255)` . A diferencia de C ++, no hay un entero sin signo en Java.

### byte:

El tipo de datos de byte es un entero de complemento de dos con signo de 8 bits.
```
Wrapper Class: Byte 
 
 Minimum value: -128 (-2^7) 
 
 Maximum value: 127 (2^7 -1) 
 
 Default value: 0 
 
 Example: byte a = 10 , byte b = -50; 
```

### corto:

El tipo de datos cortos es un entero de complemento de dos bits con signo de 16 bits.
```
Wrapper Class: Short 
 
 Minimum value: -32,768 (-2^15) 
 
 Maximum value: 32,767 (2^15 -1) 
 
 Default value: 0. 
 
 Example: short s = 10, short r = -1000; 
```

### En t:

tipo de datos int es un entero de complemento de dos bits con signo de 32 bits. Generalmente se usa como el tipo de datos predeterminado para los valores integrales a menos que exista una preocupación sobre la memoria.
```
Wrapper Class: Integer 
 
 Minimum value: (-2^31) 
 
 Maximum value: (2^31 -1) 
 
 The default value: 0. 
 
 Example: int a = 50000, int b = -20 
```

### largo:

El tipo de datos largo es un entero de complemento a dos con signo de 64 bits.
```
Wrapper Class: Long 
 
 Minimum value: (-2^63) 
 
 Maximum value: (2^63 -1) 
 
 Default value: 0L. 
 
 Example: long a = 100000L, long b = -600000L; 
 
 By default all integer type variable is "int". So long num=600851475143  will give an error. 
 But it can be specified as long by appending the suffix L (or l) 
```

## Punto Flotante:

Estos también se llaman números reales y se usan para expresiones que involucran precisión fraccionaria. Estos son de dos tipos: `float` , `double` . La flotación se evita realmente en caso de datos precisos, como la moneda o los datos de investigación.

### flotador:

el tipo de datos flotante es un [punto flotante IEEE 754 de](http://steve.hollasch.net/cgindex/coding/ieeefloat.html) 32 bits de precisión [simple](http://steve.hollasch.net/cgindex/coding/ieeefloat.html) .
```
Wrapper Class: Float 
 
 Float is mainly used to save memory in large arrays of floating point numbers. 
 
 Default value: 0.0f. 
 
 Example: float f1 = 24.5f; 
 
 The default data type of floating-point number is double. So float f = 24.5 will introduce an error. 
 However, we can append the suffix F (or f) to designate the data type as float. 
```

### doble:

El tipo de datos doble es un [punto flotante IEEE 754 de](http://steve.hollasch.net/cgindex/coding/ieeefloat.html) doble precisión de 64 bits. Este tipo de datos es generalmente la opción predeterminada. Este tipo de datos nunca debe utilizarse para valores precisos, como la moneda.
```
Wrapper Class: Double 
 
 This data type is generally used as the default data type for decimal values. 
 
 Default value: 0.0d. 
 
 Example: double d1 = 123.400778; 
```

## Personaje:

Utilizamos este tipo de datos para almacenar caracteres. Esto no es lo mismo que el char en C / C ++. Java usa un juego de caracteres `UNICODE` , aceptado internacionalmente. Char en Java es de 16 bits, mientras que en C / C ++ es de 8 bits.
```
Wrapper Class: Character 
 
 Minimum value: '\u0000' (or 0). 
 
 Maximum value: '\uffff' (or 65,535). 
 
 Default value: null ('\u0000'). 
 
 Example: char letterA ='a'; 
```

## Booleano

Esto se utiliza para almacenar valores lógicos. Un tipo booleano puede tener un valor de verdadero o falso. Este tipo es generalmente devuelto por los operadores relacionales.
```
There are only two possible values: true and false. 
 
 Wrapper Class: Boolean 
 
 This data type is used for simple flags that track true/false conditions. 
 
 Default value is false. 
 
 Example: boolean b = true, boolean b1 = 1(this is not possible in java and give incompatible type error), boolean b2; 
```

## Tipos de datos de referencia:

Aparte de los tipos de datos primitivos, hay variables de referencia creadas usando constructores de diferentes clases. Las variables de referencia se utilizan para cualquier clase, así como la matriz, Cadena, Escáner, Aleatorio, Matriz, etc. Las variables de referencia se inicializan utilizando la nueva palabra clave.

Ejemplo:

```java
public class Box{ 
 
    int length, breadth, height; 
 
    public Box(){ 
        length=5; 
        breadth=3; 
        height=2; 
    } 
 } 
 
 class demo{ 
 
    public static void main(String args[]) { 
        Box box1 = new Box();                //box1 is the reference variable 
        char[] arr = new char[10];           //arr is the reference variable 
    } 
 } 
```

## Cuerda:

La cadena no es un tipo de datos primitivo, pero le permite almacenar múltiples tipos de datos de caracteres en una matriz y tiene muchos métodos que se pueden usar. Se usa con bastante frecuencia cuando el usuario escribe datos y hay que manipularlos.

En el ejemplo a continuación, intentamos eliminar todas las letras de la cadena y generarlas:

```java
String input = "My birthday is 10 January 1984 and my favorite number is 42"; 
 String output = ""; 
 
 for(int i=0;i<input.length();i++){ 
 
 //if the character at index i on the string is a letter or a space, move on to the next index 
 if(Character.isLetter(input.charAt(i)) || input.charAt(i)==' '){ 
 
    continue; 
 } 
 
 output = output + input.charAt(i); //the number is added onto the output 
 
 } 
 
 System.out.println(output); 
```

Salida:
```
10198442 

```
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
 
 Valor mínimo: -128 (-2^7) 
 
 Valor máximo: 127 (2^7 -1) 
 
 Valor por defecto: 0 
 
 Ejemplo: byte a = 10 , byte b = -50; 
```

### corto:

El tipo de datos cortos es un entero de complemento de dos bits con signo de 16 bits.
```
Wrapper Class: Short 
 
  Valor mínimo: -32,768 (-2^15) 
 
 Valor máximo: 32,767 (2^15 -1) 
 
 Valor por defecto: 0. 
 
 Ejemplo: short s = 10, short r = -1000; 
```

### En t:

tipo de datos int es un entero de complemento de dos bits con signo de 32 bits. Generalmente se usa como el tipo de datos predeterminado para los valores integrales a menos que exista una preocupación sobre la memoria.
```
Wrapper Class: Integer 
 
 Valor mínimo: (-2^31) 
 
 Valor máximo: (2^31 -1) 
 
 Valor por defecto: 0. 
 
 Ejemplo: int a = 50000, int b = -20 
```

### largo:

El tipo de datos largo es un entero de complemento a dos con signo de 64 bits.
```
Wrapper Class: Long 
 
 Valor mínimo: (-2^63) 
 
 Valor máximo: (2^63 -1) 
 
 Valor por defecto: 0L. 
 
 Ejemplo: long a = 100000L, long b = -600000L; 
 
 Por defecto, todos los valores de integer type es "int". Entonces, num = 600851475143 dará un error.
  Pero puede especificarse siempre agregando el sufijo L (o l)
```

## Punto Flotante:

Estos también se llaman números reales y se usan para expresiones que involucran precisión fraccionaria. Estos son de dos tipos: `float` , `double` . La flotación se evita realmente en caso de datos precisos, como la moneda o los datos de investigación.

### flotador:

el tipo de datos flotante es un [punto flotante IEEE 754 de](http://steve.hollasch.net/cgindex/coding/ieeefloat.html) 32 bits de precisión [simple](http://steve.hollasch.net/cgindex/coding/ieeefloat.html) .
```
Wrapper Class: Float 
 
 Float se utiliza principalmente para ahorrar memoria en grandes conjuntos de números de floating point.
 
 Valor por defecto: 0.0f. 
 
 Ejemplo: float f1 = 24.5f; 
 
 El tipo de datos predeterminado del número de floating point es double. Entonces float f = 24.5 introducirá un error.
  Sin embargo, podemos agregar el sufijo F (o f) para designar el tipo de datos como float. 
```

### doble:

El tipo de datos doble es un [punto flotante IEEE 754 de](http://steve.hollasch.net/cgindex/coding/ieeefloat.html) doble precisión de 64 bits. Este tipo de datos es generalmente la opción predeterminada. Este tipo de datos nunca debe utilizarse para valores precisos, como la moneda.
```
Wrapper Class: Double 
 
 Este tipo de datos se usa generalmente como el tipo de datos predeterminado para valores de decimal. 
 
 Valor por defecto: 0.0d. 
 
 Ejemplo: double d1 = 123.400778; 
```

## Personaje:

Utilizamos este tipo de datos para almacenar caracteres. Esto no es lo mismo que el char en C / C ++. Java usa un juego de caracteres `UNICODE` , aceptado internacionalmente. Char en Java es de 16 bits, mientras que en C / C ++ es de 8 bits.
```
Wrapper Class: Character 
 
 Valor mínimo: '\u0000' (or 0). 
 
 Valor máximo: '\uffff' (or 65,535). 
 
 Valor por defecto: null ('\u0000'). 
 
 Ejemplo: char letterA ='a'; 
```

## Booleano

Esto se utiliza para almacenar valores lógicos. Un tipo booleano puede tener un valor de verdadero o falso. Este tipo es generalmente devuelto por los operadores relacionales.
```
Solo hay dos valores posibles: verdadero y falso (true y false). 
 
 Wrapper Class: Boolean 
 
 Este tipo de datos se utiliza para indicadores simples que rastrean condiciones de verdadero / falso. 
 
 El valor de defecto es falso. 
 
 Ejemplo: boolean b = true, boolean b1 = 1(Esto no es posible en java y da error de tipo incompatible), boolean b2; 
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
        Box box1 = new Box();                //box1 es la variable de referencia
        char[] arr = new char[10];           //arr es la variable de referencia
    } 
 } 
```

## Cuerda:

La cadena no es un tipo de datos primitivo, pero le permite almacenar múltiples tipos de datos de caracteres en una matriz y tiene muchos métodos que se pueden usar. Se usa con bastante frecuencia cuando el usuario escribe datos y hay que manipularlos.

En el ejemplo a continuación, intentamos eliminar todas las letras de la cadena y generarlas:

```java

//"Mi cumpleaños es el 10 de Enero 1984 y mi número favorito es 42"
String input = "My birthday is 10 January 1984 and my favorite number is 42";      
 String output = ""; 
 
 for(int i=0;i<input.length();i++){ 
 
 //si el carácter en el índice i en la cadena es una letra o un espacio, pase al siguiente índice
 if(Character.isLetter(input.charAt(i)) || input.charAt(i)==' '){ 
 
    continue; 
 } 
 
 output = output + input.charAt(i); //el número esta incluido en la salida 
 
 } 
 
 System.out.println(output); 
```

Salida:
```
10198442 

```

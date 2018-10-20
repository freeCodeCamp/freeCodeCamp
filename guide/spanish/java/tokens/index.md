---
title: tokens
localeTitle: tokens
---
# Tokens en Java

Estos son los componentes fundamentales de un programa o la unidad más pequeña de un programa. Java admite cinco tipos de tokens:

## 1\. Palabras clave

Estas son las palabras que tienen sus definiciones predefinidas en el compilador y no pueden usarse como los nombres de los identificadores. Hay 51 palabras clave y 2 palabras reservadas en Java.

## 2\. identificadores

Estos son los diferentes nombres dados a los diferentes componentes del programa. Estos incluyen los nombres de variables, métodos, clase, etc. No deben comenzar con un dígito, pero pueden contener dígitos, letras, guiones bajos, símbolos de moneda.

## 3\. literales

Estos proporcionan una forma de expresar valores específicos en un programa. Estos son de los siguientes tipos:

### Literales numericos

Estos son de tres tipos en Java.

*   \#### Literales enteros
*   \#### Literales de punto flotante
*   \#### caracteres literales

### Literales booleanos

Estos son de dos tipos

*   \#### cierto
*   \#### falso

### Literales de cuerda

## 4\. Operadores

Estos son los tipos especiales de símbolos utilizados para realizar ciertas operaciones. Por ejemplo +, -, \*, /,%

## 5\. Separadores

Estos incluyen pestaña, entrar, barra espaciadora.

##### Ahora consideremos un programa

```java
       //Printing Hello World 
 
 public class Hello 
 
 { 
 
 public static void main(String args[]) 
 
 { 
 
 System.out.println(“Hello World”); 
 
 } 
 
 } 
```

El código fuente contiene tokens como _public_ , _class_ , _Hello_ , {, _public_ , _static_ , _void_ , _main_ , (, _String_ , \[\], _args_ , {, _System_ , _out_ , _println_ , (, _"Hello World"_ ,},} Los tokens resultantes se compilan en códigos de bytes de Java que pueden ejecutarse desde un entorno Java interpretado. Los tokens son útiles para que el compilador detecte errores. Cuando los tokens no están organizados en una secuencia particular, el compilador genera un mensaje de error.
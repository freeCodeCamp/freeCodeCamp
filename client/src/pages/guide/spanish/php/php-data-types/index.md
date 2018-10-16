---
title: PHP Data Types
localeTitle: Tipos de datos PHP
---
# Tipos de datos PHP

Las variables pueden almacenar datos de diferentes tipos, tales como:

*   Cadena ("Hola")
*   Entero (5)
*   Flotador (también llamado doble) (1.0)
*   Booleano (1 o 0)
*   Array (array ("I", "am", "an", "array"))
*   Objeto
*   NULO
*   Recurso

## Cadena PHP

Una cadena es una secuencia de caracteres. Puede ser cualquier texto dentro de las comillas (simple o doble):

#### Ejemplo
```
$x = "Hello!"; 
 $y = 'Hello!'; 
```

## PHP Integer

Un tipo de datos enteros es un número no decimal entre -2,147,483,648 y 2,147,483,647.

Reglas para enteros:

*   Un entero debe tener al menos un dígito
*   Un entero no debe tener un punto decimal
*   Un entero puede ser positivo o negativo
*   Los enteros se pueden especificar en tres formatos: decimal (basado en 10), hexadecimal (basado en 16 - prefijo con 0x) u octal (basado en 8 - prefijado con 0)

#### Ejemplo

`$x = 5;`

## PHP Float

Un flotador (número de punto flotante) es un número con un punto decimal o un número en forma exponencial.

#### Ejemplo

`$x = 5.01;`

## PHP Booleano

Un booleano representa dos estados posibles: VERDADERO o FALSO. Los booleanos se utilizan a menudo en pruebas condicionales.
```
$x = true; 
 $y = false; 
```

## PHP Array

Una matriz almacena múltiples valores en una sola variable.

`$colours = array("Blue","Purple","Pink");`

## PHP NULL Value

Null es un tipo de datos especial que puede tener un solo valor: NULL.  
Una variable de tipo de datos NULL es una variable que no tiene un valor asignado.  
Las variables también se pueden vaciar estableciendo el valor en NULL.

**Nota:** Si una variable se crea sin un valor, se le asigna automáticamente un valor de NULL.
```
<?php 
 $x = "Hello world!"; 
 $x = null; 
 ?> 
```

Salida:  
NULO

## Objeto PHP

Un objeto es un tipo de datos que almacena datos e información sobre cómo procesar esos datos.  
En PHP, un objeto debe ser declarado explícitamente.  
Primero debemos declarar una clase de objeto. Una clase es una estructura que puede contener propiedades y métodos.

**Ejemplo:**
```
<?php 
 class Car { 
    function Car() { 
        $this->model = "VW"; 
    } 
 } 
 
 // create an object 
 $herbie = new Car(); 
 
 // show object properties 
 echo $herbie->model; 
 ?> 

```
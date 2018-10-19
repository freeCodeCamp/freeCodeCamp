---
title: array
localeTitle: formación
---
## Introducción de la matriz de PHP

Una matriz en PHP es en realidad un mapa ordenado. Un mapa es un tipo que asocia valores a las claves. Este tipo está optimizado para varios usos diferentes; puede tratarse como una matriz, lista (vector), tabla hash (una implementación de un mapa), diccionario, colección, pila, cola y probablemente más. Como los valores de matriz pueden ser otras matrices, también son posibles árboles y matrices multidimensionales.

Aquí hay un ejemplo:
```
<?php 
 // array without keys 
 $bikes = array("Suzuki","BMW","Yamaha"); 
 echo "I like " . $bikes[0] . ", " . $bikes[1] . " and " . $bikes[2] . "."; 
 ?> 
```

PHP array tiene muchas funciones para trabajar. Aquí está toda la lista ordenada: [Funciones](https://www.w3schools.com/php/php_ref_array.asp)

## Matrices asociativas

Las matrices de PHP se pueden utilizar como clave y valor como mapa. Se puede acceder por clave también.

Aquí hay un ejemplo simple:
```
<?php 
 $array = array( 
    "foo" => "bar", 
    "bar" => "foo", 
 ); 
 
 echo $array['bar']; 
```

Que tengas un buen día, feliz codificación !!!
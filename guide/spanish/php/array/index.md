---
title: array
localeTitle: formación
---
## Introducción de la matriz de PHP

Una matriz en PHP es en realidad un mapa ordenado. Un mapa es un tipo que asocia valores a las claves. Este tipo está optimizado para varios usos diferentes; puede tratarse como una matriz, lista (vector), tabla hash (una implementación de un mapa), diccionario, colección, pila, cola y probablemente más. Como los valores de matriz pueden ser otras matrices, también son posibles árboles y matrices multidimensionales.

Aquí hay un ejemplo:
```
<?php 
 // array sin claves 
 $motos = array("Suzuki","BMW","Yamaha"); 
 echo "Me gustan las motos " . $motos[0] . ", " . $motos[1] . " y " . $motos[2] . "."; // Salida: Me gustan las motos Suzuki, BMW y Yamaha 
 ?> 
```

Un array en PHP tiene muchas funciones con las que puede trabajar. Aquí está toda la lista ordenada: [Funciones](https://www.w3schools.com/php/php_ref_array.asp)

## Matrices asociativas

Las matrices de PHP se pueden utilizar como clave y valor como mapa, en cuyo caso se denominan matrices asociativas o arrays asociativos. En estos tipos se puede acceder a los valores almacenados a través de su clave.

Aquí hay un ejemplo simple:
```
<?php 
 $array = array( 
    "foo" => "bar", // Asignamos el valor "bar" a la clave "foo"
    "bar" => "foo", // Asignamos el valor "foo" a la clave "bar"
 ); 
 
 echo $array['bar']; // Salida: foo
 echo $array['foo']; // Salida: bar
```

Que tengas un buen día, feliz codificación !!!

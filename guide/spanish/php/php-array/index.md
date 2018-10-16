---
title: Php Arrays
localeTitle: Matrices de php
---
Una matriz es una estructura de datos que almacena uno o más tipos de valores similares en un solo valor. Por ejemplo, si desea almacenar 100 números, en lugar de definir 100 variables, es fácil definir una matriz de 100 de longitud.

Hay tres tipos diferentes de matrices y se accede a cada valor de matriz utilizando una ID c, que se denomina índice de matriz.

Matriz numérica: una matriz con un índice numérico. Los valores se almacenan y se accede de forma lineal.

Matriz asociativa - Una matriz con cadenas como índice. Esto almacena valores de elementos en asociación con valores clave en lugar de en un orden de índice lineal estricto.

Matriz multidimensional: se accede a una matriz que contiene una o más matrices y valores utilizando múltiples índices

NOTA - Las funciones de matriz incorporadas se dan en la referencia de funciones Funciones de matriz de PHP

### Matriz Numérica

Estas matrices pueden almacenar números, cadenas y cualquier objeto, pero su índice estará representado por números. Por defecto, el índice de matriz comienza desde cero.

#### Ejemplo

A continuación se muestra un ejemplo que muestra cómo crear y acceder a matrices numéricas.

Aquí hemos utilizado la función array () para crear una matriz. Esta función se explica en la referencia de la función.
```
<html> 
   <body> 
 
      <?php 
         /* First method to create array. */ 
         $numbers = array( 1, 2, 3, 4, 5); 
 
         foreach( $numbers as $value ) { 
            echo "Value is $value <br />"; 
         } 
 
         /* Second method to create array. */ 
         $numbers[0] = "one"; 
         $numbers[1] = "two"; 
         $numbers[2] = "three"; 
         $numbers[3] = "four"; 
         $numbers[4] = "five"; 
 
         foreach( $numbers as $value ) { 
            echo "Value is $value <br />"; 
         } 
      ?> 
 
   </body> 
 </html> 
```

Esto producirá el siguiente resultado:
```
Value is 1 
 Value is 2 
 Value is 3 
 Value is 4 
 Value is 5 
 Value is one 
 Value is two 
 Value is three 
 Value is four 
 Value is five 
```

### Matrices asociativas

Las matrices asociativas son muy similares a las matrices numéricas en términos de funcionalidad, pero son diferentes en términos de su índice. La matriz asociativa tendrá su índice como cadena para que pueda establecer una asociación sólida entre la clave y los valores.

Para almacenar los salarios de los empleados en una matriz, una matriz indexada numéricamente no sería la mejor opción. En su lugar, podríamos usar los nombres de los empleados como claves en nuestra matriz asociativa, y el valor sería su salario respectivo.

NOTA: no mantenga la matriz asociativa entre comillas dobles mientras imprime, de lo contrario no devolvería ningún valor.
```
Example 
 <html> 
   <body> 
 
      <?php 
         /* First method to associate create array. */ 
         $salaries = array("mohammad" => 2000, "qadir" => 1000, "zara" => 500); 
 
         echo "Salary of mohammad is ". $salaries['mohammad'] . "<br />"; 
         echo "Salary of qadir is ".  $salaries['qadir']. "<br />"; 
         echo "Salary of zara is ".  $salaries['zara']. "<br />"; 
 
         /* Second method to create array. */ 
         $salaries['mohammad'] = "high"; 
         $salaries['qadir'] = "medium"; 
         $salaries['zara'] = "low"; 
 
         echo "Salary of mohammad is ". $salaries['mohammad'] . "<br />"; 
         echo "Salary of qadir is ".  $salaries['qadir']. "<br />"; 
         echo "Salary of zara is ".  $salaries['zara']. "<br />"; 
      ?> 
 
   </body> 
 </html> 
```

Esto producirá el siguiente resultado:
```
Salary of mohammad is 2000 
 Salary of qadir is 1000 
 Salary of zara is 500 
 Salary of mohammad is high 
 Salary of qadir is medium 
 Salary of zara is low 
```

### Arreglos Multidimensionales

Una matriz multidimensional cada elemento de la matriz principal también puede ser una matriz. Y cada elemento de la sub-matriz puede ser una matriz, y así sucesivamente. Se accede a los valores de la matriz multidimensional utilizando un índice múltiple.

Ejemplo En este ejemplo, creamos una matriz bidimensional para almacenar marcas de tres estudiantes en tres materias:

Este ejemplo es una matriz asociativa, puede crear una matriz numérica de la misma manera.
```
<html> 
   <body> 
 
      <?php 
         $marks = array( 
            "mohammad" => array ( 
               "physics" => 35, 
               "maths" => 30, 
               "chemistry" => 39 
            ), 
 
            "qadir" => array ( 
               "physics" => 30, 
               "maths" => 32, 
               "chemistry" => 29 
            ), 
 
            "zara" => array ( 
               "physics" => 31, 
               "maths" => 22, 
               "chemistry" => 39 
            ) 
         ); 
 
         /* Accessing multi-dimensional array values */ 
         echo "Marks for mohammad in physics : " ; 
         echo $marks['mohammad']['physics'] . "<br />"; 
 
         echo "Marks for qadir in maths : "; 
         echo $marks['qadir']['maths'] . "<br />"; 
 
         echo "Marks for zara in chemistry : " ; 
         echo $marks['zara']['chemistry'] . "<br />"; 
      ?> 
 
   </body> 
 </html> 
```

Esto producirá el siguiente resultado:
```
Marks for mohammad in physics : 35 
 Marks for qadir in maths : 32 
 Marks for zara in chemistry : 39 

```
---
title: PHP functions
localeTitle: Funciones de PHP
---
Las funciones de PHP son similares a otros lenguajes de programación. Una función es un fragmento de código que toma una entrada más en forma de parámetro y realiza un procesamiento y devuelve un valor.

Ya has visto muchas funciones como fopen () y fread (), etc. Son funciones integradas pero PHP también te da la opción de crear tus propias funciones.

Hay dos partes que deberían ser claras para usted:

### Creando una función PHP

Llamando a una función de PHP De hecho, casi no necesita crear su propia función PHP porque ya hay más de 1000 funciones de biblioteca integradas creadas para diferentes áreas y solo necesita llamarlas de acuerdo con sus requisitos.

Consulte la Referencia de funciones de PHP para obtener un conjunto completo de funciones útiles.

Creación de la función PHP Es muy fácil crear tu propia función PHP. Supongamos que desea crear una función PHP que simplemente escribirá un mensaje simple en su navegador cuando lo llame. El siguiente ejemplo crea una función llamada writeMessage () y luego la llama justo después de crearla.

Tenga en cuenta que, al crear una función, su nombre debe comenzar con la función de palabra clave y todo el código PHP debe colocarse entre llaves {y} como se muestra en el siguiente ejemplo:
```
<html> 
 
   <head> 
      <title>Writing PHP Function</title> 
   </head> 
 
   <body> 
 
      <?php 
         /* Defining a PHP Function */ 
         function writeMessage() { 
            echo "You are really a nice person, Have a nice time!"; 
         } 
 
         /* Calling a PHP Function */ 
         writeMessage(); 
      ?> 
 
   </body> 
 </html> 
```

Esto mostrará el siguiente resultado:
```
You are really a nice person, Have a nice time! 
```

### Funciones PHP con Parámetros

PHP te da la opción de pasar tus parámetros dentro de una función. Puedes pasar tantos parámetros como gustes. Estos parámetros funcionan como variables dentro de su función. El siguiente ejemplo toma dos parámetros enteros, los agrega y luego los imprime.
```
<html> 
 
   <head> 
      <title>Writing PHP Function with Parameters</title> 
   </head> 
 
   <body> 
 
      <?php 
         function addFunction($num1, $num2) { 
            $sum = $num1 + $num2; 
            echo "Sum of the two numbers is : $sum"; 
         } 
 
         addFunction(10, 20); 
      ?> 
 
   </body> 
 </html> 
```

Esto mostrará el siguiente resultado:
```
Sum of the two numbers is : 30 
```

### Pasando Argumentos por Referencia

Es posible pasar argumentos a funciones por referencia. Esto significa que una referencia a la variable es manipulada por la función en lugar de una copia del valor de la variable.

Cualquier cambio realizado en un argumento en estos casos cambiará el valor de la variable original. Puede pasar un argumento por referencia agregando un ampersand al nombre de la variable en la llamada a la función o en la definición de la función.

El siguiente ejemplo muestra ambos casos.
```
<html> 
 
   <head> 
      <title>Passing Argument by Reference</title> 
   </head> 
 
   <body> 
 
      <?php 
         function addFive($num) { 
            $num += 5; 
         } 
 
         function addSix(&$num) { 
            $num += 6; 
         } 
 
         $orignum = 10; 
         addFive( $orignum ); 
 
         echo "Original Value is $orignum<br />"; 
 
         addSix( $orignum ); 
         echo "Original Value is $orignum<br />"; 
      ?> 
 
   </body> 
 </html> 
```

Esto mostrará el siguiente resultado:
```
Original Value is 10 
 Original Value is 16 
```

### Funciones PHP devolviendo valor

Una función puede devolver un valor utilizando la declaración de retorno junto con un valor u objeto. return detiene la ejecución de la función y envía el valor nuevamente al código de llamada.

Puede devolver más de un valor de una función utilizando la matriz de retorno (1,2,3,4).

El siguiente ejemplo toma dos parámetros enteros, los agrega y luego devuelve su suma al programa de llamada. Tenga en cuenta que la palabra clave return se utiliza para devolver un valor desde una función.
```
<html> 
 
   <head> 
      <title>Writing PHP Function which returns value</title> 
   </head> 
 
   <body> 
 
      <?php 
         function addFunction($num1, $num2) { 
            $sum = $num1 + $num2; 
            return $sum; 
         } 
         $return_value = addFunction(10, 20); 
 
         echo "Returned value from the function : $return_value"; 
      ?> 
 
   </body> 
 </html> 
```

Esto mostrará el siguiente resultado:
```
Returned value from the function : 30 
```

### Configuración de valores predeterminados para parámetros de funciones

Puede configurar un parámetro para que tenga un valor predeterminado si la persona que llama a la función no lo pasa.

La siguiente función imprime NULL en caso de que el uso no pase ningún valor a esta función.
```
<html> 
 
   <head> 
      <title>Writing PHP Function which returns value</title> 
   </head> 
 
   <body> 
 
      <?php 
         function printMe($param = NULL) { 
            print $param; 
         } 
 
         printMe("This is test"); 
         printMe(); 
      ?> 
 
   </body> 
 </html> 
```

Esto producirá el siguiente resultado:
```
This is test 
```

### Llamadas de función dinámica

Es posible asignar nombres de funciones como cadenas a variables y luego tratar estas variables exactamente como lo haría con el propio nombre de la función. El siguiente ejemplo describe este comportamiento.
```
<html> 
 
   <head> 
      <title>Dynamic Function Calls</title> 
   </head> 
 
   <body> 
 
      <?php 
         function sayHello() { 
            echo "Hello<br />"; 
         } 
 
         $function_holder = "sayHello"; 
         $function_holder(); 
      ?> 
 
   </body> 
 </html> 
```

Esto mostrará el siguiente resultado:
```
Hello 

```
---
title: Smallest Common Multiple
localeTitle: El múltiplo común más pequeño
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") Recuerda usar **`Read-Search-Ask`** si te atascas. Tratar de emparejar el programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") y escribe tu propio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápiz:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":bandera a cuadros:") Explicación del problema:

El mínimo común más pequeño entre dos números es el número más pequeño en el que ambos números pueden dividirse. Este concepto puede extenderse a más de dos números también.

Primero podemos comenzar con solo encontrar el múltiplo común más pequeño entre dos números. De manera ingenua, puedes comenzar a escribir múltiples de cada número hasta que escribas un múltiplo que exista de ambos números.

Un ejemplo serían los números `3` y `4` . Los múltiplos de `3` son `3, 6, 9, 12, 15, 18, ...` y los múltiplos de `4` son `4, 8, 12, 16, 20, ...` El primer número más pequeño con el que nos encontramos en ambas listas es `12` por lo que este es el múltiplo común más pequeño entre `3` y `4` .

Este problema puede ser confuso porque la mayoría de las personas buscan el mínimo común más pequeño de solo los dos números, pero se olvidan del **rango de** palabras clave. Sin embargo, esto significa que si le dan `[1,5]` , entonces debe verificar el mínimo común más pequeño para todos los números `[1,2,3,4,5]` que es divisible por todos ellos.

#### Enlaces relevantes

*   [Mínimo (más pequeño) común múltiple](https://en.wikipedia.org/wiki/Least_common_multiple)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 1

Cree una matriz con todos los números que faltan en la matriz original para facilitar la verificación cuando tenga que verificar la división uniforme.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 2

Puede usar el operador de resto ( `%` ) para verificar si el recordatorio de una división es 0, lo que significa que es equitativamente divisible.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 3

Si ordena la matriz de mayor a menor, entonces puede usar los dos primeros números como primera comprobación del mínimo común más pequeño. Esto se debe a que es más probable que sean el múltiplo común más pequeño que los números más bajos.

> _intenta resolver el problema ahora_

## ¡Alerta de spoiler!

![señal de advertencia](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**¡Solución por delante!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solución de código básico:
```
function smallestCommons(arr) { 
  // Sort array from greater to lowest 
  // This line of code was from Adam Doyle (http://github.com/Adoyle2014) 
  arr.sort(function(a, b) { 
    return b - a; 
  }); 
 
  // Create new array and add all values from greater to smaller from the 
  // original array. 
  var newArr = []; 
  for (var i = arr[0]; i >= arr[1]; i--) { 
    newArr.push(i); 
  } 
 
  // Variables needed declared outside the loops. 
  var quot = 0; 
  var loop = 1; 
  var n; 
 
  // Run code while n is not the same as the array length. 
  do { 
    quot = newArr[0] * loop * newArr[1]; 
    for (n = 2; n < newArr.length; n++) { 
      if (quot % newArr[n] !== 0) { 
        break; 
      } 
    } 
 
    loop++; 
  } while (n !== newArr.length); 
 
  return quot; 
 } 
 
 // test here 
 smallestCommons([1,5]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLn2/0)

### Explicación del código:

*   Debido a la posibilidad de que el denominador común más pequeño se encuentre entre los dos números más grandes, tiene sentido verificarlos primero, así que ordene la matriz.
*   Crea una nueva matriz para ordenar todos los números, `newArr` .
*   Use un bucle descendente `for` ( `var i = arr[0]; i >= arr[1]; i--` ) para sumar los números del mayor al más pequeño en la nueva matriz.
*   Declare las variables para el cociente para que podamos acceder a ellas fuera del bucle:
    *   el cociente que será nuestro múltiplo común más pequeño ( `quot` )
    *   el número de lazo que estamos comprobando ( `loop` )
    *   El índice de la matriz de números ( `n` ).
*   Use un `do` `while` bucle para comprobar lo que necesitamos, mientras que `n` no es la misma longitud que la nueva matriz.
*   En la parte `do` , vamos a multiplicar el primer número, multiplicado por el número de bucles, multiplicado por el segundo número ( `quot = newArr[0] * loop * newArr[1];` ).
*   La parte de `loop` nos permitirá aumentar el número que estamos verificando más allá del número más grande que tenemos sin tener que cambiar el algoritmo.
*   Entramos en un bucle `for` que irá de `n` siendo 2 y subirá en uno ( `loop++` ) mientras que es más pequeño que la matriz con todos los números ( `n < newArr.length` ).
*   Si el cociente no se divide uniformemente ( `quot % newArr[n] !== 0` ), detenga el bucle ( `break;` ). Si es par, entonces verifique los siguientes elementos ( `n++` ) en el arreglo hasta que no esté par o encontremos nuestra respuesta.
*   Fuera del bucle, aumentar el valor del bucle ( `loop++` ).
*   Al final del bucle, devuelva el cociente ( `return quot;` ).

Nota: si la matriz solo tiene dos elementos, entonces el bucle `for` nunca se usa y el valor de retorno es el producto de dichos números.

#### Enlaces relevantes

*   [JS Array Prototype Sort](http://forum.freecodecamp.com/t/javascript-array-prototype-sort/14306)
*   [JS For Loops Explicado](http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)
*   [JS Array Prototype Push](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)
*   [JS Do While Loop](http://forum.freecodecamp.com/t/javascript-do-while-loop/14662)
*   Longitud de la cuerda

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girasol:") Solución de código intermedio:
```
function smallestCommons(arr) { 
    var range = []; 
    for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) { 
    range.push(i); 
    } 
 
    // can use reduce() in place of this block 
    var lcm = range[0]; 
    for (i = 1; i < range.length; i++) { 
    var GCD = gcd(lcm, range[i]); 
    lcm = (lcm * range[i]) / GCD; 
    } 
    return lcm; 
 
    function gcd(x, y) {    // Implements the Euclidean Algorithm 
    if (y === 0) 
        return x; 
    else 
        return gcd(y, x%y); 
    } 
 } 
 
 // test here 
 smallestCommons([1,5]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLn4/0)

### Explicación del código:

*   La primera solución básica requiere más de 2,000 bucles para calcular el caso de prueba `smallestCommons([1,13])` , y más de 4 millones de bucles para calcular `smallestCommons([1,25])` . Esta solución evalúa `smallestCommons([1,13])` en alrededor de 20 bucles y `smallestCommons([1,25])` en 40, mediante el uso de un algoritmo más eficiente.
*   Hacer un **rango de** matriz vacía.
*   Todos los números entre el rango dado se empujan al **rango** usando un bucle `for` .
*   El siguiente bloque de código implementa el algoritmo euclidiano, que se utiliza para encontrar los múltiplos comunes más pequeños.

#### Enlaces relevantes

*   [Algoritmo euclidiano](https://en.wikipedia.org/wiki/Euclidean_algorithm)
*   [JS Math Max](http://forum.freecodecamp.com/t/javascript-math-max/14682)
*   [JS Math Min](http://forum.freecodecamp.com/t/javascript-math-min/14684)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotando luz:") Solución avanzada de código:
```
function smallestCommons(arr) { 
 
  // range 
  let min = Math.min.apply(null, arr); 
  let max = Math.max.apply(null, arr); 
 
  let smallestCommon = lcm(min, min + 1); 
 
  while(min < max) { 
    min++; 
    smallestCommon = lcm(smallestCommon, min); 
  } 
 
  return smallestCommon; 
 } 
 
 /** 
 * Calculates Greatest Common Divisor 
 * of two nubers using Euclidean algorithm 
 * https://en.wikipedia.org/wiki/Euclidean_algorithm 
 */ 
 function gcd(a, b) { 
  while (b > 0) { 
    let tmp = a; 
    a = b; 
    b = tmp % b; 
  } 
  return a; 
 } 
 
 /** 
 * Calculates Least Common Multiple 
 * for two numbers utilising GCD 
 */ 
 function lcm(a, b) { 
  return (a * b / gcd(a, b)); 
 } 
 
 
 // test here 
 smallestCommons([1,5]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/MR9P/latest)

### Explicación del código:

*   Extraer el mínimo y máximo del **arr** proporcionado.
*   Inicialice **smallestCommon** con el MCM de los dos primeros números.
*   Recorrer el rango a través del LCM de cálculo del LCM actual y el siguiente número en el rango de **mcm (a, b, c) = mcm (mcm (a, b), c)** .

#### Enlaces relevantes

*   [JS Function.prototype.apply ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":portapapeles:") NOTAS PARA LAS CONTRIBUCIONES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **NO** agregue soluciones que sean similares a las soluciones existentes. Si cree que es **_similar pero mejor_** , intente fusionar (o reemplazar) la solución similar existente.
*   Agregue una explicación de su solución.
*   Categorice la solución en una de las siguientes categorías: **Básica** , **Intermedia** y **Avanzada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Agregue su nombre de usuario solo si ha agregado algún **contenido principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **_NO_** _elimine ningún nombre de usuario existente_ )

> Ver ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referencia.
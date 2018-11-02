---
title: Sum All Numbers in a Range
localeTitle: Suma todos los números en un rango
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") Recuerda usar **`Read-Search-Ask`** si te atascas. Tratar de emparejar el programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") y escribe tu propio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápiz:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":bandera a cuadros:") Explicación del problema:

Necesita crear un programa que tome una matriz de dos números que no están necesariamente en orden, y luego agregue no solo esos números sino también cualquier número intermedio. Por ejemplo, \[3,1\] será igual que `1+2+3` y no solo `3+1`

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 1

Usa `Math.max()` para encontrar el valor máximo de dos números.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 2

Usa `Math.min()` para encontrar el valor mínimo de dos números.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 3

Recuerde que debe agregar todos los números intermedios para que esto requiera una forma de obtener esos números.

> _intenta resolver el problema ahora_

## ¡Alerta de spoiler!

![señal de advertencia](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**¡Solución por delante!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solución de código básico:
```
function sumAll(arr) { 
    var max = Math.max(arr[0], arr[1]); 
    var min = Math.min(arr[0], arr[1]); 
    var temp = 0; 
    for (var i=min; i <= max; i++){ 
        temp += i; 
    } 
  return(temp); 
 } 
 
 sumAll([1, 4]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLm6/0)

### Explicación del código:

*   Primero crea una variable para almacenar el número máximo entre dos.
*   Lo mismo que antes para el número más pequeño.
*   Creamos una variable temporal para sumar los números.

Como los números pueden no estar siempre en orden, usar `max()` y `min()` ayudará a organizar.

#### Enlaces relevantes

*   [Math.max ()](http://forum.freecodecamp.com/t/javascript-math-max/14682)
*   [Math.min ()](http://forum.freecodecamp.com/t/javascript-math-min/14684)
*   [Para loops](http://forum.freecodecamp.com/t/javascript-for-loop/14666)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girasol:") Solución de código intermedio:
```
function sumAll(arr) { 
  // Buckle up everything to one! 
 
  // Using ES6 arrow function (one-liner) 
  var sortedArr = arr.sort((a,b) => ab); 
  var firstNum = arr[0]; 
  var lastNum = arr[1]; 
  // Using Arithmetic Progression summing formula 
 
  var sum = (lastNum - firstNum + 1) * (firstNum + lastNum) / 2; 
  return sum; 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLm7/0)

### Explicación del código:

*   En primer lugar, creamos una variable llamada `sortedArr` que la ordena desde el valor más bajo al más alto.
*   `firstNum` es igual al primer número y `lastNum` es igual al segundo número.
*   A continuación, utilizando la fórmula de suma de Progresión Aritmética, dejamos que `sum` igual `(lastNum - firstNum + 1) * (firstNum + lastNum) / 2` .
*   Finalmente, devolvemos la `sum` .

La línea `var sortedArr = arr.sort((a,b) => ab);` Es probablemente lo que te tendrá más confundido. Esto sería lo mismo que crear una función que devuelva `ab` para `sort()` que es la forma estándar de ordenar los números de menor a mayor. En lugar de utilizar la flecha o la función de flecha gorda, podemos hacer todo eso en una sola línea, lo que nos permite escribir menos.

#### Enlaces relevantes

*   [Array.sort ()](http://forum.freecodecamp.com/t/javascript-array-prototype-sort/14306)
*   [Fórmula sumadora de la progresión aritmética](https://en.wikipedia.org/wiki/Arithmetic_progression#Sum)
*   [ES6 función de flecha](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotando luz:") Solución avanzada de código:
```
function sumAll(arr) { 
    var sum = 0; 
    for (var i = Math.min(...arr); i <= Math.max(...arr); i++){ 
        sum += i; 
    } 
  return sum; 
 } 
 
 sumAll([1, 4]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLm8/0)

### Explicación del código:

*   Creando una suma variable para almacenar la suma de los elementos.
*   Iniciar la iteración del bucle desde el elemento mínimo de la matriz dada y detenerse cuando alcanza el elemento máximo.
*   El uso de un operador de propagación (... arr) permite pasar la matriz real a la función en lugar de elementos uno por uno.

#### Enlaces relevantes

*   [Operador de propagación](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)
*   [Usando el operador de propagación en Math.max ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":portapapeles:") NOTAS PARA LAS CONTRIBUCIONES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **NO** agregue soluciones que sean similares a las soluciones existentes. Si cree que es **_similar pero mejor_** , intente fusionar (o reemplazar) la solución similar existente.
*   Agregue una explicación de su solución.
*   Categorice la solución en una de las siguientes categorías: **Básica** , **Intermedia** y **Avanzada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Agregue su nombre de usuario solo si ha agregado algún **contenido principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **_NO_** _elimine ningún nombre de usuario existente_ )

> Ver ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referencia.
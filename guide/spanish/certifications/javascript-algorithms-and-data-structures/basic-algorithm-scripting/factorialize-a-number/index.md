---
title: Factorialize a Number
localeTitle: Factorializar un número
---
![Recursion](//discourse-user-assets.s3.amazonaws.com/original/2X/d/dcf927a2e8c3beb7a9c28770153821982398bd99.jpg)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") Recuerda usar **`Read-Search-Ask`** si te atascas. Tratar de emparejar el programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") y escribe tu propio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápiz:")

## ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":bandera a cuadros:") Explicación del problema:

Devuelve el factorial del entero proporcionado. Si el número entero se representa con la letra n, un factorial es el producto de todos los números enteros positivos menores o iguales a n.

Los factoriales a menudo se representan con la notación abreviada n!

Por ejemplo: `5! = 1 * 2 * 3 * 4 * 5 = 120`

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 1

¡Este empieza fácilmente desde `0! = 1` , por lo que puede seguir adelante y simplemente `return 1` allí.

Podemos usar eso como un `if` con el fin de romper el bucle que vamos a crear usando una **función recursiva.** Verificará si el número que le dio a la función es 0 (que sería el final de su cadena factorial). Las funciones "terminan" cuando devuelven algo. De hecho, **todas las** funciones sin una declaración de `return` explícita se devolverán `undefined` .

Esta es también la razón por la que, en **lugar** de haber _"terminado"_ , siempre se dice que una función _"ha regresado"_ . Y ahora esto ...

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 2

**Entendiendo recursion**

Recursión se refiere a una función que se repite (llama) a sí misma. En este caso estamos básicamente devolver el número dado (es decir, 5), multiplicado por la función en sí, pero esta vez el valor pasado al parámetro _num_ es `num-1` (que se traduce inicialmente a 4). La misma función se va a **ejecutar dentro de sí** interesante, ¿eh?

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 3

**Entendiendo el flujo**

El primer valor **devuelto** se puede visualizar mejor si piensa en las operaciones de paréntesis que realizó en la escuela secundaria, donde realiza los cálculos matemáticos dentro de cada paréntesis desde adentro hacia afuera, corchete y corchete hasta obtener un resultado final (un total). Esta vez es lo mismo, mira el flujo del programa:

### Durante la primera ejecución de la función:

\[ **num** = 5\]

¿Es 5 _igual_ a 1 o 0? **No** ---> Oki doki, continuemos ...

**Devoluciones:**

( **5** _(_ segunda ejecución\_: **4** \_ ( _tercera ejecución_ : **3** _(_ cuarta ejecución\_: **2** \_ _quinta ejecución_ : **1** ))))

Lo que devuelve puede verse como `(5*(4*(3*(2*1))))` o solo `5 * 4 * 3 * 2 * 1` , y la función devolverá el resultado de esa operación: `120` . Ahora, vamos a ver qué hacen las demás ejecuciones:

### Durante el resto de las ejecuciones:

**Segunda ejecución** : _num_ = 5-1 = **4** -> es _num_ 0 o 1? No

\-> devuelve la multiplicación entre 4 y el siguiente resultado cuando _num_ es ahora 4-1.

**Tercera ejecución** : _num_ = 4 - 1 = **3** -> es _num_ 0 o 1? No

\-> devuelve la multiplicación entre 3 y el siguiente resultado cuando _num_ ahora es 3-1.

**Cuarta ejecución** : _num_ = 3-1 = **2** -> es _num_ 0 o 1? No

\-> devuelve la multiplicación entre 2 y el siguiente resultado cuando _num_ ahora es 2-1.

**Quinta ejecución** : _num_ = 2-1 = **1** -> es _num_ 0 o 1? Sí

\-> volver **1** . Y aquí es donde la recursión se detiene porque no hay más ejecuciones.

¿Lo tengo? ![:wink:](https://forum.freecodecamp.com/images/emoji/emoji_one/wink.png?v=3 ":guiño:")

> _intenta resolver el problema ahora_

#### Enlaces relevantes

*   [Funciones js](https://www.youtube.com/watch?v=R8SjM4DKK80)
*   [Recursion en JS](https://www.youtube.com/watch?v=k7-N8R0-KY4)

## ¡Alerta de spoiler!

![señal de advertencia](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**¡Solución por delante!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solución de código:
```
function factorialize(num) { 
  if (num === 0) { return 1; } 
  return num * factorialize(num-1); 
 } 
 
 factorialize(5); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLjU/1)

## Explicación del código:

Observe en la primera línea que tenemos la condición terminal, es decir, una condición para verificar el final de la recursión. Si `num == 0` , devolvemos 1, es decir, finalizamos la recursión e informamos a la pila para que propague este valor a los niveles superiores. Si no tenemos esta condición, la recursión continuaría hasta que el espacio de pila se consuma, lo que resultaría en un [desbordamiento de pila](https://en.wikipedia.org/wiki/Stack_overflow) .

### Enlaces relevantes

*   [Recursion](https://www.codecademy.com/en/courses/javascript-lesson-205/0/1)
*   [Factorialización](https://en.wikipedia.org/wiki/Factorial)
*   [Operadores aritméticos](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":portapapeles:") NOTAS PARA LAS CONTRIBUCIONES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **NO** agregue soluciones que sean similares a las soluciones existentes. Si cree que es **_similar pero mejor_** , intente fusionar (o reemplazar) la solución similar existente.
*   Agregue una explicación de su solución.
*   Categorice la solución en una de las siguientes categorías: **Básica** , **Intermedia** y **Avanzada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Agregue su nombre de usuario solo si ha agregado algún **contenido principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **_NO_** _elimine ningún nombre de usuario existente_ )

> Ver ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referencia.
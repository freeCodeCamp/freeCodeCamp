---
title: Sum All Odd Fibonacci Numbers
localeTitle: Suma todos los números impares de Fibonacci
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") Recuerda usar **`Read-Search-Ask`** si te atascas. Tratar de emparejar el programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") y escribe tu propio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápiz:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":bandera a cuadros:") Explicación del problema:

Deberá reunir todos los números de **Fibonacci** y luego verificar los impares. Una vez que consigas los impares, los agregarás todos. El último número debe ser el número dado como parámetro si realmente resulta ser un número fuera de Fibonacci.

#### Enlaces relevantes

*   [Número de Fibonacci](https://en.wikipedia.org/wiki/Fibonacci_number)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 1

Para obtener el siguiente número de la serie, debe agregar el actual al anterior y le dará el siguiente.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 2

Para verificar si un número es par todo lo que tiene que verificar es si el `number % 2 == 0` .

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 3

A medida que obtenga el siguiente impar, no olvide agregarlo a una variable global que se puede devolver al final. `result += currNumber;` Hará el truco.

> _intenta resolver el problema ahora_

## ¡Alerta de spoiler!

![señal de advertencia](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**¡Solución por delante!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solución de código básico:
```
function sumFibs(num) { 
    var prevNumber = 0; 
    var currNumber = 1; 
    var result = 0; 
    while (currNumber <= num) { 
        if (currNumber % 2 !== 0) { 
            result += currNumber; 
        } 
 
        currNumber += prevNumber; 
        prevNumber = currNumber - prevNumber; 
    } 
 
    return result; 
 } 
 
 // test here 
 sumFibs(4); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLnV/0)

### Explicación del código:

*   Cree una variable para mantener el registro de los números actuales y anteriores junto con el resultado que se devolverá.
*   Use un bucle while para asegurarse de que no revisemos el número dado como parámetro.
*   Usamos el modulo operando para verificar si el número actual es par o impar. Si es par, añádelo al resultado.
*   Complete el círculo de Fibonacci girando para obtener el siguiente número y luego intercambiar los valores.
*   Devuelve el resultado.

#### Enlaces relevantes

*   JS mientras bucle

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girasol:") Solución de código intermedio:
```
function sumFibs(num) { 
    // Perform checks for the validity of the input 
    if (num < 0) return -1; 
    if (num === 0 || num === 1) return 1; 
 
    // Create an array of fib numbers till num 
    const arrFib = [1, 1]; 
    let nextFib = 0; 
 
    // We put the new Fibonacci numbers to the front so we 
    // don't need to calculate the length of the array on each 
    // iteration 
    while((nextFib = arrFib[0] + arrFib[1]) <= num) { 
        arrFib.unshift(nextFib); 
    } 
 
    // Sum only the odd numbers and return the value 
    return arrFib.reduce((acc, curr) => { 
        return acc + curr * (curr % 2); 
    }); 
 } 
 
 // test here 
 sumFibs(4); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/@kr3at0/SumAllOddFibonacciNumbers)

### Explicación del código:

*   Crear una matriz de números de fibonacci hasta **num** .
*   Use el método `reduce()` para encontrar la suma de miembros impares de la matriz.
*   Devuelve la suma.

#### Enlaces relevantes

*   [JS Array Prototype Push](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)
*   [JS For Loops Explicado](http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)
*   [JS Array Prototype Reduce](http://forum.freecodecamp.com/t/javascript-array-prototype-reduce/14299)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":portapapeles:") NOTAS PARA LAS CONTRIBUCIONES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **NO** agregue soluciones que sean similares a las soluciones existentes. Si cree que es **_similar pero mejor_** , intente fusionar (o reemplazar) la solución similar existente.
*   Agregue una explicación de su solución.
*   Categorice la solución en una de las siguientes categorías: **Básica** , **Intermedia** y **Avanzada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Agregue su nombre de usuario solo si ha agregado algún **contenido principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **_NO_** _elimine ningún nombre de usuario existente_ )

> Ver ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referencia.
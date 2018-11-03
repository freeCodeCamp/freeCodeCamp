---
title: Chunky Monkey
localeTitle: Mono grueso
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/a/aadd6bead83ab7d79a795c326f005a89e6ad81f5.png)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") Recuerda usar **`Read-Search-Ask`** si te atascas. Tratar de emparejar el programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") y escribe tu propio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápiz:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":bandera a cuadros:") Explicación del problema:

Nuestro objetivo para este algoritmo es dividir `arr` (primer argumento) en trozos más pequeños de matrices con la longitud proporcionada por `size` (segundo argumento). Hay 4 controles verdes (objetivos) que nuestro código debe aprobar para completar este algoritmo:

1.  `(['a', 'b', 'c', 'd'], 2)` se espera que sea `[['a', 'b'], ['c', 'd']]`
2.  `([0, 1, 2, 3, 4, 5], 3)` se espera que sea `[[0, 1, 2], [3, 4, 5]]`
3.  `([0, 1, 2, 3, 4, 5], 2)` se espera que sea `[[0, 1], [2, 3], [4, 5]]`
4.  `([0, 1, 2, 3, 4, 5], 4)` se espera que sea `[[0, 1, 2, 3], [4, 5]]`

#### Enlaces relevantes

*   [Array.push ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
*   [Array.slice ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 1

Los enlaces anteriores sugieren usar `Array.push()` , así que comencemos por crear primero una nueva matriz para almacenar las matrices más pequeñas que pronto tendremos como esto:

```javascript
    var newArray = []; 
```

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 2

A continuación necesitaremos un `for loop` para pasar por `arr` .

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 3

Finalmente, necesitamos un método para hacer la división real y podemos usar `Array.slice()` para hacerlo. La clave de este algoritmo es entender cómo un `for loop` , `size` , `Array.slice()` y `Array.push()` funcionan juntos.

> _intenta resolver el problema ahora_

## ¡Alerta de spoiler!

![señal de advertencia](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**¡Solución por delante!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solución de código básico:

```javascript
    function chunkArrayInGroups(arr, size) { 
 
      var temp = []; 
      var result = []; 
 
      for (var a = 0; a < arr.length; a++) { 
        if (a % size !== size - 1) 
          temp.push(arr[a]); 
        else { 
          temp.push(arr[a]); 
          result.push(temp); 
          temp = []; 
        } 
      } 
 
      if (temp.length !== 0) 
        result.push(temp); 
      return result; 
    } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLjU/24)

### Explicación del código:

*   En primer lugar, creamos dos matrices vacías llamadas `temp` y `result` , que eventualmente devolveremos.
*   Our **for loop** loops hasta que `a` es igual o mayor que la longitud de la matriz en nuestra prueba.
*   Dentro de nuestro bucle, presionamos a `temp` usando `temp.push(arr[a]);` si el resto de `a / size` no es igual al `size - 1` .
*   De lo contrario, presionamos a `temp` , presionamos `temp` a la variable de `result` y reiniciamos `temp` a una matriz vacía.
*   A continuación, si `temp` no es una matriz vacía, la presionamos para obtener el `result` .
*   Finalmente, devolvemos el valor del `result` .

#### Enlaces relevantes

*   [Array.push ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
*   [Para loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girasol:") Solución de código intermedio:

```javascript
    function chunkArrayInGroups(arr, size) { 
      // Break it up. 
      var arr2 = []; 
      for (var i = 0; i < arr.length; i+=size) { 
        arr2.push(arr.slice(i , i+size)); 
      } 
      return arr2; 
    } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/Cj9x/3)

### Explicación del código:

*   Primero, creamos una matriz vacía `arr2` donde almacenaremos nuestros 'trozos'.
*   El bucle for comienza en cero, aumenta de `size` cada vez que pasa por el bucle y se detiene cuando alcanza `arr.length` .
*   Tenga en cuenta que este bucle for no pasa por `arr` . En su lugar, estamos utilizando el bucle para generar números que podemos usar como índices para dividir la matriz en las ubicaciones correctas.
*   Dentro de nuestro bucle, creamos cada fragmento utilizando `arr.slice(i, i+size)` , y agregamos este valor a `arr2` con `arr2.push()` .
*   Finalmente, devolvemos el valor de `arr2` .

#### Enlaces relevantes

*   [Array.push ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
*   [Array.slice ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
*   [Para loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotando luz:") Solución avanzada de código:

```javascript
    function chunkArrayInGroups(arr, size) { 
      // Break it up. 
      var newArr = []; 
      var i = 0; 
 
      while (i < arr.length) { 
        newArr.push(arr.slice(i, i+size)); 
        i += size; 
      } 
      return newArr; 
    } 
    chunkArrayInGroups(["a", "b", "c", "d"], 2); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLjU/26)

### Explicación del código:

*   En primer lugar, creamos dos variables. `newArr` es una matriz vacía a la que enviaremos. También tenemos la variable `i` configurada en cero, para usar en nuestro bucle while.
    
*   Nuestro bucle while realiza un bucle hasta que `i` es igual o mayor que la longitud de la matriz en nuestra prueba.
    
*   Dentro de nuestro bucle, empujamos a la `newArr` matriz mediante `arr.slice(i, i+size)` . Por primera vez los bucles se verán como:
    
    newArr.push (arr.slice (1, 1 + 2))
    
*   Después de que presionamos a `newArr` , agregamos la variable de `size` a `i` .
    
*   Finalmente, devolvemos el valor de `newArr` .
    

#### Enlaces relevantes

*   [Array.push ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
*   [Array.slice ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
*   [Mientras bucles](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/while)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotando luz:") Código avanzado de solución 2:

```javascript
    function chunkArrayInGroups(arr, size) { 
      var newArr = []; 
      while (arr.length) { 
        newArr.push(arr.splice(0,size)); 
      } 
      return newArr; 
    } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLjU/579)

### Explicación del código:

*   En primer lugar, creamos una variable. `newArr` es una matriz vacía a la que enviaremos.
*   Nuestra `while` bucle de un bucle hasta que la longitud de la matriz en nuestra prueba no es 0.
*   Dentro de nuestro bucle, empujamos a la `newArr` matriz mediante `arr.splice(0, size)` .
*   Para cada iteración de `while` de bucle, se elimina `size` número de elementos de la parte frontal de `arr` y empuje como una matriz para `newArr` .
*   Finalmente, devolvemos el valor de `newArr` .

#### Enlaces relevantes

*   [Array.push ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
*   [Array.splice ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
*   [Mientras bucles](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/while)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotando luz:") Código avanzado de solución 3:

```javascript
    function chunkArrayInGroups(arr, size) { 
      if (arr.length <= size){ 
        return [arr]; 
      } 
      else { 
        return [arr.slice(0,size)].concat(chunkArrayInGroups(arr.slice(size),size)); 
      } 
    } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLjU/579)

### Explicación del código:

*   La matriz más pequeña que el tamaño se devuelve anidada.
*   Para cualquier matriz más grande que el tamaño, se divide en dos. El primer segmento está anidado y concatnado con el segundo segundo segmento que hace una llamada recursiva.

#### Enlaces relevantes

*   [Recursion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Recursion)
*   [Array.splice ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":portapapeles:") NOTAS PARA LAS CONTRIBUCIONES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **NO** agregue soluciones que sean similares a las soluciones existentes. Si cree que es **_similar pero mejor_** , intente fusionar (o reemplazar) la solución similar existente.
*   Agregue una explicación de su solución.
*   Categorice la solución en una de las siguientes categorías: **Básica** , **Intermedia** y **Avanzada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Agregue su nombre de usuario solo si ha agregado algún **contenido principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **_NO_** _elimine ningún nombre de usuario existente_ )

> Ver ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referencia.
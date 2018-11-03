---
title: Find the Symmetric Difference
localeTitle: Encuentra la diferencia simétrica
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") Recuerda usar [**`Read-Search-Ask`**](https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/) si te atascas. Tratar de emparejar el programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") y escribe tu propio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápiz:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":bandera a cuadros:") Explicación del problema:

La diferencia simétrica (comúnmente denotada por Δ) de dos conjuntos es el conjunto de elementos que están en cualquiera de los dos conjuntos, pero no en ambos.

Por ejemplo, `sym([1, 2, 3], [5, 2, 1, 4])` debe producir `[3, 4, 5]` .

Siguiendo la definición anterior, la diferencia simétrica de los tres conjuntos _A_ , _B_ y _C_ se puede expresar como `(A &Delta; B) &Delta; C`

#### Enlaces relevantes

*   [Diferencia simétrica - Wikipedia](https://en.wikipedia.org/wiki/Symmetric_difference)
*   [Diferencia simétrica - YouTube](https://www.youtube.com/watch?v=PxffSUQRkG4)

[](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

 [## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 1

El objeto de _argumentos_ es un objeto de tipo _Array_ que solo hereda la propiedad `Array.length` . Por lo tanto, considere convertirlo en una _matriz_ real.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 2

Decida escribir una función auxiliar que devuelva la diferencia simétrica de dos matrices en cada llamada en lugar de intentar diferenciar todos los conjuntos simultáneamente.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 3

Aplique la función de ayuda contra la matriz de argumentos creada, reduciendo sus elementos en forma recursiva por pares para formar el resultado esperado.

**Nota** En el caso de _un número impar de conjuntos,_ la diferencia simétrica incluirá elementos idénticos presentes en todos los conjuntos dados. Por ejemplo;
```
A = {1, 2, 3} 
 B = {2, 3, 4} 
 C = {3, 4, 5} 
 
 (A &Intersection; B) &Intersection; C = {1, 4} &Intersection {3, 4, 5} 
 A &Intersection; B = {1, 3, 5} 
```

> _intenta resolver el problema ahora_

## ¡Alerta de spoiler!

![:warning:](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif ":advertencia:")

**¡Solución por delante!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solución de código básico:

```javascript
    function sym() { 
      var args = []; 
      for (var i = 0; i < arguments.length; i++) { 
        args.push(arguments[i]); 
      } 
 
      function symDiff(arrayOne, arrayTwo) { 
        var result = []; 
 
        arrayOne.forEach(function(item) { 
          if (arrayTwo.indexOf(item) < 0 && result.indexOf(item) < 0) { 
            result.push(item); 
          } 
        }); 
 
        arrayTwo.forEach(function(item) { 
          if (arrayOne.indexOf(item) < 0 && result.indexOf(item) < 0) { 
            result.push(item); 
          } 
        }); 
 
        return result; 
      } 
 
      // Apply reduce method to args array, using the symDiff function 
      return args.reduce(symDiff); 
    } 

```](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) 

 [![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:")](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) [Ejecutar código](https://repl.it/C4II/0)

### Explicación del código:

*   `push()` se utiliza para desglosar el objeto de _argumentos_ en una matriz, _args_ .
*   La función `symDiff` encuentra la diferencia simétrica entre dos conjuntos. Se utiliza como una función de devolución de llamada para el método `reduce()` llamado en _args_ .
*   `arrayOne.forEach()` empuja los elementos al _resultado_ que están presentes solo en _arrayOne_ y que no forman parte del _resultado_ .
*   `arrayTwo.forEach()` empuja los elementos al _resultado_ que están presentes solo en _arrayTwo_ y que no forman parte del _resultado_ .
*   Se devuelve el _resultado_ , que es la diferencia simétrica. Esta solución funciona para cualquier número de conjuntos.

#### Enlaces relevantes

*   [JavaScript para](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/statements/for)
*   [JavaScript Array.length](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
*   [JavaScript Array.prototype.push ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
*   [JavaScript Array.prototype.forEach ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
*   [JavaScript Array.prototype.indexOf ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girasol:") Solución de código intermedio:

```javascript
    function sym() { 
 
      // Convert the argument object into a proper array 
      var args = Array.prototype.slice.call(arguments); 
 
      // Return the symmetric difference of 2 arrays 
      var getDiff = function(arr1, arr2) { 
 
        // Returns items in arr1 that don't exist in arr2 
        function filterFunction(arr1, arr2) { 
          return arr1.filter(function(item) { 
            return arr2.indexOf(item) === -1; 
          }); 
        } 
 
        // Run filter function on each array against the other 
        return filterFunction(arr1, arr2) 
          .concat(filterFunction(arr2, arr1)); 
      }; 
 
      // Reduce all arguments getting the difference of them 
      var summary = args.reduce(getDiff, []); 
 
      // Run filter function to get the unique values 
      var unique = summary.filter(function(elem, index, self) { 
        return index === self.indexOf(elem); 
        }); 
      return unique; 
    } 
 
    // test here 
    sym([1, 2, 3], [5, 2, 1, 4]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLoc/0)

### Explicación del código:

*   El método `slice()` se utiliza para desglosar el objeto de _argumentos_ en una matriz, _args_ .
*   La función `getDiff` encuentra la diferencia simétrica entre dos conjuntos, _arr1_ y _arr2_ . Se utiliza como una función de devolución de llamada para el método `reduce()` llamado en _args_ .
*   El primer `filterFunction()` devuelve elementos en _arr1_ que no existen en _arr2_ .
*   El siguiente `filterFunction()` se ejecuta en cada matriz contra la otra para verificar la inversa de la primera comprobación de singularidad y concatenarla.
*   _El resumen_ consiste en los argumentos reducidos.
*   `filter()` se usa en el _resumen_ para mantener solo los valores _únicos_ y se devuelve _unique_ .

#### Enlaces relevantes

*   [JavaScript Array.prototype.slice ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
*   [JavaScript Array.prototype.filter ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
*   [JavaScript Array.prototype.concat ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotando luz:") Solución avanzada de código:

```javascript
    function sym() { 
      let argv = Array.from(arguments).reduce(diffArray); 
      return argv.filter((element, index, array) => index === array.indexOf(element));//remove duplicates 
    } 
 
    function diffArray(arr1, arr2) { 
      return arr1 
        .filter(element => !arr2.includes(element)) 
        .concat(arr2.filter(element => !arr1.includes(element))); 
    } 
 
    // test here 
    sym([1, 2, 3], [5, 2, 1, 4]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/@ashenm/Symmetric-Difference)

### Explicación del código:

*   La función principal _sym ()_ crea una matriz a partir de _argumentos_ y reduce sus elementos utilizando la función helper _diffArray ()_ a una sola matriz.
    
*   La función _diffArray ()_ devuelve la diferencia simétrica de dos matrices seleccionando elementos únicos en matrices parametrizadas; _arr1_ y _arr2_ .
    

#### Enlaces relevantes

*   [JavaScript Array.from ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
*   [JavaScript Array.prototype.filter ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":portapapeles:") NOTAS PARA LAS CONTRIBUCIONES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **NO** agregue soluciones que sean similares a las soluciones existentes. Si cree que es **_similar pero mejor_** , intente fusionar (o reemplazar) la solución similar existente.
*   Agregue una explicación de su solución.
*   Categorice la solución en una de las siguientes categorías: **Básica** , **Intermedia** y **Avanzada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Agregue su nombre de usuario solo si ha agregado algún **contenido principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **_NO_** _elimine ningún nombre de usuario existente_ )

> Ver ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referencia.
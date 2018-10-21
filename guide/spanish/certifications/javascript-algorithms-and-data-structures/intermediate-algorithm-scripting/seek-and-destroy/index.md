---
title: Seek and Destroy
localeTitle: Buscar y destruir
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") Recuerda usar **`Read-Search-Ask`** si te atascas. Tratar de emparejar el programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") y escribe tu propio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápiz:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":bandera a cuadros:") Explicación del problema:

Este problema es un poco complicado porque debe familiarizarse con Argumentos, ya que tendrá que trabajar con dos **o más,** pero en el script solo verá dos. Muchas personas codifican este programa por tres argumentos. Eliminarás cualquier número del primer argumento que sea el mismo que cualquier otro argumento.

#### Enlaces relevantes

*   [Objeto de argumentos](http://forum.freecodecamp.com/t/javascript-arguments/14283)
*   [Array.filter ()](http://forum.freecodecamp.com/t/javascript-array-prototype-filter/14289)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 1

Necesitas trabajar con `arguments` como si fuera una matriz regular. La mejor manera es convertirlo en uno.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 2

Necesita filtrar, esto también significa que necesita crear una función de devolución de llamada. Puedes usar varios métodos como: `indexOf()` , `includes()` . Si necesita otro enfoque, `reduce()` también podría ser de utilidad; ¡Sigue leyendo esos documentos!

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 3

Para convertir `arguments` en una matriz, use este código `var args = Array.prototype.slice.call(arguments);`

> _intenta resolver el problema ahora_

## ¡Alerta de spoiler!

![señal de advertencia](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**¡Solución por delante!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solución de código básico:
```
function destroyer(arr) { 
  var args = Array.prototype.slice.call(arguments); 
 
  for (var i = 0; i < arr.length; i++) { 
    for (var j = 0; j < args.length; j++) { 
      if (arr[i] === args[j]) { 
        delete arr[i]; 
      } 
    } 
  } 
  return arr.filter(Boolean); 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLjU/95)

### Explicación del código:

1.  Cree una matriz de `arguments` utilizando `Array.prototype.slice.call()` y guárdelo en la variable `args` . Usaremos esto para verificar contra `arr` .
    
2.  Inicie un ciclo básico `for` iterar a través de `arr` . Anide otro bucle `for` dentro del primero, cambiando la variable entera `j` y arr a args. Este segundo bucle se repetirá a través de `args` .
    
    *   Dentro del segundo bucle, cree una sentencia `if` , verificando estrictamente `===` que el valor actual de `arr[i]` es igual a `args[j]` .
        
    *   Si el valor en el índice actual _es_ igual en ambas matrices, use `delete` para eliminarlo de `arr` .
        
3.  Fuera de los bucles anidados: devuelva la matriz modificada utilizando el objeto `Boolean` como filtro para cualquier `null` creado por el operador de `delete` .
    

#### Enlaces relevantes

*   \[argumentos
*   [Array.filter ()](http://forum.freecodecamp.com/t/javascript-array-prototype-filter/14289)
*   [borrar](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete)
*   [Booleano](http://forum.freecodecamp.com/t/javascript-boolean/14311)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girasol:") Solución de código intermedio:
```
function destroyer(arr) { 
  var args = Array.from(arguments).slice(1); 
  return arr.filter(function(val) { 
    return !args.includes(val); 
  }); 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/Ck2m/0)

### Explicación del código:

1.  Declare una variable llamada `args` y `args` a un nuevo objeto `Array` `from()` los `arguments` pasados ​​a la función. En la misma línea o en la siguiente, use el método `slice()` en `args` partir del segundo índice, 1. Esto separa los argumentos utilizados para filtrar en su propia matriz de `args` .
    
2.  Devuelva la matriz filtrada, utilizando `includes()` en la función de devolución de llamada para verificar si `val` _no_ está en `args` ; devolviendo `true` para mantener el valor en la matriz original o `false` para eliminarlo.
    

#### Enlaces relevantes

*   [argumentos](http://forum.freecodecamp.com/t/javascript-arguments/14283)
*   [Array.slice ()](http://forum.freecodecamp.com/t/javascript-array-prototype-slice/14302)
*   [Array. Incluye ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

## Solución avanzada de código:

```javascript
const destroyer = (arr, ...args) => arr.filter(i => !args.includes(i)); 
```

### Explicación del código:

*   Código usando la sintaxis ES6 para declarar la función usando las funciones de flecha.
*   Usando el operador de propagación para recuperar los argumentos.
*   Devuelve la matriz filtrada, utilizando `includes()` .

#### Enlaces relevantes

*   [Operador de propagación](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_operator)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":portapapeles:") NOTAS PARA LAS CONTRIBUCIONES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **NO** agregue soluciones que sean similares a las soluciones existentes. Si cree que es **_similar pero mejor_** , intente fusionar (o reemplazar) la solución similar existente.
*   Agregue una explicación de su solución.
*   Categorice la solución en una de las siguientes categorías: **Básica** , **Intermedia** y **Avanzada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Agregue su nombre de usuario solo si ha agregado algún **contenido principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **_NO_** _elimine ningún nombre de usuario existente_ )

> Ver ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referencia.
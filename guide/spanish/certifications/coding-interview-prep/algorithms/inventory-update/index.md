---
title: Inventory Update
localeTitle: Actualización de inventario
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") Recuerda usar **`Read-Search-Ask`** si te atascas. Tratar de emparejar el programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") y escribe tu propio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápiz:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":bandera a cuadros:") Explicación del problema:

En este problema, debe comparar y actualizar el inventario almacenado en una matriz 2D con una segunda matriz 2D de una entrega nueva. Actualice las cantidades de artículos de inventario existentes actuales (en `arr1` ). Si no se puede encontrar un artículo, agregue el nuevo artículo y la cantidad en la matriz de inventario. La matriz de inventario devuelta debe estar ordenada alfabéticamente por artículo.

El inventario actual y el nuevo inventario estarán en este formato: `[[2, "item-0"], [3, "item-1"], [67, "item-2"], [7, "item-3"]]` .

#### Enlaces relevantes

*   [JS Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 1

Debe revisar cada elemento del nuevo inventario para ver si existe en el inventario actual o no. Recuerde que el nombre del producto se almacena como el segundo elemento de cada sub-array: `array[0][1] = "item-name"` .

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 2

Si el artículo existe, debe agregar la cantidad del nuevo inventario. Si el elemento no existe, debe agregar todo el elemento.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 3

Devuelve el inventario completado en orden alfabético.

> _intenta resolver el problema ahora_

## ¡Alerta de spoiler!

![señal de advertencia](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**¡Solución por delante!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solución de código básico:

```javascript
    function updateInventory(arr1, arr2) { 
 
        // Variable for location of product 
        var index; 
 
        // A helper method to return the index of a specified product (undefined if not found) 
        var getProductIndex = function (name) { 
            for (var i = 0; i < this.length; i++) { 
                if (this[i][1] === name) { 
                    return i; 
                } 
            } 
            return undefined; 
        } 
 
        // For each item of the new Inventory 
        for (var i = 0; i < arr2.length; i++) { 
 
            // Invoke our helper function using arr1 as this 
            index = getProductIndex.call(arr1, arr2[i][1]); 
 
            // If the item doesn't exist 
            if (index === undefined) { 
                // Push the entire item 
                arr1.push(arr2[i]); 
            } else { 
                // Add the new quantity of the current item 
                arr1[index][0] += arr2[i][0]; 
            } 
 
        } 
 
        // Sort alphabetically, by the product name of each item 
        arr1.sort(function (a, b) { 
            if (a[1] > b[1]) { 
                return 1; 
            } 
            if (a[1] < b[1]) { 
                return -1; 
            } 
            return 0; 
        }); 
 
        return arr1; 
    } 
 
    // test here 
    // Example inventory lists 
    var curInv = [ 
        [21, "Bowling Ball"], 
        [2, "Dirty Sock"], 
        [1, "Hair Pin"], 
        [5, "Microphone"] 
    ]; 
 
    var newInv = [ 
        [2, "Hair Pin"], 
        [3, "Half-Eaten Apple"], 
        [67, "Bowling Ball"], 
        [7, "Toothpaste"] 
    ]; 
 
    updateInventory(curInv, newInv); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLok/0)

### Explicación del código:

*   El **índice** variable almacena la ubicación (índice) de un producto.
*   La función auxiliar `getProductIndex()` devuelve el índice de un producto especificado. Recorre cada elemento de la matriz en la que se llama hasta que puede encontrar el parámetro de nombre. Si el producto no se encuentra en el inventario, se devuelve `undefined` .
*   Luego, cada artículo en el nuevo inventario (entrega) se trabaja a través de:
*   **el índice** se establece en el resultado de invocar la función auxiliar, es decir, buscar el nuevo inventario para ese nombre de producto y devolver su índice.
*   Si se encuentra el artículo, la cantidad del producto se agrega a la cantidad del mismo producto en el inventario actual.
*   Si no se encuentra el artículo, el producto completo (nombre y cantidad) se agrega al inventario actual.
*   El inventario actualizado, **arr1** , se clasifica por nombre de producto (contenido en `arr1[x][1]` ).
*   A continuación, se devuelve el final, así como la matriz ordenada.

#### Enlaces relevantes

*   [JS esto](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/this)
*   [JS Array.length](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
*   [JS Array.prototype.push ()](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)
*   [JS Array.prototype.sort ()](http://forum.freecodecamp.com/t/javascript-array-prototype-sort/14306)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girasol:") Solución de código intermedio:

```javascript
    function updateInventory(arr1, arr2) { 
      // All inventory must be accounted for or you're fired! 
 
      var index; 
      var arrCurInvName = []; // Names of arr1's items 
      var arrNeInvName = []; // Names of arr2's items 
 
      // Same as using two for loops, this takes care of increasing the number of stock quantity. 
      arr1.map(function(item1) { 
        return arr2.map(function(item2) { 
          if (item1[1] === item2[1]) { 
            item1[0] = item1[0] + item2[0]; //Increase number of stock 
          } 
        }); 
      }); 
 
      // Get item's name for new Inventory 
      arr2.map(function(item) { 
        arrNeInvName.push(item[1]); 
      }); 
 
      // Get item's name for Current Inventory 
      arr1.map(function(item) { 
        arrCurInvName.push(item[1]); 
      }); 
 
      // Add new inventory items to current inventory. 
      arrNeInvName.map(function(item) { 
        if (arrCurInvName.indexOf(item) === -1) { 
          index = arrNeInvName.indexOf(item); 
          arr1.push(arr2[index]); 
        } 
      }); 
 
      // Sort the array alphabetically using the second element of the array as base. 
      arr1.sort(function(currItem, nextItem) { 
 
        //Ternary function to avoid using if else 
        return currItem[1] > nextItem[1] ? 1 : -1; 
      }); 
 
      return arr1; 
    } 
 
    // test here 
    // Example inventory lists 
    var curInv = [ 
        [21, "Bowling Ball"], 
        [2, "Dirty Sock"], 
        [1, "Hair Pin"], 
        [5, "Microphone"] 
    ]; 
 
    var newInv = [ 
        [2, "Hair Pin"], 
        [3, "Half-Eaten Apple"], 
        [67, "Bowling Ball"], 
        [7, "Toothpaste"] 
    ]; 
 
    updateInventory(curInv, newInv); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLol/0)

### Explicación del código:

*   El **índice** variable almacena la ubicación (índice) de un producto.
*   **arrCurInvName** tiene los nombres de los **elementos** de **arr1** .
*   **arrNeInvName** tiene los nombres de los **elementos** de **arr2** .
*   `arr1.map(function(item1))` se ocupa de los artículos que ya existen en el inventario, es decir, aumenta la cantidad en el inventario.
*   A continuación, `arr2.map(function(item))` y `arr1.map(function(item))` obtienen los nombres de los artículos para el inventario nuevo y actual respectivamente.
*   `arrNeInvName.map(function(item))` maneja artículos que no existen en el inventario, es decir, agrega nuevos artículos al inventario.
*   La matriz actualizada **arr1** se clasifica alfabéticamente por nombre de producto (contenido en `arr1[x][1]` ) y se devuelve.

#### Enlaces relevantes

*   [JS Array.prototype.map ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
*   [JS Array.prototype.indexOf ()](http://forum.freecodecamp.com/t/javascript-array-prototype-indexof/14291)
*   [Operador Ternario JS](http://forum.freecodecamp.com/t/javascript-ternary-operator/15973)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotando luz:") Solución avanzada de código:

```javascript
    function updateInventory(arr1, arr2) { 
      // All inventory must be accounted for or you're fired! 
 
      // convert current inventory (arr1) to an one-dimensional array 
      const inventory = Array.prototype.concat.apply([], arr1); 
 
      // loop through new delivery (arr2) 
      for (let i = 0; i < arr2.length; i++) { 
 
        // extract item properties for easy reference 
        const item = arr2[i][1]; 
        const quantity = arr2[i][0]; 
 
        // check if item already exists in inventory 
        const position = inventory.indexOf(item); 
 
        // exsisting item: update quantity 
        if (position !== -1) { 
          const row = Math.floor(position / 2); 
          arr1[row][0] += quantity; 
          continue; 
        } 
 
        // alien item: add to inventory 
        arr1.push([quantity, item]); 
 
      } 
 
      // sort inventory in alphabetical order 
      arr1.sort((previous, next) => (previous[1] > [next[1]]) ? 1 : -1); 
 
      return arr1; 
 
    } 
 
 
    // test here 
    // Example inventory lists 
    var curInv = [ 
        [21, "Bowling Ball"], 
        [2, "Dirty Sock"], 
        [1, "Hair Pin"], 
        [5, "Microphone"] 
    ]; 
 
    var newInv = [ 
        [2, "Hair Pin"], 
        [3, "Half-Eaten Apple"], 
        [67, "Bowling Ball"], 
        [7, "Toothpaste"] 
    ]; 
 
    updateInventory(curInv, newInv); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/MQvv/latest)

### Explicación del código:

*   Convierta la matriz de inventario actual **arr1** en una matriz unidimensional para que el método `indexOf()` pueda usarse para verificar la existencia de nuevos elementos de entrega en el inventario actual.
*   Verifique si el artículo ya existe en el inventario actual usando `indexOf()` .
*   Si el ítem existe, actualizar la cantidad y continuar la ejecución del bucle.
*   De lo contrario, agregue el artículo al inventario.
*   Finalmente, ordene la matriz alfabéticamente y devuelva el inventario actualizado.

#### Enlaces relevantes

*   [JS Function.prototype.apply ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
*   [JS continuar](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue)
*   [JS Array.prototype.sort ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":portapapeles:") NOTAS PARA LAS CONTRIBUCIONES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **NO** agregue soluciones que sean similares a las soluciones existentes. Si cree que es **_similar pero mejor_** , intente fusionar (o reemplazar) la solución similar existente.
*   Agregue una explicación de su solución.
*   Categorice la solución en una de las siguientes categorías: **Básica** , **Intermedia** y **Avanzada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Agregue su nombre de usuario solo si ha agregado algún **contenido principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **_NO_** _elimine ningún nombre de usuario existente_ )

> Ver ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referencia.

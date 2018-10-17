---
title: Cash Register
localeTitle: Caja registradora
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") Recuerda usar **`Read-Search-Ask`** si te atascas. Tratar de emparejar el programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") y escribe tu propio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápiz:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":bandera a cuadros:") Explicación del problema:

*   Debe crear un programa que devuelva un objeto que contenga una clave de `status` y una clave de `change` . El valor del `status` es la cadena `INSUFFICIENT_FUNDS` , `CLOSED` o `OPEN` , y el valor del `change` es una matriz 2D del cambio debido.

#### Enlaces relevantes

*   Matrices de estructura de datos

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 1

*   Es más fácil cuando se sabe de antemano cuánto dinero hay en su registro. Para esto se recomienda tener una función para asignar esta información a una variable. Luego puede ver si tiene suficiente dinero para completar la transacción y devolver el cambio, o si debe cerrar el registro.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 2

*   Este problema es más fácil cuando conoce el valor de cada billete o moneda con el que está trabajando, en lugar de solo la suma de cada uno en el registro. Por ejemplo, es útil saber que un níquel vale .05, junto con el hecho de que tiene un valor de $ 2.05 en níquel en la caja registradora.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 3

*   Deberá obtener tanto cambio de un tipo de billete o moneda antes de pasar al siguiente, de mayor a menor valor. Sigue avanzando hasta que hayas calculado todos los cambios debidos.

> _intenta resolver el problema ahora_

## ¡Alerta de spoiler!

![señal de advertencia](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**¡Solución por delante!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solución de código para principiantes:
```
// Create an array of objects which hold the denominations and their values 
 var denom = [ 
  { name: 'ONE HUNDRED', val: 100.00}, 
  { name: 'TWENTY', val: 20.00}, 
  { name: 'TEN', val: 10.00}, 
  { name: 'FIVE', val: 5.00}, 
  { name: 'ONE', val: 1.00}, 
  { name: 'QUARTER', val: 0.25}, 
  { name: 'DIME', val: 0.10}, 
  { name: 'NICKEL', val: 0.05}, 
  { name: 'PENNY', val: 0.01} 
 ]; 
 
 function checkCashRegister(price, cash, cid) { 
  var output = { status: null, change: [] }; 
  var change = cash - price; 
 
  // Transform CID array into drawer object 
  var register = cid.reduce(function(acc, curr) { 
    acc.total += curr[1]; 
    acc[curr[0]] = curr[1]; 
    return acc; 
  }, { total: 0 }); 
 
  // Handle exact change 
  if (register.total === change) { 
    output.status = 'CLOSED'; 
    output.change = cid; 
    return output; 
  } 
 
  // Handle obvious insufficient funds 
  if (register.total < change) { 
    output.status = 'INSUFFICIENT_FUNDS'; 
    return output; 
  } 
 
  // Loop through the denomination array 
  var change_arr = denom.reduce(function(acc, curr) { 
    var value = 0; 
    // While there is still money of this type in the drawer 
    // And while the denomination is larger than the change remaining 
    while (register[curr.name] > 0 && change >= curr.val) { 
      change -= curr.val; 
      register[curr.name] -= curr.val; 
      value += curr.val; 
 
      // Round change to the nearest hundreth deals with precision errors 
      change = Math.round(change * 100) / 100; 
    } 
    // Add this denomination to the output only if any was used. 
    if (value > 0) { 
        acc.push([ curr.name, value ]); 
    } 
    return acc; // Return the current change_arr 
  }, []); // Initial value of empty array for reduce 
 
  // If there are no elements in change_arr or we have leftover change, return 
  // the string "Insufficient Funds" 
  if (change_arr.length < 1 || change > 0) { 
    output.status = 'INSUFFICIENT_FUNDS'; 
    return output; 
  } 
 
  // Here is your change, ma'am. 
  output.status = 'OPEN'; 
  output.change = change_arr; 
  return output; 
 } 
 
 // test here 
 checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/@scissorsneedfoo/cash-register-example)

### Explicación del código:

Primero, cree una matriz de objetos con el valor de cada denominación de billete o moneda, junto con un objeto de salida con el estado y las teclas de cambio. A continuación, transforme la matriz CID en un objeto de cajón. Luego, manejar las condiciones de cambio exacto y fondos insuficientes. `denom` matriz de denominaciones y actualice el cambio y los valores mientras aún haya dinero de cada tipo en el cajón y mientras la denominación sea mayor que el cambio restante. Agregue esta denominación al acumulador de `change_arr` si se `change_arr` alguno de este tipo. Después del bucle, `change_arr` es una matriz 2D del cambio debido, ordenada de mayor a menor denominación. Si no hay elementos en `change_arr` o aún debe cambiar, devuelva el objeto de salida con un estado de `INSUFFICIENT_FUNDS` . Finalmente puedes dar el cambio correcto. Devuelve el objeto de salida con un estado de `OPEN` y `change_arr` como el valor de cambio.

#### Enlaces relevantes

*   [JS Array Reduce](http://forum.freecodecamp.com/t/javascript-array-prototype-reduce/14299)
*   [JS Reduce Made Easy](http://forum.freecodecamp.com/t/using-array-prototype-reduce-to-reduce-conceptual-boilerplate-for-problems-on-arrays/14687)
*   [JS Loops](http://forum.freecodecamp.com/t/javascript-loops/14681)
*   [JS Array Push](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":portapapeles:") NOTAS PARA LAS CONTRIBUCIONES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **NO** agregue soluciones que sean similares a las soluciones existentes. Si cree que es **_similar pero mejor_** , intente fusionar (o reemplazar) la solución similar existente.
*   Agregue una explicación de su solución.
*   Categorice la solución en una de las siguientes categorías: **Básica** , **Intermedia** y **Avanzada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Agregue su nombre de usuario solo si ha agregado algún **contenido principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **_NO_** _elimine ningún nombre de usuario existente_ )

> Ver ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referencia.
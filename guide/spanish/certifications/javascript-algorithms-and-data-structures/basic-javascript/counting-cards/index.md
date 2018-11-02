---
title: Counting Cards
localeTitle: Tarjetas de conteo
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") Recuerda usar **`Read-Search-Ask`** si te atascas. Tratar de emparejar el programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") y escribe tu propio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápiz:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":bandera a cuadros:") Explicación del problema:

En el juego de casino **Blackjack** , un jugador puede obtener una ventaja sobre la casa al hacer un seguimiento del número relativo de cartas altas y bajas que quedan en el mazo. Esto se llama conteo de cartas.

Tener más cartas altas en el mazo favorece al jugador. A cada tarjeta se le asigna un valor de acuerdo con la siguiente tabla. Cuando el conteo es positivo, el jugador debe apostar alto. Cuando el conteo es cero o negativo, el jugador debe apostar bajo.

Valor | Tarjetas  
\----- | : -------------------:  
+1 | 2, 3, 4, 5, 6  
0 | 7, 8, 9  
\-1 | 10, 'J', 'Q', 'K', 'A'

Escribirás una función de conteo de cartas. Recibirá un parámetro de **tarjeta** e incrementará o disminuirá la variable de **conteo** global de acuerdo con el valor de la tarjeta (consulte la tabla). La función devolverá una cadena con el recuento actual y la cadena `Bet` si el recuento es positivo, o `Hold` si el recuento es cero o negativo. El conteo actual y la decisión del jugador ( `Bet` o `Hold` ) deben estar separados por un solo espacio.

*   Cambie el código a continuación `// Only change code below this line` y hasta `// Only change code above this line`
*   Asegúrese de que está editando el interior de la función `cc` .
*   Use lo que ha aprendido para verificar el valor de cada parámetro de **tarjeta** que se pasó a la función.
*   Mantenga una cuenta corriente de ese número.
*   Si el conteo final es 1 o mayor, devuelve **\# Mantener** .
*   Si el conteo final es 0 o menos, devuelve **\# Bet** .

**Ejemplo de salida:**

*   \-3 espera
*   5 Apuesta

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 1

Use una instrucción de `switch` (o `else if` ) para contar el valor de cada tarjeta.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 2

Suma / resta el valor de cada carta a la **cuenta** variable. Si la tarjeta vale 0, no hagas nada.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 3

Una vez que haya contado las tarjetas, use una instrucción `if` para verificar el valor del **conteo** . Además, asegúrese de que su `return` tenga un espacio entre el número y la cadena.

> _intenta resolver el problema ahora_

## ¡Alerta de spoiler!

![señal de advertencia](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**¡Solución por delante!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solución de código básico:

```javascript
    function cc(card) { 
      // Only change code below this line 
      switch(card){ 
        case 2: 
        case 3: 
        case 4: 
        case 5: 
        case 6: 
          count++; 
          break; 
        case 10: 
        case "J": 
        case "Q": 
        case "K": 
        case "A": 
          count--; 
          break; 
      } 
      if (count > 0){ 
        return count + " Bet"; 
      } else { 
        return count + " Hold"; 
      } 
      // Only change code above this line 
    } 
```

### Explicación del código:

*   Compruebe el valor de cada tarjeta a través de una declaración de `switch` .
*   La **cuenta** variable:
    *   Aumenta en 1 si la tarjeta es un 2, 3, 4, 5 o 6.
    *   Como 7, 8 y 9 no valen nada, ignoramos esas tarjetas en nuestra declaración de `switch` .
    *   Disminuye en 1 si la tarjeta es un 10, 'J', 'Q', 'K' o 'A'.
*   Verifique el valor de **contar** y devuelva la respuesta apropiada.

**Ejecución de ejemplo**

*   `cc(2);` carreras.
*   La instrucción de `switch` golpea el `case 2` , salta hacia abajo y agrega 1 a la `count` variable.
*   La instrucción `switch` `break` y `cc(3);` carreras.
*   Este ciclo continúa hasta que se realiza la llamada final, `cc('A');` .
*   Después de la instrucción `switch` , la instrucción `if` cuenta `count` , que ahora es 0.
*   Esto luego cae a la instrucción `else` , que devolverá **0 Hold** .

**_Nota_** : Como se mencionó anteriormente, la instrucción `switch` también podría haber sido una instrucción `else if` .

## Solución de código adicional:

```javascript
function cc(card) { 
  // Only change code below this line 
  var regex = /[JQKA]/; 
  if (card > 1 && card < 7){count++;} 
  else if (card === 10 || String(card).match(regex)){count--;} 
 
  if (count > 0) return count + " Bet"; 
  return count + " Hold"; 
 
  // Only change code above this line 
 } 
```

· Ejecutar código en [repl.it.](https://repl.it/@AdrianSkar/Basic-JS-Counting-cards)

### Explicación del código

· La función primero evalúa `if` la `card` condición es un valor mayor que `1` y menor que `7` , en cuyo caso la `count` se incrementa en uno. · Luego, si la tarjeta es `10` o más, se reduce la `count` en uno. · La variable `regex` es una [expresión regular que](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) representa valores (letras) para las tarjetas más altas. · La sentencia `else` comprueba esos valores con el `|| (logical OR)` operador `|| (logical OR)` ; primero para `10` y luego para cualquier cadena que coincida con la expresión regular usando [String.match ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match) .

#### Recursos

*   [Recuento de cartas en Wikipedia](https://en.wikipedia.org/wiki/Card_counting)
*   [Desafío: seleccionar entre muchas opciones con instrucciones de cambio](http://www.freecodecamp.com/challenges/selecting-from-many-options-with-switch-statements)
*   [Desafío: Encadenar Si En Else Declaraciones](http://www.freecodecamp.com/challenges/chaining-if-else-statements)
*   [Desafío: Incrementar un número con Javascript](http://www.freecodecamp.com/challenges/increment-a-number-with-javascript)
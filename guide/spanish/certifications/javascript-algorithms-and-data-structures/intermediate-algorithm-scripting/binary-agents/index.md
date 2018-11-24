---
title: Binary Agents
localeTitle: Agentes binarios
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/7/70cf3cc5462f69c2f770ad42d0f24f240a8d8f13.jpg)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") Recuerda usar **`Read-Search-Ask`** si te atascas. Tratar de emparejar el programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") y escribe tu propio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápiz:")

## Explicación del problema:

Este problema es muy sencillo, obtendrá una cadena que representará una oración en código binario y deberá traducirla en palabras. No hay una forma directa de hacer esto, por lo que tendrá que traducir dos veces.

### Enlaces relevantes

*   [String.prototype.charCodeAt](http://forum.freecodecamp.com/t/javascript-string-prototype-charcodeat/15933)
*   String.fromCharCode

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 1

Primero debe convertir de **binario** a **decimal** antes de convertir esos valores en caracteres.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 2

Las cosas son más fáciles cuando se enfoca en partes más pequeñas, divida la entrada para enfocar una letra a la vez.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 3

Asegúrate de que cada vez que transcodifiques un carácter de binario a decimal, restablecerás la variable que utilizaste para mantener el seguimiento de los caracteres. Tampoco olvides volver a convertir todo en una sola cuerda.

> _intenta resolver el problema ahora_

## ¡Alerta de spoiler!

![señal de advertencia](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**¡Solución por delante!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solución de código básico:

```javascript
    function binaryAgent(str) { 
      biString = str.split(' '); 
      uniString = []; 
 
    /*using the radix (or base) parameter in parseInt, we can convert the binary 
      number to a decimal number while simultaneously converting to a char*/ 
 
      for(i=0;i < biString.length;i++){ 
        uniString.push(String.fromCharCode(parseInt(biString[i], 2))); 
      } 
 
      // we then simply join the string 
      return uniString.join(''); 
    } 
 
    // test here 
    binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLnm/0)

# Explicación del código:

*   Separe la cadena en una matriz de cadenas separadas por espacios en blanco.
*   Cree algunas variables que serán necesarias en el camino, los nombres se explican por sí mismos en su mayor parte.
*   Iterar a través de cada cadena binaria en la nueva matriz.
*   Convierta a decimal usando parseInt ( _binario_ , 2) (con el segundo parámetro que indicamos en qué base están nuestros números actualmente)
*   Al final, devolvemos el mensaje convertido.

## Enlaces relevantes

*   [String.prototype.split](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)
*   [parseInt](http://forum.freecodecamp.com/t/javascript-parseint/14686)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girasol:") Solución de código intermedio:

```javascript
    function binaryAgent(str) { 
      // Separate the binary code by space. 
      str = str.split(' '); 
      var power; 
      var decValue = 0; 
      var sentence = ''; 
 
      // Check each binary number from the array. 
      for (var s = 0; s < str.length; s++) { 
        // Check each bit from binary number 
        for (var t = 0; t < str[s].length; t++) { 
          // This only takes into consideration the active ones. 
          if (str[s][t] == 1) { 
            // This is quivalent to 2 ** position 
            power = Math.pow(2, +str[s].length - t - 1); 
            decValue += power; 
 
            // Record the decimal value by adding the number to the previous one. 
          } 
        } 
 
        // After the binary number is converted to decimal, convert it to string and store 
        sentence += (String.fromCharCode(decValue)); 
 
        // Reset decimal value for next binary number. 
        decValue = 0; 
      } 
 
      return sentence; 
    } 
 
    // test here 
    binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLno/0)

# Explicación del Código

*   Para cada una de estas cadenas binarias, compruebe las unas e ignore los ceros.
*   Para aquellos que son uno o activo, luego conviértalos a decimales, esto tiene en cuenta la posición y la potencia correcta a la que se debe aumentar.
*   Almacene la potencia en la variable de **potencia** agregándola a cualquiera de las anteriores en la variable **decValue** . Esta variable agregará y agregará las potencias de las activas hasta el final del bucle y luego devolverá el número decimal.
*   Convierta el último decimal fuera del bucle interno y luego conviértalo a ASCII y guárdelo en una **oración** junto con cualquier otra cadena de texto ya convertida y almacenada.
*   Restablezca la variable **decValue** para evitar obtener decimales erróneos antes de continuar hacia el bucle externo.

## Enlaces relevantes

*   [Math.pow](http://forum.freecodecamp.com/t/javascript-math-pow/14685)
*   Longitud de la cuerda
*   [Enlace Título 3](http://example.com)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotando luz:") Solución avanzada de código:

```javascript
    function binaryAgent(str) { 
      return String.fromCharCode(...str.split(" ").map(function(char){ return parseInt(char, 2); })); 
    } 
 
    // test here 
    binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLnp/0)

# Explicación del Código

*   Primero usamos `split()` para poder trabajar en cada personaje como un elemento de Array
*   Luego use `map()` para procesar cada elemento de binario a decimal usando `pareseInt()`
*   Por último, podemos usar `String.fromCharCode()` para convertir cada número ASCII en el carácter correspondiente
*   Sin embargo, `fromCharCode()` espera una serie de números en lugar de un Array. Podemos usar ES6 Spread Operator para pasar una matriz de números como números individuales. Vea aqui para mas informacion; [Operador de propagación](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)

## Enlaces relevantes

*   [Array.prototype.map](http://forum.freecodecamp.com/t/javascript-array-prototype-map/14294)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":portapapeles:") NOTAS PARA LAS CONTRIBUCIONES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **NO** agregue soluciones que sean similares a las soluciones existentes. Si cree que es **_similar pero mejor_** , intente fusionar (o reemplazar) la solución similar existente.
*   Agregue una explicación de su solución.
*   Categorice la solución en una de las siguientes categorías: **Básica** , **Intermedia** y **Avanzada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Agregue su nombre de usuario solo si ha agregado algún **contenido principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **_NO_** _elimine ningún nombre de usuario existente_ )

> Ver ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referencia.
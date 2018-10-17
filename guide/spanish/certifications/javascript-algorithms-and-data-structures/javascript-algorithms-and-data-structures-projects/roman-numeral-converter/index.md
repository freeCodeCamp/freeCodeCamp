---
title: Roman Numeral Converter
localeTitle: Convertidor de números romanos
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") Recuerda usar **`Read-Search-Ask`** si te atascas. Tratar de emparejar el programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") y escribe tu propio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápiz:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":bandera a cuadros:") Explicación del problema:

Creará un programa que convierte un número entero en un número romano.

#### Enlaces relevantes

*   [Números romanos](http://www.mathsisfun.com/roman-numerals.html)
*   [Array.splice ()](http://forum.freecodecamp.com/t/javascript-array-prototype-splice/14307)
*   [Array.indexOf ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
*   [Array.join ()](http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 1

Será muy útil crear dos matrices, una con los números romanos y otra con el equivalente decimal para las nuevas formas.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 2

Si agrega los números a las matrices que van antes de que se introduzca la nueva letra, como los valores de 4, 9 y 40, le ahorrará mucho código.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 3

No puedes tener más de tres números romanos consecutivos juntos.

> _intenta resolver el problema ahora_

## ¡Alerta de spoiler!

![señal de advertencia](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**¡Solución por delante!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solución de código básico:
```
var convertToRoman = function(num) { 
 
  var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ]; 
  var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ]; 
 
  var romanized = ''; 
 
  for (var index = 0; index < decimalValue.length; index++) { 
    while (decimalValue[index] <= num) { 
      romanized += romanNumeral[index]; 
      num -= decimalValue[index]; 
    } 
  } 
 
  return romanized; 
 } 
 
 // test here 
 convertToRoman(36); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLmf/0)

### Explicación del código:

*   Comenzamos creando dos matrices con conversión predeterminada con índices coincidentes. Estos se llaman `decimalValue` y `romanNumeral` . También creamos una variable de cadena vacía, `romanized` , que albergará el número romano final.
*   Usando un bucle for, hacemos un bucle a través de las indicaciones de la matriz `decimalValue` . Continuamos en bucle hasta que el valor en el `index` actual se ajuste a `num` .
*   A continuación, agregamos el número romano y disminuimos `num` por el equivalente decimal.
*   Finalmente, devolvemos el valor de `romanized` .

#### Enlaces relevantes

*   [Para loops](http://forum.freecodecamp.com/t/javascript-for-loop/14666)
*   Mientras bucles

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girasol:") Solución de código intermedio:
```
function convertToRoman(num) { 
 var romans = ["I", "V", "X", "L", "C", "D", "M"], 
     ints = [], 
     romanNumber = [], 
     numeral = ""; 
  while (num) { 
    ints.push(num % 10); 
    num = Math.floor(num/10); 
  } 
  for (i=0; i<ints.length; i++){ 
      units(ints[i]); 
  } 
  function units(){ 
    numeral = romans[i*2]; 
    switch(ints[i]) { 
      case 1: 
        romanNumber.push(numeral); 
        break; 
      case 2: 
        romanNumber.push(numeral.concat(numeral)); 
        break; 
      case 3: 
        romanNumber.push(numeral.concat(numeral).concat(numeral)); 
        break; 
      case 4: 
        romanNumber.push(numeral.concat(romans[(i*2)+1])); 
        break; 
      case 5: 
        romanNumber.push(romans[(i*2)+1]); 
        break; 
      case 6: 
        romanNumber.push(romans[(i*2)+1].concat(numeral)); 
        break; 
      case 7: 
        romanNumber.push(romans[(i*2)+1].concat(numeral).concat(numeral)); 
        break; 
      case 8: 
        romanNumber.push(romans[(i*2)+1].concat(numeral).concat(numeral).concat(numeral)); 
        break; 
      case 9: 
        romanNumber.push(romans[i*2].concat(romans[(i*2)+2])); 
      } 
    } 
  return romanNumber.reverse().join("").toString(); 
 } 
 
 // test here 
 convertToRoman(97); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/C1YV)

### Explicación del código:

*   Crear una serie de números `romans` ( `romans` ).
*   Use un bucle for para crear una matriz de los dígitos ( `ints` ) en el número.
*   Recorra la matriz de dígitos (base 10) y, a medida que lo hace, incremente el índice del número romano (base 5) en 2 ( `numeral = romans[i*2]` ).
*   Dentro del bucle, use Switch Case para insertar los números romanos adecuados (hacia atrás) en esa matriz.
*   Invierta la matriz de números romanos y conviértala en una cadena.

#### Enlaces relevantes

*   [Para loops](http://forum.freecodecamp.com/t/javascript-for-loop/14666)
*   Mientras bucles
*   [Mates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girasol:") Solución de código intermedio:
```
function convertToRoman(num) { 
  var romans = 
  // 10^i 10^i*5 
    ["I", "V"], // 10^0 
    ["X", "L"], // 10^1 
    ["C", "D"], // 10^2 
    ["M"]       // 10^3 
  ], 
      digits = num.toString() 
        .split('') 
        .reverse() 
        .map(function(item, index) { 
          return parseInt(item); 
        }), 
      numeral = ""; 
 
  // Loop through each digit, starting with the ones place 
  for (var i=0; i<digits.length; i++) { 
    // Make a Roman numeral that ignores 5-multiples and shortening rules 
    numeral = romans[i][0].repeat(digits[i]) + numeral; 
    // Check for a Roman numeral 5-multiple version 
    if (romans[i][1]) { 
      numeral = numeral 
        // Change occurrences of 5 * 10^i to the corresponding 5-multiple Roman numeral 
        .replace(romans[i][0].repeat(5), romans[i][1]) 
        // Shorten occurrences of 9 * 10^i 
        .replace(romans[i][1] + romans[i][0].repeat(4), romans[i][0] + romans[i+1][0]) 
        // Shorten occurrences of 4 * 10^i 
        .replace(romans[i][0].repeat(4), romans[i][0] + romans[i][1]); 
    } 
  } 
 
  return numeral; 
 } 
 
 // test here 
 convertToRoman(36); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/C1YV)

### Explicación del código:

*   Use una matriz ( `romans` ) para crear una matriz que contenga el número romano para un poder dado de 10 y, si está disponible, el número romano para ese poder de 10 por 5.
*   Convierta el número de entrada ( `num` ) en una matriz invertida de dígitos ( `digits` ) para que podamos recorrer esos dígitos comenzando con la posición de las unidades y subiendo.
*   Recorra cada dígito, comience por el lugar de las unidades y cree una cadena de números romanos agregando cada número romano de mayor potencia al comienzo de la cadena de `numeral` un número de veces igual a un `digit` . Esta cadena inicial ignora los números romanos que son una potencia de 10 por 5 y también ignora las reglas de acortamiento.
*   Si la potencia relevante de 10 tiene un número romano de 5 múltiplos, en `numeral` , reemplace las ocurrencias 5 en fila con el número romano de 5 múltiplos relevante (es decir, V, L o D) y reduzca las apariciones de 9 \* 10 ^ i (por ejemplo, VIIII a VIX) y 4 \* 10 ^ i (por ejemplo, XXXX a XL). ¡El orden es importante aquí!
*   Finalmente, devuelve el `numeral` .

#### Enlaces relevantes

*   [Para loops](http://forum.freecodecamp.com/t/javascript-for-loop/14666)
*   [.división()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
*   [.marcha atrás()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
*   [.mapa()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
*   [.Encadenar()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)
*   [parseInt ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
*   [.reemplazar()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
*   [.repetir()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":portapapeles:") NOTAS PARA LAS CONTRIBUCIONES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **NO** agregue soluciones que sean similares a las soluciones existentes. Si cree que es **_similar pero mejor_** , intente fusionar (o reemplazar) la solución similar existente.
*   Agregue una explicación de su solución.
*   Categorice la solución en una de las siguientes categorías: **Básica** , **Intermedia** y **Avanzada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Agregue su nombre de usuario solo si ha agregado algún **contenido principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **_NO_** _elimine ningún nombre de usuario existente_ )

> Ver ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referencia.
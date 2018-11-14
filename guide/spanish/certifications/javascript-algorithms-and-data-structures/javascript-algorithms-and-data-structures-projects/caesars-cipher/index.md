---
title: Caesars Cipher
localeTitle: Cifrado de Caesars
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") Recuerda usar **`Read-Search-Ask`** si te atascas. Tratar de emparejar el programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") y escribe tu propio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápiz:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":bandera a cuadros:") Explicación del problema:

*   Necesita escribir una función, que tomará una cadena codificada con _cifrado César_ como parámetro y la decodificará.
*   El que se usa aquí es ROT13, donde el valor de la letra se desplaza 13 lugares. por ejemplo, 'A' ![:left_right_arrow:](https://forum.freecodecamp.com/images/emoji/emoji_one/left_right_arrow.png?v=3 ": left_right_arrow:") 'N', 'T' ![:left_right_arrow:](https://forum.freecodecamp.com/images/emoji/emoji_one/left_right_arrow.png?v=3 ": left_right_arrow:") 'SOL'.
*   Tienes que cambiarlo 13 posiciones hacia atrás, de modo que 'N' ![:left_right_arrow:](https://forum.freecodecamp.com/images/emoji/emoji_one/left_right_arrow.png?v=3 ": left_right_arrow:") 'UNA'.

#### Enlaces relevantes

*   [String.prototype.charCodeAt](http://forum.freecodecamp.com/t/javascript-string-prototype-charcodeat/15933)
*   String.fromCharCode

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 1

Use _String.charCodeAt ()_ para convertir el carácter inglés a ASCII.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 2

Use _String.fromCharCode ()_ para convertir ASCII a caracteres en inglés.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 3

Deja cualquier cosa que no se interponga entre AZ como es.

> _intenta resolver el problema ahora_

## ¡Alerta de spoiler!

![señal de advertencia](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**¡Solución por delante!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solución de código básico:

```javascript
    function rot13(str) { 
      // Split str into a character array 
      return str.split('') 
      // Iterate over each character in the array 
        .map.call(str, function(char) { 
          // Convert char to a character code 
          x = char.charCodeAt(0); 
          // Checks if character lies between AZ 
          if (x < 65 || x > 90) { 
            return String.fromCharCode(x);  // Return un-converted character 
          } 
          //N = ASCII 78, if the character code is less than 78, shift forward 13 places 
          else if (x < 78) { 
            return String.fromCharCode(x + 13); 
          } 
          // Otherwise shift the character 13 places backward 
          return String.fromCharCode(x - 13); 
        }).join('');  // Rejoin the array into a string 
    } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLjU/38)

### Explicación del código:

*   Una variable de cadena `nstr` se declara y se inicializa para almacenar la cadena descodificada.
*   El bucle for se utiliza para recorrer cada carácter de la cadena de entrada.
*   Si el carácter no es alfabetos en mayúsculas (es decir, su ascii no está entre 65 y 91), lo dejaremos como está y [continuaremos](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue) con la siguiente iteración.
*   Si es el alfabeto en mayúsculas, restaremos 13 de su código ASCII.
*   Si el código ASCII es menor que 78, se saldrá del rango cuando se reste a 13, así que le agregaremos 26 (número de letras en alfabetos en inglés) para que después de A regrese a Z. por ejemplo, M (77) ![:left_right_arrow:](https://forum.freecodecamp.com/images/emoji/emoji_one/left_right_arrow.png?v=3 ": left_right_arrow:") 77-13 = 64 (no es un alfabeto inglés) +26 = 90 ![:left_right_arrow:](https://forum.freecodecamp.com/images/emoji/emoji_one/left_right_arrow.png?v=3 ": left_right_arrow:") Z (90).

#### Enlaces relevantes

*   [Array.prototype.map](http://forum.freecodecamp.com/t/javascript-array-prototype-map/14294)
*   [String.prototype.split](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)
*   [Array.prototype.join](http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girasol:") Solución de código intermedio:

```javascript
    // Solution with Regular expression and Array of ASCII character codes 
    function rot13(str) { 
      var rotCharArray = []; 
      var regEx = /[AZ]/ ; 
      str = str.split(""); 
      for (var x in str) { 
        if (regEx.test(str[x])) { 
          // A more general approach 
          // possible because of modular arithmetic 
          // and cyclic nature of rot13 transform 
          rotCharArray.push((str[x].charCodeAt() - 65 + 13) % 26 + 65); 
        } else { 
          rotCharArray.push(str[x].charCodeAt()); 
        } 
      } 
      str = String.fromCharCode.apply(String, rotCharArray); 
      return str; 
    } 
 
    // Change the inputs below to test 
    rot13("LBH QVQ VG!"); 
```

### Explicación del código:

*   Se crea una matriz vacía en una variable llamada `rotCharArray` para almacenar los códigos de caracteres.
*   La variable `regEx` almacena una expresión regular para todas las letras mayúsculas de la A a la Z.
*   Dividimos `str` en una matriz de caracteres y luego usamos un bucle for para recorrer cada carácter de la matriz.
*   Usando una instrucción if, probamos si la cadena solo contiene letras mayúsculas de la A a la Z.
*   Si devuelve true, usamos la función `charCodeAt()` y la transformación rot13 para devolver el valor correcto, de lo contrario, devolveremos el valor inicial.
*   Luego devolvemos la cadena con los códigos de caracteres de la variable `rotCharArray` .

### Explicación del algoritmo:
```
ALPHA    KEY BASE             ROTATED    ROT13 
 ------------------------------------------------------------- 
 [A]     65  <=>   0 + 13  =>  13 % 26  <=>  13 + 65 = 78 [N] 
 [B]     66  <=>   1 + 13  =>  14 % 26  <=>  14 + 65 = 79 [O] 
 [C]     67  <=>   2 + 13  =>  15 % 26  <=>  15 + 65 = 80 [P] 
 [D]     68  <=>   3 + 13  =>  16 % 26  <=>  16 + 65 = 81 [Q] 
 [E]     69  <=>   4 + 13  =>  17 % 26  <=>  17 + 65 = 82 [R] 
 [F]     70  <=>   5 + 13  =>  18 % 26  <=>  18 + 65 = 83 [S] 
 [G]     71  <=>   6 + 13  =>  19 % 26  <=>  19 + 65 = 84 [T] 
 [H]     72  <=>   7 + 13  =>  20 % 26  <=>  20 + 65 = 85 [U] 
 [I]     73  <=>   8 + 13  =>  21 % 26  <=>  21 + 65 = 86 [V] 
 [J]     74  <=>   9 + 13  =>  22 % 26  <=>  22 + 65 = 87 [W] 
 [K]     75  <=>  10 + 13  =>  23 % 26  <=>  23 + 65 = 88 [X] 
 [L]     76  <=>  11 + 13  =>  24 % 26  <=>  24 + 65 = 89 [Y] 
 [M]     77  <=>  12 + 13  =>  25 % 26  <=>  25 + 65 = 90 [Z] 
 [N]     78  <=>  13 + 13  =>  26 % 26  <=>   0 + 65 = 65 [A] 
 [O]     79  <=>  14 + 13  =>  27 % 26  <=>   1 + 65 = 66 [B] 
 [P]     80  <=>  15 + 13  =>  28 % 26  <=>   2 + 65 = 67 [C] 
 [Q]     81  <=>  16 + 13  =>  29 % 26  <=>   3 + 65 = 68 [D] 
 [R]     82  <=>  17 + 13  =>  30 % 26  <=>   4 + 65 = 69 [E] 
 [S]     83  <=>  18 + 13  =>  31 % 26  <=>   5 + 65 = 70 [F] 
 [T]     84  <=>  19 + 13  =>  32 % 26  <=>   6 + 65 = 71 [G] 
 [U]     85  <=>  20 + 13  =>  33 % 26  <=>   7 + 65 = 72 [H] 
 [V]     86  <=>  21 + 13  =>  34 % 26  <=>   8 + 65 = 73 [I] 
 [W]     87  <=>  22 + 13  =>  35 % 26  <=>   9 + 65 = 74 [J] 
 [X]     88  <=>  23 + 13  =>  36 % 26  <=>  10 + 65 = 75 [K] 
 [Y]     89  <=>  24 + 13  =>  37 % 26  <=>  11 + 65 = 76 [L] 
 [Z]     90  <=>  25 + 13  =>  38 % 26  <=>  12 + 65 = 77 [M] 
```

#### Enlaces relevantes

*   [Función.aplicar](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
*   [Regex](https://forum.freecodecamp.com/t/regular-expressions-resources/15931)
*   [Regex.test](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLjU/39)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotando luz:") Solución avanzada de código:
```
function rot13(str) { // LBH QVQ VG! 
  return str.replace(/[AZ]/g, L => String.fromCharCode((L.charCodeAt(0) % 26) + 65)); 
 } 
```

### Explicación del algoritmo:

Comprender el operador de módulo (a _veces llamado operador de módulo_ ) representado simbólicamente como `%` en JavaScript es clave para entender el algoritmo.  
Este es un operador interesante que aparece en varios lugares de Ingeniería, por ejemplo, en criptografía.

Básicamente, operado en un número, divide el número por el divisor dado y da el resto de la división.  
Por ejemplo,

*   `0 % 5 = 0` porque `0 / 5 = 0` y el resto es `0` .
    
*   `2 % 5 = 2` porque `2 / 5 = 0` y el resto es `2`
    
*   `4 % 5 = 4` porque `4 / 5 = 0` y el resto es `4`
    
*   `5 % 5 = 0` porque `5 / 5 = 1` y el resto es `0`
    
*   `7 % 5 = 2` porque `7 / 5 = 1` y el resto es `2`
    
*   `9 % 5 = 4` porque `9 / 5 = 1` y el resto es `4`
    
*   `10 % 5 = 0` porque `10 / 5 = 2` y el resto es `0`
    

Pero debes haber notado un patrón aquí.  
Como habrás notado, el increíble operador de módulo envuelve el valor de LHS cuando solo alcanza los múltiplos del valor de RHS.  
por ejemplo, en nuestro caso, cuando `LHS = 5` , se ajustó a `0`  
O  
cuando `LHS = 10` , volvió a `0` .

Por lo tanto, vemos el siguiente patrón emergente
```
 0 ⇔ 0 
 1 ⇔ 1 
 2 ⇔ 2 
 3 ⇔ 3 
 4 ⇔ 4 
 5 ⇔ 0 
 6 ⇔ 1 
 7 ⇔ 2 
 8 ⇔ 3 
 9 ⇔ 4 
 10 ⇔ 0 
```

Por lo tanto, llegamos a la conclusión de que al utilizar el operador de módulo, se puede asignar un rango de valores a un rango entre \[ `0` a `DIVISOR - 1` \]. En nuestro caso, mapeamos \[ `5 - 9` \] entre \[ `0 - 4` \] o mapeamos \[ `6 - 10` \] entre \[ `0 - 4` \].

¿Entendiste hasta esto?

Ahora consideremos la posibilidad de asignar un rango de `26` números, es decir, entre \[ `65 - 90` \] que representa \[ **Alfabetos ingleses** \] en mayúsculas en un [juego de caracteres Unicode](http://unicode-table.com/en/alphabets/) a un rango de números entre \[ `0 - 25` \].
```
[A]  65 % 26 ⇔ 13 
 [B]  66 % 26 ⇔ 14 
 [C]  67 % 26 ⇔ 15 
 [D]  68 % 26 ⇔ 16 
 [E]  69 % 26 ⇔ 17 
 [F]  70 % 26 ⇔ 18 
 [G]  71 % 26 ⇔ 19 
 [H]  72 % 26 ⇔ 20 
 [I]  73 % 26 ⇔ 21 
 [J]  74 % 26 ⇔ 22 
 [K]  75 % 26 ⇔ 23 
 [L]  76 % 26 ⇔ 24 
 [M]  77 % 26 ⇔ 25 
 [N]  78 % 26 ⇔  0 
 [O]  79 % 26 ⇔  1 
 [P]  80 % 26 ⇔  2 
 [Q]  81 % 26 ⇔  3 
 [R]  82 % 26 ⇔  4 
 [S]  83 % 26 ⇔  5 
 [T]  84 % 26 ⇔  6 
 [U]  85 % 26 ⇔  7 
 [V]  86 % 26 ⇔  8 
 [W]  87 % 26 ⇔  9 
 [X]  88 % 26 ⇔ 10 
 [Y]  89 % 26 ⇔ 11 
 [Z]  90 % 26 ⇔ 12 
```

Como puede observar, cada número en el rango de \[ `65 - 90` \] se asigna a un número único entre \[ `0 - 25` \].  
Es posible que también haya notado que cada número dado (por ejemplo, `65` ) se asigna a otro número (por ejemplo, `13` ) que puede usarse como un valor de compensación (es decir, `65 + OFFSET` ) para obtener el ROT13 del número dado.

Por ejemplo, `65` mapas a `13` que pueden tomarse como un valor de compensación y sumarse a `65` para dar `78` .
```
[A]  65 % 26 ⇔ 13 + 65 =  78 [N] 
 [B]  66 % 26 ⇔ 14 + 65 =  79 [O] 
 [C]  67 % 26 ⇔ 15 + 65 =  80 [P] 
 [D]  68 % 26 ⇔ 16 + 65 =  81 [Q] 
 [E]  69 % 26 ⇔ 17 + 65 =  82 [R] 
 [F]  70 % 26 ⇔ 18 + 65 =  83 [S] 
 [G]  71 % 26 ⇔ 19 + 65 =  84 [T] 
 [H]  72 % 26 ⇔ 20 + 65 =  85 [U] 
 [I]  73 % 26 ⇔ 21 + 65 =  86 [V] 
 [J]  74 % 26 ⇔ 22 + 65 =  87 [W] 
 [K]  75 % 26 ⇔ 23 + 65 =  88 [X] 
 [L]  76 % 26 ⇔ 24 + 65 =  89 [Y] 
 [M]  77 % 26 ⇔ 25 + 65 =  90 [Z] 
 [N]  78 % 26 ⇔  0 + 65 =  65 [A] 
 [O]  79 % 26 ⇔  1 + 65 =  66 [B] 
 [P]  80 % 26 ⇔  2 + 65 =  67 [C] 
 [Q]  81 % 26 ⇔  3 + 65 =  68 [D] 
 [R]  82 % 26 ⇔  4 + 65 =  69 [E] 
 [S]  83 % 26 ⇔  5 + 65 =  70 [F] 
 [T]  84 % 26 ⇔  6 + 65 =  71 [G] 
 [U]  85 % 26 ⇔  7 + 65 =  72 [H] 
 [V]  86 % 26 ⇔  8 + 65 =  73 [I] 
 [W]  87 % 26 ⇔  9 + 65 =  74 [J] 
 [X]  88 % 26 ⇔ 10 + 65 =  75 [K] 
 [Y]  89 % 26 ⇔ 11 + 65 =  76 [L] 
 [Z]  90 % 26 ⇔ 12 + 65 =  77 [M] 
```

### Explicación del código:

*   `String.prototype.replace` [función](http://forum.freecodecamp.com/t/javascript-string-prototype-replace/15942) `String.prototype.replace` permite transformar una `String` función de alguna coincidencia de patrón (definida por una expresión regular) y la [función de transformación](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Specifying_a_function_as_a_parameter) (que se aplica a cada una de las coincidencias de patrón).
*   [La](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions) sintaxis de la [función de flecha](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions) se usa para escribir el parámetro de la función para `replace()` .
*   `L` representa una sola unidad, de cada coincidencia de patrón con `/[AZ]/g` - que es cada letra mayúscula en el alfabeto, de la `A` a la `Z` , presente en la cadena.
*   La función de flecha aplica la transformación `rot13` en cada letra mayúscula del alfabeto inglés presente en la cadena dada.

#### Enlaces relevantes

*   [String.prototype.replace ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":portapapeles:") NOTA A LOS CONTRIBUYENTES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **NO** agregue soluciones que sean similares a las soluciones existentes. Si cree que es **_similar pero mejor_** , intente fusionar (o reemplazar) la solución similar existente.
*   Agregue una explicación de su solución.
*   Categorice la solución en una de las siguientes categorías: **Básica** , **Intermedia** y **Avanzada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Agregue su nombre de usuario solo si ha agregado algún **contenido principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **_NO_** _elimine ningún nombre de usuario existente_ )

> Ver ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referencia.
---
title: Algoritmo Mensaje Secreto
localeTitle: Algoritmo Mensaje Secreto
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/7/70cf3cc5462f69c2f770ad42d0f24f240a8d8f13.jpg)

### Explicación:

Este problema es muy sencillo, obtendrás una cadena que represente a una frase en código binario, y deberás traducirlo a palabras. No hay forma directa de hacer esto por lo que tendrá que traducir dos veces.

## Pista: 1

Primero debes convertir de **binario** a **decimal** para luego poder traducirlo a caracteres.

## Pista: 2

Las cosas son más fáciles si te centras en partes pequeñas, divide el mensaje lo que recibas y céntrate en una letra la vez.

## Pista: 3

Asegúrate luego de transcodificar un carácter de binario a decimal de restablecer cualquiera de las variantes que utilizaste para realizar la traducción. Asimismo, no te olvides de poner todo de nuevo en una sola cadena.

## ¡Alerta de Spoiler!

![warning sign](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**¡Solución abajo!**

## Solución del código:
```
function binaryAgent(str) {
  biString = str.split(' ');
  uniString = [];

  // Utilizando el parámetro base en parseInt podemos convertir el número
  // binario a número decimal mientras simultáneamente lo convertimos a carácter.

  for(i=0;i < biString.length;i++){
    uniString.push(String.fromCharCode(parseInt(biString[i], 2))); 
  }
  // Simplemente unimos la cadena.
  return uniString.join('');
}

// realizamos el test
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") [¡En REPL!](https://repl.it/CLnm/0)

# Explicación del código:

*   Separamos la cadena en una matriz de cadenas separadas por espacios en blanco.
*   Creamos una variable que será necesaria a lo largo del camino, el nombre se explica por si mismo.
*   Iteramos por la nueva matriz de binarios.
*   Convertimos a decimal utilizando parseInt(_binario_, 2) (con el segundo parámetro le decimos en que base nuestros números están actualmente)
*   Al final, retornamos nuestro mensaje convertido.

## Segunda solución:
```
function binaryAgent(str) {
  // Separamos el código binario por sus espacios.
  str = str.split(' ');
  var power;
  var decValue = 0;
  var sentence = '';

  // Comprobamos cada número binario de la matriz.
  for (var s = 0; s < str.length; s++) {
    // Comprobamos cada bit del número binario.
    for (var t = 0; t < str[s].length; t++) {
      // Esto solo toma en consideración los activos.
      if (str[s][t] == 1) {
        // Esto es equivalente a 2 ** posición.
        power = Math.pow(2, +str[s].length - t - 1);
        decValue += power;

        // Guardamos el valor decimal sumándolo al anterior.
      }
    }

    // Luego de que el número binario es convertido a decimal, lo convertimos en una cadena y lo guardamos.
    sentence += (String.fromCharCode(decValue));

    // Reseteamos el valor decimal para el próximo número binario.
    decValue = 0;
  }

  return sentence;
}

// realizamos el test
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") [¡En REPL!](https://repl.it/CLno/0)

# Explicación del código:

*   Para cada cadena binaria comprobamos los unos e ignoramos los ceros.
*   Para aquellos que son uno o activo los convertimos en decimal. Esto toma en cuenta la posición y la potencia adecuada a la que tiene que ser elevado.
*   Guardamos la potencia en la variable **power** sumándolo a los anteriores unos en la variable **decValue**. Esta variable continuará sumando las potencias de los unos activos hasta el final del bucle y luego retornará un número decimal.
*   Convertimos el número decimal final en ASCII y lo añadimos a la variable **sentence** junto con cualquier otra cadena de texto ya convertida y almacenado.
*   Restablecemos el valor de la variable **decValue** para evitar decimales equivocadas antes de continuar con el bucle externo.cara

## Tercera solución:
```
function binaryAgent(str) {
  return String.fromCharCode(...str.split(" ").map(function(char){ return parseInt(char, 2); }));
}

// realizamos el test
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") [¡En REPL!](https://repl.it/CLnp/0)

# Explicación del código:

*   Primero utilizamos `split()` para poder trabajar cada carácter como un elemento de matriz.
*   Luego utilizamos `map()` para procesar cada elemento binario a decimal utilizando `pareseInt()`
*   Finalmente podemos utilizar `String.fromCharCode()` para convertir cada número ASCII a su correspondiente carácter.
*   Sin embargo `fromCharCode()` espera una serie de números en lugar de una matriz. Podemos utilizar ES6 Spread Operator para pasar una matriz de números como números individuales. Más información: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread\_operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)

## Cuarta solución:
```
function binaryAgent(str) {
  var re = /(\d+)(\s?)/g;
  function convertToChar(match,p1,p2){
    return String.fromCharCode(parseInt(p1, 2));
  }
  return str.replace(re, convertToChar);
}

// realizamos el test
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") [¡En REPL!](https://repl.it/CLnr/0)

# Explicación del código:

*   En esta solución utilizamos `String.replace()` para encontrar todos los números binarios y los convertimos en caracteres.
*   En primer lugar utilizamos una expresión regular para encontrar todos los números binarios y los espacios finales opcionales.
*   A continuación, definimos una función que convierte cada primer subcoincidencia a número con `parseInt()` y luego en un carácter con `String.fromCharCode()`. Al no utilizar la segunda subcoincidencia dejamos de lado todos los espacios que se encuentran entre cada número binario.
*   Por último utilizamos nuestra expresión regular y la función definida como parámetro de `String.replace()`.

> **NOTA:** Por favor añade tu nombre de usuario solamente si has añadido **contenido relevante** al artículo. (Por favor no remuevas ningún nombre existente.)
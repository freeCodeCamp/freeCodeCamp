---
title: Match Single Characters Not Specified
localeTitle: Coincidir con caracteres individuales no especificados
---
## Coincidencia de caracteres individuales no especificados

En este desafío, se nos pide que devolvamos una colección de coincidencias que no están especificadas exactamente. Mientras que los desafíos de expresiones regulares anteriores te harían coincidir en el caso del personaje \[az\], este desafío nos pide que neguemos estas coincidencias utilizando el carácter de intercalación \[^ az\]. Entonces, nuestro objetivo es devolver una colección negada (no coincidentes) de letras que no son vocales ni números.

## Sugerencia 1:

¿Recordaste rodear tu expresión regular entre paréntesis y barras?

```javascript
let exampleRegExp = /[^az]/; 
```

Si es así, entonces vuelva a verificar que está agregando las banderas apropiadas:

*   i: Ignora mayúsculas y minúsculas de búsqueda / coincidencia
*   g: recupera valores múltiples; el valor predeterminado está configurado para devolver la primera coincidencia que encuentre
*   ^: Niega las coincidencias siguiendo esta bandera

### Sugerencia 2:

Asegúrese de verificar si su rango de números es correcto: el desafío nos pide que neguemos todos los números del 0 al 99. Esto se puede hacer usando la carátula de negación colocada inmediatamente después del primer soporte de apertura de su expresión regular.

```js
let numbersRegExp = /[^0-99]/ig; 
```

### Alerta de Spoiler - Solución por delante

## Solución

```javascript
let quoteSample = "3 blind mice."; 
 let myRegex = /[^aeiou^0-99]/ig; // Change this line 
 let result = quoteSample.match(myRegex); // Change this line 

```
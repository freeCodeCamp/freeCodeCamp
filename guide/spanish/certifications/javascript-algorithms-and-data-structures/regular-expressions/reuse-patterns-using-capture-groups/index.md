---
title: Reuse Patterns Using Capture Groups
localeTitle: Reutilizar patrones usando grupos de captura
---
## Reutilizar patrones usando el grupo de captura

## Sugerencia 1:

Código dado abajo:

```javascript
let testString = "test test test "; 
 let reRegex =/(test)\s\1/; 
 let result = reRegex.test(testString); 
```

`result` solo coincidirá con la `test test` porque `\1` en este ejemplo representa el mismo texto que el último grupo de captura `(test)` comparó más recientemente.

Si tuviéramos que traducir literalmente la expresión regular, se vería algo así:

```js
let re = /(test)\s\1/; 
 let literalRe = /test\stest/; 
```

Tanto `rea` como `literalRe` coincidirían con la misma cosa.

## Sugerencia 2:

Dado el siguiente código:

```javascript
let testString = "test test test "; 
 let reRegex =/(test)(\s)\1\2\1/; 
 let result = reRegex.test(testString); 
```

coincidirá con la `test test test` entera porque: `\1` repite (prueba) `\2` repeticiones (\\ s)

## Sugerencia 3:

El siguiente código:

```javascript
let testString = "test test test test test test"; 
 let reRegex =/(test)(\s)\1\2\1/g; 
 let result = reRegex.test(testString); 
```

debido a que usamos `\g` , nuestro Regex no regresa después de la primera coincidencia completa ( `test test test` ) y todas las repeticiones.

## Alerta de Spoiler - ¡Solución por delante!

## Solución:

```javascript
let repeatNum = "42 42 42"; 
 let reRegex =  /^(\d+)\s\1\s\1$/; 
 let result = reRegex.test(repeatNum); 

```

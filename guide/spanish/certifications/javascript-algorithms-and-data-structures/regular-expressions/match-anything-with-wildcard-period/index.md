---
title: Match Anything with Wildcard Period
localeTitle: Coincidir cualquier cosa con el período de comodín
---
## Coincidir cualquier cosa con el período de comodín

## Sugerencia 1:

El punto `.` Es la clave en este desafío.

## Sugerencia 2:

Debes poner el punto en la posición correcta.

## Solución

```javascript
let exampleStr = "Let's have fun with regular expressions!"; 
 let unRegex = /.un/; // Change this line 
 let result = unRegex.test(exampleStr); 
```

## Explicacion

El período `.` será un personaje cualquiera, por lo que las cadenas "correr", "sol", "diversión" y "juego de palabras" tienen las mismas características.
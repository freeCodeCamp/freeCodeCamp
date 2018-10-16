---
title: Generate Random Whole Numbers with JavaScript
localeTitle: Generar números enteros al azar con JavaScript
---
Es genial que podamos crear números decimales aleatorios, pero es aún más útil si somos mucho más útiles para generar un número entero aleatorio.

Para lograr esto, podemos multiplicar el número aleatorio por diez y usar `Math.floor()` para convertir el número decimal en un número entero
```
Math.floor(Math.random()*10) 

```
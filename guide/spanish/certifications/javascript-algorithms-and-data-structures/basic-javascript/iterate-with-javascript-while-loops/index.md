---
title: Iterate with JavaScript While Loops
localeTitle: Iterar con JavaScript mientras bucles
---
## Iterar con JavaScript mientras bucles

Mientras que los bucles se ejecutarán mientras la condición dentro de () sea verdadera. Ejemplo:

```javascript
while(condition){ 
 code... 
 } 
```

## Sugerencia 1:

Use una variable de iterador como i en su condición

```javascript
var i = 0; 
 while(i <= 4){ 
 } 
```

## Spoiler Alert Solution por delante!

## Solución:

```javascript
// Setup 
 var myArray = []; 
 
 // Only change code below this line. 
 var i = 0; 
 while (i <= 4){ 
    myArray.push(i); 
    i++; 
 } 

```
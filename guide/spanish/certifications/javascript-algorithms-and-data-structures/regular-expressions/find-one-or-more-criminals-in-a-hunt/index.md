---
title: Find One or More Criminals in a Hunt
localeTitle: Encuentra uno o más criminales en una cacería
---
## Encuentra uno o más criminales en una cacería

## El problema

Un grupo de criminales escapó de la cárcel y se escapó, pero no sabes cuántos. Sin embargo, sí sabes que permanecen juntos cuando están cerca de otras personas. Eres responsable de encontrar a todos los criminales a la vez.

Escriba una expresión regular codiciosa que encuentre uno o más delincuentes dentro de un grupo de otras personas. Un criminal está representado por la letra mayúscula C.

### Sugerencia 1:

¿Está rodeando su expresión regular en barras?

```javascript
let regexp = /t.[az]*t/; 
```

### Sugerencia 2:

¿Está utilizando la marca '+' en su expresión regular?

```javascript
let regexp = /E+/; // returns E, EE, EEE patterns 
```

### Advertencia de Spoiler - Solución por delante

## Solución

```javascript
let crowd = 'P1P2P3P4P5P6CCCP7P8P9'; 
 
 let reCriminals = /C+/; // Change this line 
 
 let matchedCriminals = crowd.match(reCriminals); 
 console.log(matchedCriminals); 

```
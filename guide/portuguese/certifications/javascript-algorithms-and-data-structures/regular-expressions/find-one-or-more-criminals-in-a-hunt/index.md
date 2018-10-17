---
title: Find One or More Criminals in a Hunt
localeTitle: Encontre um ou mais criminosos em uma caçada
---
## Encontre um ou mais criminosos em uma caçada

## O problema

Um grupo de criminosos escapou da prisão e fugiu, mas você não sabe quantos. No entanto, você sabe que eles ficam juntos quando estão perto de outras pessoas. Você é responsável por encontrar todos os criminosos de uma só vez.

Escreva um regex ganancioso que encontre um ou mais criminosos dentro de um grupo de outras pessoas. Um criminoso é representado pela letra maiúscula C.

### Sugestão 1:

Você está cercando seu regexp em barras?

```javascript
let regexp = /t.[az]*t/; 
```

### Dica 2:

Você está usando a sinalização "+" no seu regexp?

```javascript
let regexp = /E+/; // returns E, EE, EEE patterns 
```

### Aviso de spoiler - Solução à frente

## Solução

```javascript
let crowd = 'P1P2P3P4P5P6CCCP7P8P9'; 
 
 let reCriminals = /C+/; // Change this line 
 
 let matchedCriminals = crowd.match(reCriminals); 
 console.log(matchedCriminals); 

```
---
title: Match Beginning String Patterns
localeTitle: Combinar Padrões de Cordas Iniciais
---
## Combinar Padrões de Cordas Iniciais

## O problema

Use o caractere de circunflexo em um regex para localizar "Cal" apenas no início da string rickyAndCal.

### Sugestão 1:

Tente cercar seu regexp em barras

```javascript
let testExp = /^test/; 
 // returns true or false depending on whether test is found in the beginning of the string 
```

### Dica 2:

Tente usar o cursor do caractere '^' fora dos colchetes, como visto no exemplo acima

### Alerta de spoiler - Solução à frente

## Solução

```javascript
let rickyAndCal = "Cal and Ricky both like racing."; 
 let calRegex = /^Cal/; // Change this line 
 let result = calRegex.test(rickyAndCal); 

```
---
title: String.prototype.slice
localeTitle: String.prototype.slice
---
O método de string JavaScript `.slice()` extrai uma parte de uma string e retorna uma nova string.

## Sintaxe
```
str.slice(beginSliceIndex [, endSliceIndex]); 
```

## Parâmetros

**beginSliceIndex**

O índice baseado em zero onde a fatia deve começar. Se beginSliceIndex for um número negativo, `.slice()` do final da string para determinar onde começar a fatia.

**endSliceIndex**

Opcional. O índice baseado em zero no qual a fatia deve terminar. Se omitido, o `.slice()` extrai o final da string.

[Link MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)

## Descrição

`.slice()` o texto de uma string e retorna uma nova string.

## Exemplos

**Usando `.slice()` para criar uma nova string**
```
var string1 = "Hello World!"; 
 var string2 = string1.slice(3); 
 console.log(string2);                           // Will log "lo World!" 
 
 var string3 = string1.slice(3, 7); 
 console.log(string3);                           // Will log "lo W" 
```

**Usando `.slice()` com índices negativos**
```
var string = "Hello World!" 
 str.slice(-3);                                  // Returns "ld!" 
 str.slice(-3, -1);                              // Returns "ld" 
 str.slice(0, -1);                               // Returns "Hello World" 

```
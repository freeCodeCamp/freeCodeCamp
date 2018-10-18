---
title: String fromCharCode
localeTitle: String fromCharCode
---
O método estático `String.fromCharCode()` retorna uma string criada usando a seqüência especificada de valores Unicode.

## Sintaxe
```
String.fromCharCode(num1[, ...[, numN]]) 
```

### Parâmetros

**num1,…, numN**

Uma seqüência de números que são valores Unicode.

[Ligação MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode) | [Link do MSDN](https://msdn.microsoft.com/en-us/LIBRary/wb4w0k66%28v=vs.94%29.aspx)

## Descrição

Este método retorna uma string e não um objeto String.

Como `fromCharCode()` é um método estático de String, você sempre o usa como `String.fromCharCode()` , em vez de como um método de um objeto String criado por você.

## Exemplos
```
String.fromCharCode(65, 66, 67);  // "ABC" 
 
 var test = String.fromCharCode(112, 108, 97, 105, 110); 
 document.write(test); 
 
 // Output: plain 

```
---
title: Immutable Types
localeTitle: Tipos imutáveis
---
> Imutável significa imutável, ou seja, você não pode mudar.

Javascript tem muitos tipos imutáveis, por exemplo, tipo primitivo de `string` . Tente isso no seu console.
```
s = "red"; 
 console.log(s[1]); //→ "e" 
 s[1] = "x"; 
 console.log(s) //→ "red" 
```

os `s` não mudaram! WAT !

## Detalhes

Alguns métodos de string como `String.replace` retornam uma nova string.

O JavaScript possui um tipo de dados complexo, o tipo de dados Object, e possui cinco tipos de dados simples: Number, String, Boolean, Undefined e Null. Esses tipos de dados simples (primitivos) são imutáveis ​​(não podem ser alterados), enquanto os objetos são mutáveis ​​(podem ser alterados).
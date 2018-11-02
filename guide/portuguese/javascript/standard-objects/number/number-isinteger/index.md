---
title: Number isInteger
localeTitle: Número isInteger
---
# Número isInteger

## Descrição

O método `Number.isInteger()` determina se o valor passado é um inteiro. Este método foi introduzido no ES6

## Sintaxe

`Number.isInteger(val)`

### Parâmetros

**val** - valor para verificar se é um inteiro

## Valor de retorno

Um [booleano que](https://guide.freecodecamp.org/javascript/booleans) indica se o valor é um inteiro ou não.

## Descrição

O método retorna `true` se o valor passado for um inteiro, caso contrário, retorna `false` . Valores infinitos e `NaN` retornam `false` .

## Exemplos
```
Number.isInteger(0);         // true 
 Number.isInteger(-0);        // true 
 Number.isInteger(1);         // true 
 Number.isInteger(2);         // true 
 Number.isInteger(-100001);   // true 
 Number.isInteger(999999999999999999999999); // true 
 
 Number.isInteger(0.1);       // false 
 Number.isInteger(0.3);       // false 
 Number.isInteger(Math.PI);   // false 
 
 Number.isInteger(NaN);       // false 
 Number.isInteger(Infinity);  // false 
 Number.isInteger(-Infinity); // false 
 Number.isInteger('10');      // false 
 Number.isInteger(true);      // false 
 Number.isInteger(false);     // false 
 Number.isInteger([1]);       // false 
```

#### Mais Informações:

[Documento ECMA 2015](https://www.ecma-international.org/ecma-262/6.0/#sec-number.isinteger) [Number.isInteger () MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger)
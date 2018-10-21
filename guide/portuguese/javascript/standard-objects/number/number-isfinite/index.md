---
title: Number isFinite
localeTitle: Número isFinite
---
# Número isFinite

## Descrição

O método `Number.isFinite()` verifica se o valor passado para ele é um número finito. Este método foi introduzido no ES6

## Sintaxe

`Number.isFinite(val)`

### Parâmetros

**val** - valor para verificar a finitude

## Valor de retorno

Um [booleano que](https://guide.freecodecamp.org/javascript/booleans) indica se o valor é um número finito ou não.

## Descrição

`Number.isFinite` é diferente do método global [isFinite ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isFinite) , ele não converte o valor testado em um número. Isso significa que o valor precisa ser um número e finito para retornar true.

## Exemplos
```
Number.isFinite(Infinity)     // false 
 Number.isFinite(-Infinity)    // false 
 
 Number.isFinite(1234)         // true 
 Number.isFinite(-1.11)        // true 
 Number.isFinite(0)            // true 
 Number.isFinite(3g55)         // true 
 
 Number.isFinite('1234')       // false 
 Number.isFinite('Hi')         // false 
 Number.isFinite('2005/12/12') // false 
 
 Number.isFinite('0');         // false, would've been true with 
                              // global isFinite('0') 
 
 Number.isFinite(null);        // false, would've been true with 
                              // global isFinite(null) 
```

#### Mais Informações:

[Documento ECMA 2015](https://www.ecma-international.org/ecma-262/6.0/#sec-number.isfinite) [Number.isFinite () MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite)
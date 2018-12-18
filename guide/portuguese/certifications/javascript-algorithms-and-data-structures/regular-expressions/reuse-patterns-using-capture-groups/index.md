---
title: Reuse Patterns Using Capture Groups
localeTitle: Reutilizar padrões usando grupos de captura
---
## Reutilizar padrões usando o grupo de captura

## Sugestão 1:

Dado código abaixo:

```javascript
let testString = "test test test "; 
 let reRegex =/(test)\s\1/; 
 let result = reRegex.test(testString); 
```

`result` no `test test` porque `\1` neste exemplo representa o mesmo texto que o mais recente correspondido pelo primeiro grupo de captura `(test)` .

Se fôssemos traduzir literalmente o regex, seria algo como isto:

```js
let re = /(test)\s\1/; 
 let literalRe = /test\stest/; 
```

Ambos `rea` e `literalRe` combinariam com a mesma coisa.

## Dica 2:

Dado o código abaixo:

```javascript
let testString = "test test test "; 
 let reRegex =/(test)(\s)\1\2\1/; 
 let result = reRegex.test(testString); 
```

irá coincidir com o `test test test` inteiro porque: `\1` repetições (teste) `\2` repetições (\\ s)

## Dica 3:

O código abaixo:

```javascript
let testString = "test test test test test test"; 
 let reRegex =/(test)(\s)\1\2\1/g; 
 let result = reRegex.test(testString); 
```

porque usamos `\g` , nosso Regex não retorna após a primeira correspondência completa ( `test test test` ) e corresponde a todas as repetições.

## Alerta de Spoiler - Solução à frente!

## Solução:

```javascript
let repeatNum = "42 42 42"; 
 let reRegex =  /^(\d+)\s\1\s\1$/; 
 let result = reRegex.test(repeatNum); 

```

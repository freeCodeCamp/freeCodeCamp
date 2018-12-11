---
title: Map.prototype.forEach
localeTitle: Map.prototype.forEach
---
## Map.prototype.forEach

Executa a função fornecida uma vez por cada par de chave / valor no objeto `Map` , em ordem de inserção. Retorna `undefined` .

## Sintaxe

```javascript
myMap.forEach(callback, thisArg) 
```

## Parâmetros

**callback** Função para executar para cada elemento. **thisArg** Valor para usar como este ao executar o retorno de chamada.

## Exemplo

```javascript
const myMap = new Map(); 
 myMap.set('foo',1); 
 myMap.set('bar',2); 
 myMap.set('baz',3); 
 
 function valueLogger(value, key, map){ 
    console.log(`${value}`); 
 } 
 
 myMap.forEach(valueLogger); 
 // 1 
 // 2 
 // 3 

```
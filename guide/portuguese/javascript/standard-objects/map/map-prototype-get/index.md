---
title: Map.prototype.get
localeTitle: Map.prototype.get
---
## Map.prototype.get

Retorna um valor da chave especificada de um objeto `Map` .

## Sintaxe

```javascript
myMap.get(key); 
```

## Parâmetros

**chave** necessária.

## Exemplo

```javascript
const myMap = new Map(); 
 myMap.set('foo',1); 
 myMap.set('bar',2); 
 myMap.set('baz',3); 
 
 myMap.get('foo');   // returns 1 
 myMap.get('baz');   // returns 3 
 myMap.get('hihi');  // return undefined 

```
---
title: Map.prototype.set
localeTitle: Map.prototype.set
---
## Map.prototype.set

Define ou atualiza um elemento com chave e valor especificados para um objeto `Map` . Retorna o objeto do `map` .

## Sintaxe

```javascript
myMap.set(key, value); 
```

## Parâmetros

**chave** necessária. **valor** Requerido.

## Exemplo

```javascript
const myMap = new Map(); 
 
 // sets new elements 
 myMap.set('foo',1); 
 myMap.set('bar',2); 
 myMap.set('baz',3); 
 
 // Updates an element 
 myMap.set('foo', 100); 
 
 myMap.get('foo');   // returns 100 

```
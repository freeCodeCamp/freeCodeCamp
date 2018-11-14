---
title: Map
localeTitle: Mapa
---
## Mapa

Um mapa de entradas `[key, value]` , em que chaves e valores podem ser qualquer valor (objetos e valores primitivos).

## Sintaxe

```javascript
new Map([iterable]) 
```

## Parâmetros

**iterable** Um Array ou outro objeto iterável cujos elementos são pares de valor-chave.

## Exemplo

```javascript
// basic usage 
 const myMap = new Map(); 
 myMap.set('foo',1); 
 myMap.set('bar',2); 
 myMap.set('baz',3); 
 
 myMap.get('foo');   // returns 1 
 myMap.get('baz');   // returns 3 
 myMap.get('hihi');  // return undefined 
 
 myMap.size();   // 3 

```
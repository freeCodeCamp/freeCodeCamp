---
title: Map.prototype.delete
localeTitle: Map.prototype.delete
---
## Map.prototype.delete

Remove o elemento especificado de um objeto `Map` . Retorna se a chave foi encontrada e excluída com sucesso.

## Sintaxe

```javascript
myMap.delete(key); 
```

## Parâmetros

**chave** necessária.

## Exemplo

```javascript
const myMap = new Map(); 
 myMap.set('foo',1); 
 myMap.set('bar',2); 
 myMap.set('baz',3); 
 
 
 myMap.size(); // 3 
 myMap.has('foo'); // true; 
 
 myMap.delete('foo');  // Returns true. Successfully removed. 
 
 myMap.size(); // 2 
 myMap.has('foo');    // Returns false. The "foo" element is no longer present. 

```
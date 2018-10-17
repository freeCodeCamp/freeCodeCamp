---
title: Map.prototype.get
localeTitle: Map.prototype.get
---
## Map.prototype.get

Возвращает значение указанного ключа из объекта `Map` .

## Синтаксис

```javascript
myMap.get(key); 
```

## параметры

**key** Обязательный параметр.

## пример

```javascript
const myMap = new Map(); 
 myMap.set('foo',1); 
 myMap.set('bar',2); 
 myMap.set('baz',3); 
 
 myMap.get('foo');   // returns 1 
 myMap.get('baz');   // returns 3 
 myMap.get('hihi');  // return undefined 

```
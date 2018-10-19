---
title: Map.prototype.set
localeTitle: Map.prototype.set
---
## Map.prototype.set

Устанавливает или обновляет элемент с указанным ключом и значением для объекта `Map` . Возвращает объект `map` .

## Синтаксис

```javascript
myMap.set(key, value); 
```

## параметры

**key** Обязательный параметр. **значение** Обязательный параметр.

## пример

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
---
title: Map.prototype.delete
localeTitle: Map.prototype.delete
---
## Map.prototype.delete

Удаляет указанный элемент из объекта `Map` . Возвращает, был ли найден ключ и успешно удален.

## Синтаксис

```javascript
myMap.delete(key); 
```

## параметры

**key** Обязательный параметр.

## пример

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
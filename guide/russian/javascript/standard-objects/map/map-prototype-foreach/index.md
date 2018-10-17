---
title: Map.prototype.forEach
localeTitle: Map.prototype.forEach
---
## Map.prototype.forEach

Выполняет предоставленную функцию один раз для каждой пары ключ / значение в объекте `Map` в порядке вставки. Возвращает `undefined` .

## Синтаксис

```javascript
myMap.forEach(callback, thisArg) 
```

## параметры

**callback** Функция для выполнения для каждого элемента. **thisArg** Значение, которое будет использоваться при выполнении обратного вызова.

## пример

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
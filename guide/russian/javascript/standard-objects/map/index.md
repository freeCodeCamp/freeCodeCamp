---
title: Map
localeTitle: карта
---
## карта

Карта записей `[key, value]` , где ключи и значения могут быть любым значением (оба объекта и примитивные значения).

## Синтаксис

```javascript
new Map([iterable]) 
```

## параметры

**iterable** Array или другой итерируемый объект, элементами которого являются пары ключ-значение.

## пример

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
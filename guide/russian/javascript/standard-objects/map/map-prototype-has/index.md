---
title: Map.prototype.has
localeTitle: Map.prototype.has
---
## Map.prototype.has

Учитывая `Map` с элементами внутри, функция `has()` позволяет определить, существует ли элемент внутри Карты, на основе ключа, который вы передаете.

Функция `has()` возвращает _`Boolean` примитив_ ( `true` или `false` ), который указывает, что Map содержит элемент или нет.

Вы передаете `key` параметр функции `has()` , который будет использоваться для поиска элемента с этим ключом внутри Карты.

Пример:

```js
// A simple Map 
 const campers = new Map(); 
 
 // add some elements to the map 
 // each element's key is 'camp' and a number 
 campers.set('camp1', 'Bernardo'); 
 campers.set('camp2', 'Andrea'); 
 campers.set('camp3', 'Miguel'); 
 
 // Now I want to know if there's an element 
 // with 'camp4' key: 
 campers.has('camp4'); 
 // output is `false` 
```

На карте `campers` настоящее время нет элемента с `'camp4'` . Следовательно, вызов функции `has('camp4')` возвращает `false` .

```js
// If we add an element with the 'camp4' key to the map 
 campers.set('camp4', 'Ana'); 
 
 // and try looking for that key again 
 campers.has('camp4'); 
 // output is `true` 
```

Поскольку карта в настоящее время имеет элемент с `'camp4'` ключом, `has('camp4')` вызов функции возвратит `true` на этот раз!

В более реалистичном сценарии вы не можете вручную добавлять элементы к карте самостоятельно, поэтому функция `has()` станет действительно полезной в этих случаях.

#### Дополнительная информация:

*   [Map.prototype.has () на MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has)
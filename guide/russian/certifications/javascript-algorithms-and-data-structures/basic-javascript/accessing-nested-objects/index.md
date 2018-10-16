---
title: Accessing Nested Objects
localeTitle: Доступ к вложенным объектам
---
## Доступ к вложенным объектам

Подсказка: **_«Использовать обозначения скобок для свойств с пробелом в их имени»._**

Если мы посмотрим на наш объект:

```javascript
var myStorage = { 
  "car": { 
    "inside": { 
      "glove box": "maps", 
      "passenger seat": "crumbs" 
     }, 
    "outside": { 
      "trunk": "jack" 
    } 
  } 
 }; 
```

Имя нашего объекта - `myStorage` .

| - Внутри у нас есть вложенный объект, называемый `car` .

| --- Внутри, что у нас есть еще два вызова `inside` и `outside` каждого с их собственные свойства

Вы можете визуализировать структуру объекта, как это, если это помогает:
```
myStorage 
 |-- car 
 |--- inside 
 |----- glove box: maps 
 |----- passenger seat: crumbs 
 |--- outside 
 |----- trunk: jack 
```

Нам предлагается назначить содержимое `glove box` , который мы видим, вложен в `inside` объект, который, в свою очередь, вложен в объект `car` .

Мы можем использовать точечную нотацию для доступа к `glove box` следующим образом:

```javascript
var gloveBoxContents = myStorage.car.inside'complete here' 
```

Вы должны `complete here` заменить `complete here` правильный способ доступа к свойству. См. Подсказку выше, если вы застряли.
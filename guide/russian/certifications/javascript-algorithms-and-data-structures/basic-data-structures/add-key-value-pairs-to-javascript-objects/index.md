---
title: Add Key-Value Pairs to JavaScript Objects
localeTitle: Добавление пар ключей к объектам JavaScript
---
## Добавление пар ключей к объектам JavaScript

*   Объект питания уже объявлен. Все, что осталось сделать, это добавить три новых `key-values` .

```javascript
OBJECT[{KEY}] = {VALUE} 
```

*   Вышеприведенный код создаст `key-value` ney внутри объекта.

## Решение

```javascript
let foods = { 
  apples: 25, 
  oranges: 32, 
  plums: 28 
 }; 
 // change code below this line 
 foods['bananas'] = 13; 
 foods['grapes'] = 35; 
 foods['strawberries'] = 27; 
 // change code above this line 
 console.log(foods); 

```
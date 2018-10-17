---
title: Check For The Presence of an Element With indexOf()
localeTitle: Проверка наличия элемента с помощью indexOf ()
---
## Проверка наличия элемента с помощью indexOf ()

*   Простой `if-statement` может использоваться для проверки того, является ли значение, возвращаемое `indexOf()` меньше 0.
*   Как только значение будет обнаружено, вы можете вернуть `true` или `false` .
*   `Solution-1` демонстрирует, как простой `if-statement` может вернуть правильный результат.

## Решение-1:

```javascript
function quickCheck(arr, elem) { 
  if(arr.indexOf(elem)>=0) { 
    return true; 
  } 
  return false; 
 } 
 console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms')); 
```

*   `Solution-2` демонстрирует, как проблему можно решить, используя `? : (conditional)` оператор.

## Решение-2:

```javascript
function quickCheck(arr, elem) { 
 return arr.indexOf(elem) >= 0 ? true : false; 
 } 
 console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms')); 

```
---
title: Write Arrow Functions with Parameters
localeTitle: Функции записи стрелки с параметрами
---
## Функции записи стрелки с параметрами

Вот [отличный ресурс об анонимных функциях в JavaScript](http://helephant.com/2008/08/23/javascript-anonymous-functions/) , если вам все еще интересно, что это такое, и их роль.

Теперь вам поручено установить параметры внутри функций стрелок.

## Подсказка 1:

Избавьтесь от ключевого слова `function` . Поместите оператор стрелки.

## Подсказка 2:

Убедитесь, что вы изменили `var` на `const` .

## Предупреждение о спойлере - решение впереди!

## Решение:

```javascript
const myConcat = (arr1, arr2) => { 
  "use strict"; 
  return arr1.concat(arr2); 
 }; 
 // test your code 
 console.log(myConcat([1, 2], [3, 4, 5])); 

```
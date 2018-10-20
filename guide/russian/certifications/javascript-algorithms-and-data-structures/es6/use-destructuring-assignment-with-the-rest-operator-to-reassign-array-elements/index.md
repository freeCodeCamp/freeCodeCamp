---
title: Use Destructuring Assignment with the Rest Operator to Reassign Array Elements
localeTitle: Назначение Destructuring с оператором Rest для переназначения элементов массива
---
## Назначение Destructuring с оператором Rest для переназначения элементов массива

Помните, что оператор rest допускает переменное количество аргументов. В этой задаче вам нужно избавиться от первых двух элементов массива.

## Подсказка 1:

Назначьте первые два элемента двум случайным величинам.

## Подсказка 2:

Задайте оставшуюся часть массива `...arr` .

\=======

## Подсказка 1

Используйте деструктурирование для создания переменной `arr` .

```javascript
function removeFirstTwo(list) { 
  "use strict"; 
  // change code below this line 
  const [arr] = list; // change this 
  // change code above this line 
  return arr; 
 } 
```

## Подсказка 2

Распределите параметр `list` в `arr` .

```javascript
function removeFirstTwo(list) { 
  "use strict"; 
  // change code below this line 
  const [...arr] = list; // change this 
  // change code above this line 
  return arr; 
 } 
```

## Подсказка 3

Исключить первые два элемента `arr` массив с `,,` .

```javascript
function removeFirstTwo(list) { 
  "use strict"; 
  // change code below this line 
  const [,,...arr] = list; // change this 
  // change code above this line 
  return arr; 
 } 
```

## Оповещение о спойлере - решение впереди!

```javascript
function removeFirstTwo(list) { 
  "use strict"; 
  // change code below this line 
  const [a, b, ...arr] = list; 
  // change code above this line 
  return arr; 
 } 

```
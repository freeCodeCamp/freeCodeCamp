---
title: Use Destructuring Assignment to Pass an Object as a Function's Parameters
localeTitle: Назначение Destructuring для передачи объекта в качестве параметра функции
---
## Назначение Destructuring для передачи объекта в качестве параметра функции

Вы можете передать весь объект, а затем выбрать нужные вам атрибуты, используя `.` оператор. Но ES6 предлагает более элегантный вариант!

## Подсказка 1:

Избавьтесь от `stats` и посмотрите, можете ли вы ее разрушить. Нам нужно `max` и `min` в `stats` .

## Предупреждение о спойлере - решения впереди!

## Решение 1:

```javascript
const half = (function() { 
  "use strict"; // do not change this line 
 
  // change code below this line 
  return function half({max, min}) { 
    // use function argument destructuring 
    return (max + min) / 2.0; 
  }; 
  // change code above this line 
 
 })(); 
```

Обратите внимание, что мы разрушаем `stats` чтобы передать две ее атрибуты - `max` и `min` - в функцию. Не забудьте изменить второй оператор возврата. Измените `stats.max` на `max` и измените `stats.min` на `min` .

## Решение 2:

Вот еще одно решение, которое работает. Не большая разница, кроме того, что функция не имеет имени.

```javascript
const half = (function() { 
  "use strict"; // do not change this line 
 
  // change code below this line 
  return (({max, min}) => { 
    // use function argument destructuring 
    return (max + min) / 2.0; 
  }); 
  // change code above this line 
 
 })(); 

```
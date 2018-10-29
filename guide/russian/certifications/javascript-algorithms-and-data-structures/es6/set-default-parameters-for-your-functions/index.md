---
title: Set Default Parameters for Your Functions
localeTitle: Установка параметров по умолчанию для ваших функций
---
## Установка параметров по умолчанию для ваших функций

: треугольный _флаг_ в _сообщении: не забудьте использовать Read-Search-Ask, если вы застряли. Попробуйте пара программ:_ busts in\_silhouette: и напишите свой собственный код: карандаш:

### : checkered\_flag: Проблема Объяснение:

```javascript
const increment = (function() { 
  "use strict"; 
  return function increment(number, value) { 
    return number + value; 
  }; 
 })(); 
 console.log(increment(5, 2)); // returns 7 
 console.log(increment(5)); // returns NaN 
```

Мы будем изменять функцию приращения, чтобы по умолчанию параметр **числа** увеличивался на 1, установив **значение** в 1, если значение для **значения** не передается в функцию приращения.

### : speech\_balloon: Подсказка: 1

Определим, где **значение** параметра находится в JS-функции

попытаться решить проблему сейчас

### : speech\_balloon: Подсказка: 2

Установите **значение,** равное чему-то, чтобы оно было по умолчанию

попытаться решить проблему сейчас

### Осторожно, спойлеры!

![спойлер](http://discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

Решение впереди!

## : начинающий: базовый код Решение:

```javascript
const increment = (function() { 
  "use strict"; 
  return function increment(number, value = 1) { 
    return number + value; 
  }; 
 })(); 
 console.log(increment(5, 2)); // returns 7 
 console.log(increment(5)); // returns NaN 
```

: ракета: [Код запуска](https://repl.it/@RyanPisuena/PleasingFumblingThings)

## Обозначение кода

*   Этот раздел довольно прост. Пропустите этот раздел, установив значение параметра **значение** , равное 1. Если функция попадается тестовых случаев , когда **значение** не прошло ничего, то **значение** будет присвоено одно по умолчанию.

Полезные ссылки:

[Параметры по умолчанию Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)

# : буфер обмена: ПРИМЕЧАНИЯ ДЛЯ ВЗНОСОВ:

*   : warning: НЕ добавляйте решения, похожие на любые существующие решения. Если вы считаете, что это похоже, но лучше, попробуйте объединить (или заменить) существующее подобное решение.
*   Добавьте объяснение своего решения.
*   Классифицируйте решение в одной из следующих категорий - Basic, Intermediate и Advanced. :светофор:
*   Пожалуйста, добавьте свое имя пользователя, только если вы добавили соответствующее основное содержимое. (: предупреждение: НЕ удалять существующие имена пользователей)

См.: Point\_right: [Wiki Challenge Solution Шаблон](https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-template-guide/14272) для справки.
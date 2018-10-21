---
title: Window setInterval Method
localeTitle: Набор окон
---
## Набор окон

Метод `setInterval()` вызывает функцию или оценивает выражение через определенные интервалы (в миллисекундах).

```js
    setInterval(function(){ alert("Hello"); }, 3000); 
```

Метод `setInterval()` будет продолжать вызов функции до вызова `clearInterval()` , или окно закрывается.

Метод `setInterval()` может передавать дополнительные параметры функции, как показано в примере ниже.

```js
    setInterval(function, milliseconds, parameter1, parameter2, parameter3); 
```

Значение ID, возвращаемое `setInterval()` , используется как параметр для метода `clearInterval()` .

Советы:

*   1000 мс = 1 секунда.
*   Чтобы выполнить функцию только один раз, после заданного количества миллисекунд, используйте метод `setTimeout()` .

#### Дополнительная информация:

Документация: [MDN](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)

JavaScript setInterval () Примеры функций: [Sitepoint](https://www.sitepoint.com/setinterval-example/)

и еще несколько примеров: [w3schools](https://www.w3schools.com/jsref/met_win_setinterval.asp)
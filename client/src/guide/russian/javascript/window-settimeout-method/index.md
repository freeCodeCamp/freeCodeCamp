---
title: Window setTimeout Method
localeTitle: Метод windowTimeout
---
## Метод windowTimeout

Метод `setTimeout()` вызывает функцию или вычисляет выражение после заданного количества миллисекунд.

Советы:

*   1000 мс = 1 секунда.
*   Функция выполняется только один раз. Если вам нужно повторить выполнение, используйте метод `setInterval()` .
*   Используйте метод `clearTimeout()` чтобы предотвратить запуск функции.

Синтаксис метода `setTimout()` следующий:

```js
setTimeout(function, milliseconds, param1, param2, ...); 
```

Например:

```js
setTimeout(function(){ alert("Hello"); }, 3000); 
```

Очень важная вещь в `setTimeout()` заключается в том, что она будет выполняться асинхронно. Приведем пример:

```js
console.log("A"); 
 setTimeout(function(){ console.log("B"); }, 0); 
 console.log("C"); 
 // The order in the console will be 
 // A 
 // C 
 // B 
```

**Не так, как обострилось! Но мы указываем только 0 секунд !!!** Чтобы решить эту проблему и убедиться, что наш код будет выполняться синхронно, нам нужно просто вставить последнюю консоль в функцию

```js
console.log("A"); 
 setTimeout(function() { 
    console.log("B"); 
    console.log("C"); 
 }, 0); 
 // The order in the console will be 
 // A 
 // B 
 // C 
```

#### Дополнительная информация:

Документация: [MDN](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)

Дополнительные примеры функции setTimeout: [w3schools](https://www.w3schools.com/jsref/met_win_settimeout.asp)

Чтобы понять, что на самом деле происходит под капотом, просто смотрите это потрясающее видео [Филипп Робертс: Какая черта - цикл событий? | ОАО «Союз 2014»](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
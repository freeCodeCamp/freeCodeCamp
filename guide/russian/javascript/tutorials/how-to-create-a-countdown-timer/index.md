---
title: How to Create a Countdown Timer
localeTitle: Как создать таймер обратного отсчета
---
## Как создать таймер обратного отсчета

### Создание

Начните с создания функции countdownTimer.

```javascript
function startCountdown(seconds){ 
  var counter = seconds; 
 
  var interval = setInterval(() => { 
    console.log(counter); 
    counter--; 
 
 
    if(counter < 0 ){ 
 
      // The code here will run when 
      // the timer has reached zero. 
 
      clearInterval(interval); 
      console.log('Ding!'); 
    }; 
  }, 1000); 
 }; 
```

### выполнение

Теперь, чтобы запустить таймер, мы предоставляем `startCountdown()` с `startCountdown()` значением в качестве аргумента, представляющим секунды для обратного отсчета.

```javascript
  startCountdown(10); 
  // Console Output // 
  // 10 
  // 9 
  // 8 
  // 7 
  // 6 
  // 5 
  // 4 
  // 3 
  // 2 
  // 1 
  // 0 
  // Ding! 
```

### Живой пример

[Codepen - таймер обратного отсчета](https://codepen.io/rdev-rocks/pen/jLogxY?editors=0012)

### Дополнительные ресурсы

Используемые методы:

*   [setInterval ()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)
*   [clearInterval ()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval)
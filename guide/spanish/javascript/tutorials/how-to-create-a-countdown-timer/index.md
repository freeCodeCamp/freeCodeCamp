---
title: How to Create a Countdown Timer
localeTitle: Cómo crear un temporizador de cuenta atrás
---
## Cómo crear un temporizador de cuenta atrás

### Creación

Comience por construir la función countdownTimer.

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

### Ejecución

Ahora, para iniciar el temporizador, proporcionamos a `startCountdown()` un valor numérico como argumento que representa los segundos para la cuenta regresiva.

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

### Ejemplo vivo

[Codepen - Temporizador de cuenta atrás](https://codepen.io/rdev-rocks/pen/jLogxY?editors=0012)

### Más recursos

Métodos utilizados:

*   [setInterval ()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)
*   [clearInterval ()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval)
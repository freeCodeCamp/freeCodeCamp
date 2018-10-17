---
title: How to Create a Countdown Timer
localeTitle: Como criar um temporizador de contagem regressiva
---
## Como criar um temporizador de contagem regressiva

### Criação

Comece construindo a função countdownTimer.

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

### Execução

Agora, para iniciar o cronômetro, fornecemos `startCountdown()` com um valor numérico como um argumento que representa os segundos para a contagem regressiva.

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

### Exemplo Vivo

[Codepen - temporizador de contagem regressiva](https://codepen.io/rdev-rocks/pen/jLogxY?editors=0012)

### Mais recursos

Métodos utilizados:

*   [setInterval ()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)
*   [clearInterval ()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval)
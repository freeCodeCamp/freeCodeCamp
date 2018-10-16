---
title: Detect authentic click events
localeTitle: Обнаружение аутентичных событий кликов
---
## Обнаружение аутентичных событий кликов

Там может быть ситуация, когда вы хотите сделать некоторые конкретные вещи только в том случае, если событие click было действительно инициировано пользователем, а не каким-то скриптом для имитации события click.

Существует очень простое решение этой проблемы, объект событий javascript предоставляет нам свойство `.istrusted` , которое можно использовать, чтобы сказать разницу.

#### Вот пример использования этого метода

```javascript
// Assume there is a button in the HTML 
 const button = document.querySelector('button'); 
 
 button.addEventListener('click', (e) => { 
  if (e.isTrusted) { 
    console.log('Button clicked by a real user'); 
  } else { 
    console.log('Button click simulated by a script'); 
  } 
 }); 
 
 button.click() // Outputs "Button click simulated by a script" 

```
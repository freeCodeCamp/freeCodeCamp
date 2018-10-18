---
title: Window setTimeout Method
localeTitle: Método setTimeout da janela
---
## Método setTimeout da janela

O método `setTimeout()` chama uma função ou avalia uma expressão após um número especificado de milissegundos.

Dicas:

*   1000 ms = 1 segundo.
*   A função é executada apenas uma vez. Se você precisar repetir a execução, use o método `setInterval()` .
*   Use o método `clearTimeout()` para impedir que a função seja executada.

A sintaxe do método `setTimout()` é a seguinte:

```js
setTimeout(function, milliseconds, param1, param2, ...); 
```

Por exemplo:

```js
setTimeout(function(){ alert("Hello"); }, 3000); 
```

Uma coisa muito importante sobre o `setTimeout()` é que ele será executado de forma assíncrona. Vamos dar um exemplo:

```js
console.log("A"); 
 setTimeout(function(){ console.log("B"); }, 0); 
 console.log("C"); 
 // The order in the console will be 
 // A 
 // C 
 // B 
```

**Não como exepected! Mas especificamos apenas 0 segundos !!!** Para resolver este problema e ter certeza de que nosso código será executado de forma síncrona, temos apenas que aninhar o último console na função.

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

#### Mais Informações:

Documentação: [MDN](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)

Mais exemplos da função setTimeout: [w3schools](https://www.w3schools.com/jsref/met_win_settimeout.asp)

Para entender o que realmente acontece sob o capô, assista a este incrível vídeo [Philip Roberts: O que diabos é o evento loop de qualquer maneira? | JSConf EU 2014](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
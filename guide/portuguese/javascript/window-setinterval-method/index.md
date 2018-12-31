---
title: Window setInterval Method
localeTitle: Método setInterval da janela
---
## Método setInterval da janela

O método `setInterval()` chama uma função ou avalia uma expressão em intervalos especificados (em milissegundos).

```js
    setInterval(function(){ alert("Hello"); }, 3000); 
```

O método `setInterval()` continuará chamando a função até que `clearInterval()` seja chamado ou a janela seja fechada.

O método `setInterval()` pode passar parâmetros adicionais para a função, conforme mostrado no exemplo abaixo.

```js
    setInterval(function, milliseconds, parameter1, parameter2, parameter3); 
```

O valor de ID retornado por `setInterval()` é usado como o parâmetro para o método `clearInterval()` .

Dicas:

*   1000 ms = 1 segundo.
*   Para executar uma função apenas uma vez, após um número especificado de milissegundos, use o método `setTimeout()` .

#### Mais Informações:

Documentação: [MDN](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)

Exemplos de funções JavaScript setInterval (): [Sitepoint](https://www.sitepoint.com/setinterval-example/)

e mais alguns exemplos: [w3schools](https://www.w3schools.com/jsref/met_win_setinterval.asp)
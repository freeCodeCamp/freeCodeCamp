---
title: Timing Events
localeTitle: Eventos de tempo
---
## Eventos de tempo

Os programadores usam eventos de temporização para atrasar a execução do código ou para repetir o código em um intervalo especificado.

Existem duas funções nativas na biblioteca JavaScript usada para realizar essas tarefas: `setTimeout()` e `setInterval()` .

Você usa `setTimeout()` para atrasar a execução da função passada por um período de tempo especificado. Existem dois parâmetros que você passa para `setTimeout()` : a função que você deseja chamar e a quantidade de tempo em milissegundos. (Há 1000 milissegundos (ms) em 1 segundo. Ex: 5000 ms = 5 segundos.) `setTimeout()` será executado uma vez após o tempo especificado ter decorrido.

Exemplo de `setTimeout()` :

```javascript
var timeoutID; 
 
 function delayTimer() { 
  timeoutID = setTimeout(delayedFunction, 3000); 
 } 
 
 function delayedFunction() { 
  alert(“Three seconds have elapsed.”); 
 } 
```

Quando a função delayTimer é chamada, ela executará setTimeout. Após 3 segundos, ele executará delayedFunction, que enviará um alerta.

Use `setInterval()` para especificar uma função para repetir com um intervalo de tempo entre execuções. Novamente, dois parâmetros são passados ​​para `setInterval()` : a função que você deseja chamar e a quantidade de tempo em milissegundos. `setInterval()` continuará a executar até que seja limpo.

Exemplo de `setInterval()` :

```javascript
var intervalID; 
 
 function repeatEverySecond() { 
  intervalID = setInterval(sendMessage, 1000); 
 } 
 
 function sendMessage() { 
  console.log(“One second elapsed.”); 
 } 
```

Quando seu código chama a função repeatEverySecond, ele executará setInterval. setInterval irá executar a função sendMessage a cada 1000 milissegundos.

Existem também funções nativas correspondentes para parar os eventos de temporização: `clearTimeout()` e `clearInterval()` .

Você deve ter notado que cada função do timer é salva em uma variável. Quando a função set é executada, é atribuído um número que é salvo nessa variável. Esse número gerado é exclusivo para cada instância de timers. Esse número atribuído também é como os cronômetros são identificados para serem parados. Por esse motivo, você sempre deve definir seu timer para uma variável.

Para maior clareza do seu código, você deve sempre combinar `clearTimeout()` para `setTimeout()` e `clearInterval()` para `setInterval()` .

Para parar um temporizador, chame a função de limpeza correspondente e passe a variável de ID do temporizador que corresponde ao temporizador que você deseja interromper. A sintaxe para `clearInterval()` e `clearTimeout()` é a mesma.

Exemplo:

```javascript
var timeoutID; 
 
 function delayTimer() { 
  timeoutID = setTimeout(delayedFunction, 3000); 
 } 
 
 function delayedFunction() { 
  alert(“Three seconds have elapsed.”); 
 } 
 
 function clearAlert() { 
  clearTimeout(timeoutID); 
 } 

```
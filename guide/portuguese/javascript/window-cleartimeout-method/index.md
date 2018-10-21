---
title: Window clearTimeout Method
localeTitle: Método clearTimeout da janela
---
## Método clearTimeout da janela

O método 'clearTimeout ()' é usado para parar um temporizador configurado com o método 'setTimeout ()'.

```js
    clearTimeout(setTimeout_ID); 
```

Se o método 'clearTimeout ()' for chamado antes de o contador terminar a contagem, o método 'clearTimeout ()' interromperá a execução do método 'setTimeout ()'.

Para poder usar o método 'clearTimeout ()', você deve usar uma variável global. Veja o exemplo abaixo

```js
    myID = setTimeout(function, milliseconds); 
```

#### Mais Informações:

Documentação: [MDN](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearTimeout)
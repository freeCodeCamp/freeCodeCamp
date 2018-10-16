---
title: Creating Singleton In JavaScript
localeTitle: Criando singleton em JavaScript
---
## Criando Singleton No Guia De Javascript

Este artigo é sobre como criar os Singletons no JavaScript nativo (puro). Esse conceito pode ser útil para manter um código limpo.

Se você quiser manter seu código ou algum dado deve permanecer o mesmo para o seu aplicativo, esta é a maneira que você pode fazê-lo.

**Conhecimento prévio** Isso é apenas para ajudá-lo a entender o conceito com mais facilidade. Caso contrário, você sempre poderá copiar e colar o código e alterá-lo de acordo.

*   Sintaxe Javascript Básica
*   Funções Javascript
*   IIFE em Javascript

### Vamos começar

Vamos criar um objeto com a função IIFE que será executada instantaneamente para nos dar efeito de Singleton.
```
var singletonFn = (function(){ //Created IIFE Function 
  var dataCounter = 0; 
  return { //Any code inside this return stuff will be accessible directly using objectname. 
 
    getDataCounter: function(){ 
      return dataCounter; 
    }, 
 
    setDataCounter: function(val){ 
      dataCounter = val; 
    }, 
 
    fishNames: ["SimpleFish"] //Can create variables, Arrays, etc. 
  } 
 })(); 
```

Agora para executar ou usar seu singleton. no navegador depois de salvá-lo no arquivo js e carregá-lo.
```
console.log(singletonFn.getDataCounter()); //0 as bydefault it will be 0. 
 
 singletonFn.setDataCounter(20); 
 
 console.log(singletonFn.getDataCounter()); //20 as we assigned. 
 
 console.log(fishNames); //will Print array with "SimpleFish". 
```

Agora com esse conhecimento você pode definir constantes, enums ou qualquer coisa que precise usar múltiplos no projeto escrito aqui. ou algo parecido com configurações.

Espero que isso ajude você a escrever códigos melhores. Codificação Feliz :)
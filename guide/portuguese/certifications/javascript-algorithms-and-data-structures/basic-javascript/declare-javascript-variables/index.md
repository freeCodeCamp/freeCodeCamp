---
title: Declare JavaScript Variables
localeTitle: Declarar variáveis ​​JavaScript
---
# Declarar variáveis ​​JavaScript

Quando armazenamos dados em uma estrutura de dados, chamamos de variável. Variáveis ​​JavaScript são escritas no caso do camelo. Um exemplo de caso de camelo é: `camelCase` .

Você pode declarar uma variável dessa maneira

```js
    var myName = "Rafael"; 
```

O ES6 introduziu duas outras maneiras de declarar variáveis. **vamos** e **const** . _Let_ é bem parecido com var e a maior parte é intercambiável:

```js
    let myAge = 36; 
```

Onde _deixar_ diferir, está em seu escopo. Quando declaramos usando _var_ , é global no escopo. Quando declaramos usando _let_ , o escopo é limitado a essa função. Se você quiser usar uma variável _let_ fora de uma função, você deve torná-la global no escopo ou redeclará-la na próxima função.

**const** , por outro lado, só pode ser declarado uma vez. Seu valor nunca pode mudar.

```js
    const myName = "Christina"; 

```
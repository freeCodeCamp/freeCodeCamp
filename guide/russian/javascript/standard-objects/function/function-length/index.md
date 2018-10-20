---
title: Function Length
localeTitle: Длина функции
---
## Длина функции

Свойство `length` на объекте функции содержит количество аргументов, ожидаемых функцией при вызове.

```javascript
function noArgs() { } 
 
 function oneArg(a) { } 
 
 console.log(noArgs.length); // 0 
 
 console.log(oneArg.length); // 1 
```

### Синтаксис ES2015

ES2015 или ES6, как его обычно называют, вводили оператор останова и параметры функции по умолчанию. Оба эти дополнения изменяют способ работы с `length` .

Если в объявлении функции используется либо оператор останова, либо параметры по умолчанию, свойство `length` будет включать только количество аргументов перед оператором отдыха или параметр по умолчанию.

```javascript
function withRest(...args) { } 
 
 function withArgsAndRest(a, b, ...args) { } 
 
 function withDefaults(a, b = 'I am the default') { } 
 
 console.log(withRest.length); // 0 
 
 console.log(withArgsAndRest.length); // 2 
 
 console.log(withDefaults.length); // 1 
```

Более подробную информацию о `Function.length` можно найти [в Документах MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length) от [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length) .
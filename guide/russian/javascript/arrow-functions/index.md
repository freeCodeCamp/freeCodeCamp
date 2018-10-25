---
title: Arrow Functions
localeTitle: Функции стрелки
---
Функции Arrow - новый синтаксис ES6 для написания выражений функций JavaScript. Более короткий синтаксис экономит время, а также упрощает область действия.

## Что такое функции стрелок?

Выражение функции стрелки является более кратким синтаксисом для написания выражений функции с использованием токена «стрелка жира» ( `=>` ).

### Основной синтаксис

Ниже приведен базовый пример функции стрелки:

```javascript
// ES5 syntax 
 var multiply = function(x, y) { 
  return x * y; 
 }; 
 
 // ES6 arrow function 
 var multiply = (x, y) => { return x * y; }; 
 
 // Or even simpler 
 var multiply = (x, y) => x * y; 
```

Вам больше не нужны `function` и `return` ключевые слова, или даже фигурные скобки.

### Упрощение `this`

Перед функциями стрелок, новые функции , определенные их собственное `this` значение. Чтобы использовать `this` в традиционном выражении функции, мы должны написать обходное решение так:

```javascript
// ES5 syntax 
 function Person() { 
  // we assign `this` to `self` so we can use it later 
  var self = this; 
  self.age = 0; 
 
  setInterval(function growUp() { 
    // `self` refers to the expected object 
    self.age++; 
  }, 1000); 
 } 
```

Функция стрелка не определяет его владелец `this` значения, то он наследует `this` от функции ограждающей:

```javascript
// ES6 syntax 
 function Person(){ 
  this.age = 0; 
 
  setInterval(() => { 
    // `this` now refers to the Person object, brilliant! 
    this.age++; 
  }, 1000); 
 } 
 
 var p = new Person(); 
```

#### Дальнейшее чтение

[Ссылка MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
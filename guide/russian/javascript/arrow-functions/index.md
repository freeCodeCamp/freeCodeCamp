---
title: Arrow Functions
localeTitle: Стрелочные функции
---
Срелочные функции - новый синтаксис ES6 для написания выражений функций JavaScript. Более короткий синтаксис экономит время, а также упрощает область действия.

## Что такое стрелочные функции?

Выражение стрелочной функции и является более лаконичным синтаксисом для написания выражений функции с использованием токена «жирной стрелки» ( `=>` ).

### Основной синтаксис

Ниже приведен базовый пример стрелочной функции:

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

Вам больше не нужны ключевые слова `function` и `return`, или даже фигурные скобки.

### Упрощение `this`

Перед стрелочными функциями, новые функции определяли собственное значение `this`. Чтобы использовать `this` в традиционном выражении функции, мы должны написать обходное решение примерно так:

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

Стрелочная функция не определяет своего значения `this`, она наследует `this` от внешней функции:

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

---
title: Arrow Functions
localeTitle: Стрелочные функции
---
Стрелочные функции - новый синтаксис ES6 для написания функциональных выражений в JavaScript. Более короткий синтаксис экономит время, а также упрощает работу с контекстом вызова.

## Что такое стрелочные функции?

Стрелочная функция является более кратким синтаксисом для написания функциональных выражений с использованием токена «жирная стрелка» ( `=>` ).

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

Вам больше не нужны ключевые слова `function` и `return`, или даже фигурные скобки.

### Упрощеная работа с `this`

До появления стрелочных функций, функции в JS определяли собственное значение `this`. Чтобы использовать `this` в традиционном функциональном выражении, мы должны написать что-то похожее на:

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

Стрелочная функция не определяет собственное значение `this`, а наследует его из внешней функции:

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

#### Дополнительная информация

[Ссылка MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

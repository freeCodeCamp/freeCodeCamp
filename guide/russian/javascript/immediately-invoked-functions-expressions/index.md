---
title: Immediately Invoked Functions Expressions(IIFEs)
localeTitle: Немедленно вызываемые функции (IIFE)
---
## Заявление о функции

Функция, созданная с объявлением функции, является объектом Function и имеет все свойства, методы и поведение объектов Function. Пример:

```javascript
  function statement(item){ 
    console.log('Function statement example '+ item); 
  } 
```

## Выражение функции

Выражение функции аналогично выражению функции, за исключением того, что имя функции может быть опущено для создания анонимных функций. Пример:

```javascript
  var expression = function (item){ 
    console.log('Function expression example '+ item); 
  } 
```

## Немедленно вызываемые функции

В скором времени, когда функция создается, она вызывает сам вызов явно не требуется. В приведенном ниже примере переменная iife будет хранить строку, возвращаемую выполнением функции.

```javascript
  var iife = function (){ 
    return 'Immediately Invoked Function Expressions(IIFEs) example '; 
  }(); 
  console.log(iife); // 'Immediately Invoked Function Expressions(IIFEs) example ' 
```

Заявление перед IIFE должно всегда заканчиваться нa ; или он выдаст ошибку.

**Плохой пример** :

```javascript
var x = 2 //no semicolon, will throw error 
 (function(y){ 
  return x; 
 })(x); //Uncaught TypeError: 2 is not a function 
```

## Зачем использовать выраженные выражения с выраженным выражением?

```javascript
  (function(value){ 
    var greet = 'Hello'; 
    console.log(greet+ ' ' + value); 
  })('IIFEs'); 
```

В приведенном выше примере, когда javascript engine выполняет над кодом, он создаст глобальный контекст выполнения, когда увидит код и создаст объект функции в памяти для IIFE. И когда он достигает строки `46` из-за которой вызывается функция, новый «контекст выполнения» создается «на лету», поэтому переменная приветствия переходит в контекст выполнения функции не в глобальную, и это делает ее уникальной. `This ensures that code inside IIFE does not interfere with other code or be interfered by another code` поэтому код безопасен.

#### Больше информации

[Немедленное выражение функции в Википедии](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression) [Что делает ведущая точка с запятой в библиотеках JavaScript?](https://stackoverflow.com/questions/1873983/what-does-the-leading-semicolon-in-javascript-libraries-do)

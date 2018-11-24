---
title: Array.prototype.some
localeTitle: Array.prototype.some
---
Метод массива JavaScript `.some()` будет выполнять функцию обратного вызова для проверки каждого элемента в массиве; как только обратный вызов возвращает `true` то `.some()` немедленно вернет true.

**Синтаксис**

```javascript
  var arr = [1, 2, 3, 4]; 
  arr.some(callback[, thisArg]); 
```

## Функция обратного вызова

**Синтаксис**

```javascript
  var isEven = function isEven(currentElement, index, array) { 
      if(currentElement % 2 === 0) { 
          return true; 
      } else { 
          return false; 
      } 
  } 
```

См. [Wiki](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators) в разделе « [Арифметические операторы»,](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators) чтобы увидеть оператор остатка `%`

**Имеет 3 аргумента**

*   currentElement
    
    *   это переменная, представляющая элемент, передаваемый обратному вызову.
*   индекс
    
    *   это значение индекса текущего элемента, начинающегося с 0
*   массив
    
    *   массив, к `.some()` был `.some()` .

Функция обратного вызова должна реализовывать тестовый пример.

## thisArg

Дополнительный параметр и дополнительная информация можно найти в \[MDN

## Описание

`.some()` будет запускать функцию обратного вызова для каждого элемента массива. Как только обратный вызов вернет true, `.some()` вернет `true` . Если обратный вызов возвращает [значение фальши](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) для _каждого_ элемента в массиве, то `.some()` возвращает false.

`.some()` не будет изменять / мутировать массив, который его вызвал.

## Примеры

**Передача функции в `.some()`**

```javascript
  var isEven = function isEven(currentElement, index, array) { 
      if(currentElement % 2 === 0) { 
          return true; 
      } else { 
          return false; 
      } 
  } 
 
  var arr1 = [1, 2, 3, 4, 5, 6]; 
  arr1.some(isEven);  // returns true 
  var arr2 = [1, 3, 5, 7]; 
  arr2.some(isEven);  // returns false 
```

**Анонимная функция**

```javascript
  var arr3 = ['Free', 'Code', 'Camp', 'The Amazing']; 
  arr3.some(function(curr, index, arr) { 
      if (curr === 'The Amazing') { 
          return true; 
      } 
      }); // returns true 
 
  var arr4 = [1, 2, 14, 5, 17, 9]; 
  arr4.some(function(curr, index, arr) { 
      return curr > 20; 
      });  // returns false 
 
  // ES6 arrows functions 
  arr4.some((curr) => curr >= 14)  // returns true 
```

Источник: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
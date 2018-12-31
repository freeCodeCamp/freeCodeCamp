---
title: Error Handling and Try Catch Throw
localeTitle: Обработка ошибок и попытка бросить вызов
---
## Обработка ошибок и попытка бросить вызов

`try...catch..finally` оператор маркирует блок операторов, чтобы попробовать, и указывает ответ, если должно быть выбрано исключение. Оператор `try` содержит одно или несколько операторов и по крайней мере одно предложение `catch` или предложение `finally` или оба.

#### `try...catch` :

```javascript
try { 
   throw new Error('my error'); 
 } 
 catch (e) { 
  console.error(e.message); 
 } 
 
 // Output: 
 // my error 
```

#### `try...finally` :

```javascript
try { 
   throw new Error('my error'); 
 } 
 finally { 
  console.error('finally'); 
 } 
 
 // Output: 
 // finally 
```

_Примечание:_ когда вы не `catch` ошибку, она фактически не «поймана», даже если блок `finally` выполнен. Это означает, что ошибка будет продолжаться до верхнего блока `try` (или основного блока).

#### `try...catch...finally` :

```javascript
try { 
   throw new Error('my error'); 
 } 
 catch (e) { 
  console.error(e.message); 
 } 
 finally { 
  console.error('finally'); 
 } 
 
 // Output: 
 // my error 
 // finally 
```

Типичное использование:

```javascript
try { 
   openFile(file); 
   readFile(file) 
 } 
 catch (e) { 
  console.error(e.message); 
 } 
 finally { 
  closeFile(file); 
 } 
```

#### Вложенная `try...catch` :

Вы также можете:

*   Зафиксируйте оператор `try-catch` внутри блока `try` .
*   Выбросьте ошибку вверх.

```javascript
try { 
  try { 
    throw new Error('my error'); 
  } 
  catch (e) { 
    console.error('inner', e.message); 
    throw e; 
  } 
  finally { 
    console.log('finally'); 
  } 
 } 
 catch (e) { 
  console.error('outer', e.message); 
 } 
 
 // Output: 
 // inner my error 
 // finally 
 // outer my error 
```

#### Типы ошибок

##### Исходная ошибка

```javascript
var x; 
 try { 
  x = y + 1;   // y cannot be referenced (used) 
 } 
 catch(err) { 
  console.log(err.name, err.message); 
 } 
 // ReferenceError y is not defined 
```

##### Ошибка синтаксиса

```javascript
try { 
    eval("alert('Hello)");   // Missing ' will produce an error 
 } 
 catch(err) { 
    console.log(err.name,err.message); 
 } 
 // SyntaxError Invalid or unexpected token 
```

##### Ошибка типа

```javascript
var num = 1; 
 try { 
    num.toUpperCase();   // You cannot convert a number to upper case 
 } 
 catch(err) { 
    console.log(err.name, err.message); 
 } 
 // TypeError num.toUpperCase is not a function 
```

##### Ошибка URI

```javascript
try { 
    decodeURI("%%%");   // You cannot URI decode these percent signs 
 } 
 catch(err) { 
    console.log(err.name, err.message); 
 } 
 // URIError URI malformed 
```

#### Дополнительная информация:

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try…catch) [W3S](https://www.w3schools.com/js/js_errors.asp)
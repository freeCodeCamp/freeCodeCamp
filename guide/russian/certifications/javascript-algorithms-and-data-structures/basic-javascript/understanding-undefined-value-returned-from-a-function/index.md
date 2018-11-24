---
title: Understanding Undefined Value returned from a Function
localeTitle: Понимание неопределенного значения, возвращаемого функцией
---
## Понимание неопределенного значения, возвращаемого функцией

Функция без оператора `return` имеет выходной параметр `undefined` . Итак, если вы попытаетесь равным varaible выводить функцию без оператора `return` , эта переменная будет равна `undefined` .

Идите дальше и определите `addFive()` как ...

```javascript
function addFive() { 
  sum += 5; 
 } 
```

Как вы можете видеть, `sum` добавляется 5 без каких-либо проблем, но поскольку нет оператора возврата, есть `undefined` вывод.

```javascript
var result = addFive(); // This is undefined 

```
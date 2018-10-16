---
title: Typeof
localeTitle: Тип
---
## Тип

`typeof` - это ключевое слово JavaScript, которое будет возвращать тип переменной при ее вызове. Вы можете использовать это, чтобы проверить параметры функции или проверить, определены ли переменные. Существуют и другие виды использования.

Оператор `typeof` полезен, потому что это простой способ проверить тип переменной в вашем коде. Это важно, потому что JavaScript является [динамически типизированным языком](https://stackoverflow.com/questions/2690544/what-is-the-difference-between-a-strongly-typed-language-and-a-statically-typed) . Это означает, что вы не обязаны назначать типы переменным при их создании. Поскольку переменная не ограничена таким образом, ее тип может меняться во время выполнения программы.

Например:

```javascript
var x = 12345; // number 
 x = 'string'; // string 
 x = { key: 'value' }; // object 
```

Как видно из приведенного выше примера, переменная в JavaScript может изменять типы во время выполнения программы. Это может быть сложно отследить как программиста, и это то, где оператор `typeof` полезен.

Оператор `typeof` возвращает строку, представляющую текущий тип переменной. Вы используете его, введя `typeof(variable)` или `typeof variable` . Возвращаясь к предыдущему примеру, вы можете использовать его для проверки типа переменной `x` на каждом этапе:

```javascript
var x = 12345; 
 console.log(typeof x) // number 
 x = 'string'; 
 console.log(typeof x) // string 
 x = { key: 'value' }; 
 console.log(typeof x) // object 
```

Это может быть полезно для проверки типа переменной в функции и продолжения по мере необходимости.

Ниже приведен пример функции, которая может принимать переменную, которая является строкой или числом:

```javascript
function doSomething(x) { 
  if(typeof(x) === 'string') { 
    alert('x is a string') 
  } else if(typeof(x) === 'number') { 
    alert('x is a number') 
  } 
 } 
```

Другим способом, которым может быть полезен оператор `typeof` является обеспечение того, чтобы переменная была определена до того, как вы попытаетесь получить к ней доступ в своем коде. Это может помочь предотвратить ошибки в программе, которые могут возникнуть, если вы попытаетесь получить доступ к переменной, которая не определена.

```javascript
function(x){ 
  if (typeof(x) === 'undefined') { 
    console.log('variable x is not defined'); 
    return; 
  } 
  // continue with function here... 
 } 
```

Вывод оператора `typeof` может не всегда быть тем, что вы ожидаете, когда вы проверяете число.  
Числа могут включать значение [NaN (Not A Number)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN) по нескольким причинам.

```javascript
console.log(typeof NaN); //"number" 
```

Возможно, вы пытались умножить число с объектом, потому что вы забыли получить доступ к числу внутри объекта.

```javascript
var x = 1; 
 var y = { number: 2 }; 
 console.log(x * y); // NaN 
 console.log(typeof (x * y)); // number 
```

При проверке числа недостаточно проверить вывод `typeof` для числа, так как `NaN` также  
проходит этот тест.  
Эта функция проверяет номера, а также не пропускает значение `NaN` .

```javascript
function isNumber(data) { 
  return (typeof data === 'number' && !isNan(data)); 
 } 
```

Даже подумал, что это полезный метод проверки, мы должны быть осторожны, потому что у javascript есть некоторые странные части, и один из них является результатом `typeof` над определенными инструкциями. Например, в javascript многие вещи - это просто `objects` вы найдете.

```javascript
var x = [1,2,3,4]; 
 console.log(typeof x)  // object 
 
 console.log(typeof null)  // object 
```

### Дополнительная информация:

[Документация MDN для typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
---
title: Ternary Operator
localeTitle: Тернарный оператор
---
Оператор Ternary заменяет блок `if` / `else` в сжатом формате. Ниже приведен общий формат тернарного оператора.
```
condition ? expr1 : expr2 
```

## Описание

Если условие истинно, оператор разрешает значение expr1; в противном случае он решает значение expr2.

Например, чтобы отобразить другое сообщение, основанное на значении переменной isMember, вы можете использовать этот оператор:

```javascript
let isMember = true; 
 
 let message = isMember ? 'Welcome Back!' : 'You need to login'; // 'Welcome Back' 
```

Другим полезным методом использования оператора Ternary было бы объявить его для условного выполнения функции или метода

```javascript
    function memberOpen(){ 
        console.log("open"); 
    } 
 
    function memberClose(){ 
        console.log("close"); 
    } 
 
    let isMember = true; 
 
    (isMember) ? memberOpen() : memberClose(); 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/M8Ge/1)

## Выполнение функций с тройным оператором

Также можно запускать функции с помощью тройного оператора, который иногда может быть полезным и более читаемым. Однако используйте его осторожно, потому что тогда код сложнее отлаживать.

```javascript
    const runFirst = true; 
    runFirst ? first() : second(); 
```

## Цепочка с использованием тернарного оператора

Вы также можете неограниченно связывать тройной оператор, аналогично использованию `else if's` перед конечным else блока `if` `else` . Каждый раз, когда двоеточие используется для указания другой части тернарного оператора, новое условие может быть указано до тех пор, пока не будет использовано условие окончательного завершения.

```javascript
    function displayNum(num) { 
     return  num === 3 ? 'number is 3' : num === 2 ? 'number is 2' : num === 1 ? 'number is 1 ' : 'number is not in range'; 
    } 
```

Этот метод следует использовать экономно в правильных местах, как и в случае с несколькими `else if's` это иногда может привести к чтению более читаемого кода с помощью оператора switch.

**Подробнее:** [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
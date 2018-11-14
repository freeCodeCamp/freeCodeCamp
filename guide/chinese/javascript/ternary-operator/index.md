---
title: Ternary Operator
localeTitle: 三元运算符
---
Ternary运算符以压缩格式替换`if` / `else`块。以下是三元运算符的一般格式。
```
condition ? expr1 : expr2 
```

## 描述

如果condition为true，则运算符解析为expr1的值;否则，它解析为expr2的值。

例如，要根据isMember变量的值显示不同的消息，可以使用以下语句：

```javascript
let isMember = true; 
 
 let message = isMember ? 'Welcome Back!' : 'You need to login'; // 'Welcome Back' 
```

使用三元运算符的另一个有用方法是将其调用以有条件地执行函数或方法

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

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/M8Ge/1)

## 使用三元运算符运行函数

也可以使用三元运算符来运行函数，这有时可以有用且更具可读性。但是，请仔细使用它，因为代码更难调试。

```javascript
    const runFirst = true; 
    runFirst ? first() : second(); 
```

## 使用三元运算符链接

您也可以无限期地链接三元运算符，类似于在`if` / `else`块的最后一个`if`之前使用`else if's` 。每次冒号用于表示三元运算符的else部分时，可以声明新条件，直到使用最终终止条件。

```javascript
    function displayNum(num) { 
     return  num === 3 ? 'number is 3' : num === 2 ? 'number is 2' : num === 1 ? 'number is 1 ' : 'number is not in range'; 
    } 
```

这个方法需要在正确的位置谨慎使用，但是，如果使用`else if's`多个`else if's`它有时可以使用switch语句导致更易读的代码。

**了解更多：** [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
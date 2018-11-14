---
title: Return Statement
localeTitle: 退货声明
---
## 介绍

在函数中调用**return**语句时，将停止执行此函数。如果指定，则将给定值返回给函数调用者。如果省略表达式，则返回`undefined` 。

```js
    return expression; 
```

函数可以返回：

*   原始值（字符串，数字，布尔值等）
*   对象类型（数组，对象，函数等）

切勿在不使用括号的情况下在新行上返回某些内容。这是一个JavaScript怪癖，结果将是未定义的。尝试在多行返回时使用括号。

```javascript
function foo() { 
    return 
      1; 
 } 
 
 function boo() { 
    return ( 
      1 
    ); 
 } 
 
 foo(); --> undefined 
 boo(); --> 1 
```

## 例子

以下函数返回其参数**x**的平方，其中**x**是数字。

```js
    function square(x) { 
       return x * x; 
    } 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/C7VT/0)

以下函数返回其参数**arg1**和**arg2**的乘积。

```js
    function myfunction(arg1, arg2){ 
       var r; 
       r = arg1 * arg2; 
       return(r); 
    } 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/C7VU/0)

当函数`return` sa值时，可以使用assigment运算符（ `=` ）将该值赋给变量。在下面的示例中，函数返回参数的平方。当函数结算或结束时，其值为`return`值。然后将该值分配给变量`squared2` 。

```javascript
    function square(x) { 
        return x * x; 
    } 
 
    let squared2 = square(2); // 4 
```

如果没有显式的return语句，意味着该函数缺少`return`关键字，则该函数会自动返回`undefined` 。在以下示例中， `square`函数缺少`return`关键字。将调用函数的结果赋给变量时，变量的值为`undefined` 。

```javascript
    function square(x) { 
        let y = x * x; 
    } 
 
    let squared2 = square(2); // undefined 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/M8BE)

#### 更多信息：

[MDN链接](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)

[MSDN链接](https://msdn.microsoft.com/en-us/library/22a685h9.aspx)
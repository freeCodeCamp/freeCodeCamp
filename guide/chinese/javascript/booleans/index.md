---
title: Boolean
localeTitle: 布尔
---
## 布尔

布尔值是计算机编程语言中常用的原始数据类型。根据定义，布尔值有两个可能的值： `true`或`false` 。

在Javascript中，通常存在对boolean的隐式类型强制。例如，如果你有一个if语句来检查某个表达式，那么该表达式将被强制转换为布尔值：

```javascript
var a = 'a string'; 
 if (a) { 
  console.log(a); // logs 'a string' 
 } 
```

只有少数值会被强制为false：

*   假（不是真的被胁迫，因为它已经是假的）
*   空值
*   未定义
*   为NaN
*   0
*   ''（空字符串）

所有其他值将被强制为true。 当一个值被强制转换为布尔值时，我们也称之为'falsy'或'truthy'。

使用类型强制的一种方法是使用or（ `||` ）和and（ `&&` ）运算符：

```javascript
var a = 'word'; 
 var b = false; 
 var c = true; 
 var d = 0 
 var e = 1 
 var f = 2 
 var g = null 
 
 console.log(a || b); // 'word' 
 console.log(c || a); // true 
 console.log(b || a); // 'word' 
 console.log(e || f); // 1 
 console.log(f || e); // 2 
 console.log(d || g); // null 
 console.log(g || d); // 0 
 console.log(a && c); // true 
 console.log(c && a); // 'word' 
```

如您所见， _or_运算符检查第一个操作数。如果这是真的或真实的，它会立即返回（这就是为什么我们在第一种情况下得到'word'而在第二种情况下得到true）。如果它不是真或真，它会返回第二个操作数（这就是为什么我们在第三种情况下得到'word'）。

使用和运算符它以类似的方式工作，但为了'和'是真的，两个操作数都需要真实。因此，如果两者都是真/真，它将始终返回第二个操作数，否则它将返回false。这就是为什么在第四种情况下我们得到了真实，在最后一种情况下，我们得到了'字'。

## 布尔对象

还有一个包含值的本机JavaScript对象。如有必要，作为第一个参数传递的值将转换为布尔值。如果省略value，0，-0，null，false，NaN，undefined或空字符串（“”），则对象的初始值为false。所有其他值（包括任何对象或字符串“false”）都会创建一个初始值为true的对象。

不要将原始布尔值true和false与布尔对象的true和false值混淆。

## 更多细节

任何值未定义或为null的对象（包括值为false的Boolean对象）在传递给条件语句时计算结果为true。如果为true，则执行该函数。例如，以下if语句中的条件求值为true：

```javascript
var x = new Boolean(false); 
 if (x) { 
  // this code is executed 
 } 
```

此行为不适用于布尔基元。例如，以下if语句中的条件求值为false：

```javascript
var x = false; 
 if (x) { 
  // this code is not executed 
 } 
```

不要使用Boolean对象将非布尔值转换为布尔值。相反，使用布尔值作为函数来执行此任务：

```javascript
var x = Boolean(expression);     // preferred 
 var x = new Boolean(expression); // don't use 
```

如果指定任何对象（包括值为false的Boolean对象）作为Boolean对象的初始值，则新的Boolean对象的值为true。

```javascript
var myFalse = new Boolean(false);   // initial value of false 
 var g = new Boolean(myFalse);       // initial value of true 
 var myString = new String('Hello'); // string object 
 var s = new Boolean(myString);      // initial value of true 
```

不要使用布尔对象代替布尔基元。

### 资源

*   [布尔对象](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
*   [布尔对象](https://docs.oracle.com/javase/7/docs/api/java/lang/Boolean.html)